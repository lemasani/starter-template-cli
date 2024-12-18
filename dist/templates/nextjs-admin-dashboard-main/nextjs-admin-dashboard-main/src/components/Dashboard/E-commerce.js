"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChartThree_1 = __importDefault(require("../Charts/ChartThree"));
const ChartTwo_1 = __importDefault(require("../Charts/ChartTwo"));
const ChatCard_1 = __importDefault(require("../Chat/ChatCard"));
const TableOne_1 = __importDefault(require("../Tables/TableOne"));
const MapOne_1 = __importDefault(require("../Maps/MapOne"));
const DataStatsOne_1 = __importDefault(require("@/components/DataStats/DataStatsOne"));
const ChartOne_1 = __importDefault(require("@/components/Charts/ChartOne"));
const ECommerce = () => {
    return (<>
      <DataStatsOne_1.default />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne_1.default />
        <ChartTwo_1.default />
        <ChartThree_1.default />
        <MapOne_1.default />
        <div className="col-span-12 xl:col-span-8">
          <TableOne_1.default />
        </div>
        <ChatCard_1.default />
      </div>
    </>);
};
exports.default = ECommerce;
