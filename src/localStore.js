import { writable } from 'svelte/store';

//Store data within cookies on system (found in stores.js)
export const localStore = (key, initial) => {
    const toString = (value) => JSON.stringify(value, null, 2)
    const toObj = (value) => {
        try {
            return JSON.parse(value)
        } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            // Reset to initial value if data is corrupted
            localStorage.setItem(key, toString(initial));
            return initial;
        }
    }

    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial))
    }

    const saved = toObj(localStorage.getItem(key))

    const { subscribe, set, update } = writable(saved)

    return {
        subscribe,
        set: (value) => {
            try {
                localStorage.setItem(key, toString(value))
                return set(value)
            } catch (error) {
                console.error(`Error saving to localStorage key "${key}":`, error);
                // Still update the store even if localStorage fails (quota exceeded, etc.)
                return set(value)
            }
        },
        update
    }
}