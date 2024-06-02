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
          width: '80vw',
          height: '80vh',
          padding: '0',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}>
      <img src={fullSrc} alt={alt} className={css.modalImg} />
    </Modal>
  );
}
