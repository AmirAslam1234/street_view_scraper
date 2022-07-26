from email import header
from weakref import proxy
from bs4 import BeautifulSoup
import requests
import re


class Scraper():
    def __init__(self):
        self.email = ''
        self.proxy1 = '108.59.14.203:13040'
        self.proxy = '108.59.14.208:13040'
        self.headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"}

    def mail(self, url):
        self.email = ''
        emailRegex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        # r = requests.get(url, headers=self.headers)
        try:
            r = requests.get(url, headers=self.headers, proxies={
                'http': self.proxy, 'https': self.proxy})
        except:
            r = requests.get(url, headers=self.headers, proxies={
                'http': self.proxy1, 'https': self.proxy1})
        emails = re.findall(emailRegex, r.text)
        if len(emails) >= 1:
            self.email = emails[0]
        return self.email

    def get_email(self, website):
        self.email = ''
        # r = requests.get(website, headers=self.headers)
        try:
            r = requests.get(website, headers=self.headers, proxies={
                'http': self.proxy, 'https': self.proxy})
        except:
            r = requests.get(website, headers=self.headers, proxies={
                'http': self.proxy1, 'https': self.proxy1})

        if not r.status_code == 200:
            return self.email
        soup = BeautifulSoup(r.text, 'lxml')
        if not soup is None:
            title = soup.find('title').text
            print(f"title is {title}")
            if title.lower == 'access denied':
                return self.email
            self.email = self.mail(website)
            all_links = soup.findAll('a')
            for link in all_links:
                new_link = link.get('href')
                if not new_link is None:
                    if 'contact' in new_link or "Contact" in new_link:
                        if not new_link.startswith(website):
                            new_link = website + new_link
                        self.email = self.mail(new_link)
                        if self.email == '':
                            continue
                        else:
                            return self.email
                    elif 'about' in new_link or 'About' in new_link:
                        if not new_link.startswith(website):
                            new_link = website + new_link
                        self.email = self.mail(new_link)
                        if self.email == '':
                            continue
                        else:
                            return self.email
                    elif 'support' in new_link or 'Support' in new_link:
                        if not new_link.startswith(website):
                            new_link = website + new_link
                        self.email = self.mail(new_link)
                        if self.email == '':
                            continue
                        else:
                            return self.email

        return self.email
