"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChartThree_1 = __importDefault(require("@/components/Charts/ChartThree"));
const react_1 = __importDefault(require("react"));
const ChartFive_1 = __importDefault(require("@/components/Charts/ChartFive"));
const BasicChart = () => {
    return (<>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartThree_1.default />
        <div className="col-span-12 xl:col-span-5">
          <ChartFive_1.default />
        </div>
      </div>
    </>);
};
exports.default = BasicChart;
