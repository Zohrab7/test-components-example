import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const setCardsLoading = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_CARDS_LOADING`
);


export const setCards = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_CARDS_CONTENT`,
    content => content
);

export const setCardsLoaded = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_CARDS_LOADED`
);

