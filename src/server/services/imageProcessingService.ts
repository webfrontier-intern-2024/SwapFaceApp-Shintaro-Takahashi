import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { getApiKey } from '../../utils/secrets';

export const processImage = async (imagePath: string): Promise<any> => {
  const form = new FormData();
  form.append('file', fs.createReadStream(imagePath));

  try {
    const response = await axios.post('http://compreface/api/v1/detection/detect', form, {
      headers: {
        ...form.getHeaders(),
        'x-api-key': getApiKey(),
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to process image with Compreface.');
  }
};
