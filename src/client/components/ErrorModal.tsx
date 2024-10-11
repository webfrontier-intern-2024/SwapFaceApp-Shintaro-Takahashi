import React from 'react';

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <p>{message}</p>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
          閉じる
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
