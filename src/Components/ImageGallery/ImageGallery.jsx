import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ pictures, openModal }) {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <li key={picture.id} onClick={openModal}>
          <ImageCard
            imgAlt={picture.alt_description}
            imgSrc={picture.urls.small}
          />
        </li>
      ))}
    </ul>
  );
}
