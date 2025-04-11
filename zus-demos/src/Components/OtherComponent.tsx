import {useCounter} from "../store.ts";

const OtherComponent = () => {
    // const increment1 = useCounter(state => state.increment) // moze i vaka da se dojde do increment funkcijata ili bilo koja
    const {increment, decrement} = useCounter()

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default OtherComponent
