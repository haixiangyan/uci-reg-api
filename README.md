# reg-uci-api
To get class information from [UCI REG](https://www.reg.uci.edu/perl/WebSoc)

![](./screenshot/Courses.png)

## Documentations

### Courses

Get all courses info from Web Reg.

```
post https://uci-reg-api.herokuapp.com/courses?Dept=net%20sys
```

Request query: 

```json
{
  "Dept": "EECS",
  ...
}
```

Result:

```json
[
  {
    "title": "Net Sys 201 CMPTR & COMM NTWRKS",
    "subCourses": [
      {
        "Code": "36600",
        "Type": "Lec",
        "Sec": "A",
        "Units": "4",
        "Instructor": "LEVORATO, M.",
        "Time": "TuTh    3:30- 4:50p",
        "Place": "ICS 174",
        "Final": "Tue, Dec 10, 4:00-6:00pm",
        "Max": "120",
        "Enr": "11 / 120",
        "WL": "n/a",
        "Req": "17",
        "Nor": "0",
        "Rstr": "K and L",
        "Textbooks": "Bookstore",
        "Web": "",
        "Status": "FULL"
      }
    ]
  },
  {
    "title": "Net Sys 295 NET SYS SEMINAR",
    "subCourses": [
      {
        "Code": "36690",
        "Type": "Sem",
        "Sec": "A",
        "Units": "1",
        "Instructor": "JAFARKHANI, H.JORDAN, S.",
        "Time": "F   11:00-11:50",
        "Place": "PSCB 220",
        "Final": "TBA",
        "Max": "30",
        "Enr": "17",
        "WL": "n/a",
        "Req": "17",
        "Nor": "0",
        "Rstr": "L and S",
        "Textbooks": "Bookstore",
        "Web": "",
        "Status": "OPEN"
      }
    ]
  }
]
```

### Options

Get all options from Web Reg

Request:

```
get https://uci-reg-api.herokuapp.com/options
```

Result:

```json
{
  "YearTerm": [
    {
      "value": "2019-92",
      "text": "2019  Fall Quarter"
    },
    ...
  ],
  "Breadth": [
    {
      "value": "ANY",
      "text": "Do not filter for General Education (GE) categories"
    },
    {
      "value": "GE-1A",
      "text": "GE Ia: Lower Division Writing"
    },
    ...
  ],
  "Dept": [
    {
      "value": " ALL",
      "text": "Include All Departments"
    },
    {
      "value": "AC ENG",
      "text": "AC ENG . . . . . .Academic English and ESL"
    },
    ...
  ],
  "ClassType": [
    {
      "value": "ALL",
      "text": "All Course Types"
    },
    {
      "value": "ACT",
      "text": "Activity"
    },
    ...
  ],
  "StartTime": [
    {
      "value": "ANY",
      "text": "ANY"
    },
    {
      "value": "1:00am",
      "text": "1:00am"
    },
    ...
  ],
  "EndTime": [
    {
      "value": "ANY",
      "text": "ANY"
    },
    {
      "value": "2:00am",
      "text": "2:00am"
    },
    ...
  ],
  "FullCourses": [
    {
      "value": "ANY",
      "text": "ANY"
    },
    {
      "value": "SkipFullWaitlist",
      "text": "Include full courses if space on waitlist"
    },
    ...
  ],
  "CancelledCourses": [
    {
      "value": "Exclude",
      "text": "Exclude cancelled courses"
    },
    {
      "value": "Include",
      "text": "Include cancelled courses"
    },
    ...
  ]
}
```
