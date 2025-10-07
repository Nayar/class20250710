const express = require("express")
const app = express()

app.use(express.json()); // this is parse incoming JSON object

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];
let score = 0;

// if user comes to /, you should serve index.html
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

// return a random question
app.get('/api/randomquestion',function(request,response){
    response.json({"emoji" : "😀", "answers": ["Sad","Smile","Cry"]})
})

// when user presses submit, we should check the answers
app.post("/api/checkanswer", function(request,response){
    console.log(request.body)
    selected_emoji = emojis.filter(emoji => emoji.emoji == request.body.emoji)[0]
    if(selected_emoji.name == request.body.chosenanswer){
        score += 1
        response.json({"reply": "correct", "score": score})
    }
    else{
        response.json({"reply": "incorrect"})
    }
})

app.listen(5005,function(){
    console.log("server is running")
})

