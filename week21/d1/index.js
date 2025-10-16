const express = require("express")
const app = express()

app.use(express.json());

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.use('/public',express.static('public'))

let contacts = [{
    id: 1,
    name: 'Abraham',
    question: "Are you free?"
}
,
{
    id: 2,
    name: 'Yajnee',
    question: "Can you re explain"
}]

app.get("/api/contacts", function(req,res) {
    res.json(contacts)
})
app.post("/api/contacts",function(req,res){
    console.log(req.body)
    contacts.push(req.body)
    res.json({"message" : "okay"})
})

app.listen(5005,function(){
    console.log("server is running")
})

let students = [{
    "name" : "Abraham"
},{//. electricity shut down
    "name" : "Nayar"
}]

fs.writeFile('students.json', JSON.stringify(students), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('JSON data saved to user.json');
    }
});