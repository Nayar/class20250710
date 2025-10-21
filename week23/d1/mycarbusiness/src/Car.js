// make
// model
// colour
// speed
// fuel_level
// accelerate()
// stop()
// refuel()

import { useEffect, useState } from "react"

function Car(props) {
    // first variable to read. second variable to write/update
    const [make, setMake] = useState(props.brand)
    const [model, setModel] = useState(props.model)
    const [speed,  setSpeed] = useState(0)
    const [sunrise, setSunrise] = useState("00:00")
    const [city, setCity] = useState("")
    const [lat, setLat] = useState(51.5074);
    const [lng, setLng] = useState(0.1278);

    const accelerate = () => {
        setSpeed(speed+10)
    }
    const decelerate = () => {
        setSpeed(speed-10)
    }

    // this will run whenever the page has finished loading or rerendered
    useEffect(function(){
        fetch('https://api.sunrise-sunset.org/json?lat='+ lat +'&lng=' + lng)
        .then(data => data.json())
        .then(data => {
            setSunrise(data.results.sunrise)
        })
    })

    const setParis = () => {
        setCity("Paris");
        setLat(48.864716);
        setLng(2.349014);
    }

    const setNewYork =() => {
        setCity("New York");
        setLat(40.730610);
        setLng(-73.935242);
    }

    return (
        <>  
            <h3>{make} {model}</h3>
            <p>I am going at {speed}. I will reach  {city} at sunrise at {sunrise} O'clock</p>
            <button onClick={accelerate}>Accelerate</button>
            <button onClick={decelerate}>decelerate</button>
            <button onClick={setNewYork}>Set New Youk as Destination</button>
            <button onClick={setParis}>Set Paris as Destination</button>
        </>
    )
}

export default Car