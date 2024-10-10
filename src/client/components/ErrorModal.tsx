import React from 'react';

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <p>{message}</p>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded mt-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
