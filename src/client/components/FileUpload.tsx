import React, { useState, DragEvent } from 'react';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

const handleDrop = (event: DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  event.stopPropagation();
  setIsDragging(false);
  
  // dataTransfer.itemsを使用してファイルを取得する方法
  const items = event.dataTransfer.items;
  if (items && items.length > 0) {
    const file = items[0].getAsFile();
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setErrorMessage(null);
      } else {
        setErrorMessage('画像ファイルのみアップロードできます。');
      }
    } else {
      setErrorMessage('ファイルの取得に失敗しました。');
    }
  } else {
    setErrorMessage('ファイルが見つかりません。');
  }
};


  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setErrorMessage(null); // エラーメッセージをクリア
      } else {
        setErrorMessage('画像ファイルのみアップロードできます。');
      }
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  const handleRemoveClick = () => {
    setSelectedFile(null);
    setErrorMessage(null);
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg mb-4">顔をマスクする</h2>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`border-2 rounded p-6 mb-4 text-center transition-all duration-300 ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-400 bg-gray-100'
        }`}
        style={{ minHeight: '150px' }}
      >
        {selectedFile ? (
          <p className="text-green-600">{selectedFile.name} が選択されました。</p>
        ) : isDragging ? (
          <p className="text-blue-600">ここにファイルをドロップしてください。</p>
        ) : (
          <p>ここに画像をドラッグ・アンド・ドロップ、またはクリックして選択してください。</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload-input"
        />
        <label
          htmlFor="file-upload-input"
          className="block mt-2 text-blue-500 cursor-pointer hover:underline"
        >
          ファイルを選択
        </label>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleRemoveClick}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          disabled={!selectedFile}
        >
          画像を削除
        </button>
        <button
          onClick={handleUploadClick}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          disabled={!selectedFile}
        >
          画像を送信
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
