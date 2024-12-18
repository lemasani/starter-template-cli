"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const AlertError_1 = __importDefault(require("@/components/Alerts/AlertError"));
const AlertWarning_1 = __importDefault(require("@/components/Alerts/AlertWarning"));
const AlertSuccess_1 = __importDefault(require("@/components/Alerts/AlertSuccess"));
exports.metadata = {
    title: "Next.js Alerts Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Alerts page for NextAdmin Dashboard Kit",
    // other metadata
};
const Alerts = () => {
    return (<DefaultLaout_1.default>
      <Breadcrumb_1.default pageName="Alerts"/>

      <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <AlertWarning_1.default />
          <AlertSuccess_1.default />
          <AlertError_1.default />
        </div>
      </div>
    </DefaultLaout_1.default>);
};
exports.default = Alerts;
