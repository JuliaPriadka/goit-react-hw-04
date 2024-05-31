import Modal from 'react-modal';

export default function ImageModal({ onRequestClose, isOpen }) {
  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}>
      <img src="" alt="" />
    </Modal>
  );
}
