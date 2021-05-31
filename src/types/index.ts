import {IAuthState, ICardsState, IImagesState} from "../redux/reducers";

export interface StoreState {
    auth: IAuthState,
    cards: ICardsState,
    images: IImagesState
}
