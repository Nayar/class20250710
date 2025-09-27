const http = require("http");

let students = [{
    "name" : "Abraham"
}]

// GET /api/students

// POST /api/students {"name" : "stelle"}

const server = http.createServer((request, response) => {
    console.log("I have got a " + request.method + " request on " + request.url )
    if(request.url == "/api/students" && request.method == "GET") {
        response.end(JSON.stringify(students))
    }
    else if(request.url == "/api/students" && request.method == "POST") {
        let body = ""
        request.on("data", function(chunk) {
            body += chunk
        })
        request.on("end",function(){
            console.log(body)
            console.log(typeof(body))
            let newstudent = JSON.parse(body)
            students.push(newstudent)
            response.end(JSON.stringify(newstudent))
        })
    }
    else {
        response.end("not found")
    }
});

server.listen(5001, "0.0.0.0", () => {
  console.log("Server is listening at localhost on port 5000");
});