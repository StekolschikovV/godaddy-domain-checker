import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import checkerReducer, {ICheckerState} from "./reducers/cheker.ts";
import chekerMiddleware from "./middlewares/cheker.ts";

// import "./subscriptions/counter"

export interface IStore {
    checker: ICheckerState
}

const composeEnhancers = composeWithDevTools({});

const reducers = combineReducers({
    checker: checkerReducer
})

// const store = createStore(reducers, composeEnhancers())
const index = createStore(reducers, composeEnhancers(applyMiddleware(chekerMiddleware)))

export default index
