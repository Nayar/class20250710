const express = require('express') // found in node_modules/express
const app = express()

const student_routes = require("./routes/students.js")
app.use(express.json()); // this will allow POST to receive JSON data

app.use("/api/students",(request, response, next) => {
    var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress 
    console.log(ip)
    console.log("Hello Middleware");
    if(ip == "::ffff:192.168.100.177"){
        response.redirect("/login")
    }else{
        next();
    }
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/index.html")
})

app.use('/api/v1.0/students',student_routes)

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