import React from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<T>] {
    const [storedValue, setStoredValue] = React.useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value: T) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}
