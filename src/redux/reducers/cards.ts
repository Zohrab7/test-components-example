import {createReducer} from "redux-act";
import {setCards, setCardsLoaded, setCardsLoading} from "../actions";
import {IImageState} from "./images";

export interface ICardState extends IImageState {
    title: string
}

export interface ICardsState {
    loading: boolean,
    content: ICardState[]
}

const initialState: ICardsState = {
    loading: false,
    content: []
};

export const cardsReducer = createReducer<ICardsState>({}, initialState)
    .on(setCardsLoading, (state) => ({
        ...state,
        loading: true
    }))
    .on(setCards, (state, payload) => ({
        ...state,
        content: [...state.content, ...payload]
    }))
    .on(setCardsLoaded, (state) => ({
        ...state,
        loading: false,
    }))

