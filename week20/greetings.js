fetch("http://192.168.100.125:5001/api/students",{
    "method" : "POST",
    "body" : {
        "name" : "Stelle"
    }
}).then(function(data) {
    return data.json()
}).then(function(data) {
    console.log(data)
})