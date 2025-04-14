import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";


const fetchTodo = async (id: number) => {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) throw new Error(`Network reponse was not ok. ${response.statusText}`);

    return response.json();
}


const ReFetchInterval = () => {

    const [currentId, setCurrentId] = useState<number>(1);

    const {data, error, isLoading} = useQuery({
        queryKey: ['todo', currentId],
        queryFn: () => fetchTodo(currentId),
        refetchInterval: 5000,
    })


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentId(prevId => prevId < 200 ? prevId + 1 : 1);
        }, 5000)

        return () => clearInterval(interval);
    }, []);


    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>An Error occurred: {error.message}</h1>;

    console.log(data)
    return (
        <div>
            <h1>Todo</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => setCurrentId(prevId => prevId < 200 ? prevId + 1 : 1)}>Next Todo</button>
        </div>
    )
}
export default ReFetchInterval
