"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const SettingBoxes_1 = __importDefault(require("@/components/SettingBoxes"));
exports.metadata = {
    title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
    description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};
const Settings = () => {
    return (<DefaultLaout_1.default>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb_1.default pageName="Settings"/>

        <SettingBoxes_1.default />
      </div>
    </DefaultLaout_1.default>);
};
exports.default = Settings;
