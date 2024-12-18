"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const E_commerce_1 = __importDefault(require("@/components/Dashboard/E-commerce"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const react_1 = __importDefault(require("react"));
exports.metadata = {
    title: "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};
function Home() {
    return (<>
      <DefaultLaout_1.default>
        <E_commerce_1.default />
      </DefaultLaout_1.default>
    </>);
}
exports.default = Home;
