import {useQuery} from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!response.ok) throw new Error('Network response was not ok!');

    return await response.json();

}

const StaleTime = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['todo'],
        queryFn: fetchData,
        staleTime: 5000
    })

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <h1>An Error occurred: {error.message}</h1>;

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
export default StaleTime
