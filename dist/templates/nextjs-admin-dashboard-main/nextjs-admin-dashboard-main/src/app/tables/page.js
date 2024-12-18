"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const TableOne_1 = __importDefault(require("@/components/Tables/TableOne"));
const TableThree_1 = __importDefault(require("@/components/Tables/TableThree"));
const TableTwo_1 = __importDefault(require("@/components/Tables/TableTwo"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
exports.metadata = {
    title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};
const TablesPage = () => {
    return (<DefaultLaout_1.default>
      <Breadcrumb_1.default pageName="Tables"/>

      <div className="flex flex-col gap-10">
        <TableOne_1.default />
        <TableTwo_1.default />
        <TableThree_1.default />
      </div>
    </DefaultLaout_1.default>);
};
exports.default = TablesPage;
