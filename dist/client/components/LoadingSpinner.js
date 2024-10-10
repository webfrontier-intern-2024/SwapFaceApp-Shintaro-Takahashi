"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LoadingSpinner = () => {
    return react_1.default.createElement("div", { className: "spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" });
};
exports.default = LoadingSpinner;
