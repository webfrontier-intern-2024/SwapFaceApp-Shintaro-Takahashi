"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// CORSの設定
app.use((0, cors_1.default)({
    origin: 'https://5174--main--intern2024--shintaro-takahashi-123.code.webfrontier.co.jp',
    credentials: true,
}));
// JSONやURLエンコードされたデータを解析するためのミドルウェア
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// 画像アップロードAPIのルート設定
app.use('/api/images', imageRoutes_1.default);
// 静的ファイルの提供
app.use(express_1.default.static(path_1.default.join(__dirname, '../../dist/client')));
// その他のルートに対してindex.htmlを返す（SPA対応）
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../dist/client/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
