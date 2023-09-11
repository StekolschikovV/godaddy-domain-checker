import {Middleware} from 'redux';
import {IStore} from "../index";
import {EStatus, setStatus} from "../actions/cheker.ts";
import axios from "axios";

const chekerMiddleware: Middleware<{}, IStore> = (api) => (next) => (action) => {

    const result = next(action);
    const newState = api.getState();
    console.log(newState.checker.isQueue)
    console.log(newState.checker.status === EStatus.WAITING)

    if (newState.checker.isQueue && newState.checker.status === EStatus.WAITING) {
        api.dispatch(setStatus(EStatus.CHECKING))
        axios
            .post("http://127.0.0.1:8080/api/check", {
                "domainName": "example.com"
            })
            .then(e => {
                console.log(e)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                // api.dispatch(setStatus(EStatus.WAITING))

            })
    }


    return result
};

export default chekerMiddleware;
