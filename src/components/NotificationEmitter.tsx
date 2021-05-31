import React, {useLayoutEffect, useRef} from "react";
import NotificationSystem from 'react-notification-system';

export interface NotificationObject {
    title: string,
    message: string,
    level: 'success' | 'error' | 'warning' | 'info'
}

class NotificationSubject {

    ref: any | undefined = undefined;

    public notify(notification: NotificationObject) {
        setTimeout(() => {
            this.ref && this.ref.current && this.ref.current.addNotification(notification);
        }, 300)

    }

    public addRef(ref: any) {
        this.ref = ref;
    }
}

const notificationSubject = new NotificationSubject();

export const successNotify = (title: string, message: string) => notificationSubject.notify({
    title,
    message,
    level: "success"
});


let lastErrorMessage: undefined | string = undefined;

export const errorNotify = (title: string, message: string) => {
    if (lastErrorMessage !== message) {
        lastErrorMessage = message;
        setTimeout(() => {
            lastErrorMessage = undefined
        }, 1000);
        notificationSubject.notify({title, message, level: "error"});
    }
};

export const NotificationEmitter = () => {

    const notificationSystem: any = useRef(NotificationSystem);

    useLayoutEffect(() => {
        notificationSubject.addRef(notificationSystem)
    }, []);

    return <NotificationSystem ref={notificationSystem}/>
};
