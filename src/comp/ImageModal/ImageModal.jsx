import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ onRequestClose, isOpen, fullSrc, alt }) {
  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          padding: '0',
          overflow: 'hidden',
        },
      }}>
      <img src={fullSrc} alt={alt} className={css.modalImg} />
    </Modal>
  );
}
