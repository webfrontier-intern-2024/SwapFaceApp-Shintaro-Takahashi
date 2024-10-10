"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const FileUpload_1 = __importDefault(require("./components/FileUpload"));
const ErrorModal_1 = __importDefault(require("./components/ErrorModal"));
const LoadingSpinner_1 = __importDefault(require("./components/LoadingSpinner"));
const App = () => {
    const [error, setError] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handleUpload = (file) => __awaiter(void 0, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = yield fetch('/api/images/upload', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            const result = yield response.json();
            console.log('Upload success:', result);
        }
        catch (err) {
            console.error('Upload error:', err);
        }
    });
    return (react_1.default.createElement("div", { className: "p-4" },
        react_1.default.createElement("h1", { className: "text-2xl mb-4" }, "Face Detection App"),
        react_1.default.createElement(FileUpload_1.default, { onUpload: handleUpload }),
        loading && react_1.default.createElement(LoadingSpinner_1.default, null),
        error && react_1.default.createElement(ErrorModal_1.default, { message: error, onClose: () => setError(null) })));
};
exports.default = App;
