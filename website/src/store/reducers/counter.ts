import {EActionType, IAction} from "../actions/index"

export interface ICounterState {
    type?: string
    count: number
}

// Initial State
const initialState: ICounterState = {
    count: 0,
};

// Reducer
const counterReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EActionType.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        default:
            return state;
    }
};

export default counterReducer
