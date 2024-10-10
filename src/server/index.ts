import express from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORSの設定
app.use(cors({
  origin: 'https://5174--main--intern2024--shintaro-takahashi-123.code.webfrontier.co.jp',
  credentials: true,
}));


// JSONやURLエンコードされたデータを解析するためのミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 画像アップロードAPIのルート設定
app.use('/api/images', imageRoutes);

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, '../../dist/client')));

// その他のルートに対してindex.htmlを返す（SPA対応）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
