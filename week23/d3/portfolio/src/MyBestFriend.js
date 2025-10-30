import {useParams} from "react-router-dom"

const MyBestFriend = (props) => {
    const params = useParams()

    return (
        <>
            <h1>My best friend is {params.name}</h1>
            <h2>We like {props.hobby} together </h2>
            <pre>{JSON.stringify(params)}</pre>
        </>
    )
}

export default MyBestFriend