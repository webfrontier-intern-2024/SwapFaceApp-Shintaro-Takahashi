"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ErrorModal = ({ message, onClose }) => {
    return (react_1.default.createElement("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" },
        react_1.default.createElement("div", { className: "bg-white p-4 rounded" },
            react_1.default.createElement("p", null, message),
            react_1.default.createElement("button", { onClick: onClose, className: "bg-red-500 text-white py-1 px-4 rounded mt-2" }, "Close"))));
};
exports.default = ErrorModal;
