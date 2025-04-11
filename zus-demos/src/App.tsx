// import {useCounter} from "./store.ts";
// import OtherComponent from "./Components/OtherComponent.tsx";

// import CounterComponent from "./Components/CounterComponent.tsx";
import LanguageSwitcherStoreComponent from "./Components/LanguageSwitcherStoreComponent.tsx";

const App = () => {

    // const count = useCounter(state => state.count) // first way to access data
    // const {count} = useCounter();
    return (
        <div>
            {/*<h1>Count: {count}</h1>*/}
            {/*<OtherComponent/>*/}
            {/*<CounterComponent/>*/}
            <LanguageSwitcherStoreComponent/>
        </div>
    )
}
export default App
