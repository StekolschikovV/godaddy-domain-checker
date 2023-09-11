import {Middleware} from 'redux';
import {IStore} from "../index";
import {EStatus, setStatus, updateDomain} from "../actions/cheker.ts";
import axios from "axios";

interface IDomainData {
    available: boolean
    definitive: boolean
    domain: string
}

const chekerMiddleware: Middleware<{}, IStore> = (api) => (next) => (action) => {

    const result = next(action);
    const newState = api.getState();
    const appUrl = process.env.APP_URL ? process.env.APP_URL : "https://godaddy-domain-checker.onrender.com"

    if (newState.checker.isQueue && newState.checker.status === EStatus.WAITING) {

        const targets = api.getState().checker.domains.filter(d => d.status === null)

        if (targets.length > 0) {
            api.dispatch(setStatus(EStatus.CHECKING))
            axios
                .post(`${appUrl}/api/check`, {
                    domainName: targets[0].domainName
                })
                .then((e: { data: IDomainData }) => {
                    console.log(e)
                    api.dispatch(updateDomain(targets[0].domainName, e.data?.available || false))
                })
                .catch(e => {
                    console.log(e)
                    api.dispatch(updateDomain(targets[0].domainName, false))
                })
                .finally(() => {
                    setTimeout(() => {
                        api.dispatch(setStatus(EStatus.WAITING))
                    }, 1500)
                })
        }

    }


    return result
};

export default chekerMiddleware;
