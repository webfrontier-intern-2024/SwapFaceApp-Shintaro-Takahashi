import React, { useState } from 'react';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed p-4 rounded-md">
      <input type="file" onChange={handleFileChange} />
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        onClick={handleUploadClick}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
