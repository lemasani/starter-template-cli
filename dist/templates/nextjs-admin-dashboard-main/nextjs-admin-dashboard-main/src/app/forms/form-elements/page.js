"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const react_1 = __importDefault(require("react"));
const FormElements_1 = __importDefault(require("@/components/FormElements"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
exports.metadata = {
    title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};
const FormElementsPage = () => {
    return (<DefaultLaout_1.default>
      <FormElements_1.default />
    </DefaultLaout_1.default>);
};
exports.default = FormElementsPage;
