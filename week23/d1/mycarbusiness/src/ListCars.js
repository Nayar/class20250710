import Car from "./Car"
import ErrorBoundary from "./ErrorBoundary"


function ListCars(props) {
 return (
    <>
        <h2>These are the only {props.filter} cars in our shop</h2>
        { props.list.filter(car => car.brand == props.filter).map(car => {
            return (
              <ErrorBoundary>
                <Car key={car.id} brand={car.brand} model={car.name}></Car>
              </ErrorBoundary>
            )
          }) 
        }
    </>
 )
}
export default ListCars