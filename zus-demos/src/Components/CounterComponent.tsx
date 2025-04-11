import {useCounterState} from "../Stores/counterStore.ts";

const CounterComponent = () => {

    const {count, increment, reset} = useCounterState()

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterComponent
