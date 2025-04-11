import {useCounter} from "./store.ts";
import OtherComponent from "./Components/OtherComponent.tsx";

const App = () => {

    // const count = useCounter(state => state.count) // first way to access data
    const {count} = useCounter();
    return (
        <div>
            <h1>Count: {count}</h1>
            <OtherComponent/>
        </div>
    )
}
export default App
