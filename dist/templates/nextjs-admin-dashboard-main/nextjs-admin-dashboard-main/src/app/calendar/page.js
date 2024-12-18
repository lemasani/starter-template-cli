"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const CalenderBox_1 = __importDefault(require("@/components/CalenderBox"));
exports.metadata = {
    title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
    // other metadata
};
const CalendarPage = () => {
    return (<DefaultLaout_1.default>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb_1.default pageName="Calendar"/>

        <CalenderBox_1.default />
      </div>
    </DefaultLaout_1.default>);
};
exports.default = CalendarPage;
