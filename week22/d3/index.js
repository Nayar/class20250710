const express = require("express")
const app = express()
var session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/api/courses",function(req,res){
    if(req.session.user){
        res.json([
            {
                "name": "Python 1",
            },
            {
                "name": "Javascript 1",
            }
        ])
    }
    else {
        res.status(403).redirect("/login")
    }
})

app.get("/api/login", function(req,res){
    // setting the session.user variable
    req.session.user = "user 1"
    res.json({"status":"logged in"})
})

app.listen(5005, function(){
    console.log("server is running")
})