import {EActionType, EStatus, IAction} from "../actions/cheker"

export interface ICheckerState {
    type?: string
    status: EStatus,
    isQueue: boolean
    domains: {
        domainName: string
        status: boolean | null
    }[]
}

// Initial State
const initialState: ICheckerState = {
    isQueue: false,
    status: EStatus.WAITING,
    domains: []
};

// Reducer
const checkerReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EActionType.ADD_DOMAIN:
            let idExist = state.domains.filter(e => e.domainName === action.payload.domainName)
            if (idExist.length > 0) {
                return state
            }
            return {
                ...state,
                isQueue: true,
                domains: [
                    ...state.domains,
                    {
                        domainName: action.payload.domainName,
                        status: action.payload.status
                    }
                ]
            }
        case EActionType.UPDATE_DOMAIN:
            const newState = {
                ...state,
                domains: state.domains.map(e => {
                    if (e.domainName === action.payload.domainName) {
                        return action.payload
                    } else {
                        return e
                    }
                })
            }
            return {
                ...newState,
                isQueue: newState.domains.filter(d => d.status === null).length > 0
            }
        case EActionType.SET_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        case EActionType.CLEAR:
            return initialState
        default:
            return state
    }
};

export default checkerReducer
