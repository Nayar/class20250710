let students = [
    {
        "id" : 1,
        "name" : "Abraham"
    },
    {
        "id" : 2,
        "name" : "Jessni"
    },
    {
        "id" : 3,
        "name" : "John"
    },
    {
        "id" : 4,
        "name" : "Sunny"
    }
]

function get_students(request,response){
    console.log(request.query)
    if(request.query.filter){
        student = students.filter((student) => student.name.toLocaleLowerCase().includes(request.query.filter.toLocaleLowerCase()))
        response.json(student)
    }
    else{
        response.json(students)
    }
}

module.exports = {get_students}