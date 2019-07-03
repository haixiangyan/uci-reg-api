import requests
from meta import Format, Config
from parser import MainParser

response = requests.post(Config.base_url, data=Format.request_body)

raw_data = str(response.content)

MainParser.parse_raw_data(raw_data)
