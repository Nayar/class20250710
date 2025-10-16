const express = require("express")
const app = express()

app.use(express.json());
const axios = require('axios')

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1', // localhost
        user: 'postgres',
        password: '',
        database: 'hellokitty',
        port: 5432
    }
});

app.get("/api/students",function(request, response){
    // select name, nic from students;
    knex.select('*').from('students')
    .then(data => {
        response.json(data)})
})

app.get("/api/students/:id",function(request, response){
    // select name, nic from students;
    const id = request.params.id

    knex.select('*').from('students').where({ id: id})
    .then(data => {
        response.json(data)})
})

app.post("/api/students", function(request,response){
    console.log("receiving student to create")
    console.log(request.body)
    console.log(request.body.name)
    // INSERT INTO students (name) VALUES ("Sarah") RETURNING name,id,nic
    knex('students').returning(['name', 'id', 'nic']).insert(
        {
            name:request.body.name,
            nic: request.body.nic
        }
    ).then(data => {console.log(data)
        response.json({'status':"ok","data":data})
    })
})

app.put("/api/students/:id",(req,res) => {
    
    const student_id = req.params.id
    const new_data = req.body

    console.log(student_id,new_data)

    // UPDATE students SET name = "Ritesh Smith" WHERE id = {id}
    knex('students').where({id:9}).update(req.body).returning('*').then(function(data){
        console.log(data)
        res.json({'status':"ok","data":data})
    })
})

app.delete("/api/students/:id", (req,res) => {
    const student_id = req.params.id
    // DELETE FROM students WHERE id={id}
    knex('students').where({id:student_id}).del().then(function(data) {
        res.json({'status':"ok"})
    })
})

app.get("/api/posts", (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        console.log(data['data'])
        res.json(data['data'])
    })    
})



// go to localhost:5005/api/students
app.listen(5005, function(){
    console.log("server is running")
})