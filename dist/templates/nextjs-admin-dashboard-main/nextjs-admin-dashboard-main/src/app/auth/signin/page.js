"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const DefaultLaout_1 = __importDefault(require("@/components/Layouts/DefaultLaout"));
const Signin_1 = __importDefault(require("@/components/Auth/Signin"));
exports.metadata = {
    title: "Next.js Login Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};
const SignIn = () => {
    return (<DefaultLaout_1.default>
      <Breadcrumb_1.default pageName="Sign In"/>

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin_1.default />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <link_1.default className="mb-10 inline-block" href="/">
                <image_1.default className="hidden dark:block" src={"/images/logo/logo.svg"} alt="Logo" width={176} height={32}/>
                <image_1.default className="dark:hidden" src={"/images/logo/logo-dark.svg"} alt="Logo" width={176} height={32}/>
              </link_1.default>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign in to your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please sign in to your account by completing the necessary
                fields below
              </p>

              <div className="mt-31">
                <image_1.default src={"/images/grids/grid-02.svg"} alt="Logo" width={405} height={325} className="mx-auto dark:opacity-30"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLaout_1.default>);
};
exports.default = SignIn;
