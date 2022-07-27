import re
import scrapy
from scrapy.crawler import CrawlerProcess
from selenium import webdriver
import time
import os
import mysql.connector as mysql
from scrapy import signals
from selenium.webdriver.common.keys import Keys
import json
import urllib.parse
import math
from email_extractor import Scraper


class streetViewSpider(scrapy.Spider):
    scraper = Scraper()
    name = "streetViewSpider"
    url = "https://www.google.com/maps"
    # driver = webdriver.Chrome("chromedriver.exe")
    # driver.maximize_window()

    custom_settings = {
        "DOWNLOAD_DELAY": 0.2,
        # "ROTATING_PROXY_LIST" : ["108.59.14.208:13040","108.59.14.203:13040"],
        # # "ROTATING_PROXY_LIST" : configuration['proxy_list'],
        # "DOWNLOADER_MIDDLEWARES" : {
        #     "rotating_proxies.middlewares.RotatingProxyMiddleware" : 610,
        #     "rotating_proxies.middlewares.BanDetectionMiddleware" : 620
        #     }
    }
    with open("config.json", "r") as config:
        configuration = json.load(config)
    # user_defined = "software houses in islamabad"

    def __init__(self):
        self.create_connection()

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        spider = super(streetViewSpider, cls).from_crawler(
            crawler, *args, **kwargs)
        crawler.signals.connect(spider.spider_closed,
                                signal=signals.spider_closed)
        return spider

    def start_requests(self):
        db_query = pd.read_sql(
            "SELECT * FROM query WHERE working_status_id = 2", self.db)

        search_queries = db_query['name']
        records_required_queries = db_query['records_required']
        query_id_db = db_query['query_id']

        for index, search in enumerate(search_queries):
            search = str(search)
            records_required = records_required_queries[index]
            query_id = query_id_db[index]
            # user defined search
            # search = "software house in hyderabad pakistan"
            # records_required = 20
            for i in range(1, math.ceil(records_required/20) + 1):
                url = f"https://www.google.com/search?tbm=map&authuser=0&hl=en&pb=!4m12!1m3!1d4128.387271743014!2d67.03455595!3d24.8840604!2m3!1f0!2f0!3f0!3m2!1i1920!2i219!4f13.1!7i20!8i{(i*20)-20}!10b1!12m8!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m6!1s-8DDYqLkOOGOxc8PyM-YyAQ:2!2zMWk6Myx0OjExODg3LGU6MixwOi04RERZcUxrT09HT3hjOFB5TS1ZeUFROjI!7e81!12e3!17s-8DDYqLkOOGOxc8PyM-YyAQ:43!18e15!24m70!1m22!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!30m0!34m17!2b1!3b1!4b1!6b1!8m5!1b1!3b1!4b1!5b1!6b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!42b1!47m0!49m5!3b1!6m1!1b1!7m1!1e3!50m4!2e2!3m2!1b1!3b1!67m2!7b1!10b1!69i609&q={search}&oq={search}&gs_l=maps.12..38i39i129k1j38i72k1l2.9320.22618.1.36754.41.38.0.0.0.0.569.5182.0j2j13j2j0j2.22.0....0...1ac.1.64.maps..20.21.6794.4..38i39k1j38i39i111i426k1j38i429k1j38i39i128i444k1j38i10i426k1j38i10i377k1j38i426k1j38i377k1.100.&tch=1&ech={i}&psi=-8DDYqLkOOGOxc8PyM-YyAQ.1656996092988.1"
                # print("hey the url is: ",url)
                yield scrapy.Request(url=url, callback=self.parse_page, meta={"query_id": int(query_id)})

    def parse_page(self, response):
        # query id DB
        query_id = response.meta.get("query_id")
        main_text = json.loads(response.text[:-6])
        new_data = str(main_text["d"]).replace(")]}'\n", "")
        # print("HEY: ",new_data)
        new_data = json.loads(new_data)

        for i in new_data[0][1]:
            if len(i) <= 11:
                pass
            else:
                name = i[14][11]
                address = i[14][18]
                data = i[14][10]
                lat = i[14][9][2]
                long = i[14][9][3]
                phone = i[14][178]
                email = 'none'
                if not phone is None:
                    phone = phone[0][0]
                try:
                    website = i[14][7][0]
                    website = website.split('?q=')
                    website = website[1]
                    website = website.split("/")
                    website = website[0] + "//" + website[2]
                except:
                    website = ''
                if not website == '':
                    email = self.scraper.get_email(website)
                print("value of latitude and longitude is: ", lat, " ", long)
                url_part_name = urllib.parse.quote_plus(name)
                main_url = f"https://www.google.com/maps/place/{url_part_name}/data=!4m6!3m5!1s{data}!8m2!3d{lat}!4d{long}!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1"
                # a="https://www.google.com/maps/place/KeyDevs+-+Software+House+in+Islamabad/data=!4m6!3m5!1s0x38dfbdf2f2276acd:0x1b09565426a586b6!8m2!3d33.6987199!4d72.9736682!16s%2Fg%2F11h5s402yj?authuser=0&hl=en&rclk=1"
                latitude_longitude = re.findall(r"d([0-9.-]{2,})!", main_url)
                main_url = main_url.split("/data")
                updated_url = main_url[0] + "/@" + \
                    ",".join(latitude_longitude) + ",17z/data" + main_url[-1]
                # print(a[0]+ "/@"+ ",".join(latitude_longitude) + ",17z/data" + a[-1])
                print("the url is: ", updated_url)
                link2 = updated_url.split('/')
                name = link2[5]
                new_data = link2[6]
                new_data = new_data.split(',')

                latitude = new_data[0]
                latitude = latitude.replace("@", "")
                # latitude = latitude.split('.')
                # latitude = latitude[1]
                print("Latitude: ", latitude)

                # try:
                #     latitude = latitude[1]
                # except:
                #     latitude = latitude[0]

                longitude = new_data[1]
                # longitude = longitude.split('.')
                # longitude = longitude[1]
                data = [latitude, longitude, phone,
                        address, email, updated_url, website]
                zindex = new_data[2]
                zindex = zindex.replace('z', '')
                all_data = link2[7]
                all_data = all_data.split('!')
                for j in all_data:
                    if j.startswith('1s0'):
                        s1s2 = j
                        s1s2 = s1s2.split(':')
                        s1 = s1s2[0]
                        s2 = s1s2[1]
                    elif j.startswith('3d'):
                        d3 = j
                    elif j.startswith('4d'):
                        d4 = j
                s3 = ''
                author = '0'
                hl = "en"
                linkn = f"https://www.google.com/maps/preview/place?authuser={author}&hl={hl}&authuser={author}&pb=!1m14!{s1}%3A{s2}!3m8!1m3!1d.{zindex}!2d{longitude}!3d{latitude}!3m2!1i1024!2i768!4f13.1!4m2!3d{latitude}!4d{longitude}!11s{s3}!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!14m3!1s!7e81!15i10112!15m89!1m35!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!15m1!1i2!17m9!1m3!1i2022!2i6!3i12!2m3!1i2022!2i6!3i13!5b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!19b0!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m4!1e3!1e6!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m9!3m8!1m3!1m2!1i224!2i298!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!21m28!1m6!1m2!1i0!2i0!2m2!1i458!2i768!1m6!1m2!1i974!2i0!2m2!1i1024!2i768!1m6!1m2!1i0!2i0!2m2!1i1024!2i20!1m6!1m2!1i0!2i748!2m2!1i1024!2i768!22m1!1e81!30m5!3b1!6m1!1b1!7m1!1e3!34m2!7b1!10b1!37i606&q={name}"
                # linkn = f"https://www.google.com/maps/preview/place?authuser={author}&hl={hl}&authuser={author}&pb=!1m14!{s1}%3A{s2}!3m8!1m3!1d.{zindex}!2d.{longitude}!3d.{latitude}!3m2!1i1024!2i768!4f13.1!4m2!3d.{latitude}!4d.{longitude}!11s{s3}!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!14m3!1s!7e81!15i10112!15m89!1m35!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!15m1!1i2!17m9!1m3!1i2022!2i6!3i12!2m3!1i2022!2i6!3i13!5b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!19b0!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m4!1e3!1e6!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m9!3m8!1m3!1m2!1i224!2i298!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!21m28!1m6!1m2!1i0!2i0!2m2!1i458!2i768!1m6!1m2!1i974!2i0!2m2!1i1024!2i768!1m6!1m2!1i0!2i0!2m2!1i1024!2i20!1m6!1m2!1i0!2i748!2m2!1i1024!2i768!22m1!1e81!30m5!3b1!6m1!1b1!7m1!1e3!34m2!7b1!10b1!37i606&q={name}"
                # print("Generated url is: ")
                # processing information
                yield scrapy.Request(url=linkn, callback=self.parse_info, meta={"query_id": query_id, "data": data}, dont_filter=True,)

    def parse_info(self, response):
        data = response.meta.get("data")
        latitude = data[0]
        longitude = data[1]
        phone = data[2]
        address = data[3]
        email = data[4]
        url = data[5]
        website = data[6]
        data1 = (response.text.split(")]}'\n"))
        data1 = data1[1]
        ini_list = data1
        res = json.loads(ini_list)

        # check whether 360 image does exist or not
        image_360_exist = 'N'
        main_dataset = res[6][171]
        if main_dataset:
            image_360 = [i[2] for i in main_dataset[0] if '360' in i[2]]
            if image_360:
                image_360_exist = 'Y'
        print("About image: ", image_360_exist)
        ############################################

        data = res[6]
        # business_data
        name = data[11]
        query_id = response.meta.get("query_id")
        try:
            self.cursor.execute(
                "INSERT INTO search_result(name,image_360, query_id, address,phone,website,latitude,longitude,url,email)VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                (name, image_360_exist, query_id, address, phone, website, latitude, longitude, url, email,))
            self.db.commit()
        except:
            print('error in inserting data to database')

        # data insertion DB
        # query = "INSERT INTO search_result VALUES(null,%s,%s,%s)"
        # val = (name, image_360_exist, response.meta.get("query_id"))
        # self.cursor.execute(query, val)
        # self.db.commit()

        # query status update
        # queryy = "UPDATE query SET isDone = %s WHERE query_id = %s"
        # vall = (1, response.meta.get('query_id'))
        # self.cursor.execute(queryy, vall)
        # self.db.commit()
        queryy = "UPDATE query SET working_status_id = %s WHERE query_id = %s"
        vall = (3, response.meta.get('query_id'))
        self.cursor.execute(queryy, vall)
        self.db.commit()
        print("DONE")

        yield {
            "360_image": image_360_exist,
            "name": name
        }

    def create_connection(self):
        try:
            self.db = mysql.connect(
                host=self.configuration['db_host'],
                user=self.configuration['db_username'],
                password=self.configuration['db_password'],
                database=self.configuration['db_name']
            )
            self.cursor = self.db.cursor()
            print("Database Connection Formed")
        except:
            print("Error in Database Connection")

    def spider_closed(self):
        self.cursor.close()
        self.db.close()
        print("DB connection closed")


initial_time = time.time()
process = CrawlerProcess()
process.crawl(streetViewSpider)
process.start()
print("Total time taken: ", time.time()-initial_time)
