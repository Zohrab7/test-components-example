import {createReducer} from "redux-act";
import {setImages, setImagesLoaded, setImagesLoading} from "../actions";

export interface IImageState {
    id: number,
    descr: string,
    src: string,
}

export interface IImagesState {
    loading: boolean,
    content: IImageState[]
}

const initialState: IImagesState = {
    loading: false,
    content: []
};

export const imagesReducer = createReducer<IImagesState>({}, initialState)
    .on(setImagesLoading, (state) => ({
        ...state,
        loading: true
    }))
    .on(setImages, (state, payload) => ({
        ...state,
        content: [...state.content, ...payload]
    }))
    .on(setImagesLoaded, (state) => ({
        ...state,
        loading: false,
    }))

