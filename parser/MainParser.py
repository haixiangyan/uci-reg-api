import re
from bs4 import BeautifulSoup
from utils import BeautifulSoupUtils, StringUtils
from meta import Config
from meta import Format


def parse_raw_data(raw_data):
    soup = BeautifulSoup(raw_data, 'html.parser')

    courses = soup.find_all('tr', attrs={"bgcolor": "#fff0ff"})
    for course in courses:
        print(re.sub(r"\\n|\\t| ", '', course.get_text()))
        course_info_table = BeautifulSoupUtils.find_next_siblings_until(course, 'tr', include=Config.course_include,
                                                                        stop_at=Config.course_stop_at)
        for course_info in course_info_table:
            meta = {}
            for index, child in enumerate(list(course_info.children)):
                # CLean up data: remove spaces etc.
                cleaned_str = StringUtils.clean_str(child.text)
                meta[Format.columns[index]] = cleaned_str
            print(meta)
        break
