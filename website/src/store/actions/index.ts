// Action Types
export enum EActionType {
    'INCREMENT',
    'EVEN',
    'JOKE'
}

// Interface
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

export type IAction = IIncrementAction | IEvenAction | IJokeAction


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