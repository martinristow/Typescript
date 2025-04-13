import {useEffect, useState} from "react";

export default function WithoutTanStackQuery() {

    const [id, setId] = useState<number>(1)
    const [data, setData] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let rc = false

        const handleFetch = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

                if(rc) return;

                if(!response.ok){
                    throw new Error(`Error fetching data: ${response.statusText}`)
                }

                const data = await response.json()
                setData(data);

            } catch (error: any) {
                setData(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        handleFetch()

        return () => {
            rc = true
        }

    }, [id]);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {data && <h1>{JSON.stringify(data)}</h1>}
            <button onClick={() => setId(prevId => prevId + 1 )}>Next</button>
        </div>
    )
}
