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