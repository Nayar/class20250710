function SearchBar(props) {
    return (
        <>
            <select onChange={props.onchange}>
                { props.brands.map(brand => {
                return <option value={brand}>{brand}</option>})}
            </select>
        </>
    )
}

export default SearchBar