import React from "react";
import Car from "./Car"

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  }
]

let brands = Array.from(new Set(listCars.map(car => car.brand)))

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to my car rental business</h1>
        {/* Peugeot, BMW, Mercedes */}
        <select>
          {/* value is what we want to send. Inside option is only for display */}
            {
              brands.map(brand => {
              return <option value={brand}>{brand}</option>})}
            
        </select>
        <h2>These are the only peugeot car in our shop</h2>
        { 
          listCars.map(car => {
            return <Car brand={car.brand} model={car.name}></Car>
          }) 
        }
      </>
    )
  }
}

export default App