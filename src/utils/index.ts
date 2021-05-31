export function localLoad(name: string, def: boolean | undefined = undefined) {
    let item = localStorage.getItem(name);
    return item ? item : def
}

export function localSave(name: string, value: any) {
    localStorage.setItem(name, value)
}

export const localRemove = (name?: string) => {
    name ? localStorage.removeItem(name) : localStorage.clear();
};
