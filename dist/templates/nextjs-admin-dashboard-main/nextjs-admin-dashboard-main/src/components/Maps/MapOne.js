"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsvectormap_1 = __importDefault(require("jsvectormap"));
const react_1 = __importStar(require("react"));
require("../../js/us-aea-en");
const MapOne = () => {
    (0, react_1.useEffect)(() => {
        const mapElement = document.getElementById("mapOne");
        if (!mapElement) {
            console.error("Map element not found");
            return;
        }
        const vectorMapOne = new jsvectormap_1.default({
            selector: "#mapOne",
            map: "us_aea_en",
            zoomButtons: true,
            regionStyle: {
                initial: {
                    fill: "#C8D0D8",
                },
                hover: {
                    fillOpacity: 1,
                    fill: "#3056D3",
                },
            },
            regionLabelStyle: {
                initial: {
                    fontFamily: "Satoshi",
                    fontWeight: "semibold",
                    fill: "#fff",
                },
                hover: {
                    cursor: "pointer",
                },
            },
            labels: {
                regions: {
                    render(code) {
                        return code.split("-")[1];
                    },
                },
            },
        });
        return () => {
            if (vectorMapOne) {
                vectorMapOne.destroy();
            }
            else {
                console.error("Vector map instance not found during cleanup");
            }
        };
    }, []);
    return (<div className="col-span-12 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <h4 className="mb-7 text-body-2xlg font-bold text-dark dark:text-white">
        Region labels
      </h4>
      <div className="h-[422px]">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>);
};
exports.default = MapOne;
