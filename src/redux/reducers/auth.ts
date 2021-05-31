import {createReducer} from "redux-act";

import {loginUser, logOutUser, toggleAuthModal} from "../actions";
import {localLoad, localRemove, localSave} from "../../utils";
import {LOGGED, USER} from "../../const";

export interface IAuthState {
    login: string | any,
    logged: boolean,
    modal: { open: boolean }
}

const initialState: IAuthState = {
    login: localLoad(USER),
    logged: Boolean(localLoad(LOGGED, false)),
    modal: {open: false}
};

export const authReducer = createReducer<IAuthState>({}, initialState)
    .on(loginUser, (state, payload) => {
        localSave(LOGGED, true);
        localSave(USER, payload);
        return ({
            ...state,
            login: payload,
            logged: Boolean(localLoad(LOGGED))
        })
    })
    .on(logOutUser, (state) => {
        localRemove();
        return ({
            ...state,
            logged: false
        })
    })
    .on(toggleAuthModal, (state) => ({
        ...state,
        modal: {open: !state.modal.open}
    }))

