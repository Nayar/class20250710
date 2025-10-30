let endSemester;

function callback (resolve, reject) {
    setTimeout(function(){
        let goodGrades = Math.random() < 0.5;
        if (goodGrades) {
            resolve("mobile phone"); // the parameter is the data which will be returned if promise is fulfilled. 
        } else {
            reject("no gift"); // the parameter is the data which will be returned if promise is rejected
        }
    },5000)
}

endSemester = new Promise(callback);
endSemester
.then(function(data) { // defining the tasks to do after promise is resolved/fulfilled
    console.log("Thank you very much for " + data)
    return "Thank You"
})
.then(function(data){
    console.log("No need to say "  + data +". You are welcome")
})
.catch(function(data) {
    console.log("Thank you for " + data + ". I am going to buy my own")
}) // runs when promise is rejected
.finally(function() {
    console.log("Bye bye")
})