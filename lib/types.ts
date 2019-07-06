// Request
export interface RequestBody {
    YearTerm?: string,
    ShowComments?: string,
    ShowFinals?: string,
    Breadth?: string,
    Dept?: string,
    CourseNum?: string,
    Division?: string,
    CourseCodes?: string,
    InstrName?: string,
    CourseTitle?: string,
    ClassType?: string,
    Units?: string,
    Days?: string,
    StartTime?: string,
    EndTime?: string,
    MaxCap?: string,
    FullCourses?: string,
    FontSize?: string,
    CancelledCourses?: string,
    Bldg?: string,
    Room?: string,
    Submit?: string

    [key: string]: string
}

// Parser
export interface Course {
    title: string,
    subCourses: SubCourse[]
}

export interface SubCourse {
    Code?: string,
    Type?: string,
    Sec?: string,
    Units?: string,
    Instructor?: string,
    Time?: string,
    Place?: string,
    Final?: string,
    Max?: string,
    Enr?: string,
    WL?: string,
    Req?: string,
    Nor?: string,
    Rstr?: string,
    Textbooks?: string,
    Web?: string,
    Status?: string,

    [column: string]: string;
}

export interface RegOptions {
    YearTerm: Option[],
    Breadth: Option[],
    Dept: Option[],
    ClassType: Option[],
    StartTime: Option[],
    EndTime: Option[],
    FullCourses: Option[],
    CancelledCourses: Option[],

    [selectorName: string]: Option[]
}

export interface Option {
    value: string,
    text: string
}