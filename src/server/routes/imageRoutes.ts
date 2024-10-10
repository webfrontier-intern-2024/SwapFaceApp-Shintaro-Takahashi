import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { processImage } from '../services/imageProcessingService';

const router = Router();
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// 画像アップロードのエンドポイント
router.post('/upload', upload.single('image'), async (req, res) => {
  console.log('Received a POST request to /api/images/upload');
  try {
    if (!req.file) {
      console.log('No file uploaded');
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join(__dirname, '../../../', req.file.path);
    const detectionResult = await processImage(imagePath);
    res.json({ message: 'Image processed successfully', detectionResult });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ message: 'Error processing image', error: (error as Error).message });
  }
});

export default router;
