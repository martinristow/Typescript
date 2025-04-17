import {useState} from "react";
import {useMutation} from "@tanstack/react-query";

interface Todo{
    id?: number;
    title: string;
    completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    return response.json();
}

export const UseMutation = () => {
    const [title, setTitle] = useState("");

    const result = useMutation<Todo, Error, Todo>({
        mutationFn: postTodo,
        onSuccess: () => {
            // client.invalidateQueries(['todos'])
        }
    })

    console.log(result)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(title.trim() === '') return;

        // Mutate our data -> send data

    }

    return (
        <div>
            <h1>Create new todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter todo title" value={title}
                       onChange={e => setTitle(e.target.value)}/>

                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}
