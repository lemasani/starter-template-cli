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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const SelectGroupThree = () => {
    const [selectedOption, setSelectedOption] = (0, react_1.useState)("");
    const [isOptionSelected, setIsOptionSelected] = (0, react_1.useState)(false);
    const changeTextColor = () => {
        setIsOptionSelected(true);
    };
    return (<div className="mb-5.5">
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {" "}
        Which option best describes you?{" "}
      </label>

      <div className="dark:bg-form-input relative z-20 bg-transparent">
        <select value={selectedOption} onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
        }} className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary ${isOptionSelected ? "text-dark dark:text-white" : ""}`}>
          <option value="" disabled className="text-body dark:text-bodydark">
            Select your subject
          </option>
          <option value="Student" className="text-body dark:text-bodydark">
            Student
          </option>
          <option value="UX/UI Designer" className="text-body dark:text-bodydark">
            UX/UI Designer
          </option>
          <option value="Web Developer" className="text-body dark:text-bodydark">
            Web Developer
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
            </g>
          </svg>
        </span>
      </div>
    </div>);
};
exports.default = SelectGroupThree;
