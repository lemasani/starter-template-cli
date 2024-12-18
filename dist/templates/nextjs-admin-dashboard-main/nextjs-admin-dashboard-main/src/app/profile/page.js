"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const ProfileBox_1 = __importDefault(require("@/components/ProfileBox"));
exports.metadata = {
    title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};
const Profile = () => {
    return (<DefaultLaout_1.default>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb_1.default pageName="Profile"/>

        <ProfileBox_1.default />
      </div>
    </DefaultLaout_1.default>);
};
exports.default = Profile;
