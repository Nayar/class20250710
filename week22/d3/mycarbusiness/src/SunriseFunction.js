import React, { useState, useEffect } from 'react';

const SunriseFunction = () => {
    const [city, setCity] = useState("London");
    const [lat, setLat] = useState(51.5074);
    const [lng, setLng] = useState(0.1278);
    const [hourSunrise, setHourSunrise] = useState("");

    const changeCity = (event) => {
        let cityName = event.target.name
        if (cityName == "new york") {
            setCity("New York");
            setLat(40.730610);
            setLng(-73.935242);
        } else if (cityName == "paris") {
            setCity("Paris");
            setLat(48.864716);
            setLng(2.349014);
        }
    }

    useEffect(() => {
        fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng)
            .then((resp) => resp.json())
            .then(function (resp) {
                setHourSunrise(resp.results.sunrise)
                //**
                return resp.results.sunrise
            })
            .catch(function (error) {
                console.log(`We got the error ${error}`)
            })
    });

    return (
        <div>
            <div>
                <p className="description">The hour is {hourSunrise} in {city}</p>
                <button
                    type="button"
                    name="new york"
                    onClick={changeCity}
                > Get the hour of the sunrise in New York</button>
                <button
                    type="button"
                    name="paris"
                    onClick={changeCity}
                > Get the hour of the sunrise in Paris</button>
            </div>
        </div>
    )

}

export default SunriseFunction;