import {dashboardNav} from "../const";
import {AdminPage} from "../pages";


const dashboardRouts = [
    {
        key: 0,
        exact: true,
        path: dashboardNav.admin,
        component: AdminPage
    }

];

export default dashboardRouts;
