"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const SidebarDropdown = ({ item }) => {
    const pathname = (0, navigation_1.usePathname)();
    return (<>
      <ul className="my-2 flex flex-col gap-1.5 pl-9">
        {item.map((item, index) => (<li key={index}>
            <link_1.default href={item.route} className={`relative flex rounded-[7px] px-3.5 py-2 font-medium duration-300 ease-in-out ${pathname === item.route
                ? "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white"
                : "text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-gray-5 dark:hover:bg-white/10 dark:hover:text-white"}`}>
              {item.label}
              {item.pro && (<span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md bg-primary px-1.5 py-px text-[10px] font-medium leading-[17px] text-white">
                  Pro
                </span>)}
            </link_1.default>
          </li>))}
      </ul>
    </>);
};
exports.default = SidebarDropdown;
