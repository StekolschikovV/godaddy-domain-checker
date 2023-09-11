// Action Types
export enum EActionType {
    'INCREMENT',
    'EVEN',
    'JOKE',

    'ADD_DOMAIN',
    'UPDATE_DOMAIN'
}

// Interface
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

export interface IIncrementAction {
    type: EActionType.INCREMENT
}

export interface IEvenAction {
    type: EActionType.EVEN,
    payload: {
        isEven: boolean
    }
}

export interface IJokeAction {
    type: EActionType.JOKE,
    payload: {
        joke: string | null
    }
}

export type IAction = IIncrementAction | IEvenAction | IJokeAction | IAddDomainAction | IUpdateDomainAction


// Action Creators
export const increment = (): IIncrementAction => ({
    type: EActionType.INCREMENT,
});
export const even = (isEven: boolean): IEvenAction => ({
    type: EActionType.EVEN,
    payload: {
        isEven: isEven
    }
});
export const joke = (joke: string): IJokeAction => ({
    type: EActionType.JOKE,
    payload: {
        joke
    }
});


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
