"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const GoogleSigninButton_1 = __importDefault(require("../GoogleSigninButton"));
const SigninWithPassword_1 = __importDefault(require("../SigninWithPassword"));
function Signin() {
    return (<>
      <GoogleSigninButton_1.default text="Sign in"/>

      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
          Or sign in with email
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div>

      <div>
        <SigninWithPassword_1.default />
      </div>

      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <link_1.default href="/auth/signup" className="text-primary">
            Sign Up
          </link_1.default>
        </p>
      </div>
    </>);
}
exports.default = Signin;
