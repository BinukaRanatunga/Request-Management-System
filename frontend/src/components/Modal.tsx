// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="relative bg-white p-9 rounded-lg shadow-lg w-1/3">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white bg-red-700 hover:bg-red-800 px-2 py-1 rounded"
          onClick={onClose}
        >
          X
        </button>

        <div className="h-[700px] overflow-y-auto">
          {children} {/* Content inside the modal */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
