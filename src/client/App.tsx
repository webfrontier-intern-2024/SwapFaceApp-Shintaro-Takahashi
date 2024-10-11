import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ErrorModal from './components/ErrorModal';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = async (file: File) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      console.log('Upload success:', result);
    } catch (err) {
      setError('画像のアップロードに失敗しました。もう一度お試しください。');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Face Detection App</h1>
      <FileUpload onUpload={handleUpload} />
      {loading && <LoadingSpinner />}
      {error && <ErrorModal message={error} onClose={() => setError(null)} />}
    </div>
  );
};

export default App;
