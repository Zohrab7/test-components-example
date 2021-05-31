import {applyMiddleware, createStore} from "redux";
import {useDispatch} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';


import {StoreState} from "../../types";
import rootReducer from "../reducers";


const store = createStore<StoreState, any, {}, {}>(
    rootReducer,
    composeWithDevTools(applyMiddleware()),
);

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store;
