import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const toggleAuthModal = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} TOGGLE_AUTH_MODAL`
);

export const loginUser = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} USER_LOG_IN`,
    content => content
);

export const logOutUser = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} USER_LOG_OUT`,
);

