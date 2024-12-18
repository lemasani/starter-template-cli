"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CheckboxFive = () => {
    const [isChecked, setIsChecked] = (0, react_1.useState)(false);
    return (<div>
      <label htmlFor="checkboxLabelFive" className="flex cursor-pointer select-none items-center text-body-sm font-medium text-dark dark:text-white">
        <div className="relative">
          <input type="checkbox" id="checkboxLabelFive" className="sr-only" onChange={() => {
            setIsChecked(!isChecked);
        }}/>
          <div className={`box mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${isChecked && "!border-4"}`}>
            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>);
};
exports.default = CheckboxFive;