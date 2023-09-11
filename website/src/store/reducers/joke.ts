import {EActionType, IAction} from "../actions";

export interface IJokeState {
    joke: string | null
}

// Initial State
const initialState: IJokeState = {
    joke: null
};

// Reducer
const jokeReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EActionType.JOKE:
            return {
                ...state,
                joke: action.payload.joke
            };
        default:
            return state;
    }
};

export default jokeReducer
