"use strict";
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
exports.processImage = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const secrets_1 = require("../../utils/secrets");
const processImage = (imagePath) => __awaiter(void 0, void 0, void 0, function* () {
    const form = new form_data_1.default();
    form.append('file', fs_1.default.createReadStream(imagePath));
    try {
        const response = yield axios_1.default.post('http://compreface/api/v1/detection/detect', form, {
            headers: Object.assign(Object.assign({}, form.getHeaders()), { 'x-api-key': (0, secrets_1.getApiKey)() }),
        });
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to process image with Compreface.');
    }
});
exports.processImage = processImage;
