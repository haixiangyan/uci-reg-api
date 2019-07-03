import requests
import re
from bs4 import BeautifulSoup
from utils import BeautifulSoupUtils

request_body = {
    'YearTerm': '2019-92',
    'ShowComments': 'on',
    'ShowFinals': 'on',
    'Breadth': 'ANY',
    'Dept': 'EECS',
    'CourseNum': '',
    'Division': 'ANY',
    'CourseCodes': '',
    'InstrName': '',
    'CourseTitle': '',
    'ClassType': 'ALL',
    'Units': '',
    'Days': '',
    'StartTime': '',
    'EndTime': '',
    'MaxCap': '',
    'FullCourses': 'ANY',
    'FontSize': 100,
    'CancelledCourses': 'Exclude',
    'Bldg': '',
    'Room': '',
    'Submit': 'Display Web Results'
}

t_header = ["Code", "Type", "Sec", "Units", "Instructor", "Time", "Place", "Final", "Max", "Enr", "WL", "Req", "Nor", "Rstr", "Textbooks", "Web", "Status"]
print(len(t_header))

base_url = 'https://www.reg.uci.edu/perl/WebSoc'

response = requests.post(base_url, data=request_body)

html = str(response.content)

soup = BeautifulSoup(html, 'html.parser')

courses = soup.find_all('tr', attrs={"bgcolor": "#fff0ff"})
for course in courses:
    print(re.sub(r"\\n|\\t| ", '', course.get_text()))
    course_info_table = BeautifulSoupUtils.find_next_siblings_until(course, 'tr', include={"valign": "top"}, limit={"class": "blue-bar", "bgcolor": "navy"})
    for course_info in course_info_table:
        for column in course_info.children:
            print(column.get_text())
        print('\n')
    break


# Save to a file
# with open('index.html', 'wt', encoding='utf-8') as f:
#     f.write(html)
