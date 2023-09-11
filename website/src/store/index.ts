import {applyMiddleware, combineReducers, createStore} from 'redux'
import counterReducer, {ICounterState} from "./reducers/counter";
import {composeWithDevTools} from "redux-devtools-extension";
import evenReducer, {IEvenState} from "./reducers/even";
import counterMiddleware from "./middlewares/counter";
import jokeReducer, {IJokeState} from "./reducers/joke";
import jokeMiddleware from "./middlewares/joke";

// import "./subscriptions/counter"

export interface IStore {
    counter: ICounterState
    even: IEvenState
    joke: IJokeState
}

const composeEnhancers = composeWithDevTools({});

const reducers = combineReducers({
    counter: counterReducer,
    even: evenReducer,
    joke: jokeReducer,
})

// const store = createStore(reducers, composeEnhancers())
const index = createStore(reducers, composeEnhancers(applyMiddleware(counterMiddleware, jokeMiddleware)))

export default index
