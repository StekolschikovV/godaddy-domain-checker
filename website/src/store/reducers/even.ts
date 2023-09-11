import {EActionType, IAction} from "../actions";

export interface IEvenState {
    isEven: boolean
}

// Initial State
const initialState: IEvenState = {
    isEven: false
};

// Reducer
const evenReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EActionType.EVEN:
            return {
                ...state,
                isEven: action.payload.isEven
            };
        default:
            return state;
    }
};

export default evenReducer
