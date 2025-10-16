import React from "react";
import "./Car.css"

class Car extends React.Component {
    constructor(props) { // runs when the object is created
        super(props) // call the constructor from React.Component
        this.state = {
            speed : 0,
            fuel: 45,
            max_speed: props.max_speed
        }
    }

    accelerate = () => {
        let new_speed = this.state.speed + 10 
        if(new_speed > this.state.max_speed){
            return
        }
        this.setState({ speed : new_speed})
    }

    deccelerate = () => {
        this.setState({ speed : this.state.speed - 10 })
    }

    render() {
        return (
            <div>

                <h1>Hi, I am just a car of make {this.props.make} and model {this.props.model}. My max speed is {this.state.max_speed}km/h</h1>
                <h2>I am currently going at {this.state.speed} km/h. I have {this.state.fuel} left</h2>
                Speed <progress value={this.state.speed} max={this.state.max_speed}> {this.state.speed} km/h </progress>
                <button onClick={this.accelerate}>Accelerate</button><button onClick={this.deccelerate}>Deccelerate</button>
                <img src="tyre.jpeg" className="spin" style={{
                    animation: "spin "+ 1/this.state.speed*20 +"s linear infinite"
                }}></img>
            </div>
        )
    }
}

export default Car