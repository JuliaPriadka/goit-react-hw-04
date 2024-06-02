import css from './ImageCard.module.css';

export default function ImageCard({ picture, openModal }) {
  return (
    <div className={css.galleryItem}>
      <img
        src={picture.urls.small}
        alt={picture.alt_description}
        className={css.galleryImg}
        onClick={() => openModal(picture)}
      />
    </div>
  );
}
