const express = require('express') // found in node_modules/express
const app = express()

app.use(express.json()); // this will allow POST to receive JSON data

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

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/index.html")
})

app.get("/api/students", function(request,response){
    console.log(request.query)
    if(request.query.filter){
        student = students.filter((student) => student.name.toLocaleLowerCase().includes(request.query.filter.toLocaleLowerCase()))
        response.json(student)
    }
    else{
        response.json(students)
    }
})

app.get("/api/students/:id", (request,response) => {
    student = students.filter((student) => student.id == request.params.id)
    response.json(student)
})

// READ: GET
// CREATE: POST
// CRUD
app.post("/api/students", function(request,response) {
    students.push(request.body)
    response.json({"message" : "okay"})
})

app.get("/api/teachers", function(request,response){
    response.json([
        {
            "name" : "Nayar"
        }
    ])
})

// route parameter
app.get("/course/:course_number/section/:section_number", function(request,response){
    console.log(request.params)
    response.send("<h1>Welcome to course</h1><h2>This is course " + request.params.course_number + " and section " + request.params.section_number)
})

app.listen(5002, () => {
    console.log('server is listening on port 5002')
})