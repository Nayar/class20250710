// GET /api/students/    --->   Array of students [{...},{....}]. || needs body? No
// POST /api/students/  ---> OK, json of newly created student {}  Needs body? yes. {...}
// PUT /api/students/<student_id>   --- update
// DELETE /api/students/<student_id>
// PATCH /api/students/<student_id>   --- update

const express = require('express')
const app = express()

app.use(express.static('../frontend/build/'));

app.get('/api/students', (req, res) => {
    res.json([
        { name: 'Abraham' },
        { name: 'Jessni' },
        { name: 'Nayar'}
    ])
});



app.listen(5001, () => {
    console.log('server is listening on port 5001')
})