import Car from "./Car"

function ListCars(props) {
 return (
    <>
        <h2>These are the only {props.filter} cars in our shop</h2>
        { props.list.filter(car => car.brand == props.filter).map(car => {
            return <Car key={car.id} brand={car.brand} model={car.name}></Car>
          }) 
        }
    </>
 )
}
export default ListCars