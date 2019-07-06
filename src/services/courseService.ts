import axios, {AxiosRequestConfig} from 'axios'
import qs from 'qs'
import {baseUrl} from "../config"

const requestBody = {
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

// Method to get course info
export const getCoursePage = async () => {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(requestBody),
        url: baseUrl
    }

    // Get response
    const { data } = await axios(options)
    return data
}
