import {createAction} from "redux-act";
import {DASHBOARD_ADMIN_NAMESPACE} from "../../const";

export const setImagesLoading = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_IMAGES_LOADING`
);


export const setImages = createAction<any>(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_IMAGES_CONTENT`,
    content => content
);

export const setImagesLoaded = createAction(
    `${DASHBOARD_ADMIN_NAMESPACE} SET_IMAGES_LOADED`
);
