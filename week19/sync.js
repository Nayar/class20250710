let goodgrades;
function saythankyou(callback){
    setTimeout(function() {
        console.log("thank you")
        callback()
    },2000)
    
}

setTimeout(function(){
    goodgrades = true
    if(goodgrades == true){
        console.log("Here's your phone")
        saythankyou(function() {
            console.log("You're welcome")
        })
        
    }
    else {
        console.log('no gift')
    }
},2000)

