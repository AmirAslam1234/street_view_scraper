import requests
import json
from bs4 import BeautifulSoup
proxy = '108.59.14.208:13040'
link = "https://www.yellowpages.ca/search/si/50/italian+restaurants/London+ON"
# link = f"https://www.yellowpages.ca/search/si/{page_num}/{business}/{city}"
r = requests.get(link)
# r = requests.get(link, proxies={'http': proxy, 'https': proxy})
soup = BeautifulSoup(r.text, 'lxml')
links = soup.findAll(class_="listing__logo--link")
print(len(links))
for i in links:
    print(i.get('href'))
# data = soup.find(id="map-resource1").text
# obj = json.loads(data)
# new_data = obj['geoJson']['features']
# print(new_data)
# j = 0
# for i in data:
#     print(j)
#     print(i['properites']['id'])
#     print(i['properites']['name'])
#     j = j + 1
data = "{'tasks': [{'id': '3694wz5', 'custom_id': None, 'name': 'hello', 'text_content': None, 'description': None, 'status': {'status': 'to do', 'color': '#d3d3d3', 'type': 'open', 'orderindex': 0}, 'orderindex': '7224984.00000000000000000000000000000000', 'date_created': '1657280553382', 'date_updated': '1657280591042', 'date_closed': None, 'archived': False, 'creator': {'id': 49233343, 'username': 'Muhammad Amir Aslam', 'color': '#304ffe', 'email': 'mamiraslam2777@gmail.com', 'profilePicture': None}, 'assignees': [], 'watchers': [], 'checklists': [], 'tags': [], 'parent': None, 'priority': None, 'due_date': None, 'start_date': None, 'points': None, 'time_estimate': None, 'custom_fields': [{'id': '20de75ad-76e8-4dee-8d94-b329aefa1d83', 'name': 'Email', 'type': 'email', 'type_config': {}, 'date_created': '1608816302241', 'hide_from_guests': False, 'value': 'amir@gmail.com', 'required': False}, {'id': 'c6ade40b-aad4-4ad5-9314-3167daa9c3da', 'name': 'created_at', 'type': 'short_text', 'type_config': {}, 'date_created': '1657278717192', 'hide_from_guests': False, 'value': 'today', 'required': False}, {'id': '35109e73-2ea7-45f1-8756-b3af6d37ae24', 'name': 'phone', 'type': 'short_text', 'type_config': {}, 'date_created': '1657278664061', 'hide_from_guests': False, 'value': '231213', 'required': False}, {'id': '3965756f-d83a-4e63-9ec9-242acdf7ff13', 'name': 'query_keyword', 'type': 'short_text', 'type_config': {}, 'date_created': '1657278650443', 'hide_from_guests': False, 'value': 'aaslda', 'required': False}, {'id': 'd6101353-ed66-47cf-af6f-3c1a867fab50', 'name': 'smm', 'type': 'short_text', 'type_config': {}, 'date_created': '1657278683233', 'hide_from_guests': False, 'value': 'jalsdkf', 'required': False}, {'id': 'c89b0bc7-76ce-4032-a853-7921c03c3275', 'name': 'website', 'type': 'short_text', 'type_config': {}, 'date_created': '1657278668584', 'hide_from_guests': False, 'value': 'www.google.com', 'required': False}], 'dependencies': [], 'linked_tasks': [], 'team_id': '3355815', 'url': 'https://app.clickup.com/t/3694wz5', 'permission_level': 'create', 'list': {'id': '175423282', 'name': 'Leads - Data', 'access': True}, 'project': {'id': '109208269', 'name': 'Shared with me', 'hidden': True, 'access': False}, 'folder': {'id': '109208269', 'name': 'Shared with me', 'hidden': True, 'access': False}, 'space': {'id': '3379672'}}]}"
phone = ''
