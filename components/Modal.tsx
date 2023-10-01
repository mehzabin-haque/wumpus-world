// Modal.js or Modal.tsx

import ReactModal from 'react-modal';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    message: string;
    onRequestClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, message, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      ariaHideApp={false} // Disable accessibility warning
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" // Apply modal styles
    >
      <div className="bg-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{message}</h2>
        {isOpen && message === 'You Win!' && (
          <>
            <img src={`/images/win.png`} alt="Win" className="mb-4" />
            
          </>
        )}
        {isOpen && message === 'Game Lost!' && (
          <>
            <img src={`/images/dead.png`} alt="Lose" className="mb-4" />
           
          </>
        )}
        <button
          onClick={onRequestClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
