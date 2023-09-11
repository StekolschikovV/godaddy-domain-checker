// Action Types
export enum EActionType {
    'ADD_DOMAIN',
    'UPDATE_DOMAIN',
    'SET_STATUS',
    "CLEAR"
}

// Interface

export enum EStatus {
    "CHECKING",
    "WAITING",
}

export interface IClearAction {
    type: EActionType.CLEAR
}

export interface ISetStatusAction {
    type: EActionType.SET_STATUS,
    payload: {
        status: EStatus
    }
}

export interface IAddDomainAction {
    type: EActionType.ADD_DOMAIN,
    payload: {
        domainName: string
        status: boolean | null
    }
}

export interface IUpdateDomainAction {
    type: EActionType.UPDATE_DOMAIN,
    payload: {
        domainName: string
        status: boolean | null
    }
}

export type IAction = IAddDomainAction | IUpdateDomainAction | ISetStatusAction | IClearAction

export const addDomain = (domainName: string): IAddDomainAction => ({
    type: EActionType.ADD_DOMAIN,
    payload: {
        domainName,
        status: null
    }
});
export const updateDomain = (domainName: string, status: boolean): IUpdateDomainAction => ({
    type: EActionType.UPDATE_DOMAIN,
    payload: {
        domainName,
        status
    }
});
export const setStatus = (status: EStatus): ISetStatusAction => ({
    type: EActionType.SET_STATUS,
    payload: {
        status
    }
});

export const clear = (): IClearAction => ({
    type: EActionType.CLEAR,
})
