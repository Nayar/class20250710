let compareToTen = function(number) {
    promise = new Promise(function(resolve, reject)
    {
        if (number <= 10)
        {
            resolve("Number is less or equal to 10");
        }
        else
        {
            reject("Number is greater than 10")
        }
    });
    return promise
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))