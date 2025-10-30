import { useEffect, useState } from "react"

const CarFunction = (lol) => {

    const [color, changeColor] = useState("red")
    const [speed, changeSpeed] = useState(0)
    const [max_speed, changeMaxSpeed] = useState(lol.max_speed)
    const [city, setCity] = useState("Moka")
    const [sunrise, setSunrise] = useState("")
    const [lat, setLat] = useState(51.5074);
    const [lng, setLng] = useState(0.1278);

    const setMoka = () => {

    }
    const setCurepipe = () => {
        setLat(-41.0343)
        setLng(.45354)
        setCity("Curepipe")
    }

    useEffect(() => {
        fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng)
        .then((data) => data.json())
        .then(data => {
            setSunrise(data.results.sunrise)
        })
    })

    const accelerate = () => {
        changeSpeed(speed+10)
    }

    const decelerate = () => {
        changeSpeed(speed - 10)
    }

    return ( // should return only 1 element. 
        <div style={{ backgroundColor: color}}>
            <h1>Hello. I am a car from function colored {color}.</h1>
            <h2>I am going at {speed} km/h</h2>
            Speed <progress value={speed} max={max_speed}> {speed} km/h </progress>
            <h3> We will reach {city} at sunrise at {sunrise} </h3>
            <button onClick={accelerate}>Accelerate</button>
            <button onClick={decelerate}>Decelerate</button>
            <button onClick={setCurepipe}>Go to Curepipe</button>
        </div>
    )
}

export default CarFunction