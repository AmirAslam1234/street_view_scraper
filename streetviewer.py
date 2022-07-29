import re
from turtle import update
from numpy import isin
import scrapy
import mysql.connector as mysql
from scrapy import signals
from scrapy.crawler import CrawlerProcess
import json
import urllib.parse
import math
import pandas as pd
from email_extractor import Scraper 
import time
from loggers import logger
logger_obj = logger()

class streetViewSpider(scrapy.Spider):
    scraper = Scraper()
    name = "streetViewSpider"
    url = "https://www.google.com/maps"
    isInsert = 0
    records_required = 0
    main_logger = logger_obj.main_logger()
    name_logger = logger_obj.scrapper_logger()
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
        print('query id is ')
        db_query = pd.read_sql(
            "SELECT *FROM query WHERE working_status_id = 2 limit 1", self.db)
        # print(db_query)
        # print(type(db_query))
        print(len(db_query))
        search_queries = db_query['name']
        records_required_queries = db_query['records_required']
        query_id_db = db_query['query_id']
        for index, search in enumerate(search_queries):
            ### Starting the timer ###
            start_time = time.time()
            search = str(search)
            records_required = records_required_queries[index]
            self.records_required = records_required
            query_id = query_id_db[index]
            # user defined search
            # search = "software house in hyderabad pakistan"
            # records_required = 20
            print(f"search is {search}")
            for i in range(1, math.ceil(records_required/20) + 1):
                if self.isInsert == records_required:
                    queryy = "UPDATE query SET working_status_id = %s WHERE query_id = %s"
                    vall = (3, int(query_id))
                    self.cursor.execute(queryy, vall)
                    self.db.commit()
                    break
                # search = 'software houses in islamabad'
                new_search = search.replace(' ',"%20")
                url = f"https://www.google.com/search?tbm=map&authuser=0&hl=en&pb=!4m12!1m3!1d4128.387271743014!2d67.03455595!3d24.8840604!2m3!1f0!2f0!3f0!3m2!1i1920!2i219!4f13.1!7i20!8i{(i*20)-20}!10b1!12m8!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m6!1s-8DDYqLkOOGOxc8PyM-YyAQ:2!2zMWk6Myx0OjExODg3LGU6MixwOi04RERZcUxrT09HT3hjOFB5TS1ZeUFROjI!7e81!12e3!17s-8DDYqLkOOGOxc8PyM-YyAQ:43!18e15!24m70!1m22!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!30m0!34m17!2b1!3b1!4b1!6b1!8m5!1b1!3b1!4b1!5b1!6b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!42b1!47m0!49m5!3b1!6m1!1b1!7m1!1e3!50m4!2e2!3m2!1b1!3b1!67m2!7b1!10b1!69i609&q={new_search}&oq={new_search}&gs_l=maps.12..38i39i129k1j38i72k1l2.9320.22618.1.36754.41.38.0.0.0.0.569.5182.0j2j13j2j0j2.22.0....0...1ac.1.64.maps..20.21.6794.4..38i39k1j38i39i111i426k1j38i429k1j38i39i128i444k1j38i10i426k1j38i10i377k1j38i426k1j38i377k1.100.&tch=1&ech={i}&psi=-8DDYqLkOOGOxc8PyM-YyAQ.1656996092988.1"
                # print("hey the url is: ",url)
                self.name_logger.info(f"main url is {url}")
                yield scrapy.Request(url=url, callback=self.parse_page, meta={"query_id": int(query_id),"link_num":i,"search":search})
            
            # end_time = time.time() 
            # print("It took --- {} seconds --- for all the links"
            #     .format(end_time - start_time))

    def parse_page(self, response):
        # query id DB
        print(f"main data is")
        # print(response.text)
        query_id = response.meta.get("query_id")
        # print('next query')
        # query status update
        # queryy = "UPDATE query SET working_status_id = %s WHERE query_id = %s"
        # vall = (2, response.meta.get('query_id'))
        # self.cursor.execute(queryy, vall)
        # self.db.commit()
        main_text = json.loads(response.text[:-6])
        # with open(f'')
        # print('main next is')
        new_data = str(main_text["d"]).replace(")]}'\n", "")
        # print("HEY: ",new_data)
        search = response.meta.get("search")
        link_num = response.meta.get("link_num")

        # with open(f"{search}{link_num}.txt",'w') as f:
        #     f.write(new_data.encode('cp850', errors='replace').decode('cp850'))# with open('new.txt','w') as f:
