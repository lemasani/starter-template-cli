#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_cli_1 = __importDefault(require("./template-cli"));
async function main() {
    const cli = new template_cli_1.default();
    await cli.run();
}
main().catch(console.error);
