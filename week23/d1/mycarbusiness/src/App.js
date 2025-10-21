import React from "react";
import Car from "./Car"
import SearchBar from "./SearchBar";
import ListCars from "./ListCars";

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
  },
  {
    id: 6,
    brand: "peugeot",
    name: "206",
    year: "1972-01-01",
    origin: "Europe"
  }
]

let brands = Array.from(new Set(listCars.map(car => car.brand)))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "ford"
    }
  }

  brandHasChanged = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    return (
      <>
        <h1>Welcome to my car rental business</h1>
        <SearchBar brands={brands} onchange={this.brandHasChanged}/>
        <ListCars filter={this.state.filter} list={listCars}/>
      </>
    )
  }
}

export default App