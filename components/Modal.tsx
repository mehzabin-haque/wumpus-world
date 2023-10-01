// Modal.js or Modal.tsx

import ReactModal from 'react-modal';

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
    >
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
