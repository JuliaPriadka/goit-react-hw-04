import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ pictures, openModal }) {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <li key={picture.id}>
          <ImageCard picture={picture} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
