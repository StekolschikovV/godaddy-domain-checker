import {EActionType, IAction} from "../actions/index"

export interface ICheckerState {
    type?: string
    domains: {
        domainName: string,
        status: boolean | null
    }[]
}

// Initial State
const initialState: ICheckerState = {
    domains: []
};

// Reducer
const checkerReducer = (state = initialState, action: IAction) => {
    console.log(state, action)
    switch (action.type) {
        case EActionType.ADD_DOMAIN:
            let idExist = state.domains.filter(e => e.domainName === action.payload.domainName)
            if (idExist.length > 0) {
                return state
            }
            return {
                domains: [
                    ...state.domains,
                    {
                        domainName: action.payload.domainName,
                        status: action.payload.status
                    }
                ]
            }
        case EActionType.UPDATE_DOMAIN:
            return {
                domains: state.domains.map(e => {
                    if (e.domainName === action.payload.domainName) {
                        return action.payload
                    } else {
                        return e
                    }
                })
            }
        default:
            return state
    }
};

export default checkerReducer
