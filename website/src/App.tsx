import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "./store";
import {increment} from "./store/actions";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state: IStore) => state.counter.count);
    const isEven = useSelector((state: IStore) => state.even.isEven);
    const joke = useSelector((state: IStore) => state.joke.joke);

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <p>IsEven: {isEven ? "true" : "false"}</p>
            <p>joke: {joke}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
}

export default App
