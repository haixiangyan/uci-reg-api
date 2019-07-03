import re
from bs4 import BeautifulSoup
from utils import BeautifulSoupUtils, StringUtils
from meta import Config


def parse_raw_data(raw_data):
    soup = BeautifulSoup(raw_data, 'html.parser')

    courses = soup.find_all('tr', attrs={"bgcolor": "#fff0ff"})
    for course in courses:
        print(re.sub(r"\\n|\\t| ", '', course.get_text()))
        course_info_table = BeautifulSoupUtils.find_next_siblings_until(course, 'tr', include=Config.course_include,
                                                                        stop_at=Config.course_stop_at)
        for course_info in course_info_table:
            columns = []
            for child in course_info.children:
                # print(child.text)
                cleaned_str = StringUtils.clean_str(child.text)
                columns.append(cleaned_str)
            print(columns)
        break
