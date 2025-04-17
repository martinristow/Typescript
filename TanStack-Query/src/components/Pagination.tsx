import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

const fetchTodos = async (page = 1, limit = 10) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    )

    if (!response.ok) throw new Error("Network response was not ok.");

    return response.json();
};

const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['todos', currentPage],
        queryFn: () => fetchTodos(currentPage, pageSize)
    })

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>

    return (
        <div>
            <h1>Todos</h1>
            <h1>{currentPage}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div>
                <button className='bg-teal-300 mb-10 p-4 border-2 cursor-pointer' onClick={handlePreviousPage}
                        disabled={currentPage === 1}>Previous Page
                </button>
                <button className='bg-green-500 mb-10 p-4 border-2 cursor-pointer' onClick={handleNextPage}
                        disabled={currentPage === 10}>Next Page
                </button>

            </div>
        </div>
    )
}
export default Pagination
