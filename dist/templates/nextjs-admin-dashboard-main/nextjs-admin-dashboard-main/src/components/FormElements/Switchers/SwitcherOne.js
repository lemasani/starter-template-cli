"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SwitcherOne = () => {
    const [enabled, setEnabled] = (0, react_1.useState)(false);
    return (<div>
      <label htmlFor="toggle1" className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input type="checkbox" id="toggle1" className="sr-only" onChange={() => {
            setEnabled(!enabled);
        }}/>
          <div className="block h-8 w-14 rounded-full bg-gray-3 dark:bg-[#5A616B]"></div>
          <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-switch-1 transition ${enabled && "!right-1 !translate-x-full !bg-primary dark:!bg-white"}`}></div>
        </div>
      </label>
    </div>);
};
exports.default = SwitcherOne;
