class Vehicle {
    constructor(make,model,color, registration_mark){
        this.make = make
        this.model = model
        this.color = color
        this.registration_mark = registration_mark
    }

    horn() {
        console.log("beep beep")
    }
}

class Car extends Vehicle {
    
}

class Ambulance extends Vehicle{
    constructor(make,model,color, registration_mark,staffs) {
        super(make,model,color, registration_mark) // calls the constructor from the parent
        this.staffs = staffs
    }
    siren() {
        console.log("beep boop")
    }
}

let mycar = new Car('VW',"Polo",'Gray','4322 SP 22')
let candosambulance = new Ambulance('Mercedes','C','White',"4324 JN 20",3) // this ambulance can take 3 staffs

mycar.horn() // return "beep beep"
// press horn button

candosambulance.siren() // return "beep boop"
