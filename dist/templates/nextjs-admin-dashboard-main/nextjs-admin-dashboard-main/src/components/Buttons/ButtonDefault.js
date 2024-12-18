"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const ButtonDefault = ({ label, link, customClasses, children, }) => {
    return (<>
      <link_1.default className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`} href={link}>
        {children}
        {label}
      </link_1.default>
    </>);
};
exports.default = ButtonDefault;
