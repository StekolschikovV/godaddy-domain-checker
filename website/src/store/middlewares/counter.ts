import {Middleware} from 'redux';
import {IStore} from "../index";

const counterMiddleware: Middleware<{}, IStore> = (api) => (next) => (action) => {

    console.log(api)
    // const currentState = api.getState();
    const result = next(action);
    // const newState = api.getState();
    //
    // console.log('Old sate:', currentState);
    // console.log('New state:', newState);
    //
    // switch (action.type) {
    //     case EActionType.INCREMENT:
    //         api.dispatch(even(newState.counter.count % 2 == 0));
    //         break;
    //     default:
    //         break;
    // }

    return result
};

export default counterMiddleware;
