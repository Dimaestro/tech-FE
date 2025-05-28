export const saveLocalStorage = (key: string, value: unknown): void => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state error: ', (error as Error).message);
    }
};

export const getLocalStorage = <T = unknown>(key: string): T | undefined => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : (JSON.parse(serializedState) as T);
    } catch (error) {
        console.error('Get state error: ', (error as Error).message);
        return undefined;
    }
};

export const removeLocalStorage = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log('Remove item error: ', (error as Error).message);
    }
};
