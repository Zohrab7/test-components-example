import {combineReducers} from "redux";

import {StoreState} from "../../types";
import {authReducer} from "./auth";
import {cardsReducer} from "./cards";
import {imagesReducer} from "./images";


const rootReducer = combineReducers<StoreState>({
    auth: authReducer,
    cards: cardsReducer,
    images: imagesReducer
});


export * from "./auth";
export * from "./cards";
export * from "./images";

export default rootReducer;
