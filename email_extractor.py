from bs4 import BeautifulSoup
from loggers import logger
import requests
import re
# import grequests
class Scraper():
    def __init__(self):
        self.email = ''
        self.others = ''
        self.obj_main_logger = logger()
        self.main_logger =self.obj_main_logger.main_logger()
        self.proxy1 = '108.59.14.203:13040'
        self.proxy = '108.59.14.208:13040'
        self.headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"}
        self.emailRegex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

    def get_email(self, website):
        self.email = ''
        try:
            r = requests.get(website, headers=self.headers, proxies={
                'http': self.proxy, 'https': self.proxy}, timeout=10)
        except:
            try:
                r = requests.get(website, headers=self.headers, proxies={
                    'http': self.proxy1, 'https': self.proxy1},timeout=10)
            except:
                message = f"Error in executing url: {website}"
                    # print(f'message is {message}')
                self.main_logger.error(message)
                print(f"message is {message}")
                # print(f"message is {e}")
                # message = f"Error in fetching data from url: {website}"
                # self.obj_email_send.send_email(message)
                return self.email,self.others
        if not r.status_code == 200:
            return self.email,self.others
        emails = re.findall(self.emailRegex,r.text)
        if len(emails)>=1:
            self.email = emails[0]
            return self.email ,self.others
        soup = BeautifulSoup(r.text, 'lxml')
        if not soup is None:
            try:
                title = soup.find('title').text
            except:
                title = ''
            if title.lower == 'access denied':
                return self.email,self.others
            email_links = []
            all_links = soup.findAll('a')
            for link in all_links:
                new_link = link.get('href')
                if not new_link is None:

                    if 'facebook' in new_link or 'twitter' in new_link or 'instagram' in new_link or 'github' in new_link or 'linkedin' in new_link:
                       self.others = self.others + new_link + " ; "
                    elif 'contact' in new_link or 'Contact' in new_link or 'about' in new_link or 'About' in new_link or 'support' in new_link or 'Support' in new_link:
                        if not new_link.startswith('http'):
                            if not new_link.startswith('/'):
                                new_link = website +"/"+ new_link
                            else:
                                new_link = website + new_link
                        email_links.append(new_link)
            for link in email_links:
                try:
                    r = requests.get(link,headers=self.headers,proxies={'http':self.proxy,'https':self.proxy},timeout=10)
                except:
                    # message = e
                    message = f"Error in executing url: {link}"
                    # print(f'message is {message}')
                    self.main_logger.error(message)
                    print(f"message is {message}")
                    continue
                    # print(f"message is {e}")
                    # message = f"Error in fetching data from url: {link}"
                    # self.obj_email_send.send_email(message)
                emails = re.findall(self.emailRegex, r.text)
                if len(emails) >= 1:
                    self.email = emails[0]
                    return self.email,self.others
            ### Getting our Requests With ###
            # our_requests = (grequests.get(link) for link in email_links )
            # responses = grequests.map(our_requests)
            # for response in responses:
            #     emails = re.findall(self.emailRegex, response.text)
            #     if len(emails) >= 1:
            #         self.email = emails[0]
            #         return self.email
            ### End Time ###
        return self.email,self.others

# url = 'https://understandingdata.com'
# scrape = Scraper()
# email = scrape.get_email(url)
# print(email)




# from bs4 import BeautifulSoup
# import requests
# import re
# import grequests

# class Scraper():
#     def __init__(self):
#         self.email = ''
#         self.others = ''
#         self.proxy1 = '108.59.14.203:13040'
#         self.proxy = '108.59.14.208:13040'
#         self.headers = {
#             'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"}
#         self.emailRegex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

#     def get_email(self, website):
#         self.email = ''
#         try:
#             r = requests.get(website, headers=self.headers, proxies={
#                 'http': self.proxy, 'https': self.proxy},timeout=10)
#         except:
#             try:
#                 r = requests.get(website, headers=self.headers, proxies={
#                 'http': self.proxy1, 'https': self.proxy1},timeout=10)
#             except:
#                 print("1st except")
#                 return self.email,self.others
#         print("1st")
#         if not r.status_code == 200:
#             return self.email,self.others
#         emails = re.findall(self.emailRegex,r.text)
#         if len(emails)>=1:
#             self.email = emails[0]
#             return self.email, self.others 
#         soup = BeautifulSoup(r.text, 'lxml')
#         if not soup is None:
#             try:
#                 title = soup.find('title').text
#             except:
#                 title = ''
#             if title.lower == 'access denied':
#                 return self.email,self.others
#             email_links = []
#             all_links = soup.findAll('a')
#             for link in all_links:
#                 new_link = link.get('href')
#                 if not new_link is None:
#                     if 'facebook' in new_link or 'twitter' in new_link or 'instagram' in new_link or 'github' in new_link or 'linkedin' in new_link:
#                         self.others = self.others + new_link + " ; "
#                     elif 'contact' in new_link or 'Contact' in new_link or 'about' in new_link or 'About' in new_link or 'support' in new_link or 'Support' in new_link:
#                         if not new_link.startswith('http'):
#                             if not new_link.startswith('/'):
#                                 new_link = website +"/"+ new_link
#                             else:
#                                 new_link = website + new_link
#                         email_links.append(new_link)
            
#             ### Getting our Requests With ###
#             our_requests = (grequests.get(link) for link in email_links )
#             responses = grequests.map(our_requests)
#             for response in responses:
#                 emails = re.findall(self.emailRegex, response.text)
#                 if len(emails) >= 1:
#                     self.email = emails[0]
#                     return self.email, self.others
#             ### End Time ###
#         return self.email, self.others

# # url = 'https://understandingdata.com'
# # scrape = Scraper()
# # email = scrape.get_email(url)
# # print(email)