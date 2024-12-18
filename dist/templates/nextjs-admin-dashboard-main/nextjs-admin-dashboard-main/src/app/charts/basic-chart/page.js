"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const BasicChart_1 = __importDefault(require("@/components/Charts/BasicChart"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const react_1 = __importDefault(require("react"));
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
exports.metadata = {
    title: "Next.js Basic Chart Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
    // other metadata
};
const BasicChartPage = () => {
    return (<DefaultLaout_1.default>
      <Breadcrumb_1.default pageName="Basic Chart"/>

      <BasicChart_1.default />
    </DefaultLaout_1.default>);
};
exports.default = BasicChartPage;
