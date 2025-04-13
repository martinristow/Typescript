import {useQuery} from "@tanstack/react-query";
import axios from "axios";


// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//
//     if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
//     return response.json();
// }

const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data;
}


const WithTanStackQuery = () => {
    // const data = useQuery({queryKey: ['todo'], queryFn: fetchData})
    const {data, error, isLoading} = useQuery({queryKey: ['todo'], queryFn: fetchData})
    console.log(data)

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>An error occurred: {error.message}</h1>;

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
export default WithTanStackQuery