#     f.write(r.text.encode('cp850', errors='replace').decode('cp850'))
#     f.close()
            # f.close()
        new_data = json.loads(new_data)
        # print('new data is ')
        # print(new_data)

        print(f"length of new data is {len(new_data)}")
        k = 0
        for i in new_data[0][1]:
            if len(i)>11 and i[14] is not None:
                print(f"k is {k}")
                # print(f"field data is ")
                name = i[14][11]
                address = i[14][18]
                # print(f"name is {name}")
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
                
                if website == '':
                    others = ''
                    email = ''
                
                # print(f"other links are {others}")
                elif 'facebook' in website:
                    others = website
                    email = ''
                    website = ''
                else:
                    email,others = self.scraper.get_email(website)
                url_part_name = urllib.parse.quote_plus(name)
                main_url = f"https://www.google.com/maps/place/{url_part_name}/data=!4m6!3m5!1s{data}!8m2!3d{lat}!4d{long}!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1"
                # a="https://www.google.com/maps/place/KeyDevs+-+Software+House+in+Islamabad/data=!4m6!3m5!1s0x38dfbdf2f2276acd:0x1b09565426a586b6!8m2!3d33.6987199!4d72.9736682!16s%2Fg%2F11h5s402yj?authuser=0&hl=en&rclk=1"
                latitude_longitude = re.findall(r"d([0-9.-]{2,})!", main_url)
                main_url = main_url.split("/data")
                updated_url = main_url[0] + "/@" + \
                    ",".join(latitude_longitude) + ",17z/data" + main_url[-1]
                link2 = updated_url.split('/')
                name = link2[5]
                new_data = link2[6]
                new_data = new_data.split(',')

                latitude = new_data[0]
                latitude = latitude.replace("@", "")
                # latitude = latitude.split('.')
                # latitude = latitude[1]
                # print("Latitude: ", latitude)
                longitude = new_data[1]
                data = [latitude, longitude, phone,
                        address, email, updated_url, website,others]
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
                k = k + 1
                query_id = response.meta.get("query_id")
                # print(f"name is {name}")
                # print(f'query_id {query_id}')
                # print(f'address is {address}')
                # print(f'phone is {phone}')
                # print(f'website is {website}')
                # print(f'latitude is {lat}')
                # print(f'longitude is {long}')
                # print(f'email is {email}')
                
                if self.isInsert == self.records_required:
                    break
                self.isInsert = self.isInsert + 1   
                yield scrapy.Request(url=linkn, callback=self.parse_info, meta={"query_id": query_id, "data": data}, dont_filter=True,)
                
    def parse_info(self, response):
        print('in parse info function')
        data = response.meta.get("data")
        latitude = data[0]
        longitude = data[1]
        phone = data[2]
        address = data[3]
        email = data[4]
        url = data[5]
        website = data[6]
        others = data[7]
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
        # print("About image: ", image_360_exist)
        ############################################

        data = res[6]
        # business_data
        name = data[11]

        # data insertion DB
        query_id = response.meta.get("query_id")
        print(f"name is {name}")
        print(f'is exist {image_360_exist}')
        print(f'query_id {query_id}')
        print(f'address is {address}')
        print(f'phone is {phone}')
        print(f'website is {website}')
        print(f'latitude is {latitude}')
        print(f'longitude is {longitude}')
        print(f'url is {url}')
        print(f'email is {email}')
        print(f"other links are {others}")
        try:
            self.cursor.execute(
                "INSERT INTO search_result(name,image_360, query_id, address,phone,website,latitude,longitude,url,email,others)VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                (name, image_360_exist, query_id, address, phone, website, latitude, longitude, url, email,others,))
            self.db.commit()
            
            
        except:
            self.main_logger.error(f"Error in inserting record to database for business {name}")

        
        
        
        
        # query = "INSERT INTO search_result VALUES(null,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        # val = (name, image_360_exist, response.meta.get("query_id"),
        #        address, phone, website, latitude, longitude, url, email)
        # try:
        #     self.cursor.execute(query, val)
        # except:
        #     print("error in adding result into database")
        # self.db.commit()



        # query status update
        # queryy = "UPDATE query SET working_status_id = %s WHERE query_id = %s"
        # vall = (3, response.meta.get('query_id'))
        # self.cursor.execute(queryy, vall)
        # self.db.commit()

        print("DONE")

        yield {
            "360_image": image_360_exist,
            "name": name
        }

        #         self.name_logger.info(name)
        #         k = k + 1
        #         self.name_logger.info(f'isInsert is {self.isInsert}')
        #         self.isInsert = self.isInsert + 1
        #         print(name)
        # if k>=20:
        #     self.name_logger.info(f"pass url with value {k}")
        # else:
        #     self.name_logger.info(f"failed url with value {k}")

        # self.main_logger.info(f"total recoreds inserted are:{k}")
        # self.main_logger.info(f"Value of i is {i}")
        # print(f"is insert is {self.isInsert}")
    def create_connection(self):
        self.db = mysql.connect(
            host="localhost",
            user="root",
            charset='utf8mb4',
            password="",
            database="spectator"
        )
        self.cursor = self.db.cursor()
        if self.db.is_connected():
            print("You're connected to database!")
        else:
            print("error in creating database connection")
    # cursor = db.cursor()
    #     except:
    #         print("Error in Database Connection")

    def spider_closed(self):
        self.cursor.close()
        self.db.close()
        print("DB connection closed")
if __name__ == "__main__":
    process = CrawlerProcess()
    process.crawl(streetViewSpider)
    process.start()
