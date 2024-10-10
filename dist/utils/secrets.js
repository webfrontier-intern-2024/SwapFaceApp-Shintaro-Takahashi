"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = void 0;
const getApiKey = () => {
    if (!process.env.API_KEY) {
        throw new Error('API key is missing in the environment variables.');
    }
    return process.env.API_KEY;
};
exports.getApiKey = getApiKey;
