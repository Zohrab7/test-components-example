export const DASHBOARD_ADMIN_NAMESPACE = '[dashboard-admin-panel]';
export const LOGGED = 'logged';
export const USER = 'c_user';

export const dashboardNav = {
    admin: ['/admin', '/']
};

export const handleUserLoggedTxt = (logged: boolean, login?: string | undefined) =>
    logged ? `Вы авторизованы как : ${login}` : 'Вы не авторизованы';

export const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

export * from "./url";
