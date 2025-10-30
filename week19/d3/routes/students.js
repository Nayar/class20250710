const express = require('express')
const router = express.Router()
const {get_students} = require("../controllers/students.js")


// mathing /api/students + /
router.get("/",get_students )

router.get("/:id", (request,response) => {
    student = students.filter((student) => student.id == request.params.id)
    response.json(student)
})

router.post("/", function(request,response) {
    students.push(request.body)
    response.json({"message" : "okay"})
})

module.exports = router