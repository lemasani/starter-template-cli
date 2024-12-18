"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useLocalStorage_1 = __importDefault(require("./useLocalStorage"));
const useColorMode = () => {
    const [colorMode, setColorMode] = (0, useLocalStorage_1.default)("color-theme", "light");
    (0, react_1.useEffect)(() => {
        const className = "dark";
        const bodyClass = window.document.documentElement.classList;
        colorMode === "dark"
            ? bodyClass.add(className)
            : bodyClass.remove(className);
    }, [colorMode]);
    return [colorMode, setColorMode];
};
exports.default = useColorMode;
