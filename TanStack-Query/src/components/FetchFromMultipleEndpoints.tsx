import {useState} from "react";
import {useQueries} from "@tanstack/react-query";

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) throw new Error(response.statusText);
    return response.json()
}

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error(response.statusText);
    return response.json()
}





const FetchFromMultipleEndpoints = () => {

    const [currentTodoId, setCurrentTodoId] = useState(1)
    const [currentPostId, setCurrentPostId] = useState(1)

    const handleNextTodoClick = () => {
        setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length))
    }

    const handleNextPostClick = () => {
        setCurrentPostId((prevId) => Math.min(prevId + 1, postsData.length))
    }


    const results = useQueries({
        queries: [
            {
                queryKey: ['todos'],
                queryFn: fetchTodos
            },
            {
                queryKey: ['posts'],
                queryFn: fetchPosts
            }
        ]
    })

    const [todosQuery, postsQuery] = results

    if(todosQuery.isLoading || postsQuery.isLoading) return <h1>Loading...</h1>
    if(todosQuery.error || postsQuery.error) return <h1>An error occurred: {todosQuery.error?.message || postsQuery.error?.message}</h1>


    const todosData = todosQuery.data;
    const postsData = postsQuery.data;

    return (
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(todosData.find((todo: any) => todo.id === currentTodoId ), null, 2)}</pre>

            <button onClick={handleNextTodoClick}>Next Todo</button>
            <br/>
            <h1>Posts</h1>
            <pre>{JSON.stringify(postsData.find((post: any)=> post.id === currentPostId), null ,2)}</pre>
            <button onClick={handleNextPostClick}>Next Post</button>

        </div>
    )
}
export default FetchFromMultipleEndpoints
