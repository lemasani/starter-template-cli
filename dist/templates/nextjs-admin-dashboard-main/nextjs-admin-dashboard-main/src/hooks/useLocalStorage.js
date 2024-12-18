"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass  initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            // Get from local storage by key
            if (typeof window !== "undefined") {
                // browser code
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            }
        }
        catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // useEffect to update local storage when the state changes
    (0, react_1.useEffect)(() => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = typeof storedValue === "function"
                ? storedValue(storedValue)
                : storedValue;
            // Save state
            if (typeof window !== "undefined") {
                // browser code
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}
exports.default = useLocalStorage;
