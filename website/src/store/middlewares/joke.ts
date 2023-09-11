import {Middleware} from 'redux';
import {IStore} from "../index";
import axios from "axios";
import {EActionType, joke} from "../actions";

interface IJokeResponse {
    data: {
        value: string
    }
}

const jokeMiddleware: Middleware<{}, IStore> = (api) => (next) => (action) => {

    if (action.type === EActionType.INCREMENT)
        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then((e: IJokeResponse) => {
                api.dispatch(joke(e.data.value))
            })

    return next(action)

};

export default jokeMiddleware;
