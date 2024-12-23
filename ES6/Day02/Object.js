var courses = {
    courseName: 'Front',
    courseDuation: 4,
    courseOwner: 'mohamed'
}
function display(obj) {
    let defaultValues = {
        courseName: 'Def_Name',
        courseDuation: 'Def_duration',
        courseOwner: 'Def_Owner'
    }
    Object.assign(defaultValues, obj)
    return `Course Name : ${defaultValues.courseName}
    Course Duration : ${defaultValues.courseDuation}
    Course Owner : ${defaultValues.courseOwner}`
}
console.log(display(courses));