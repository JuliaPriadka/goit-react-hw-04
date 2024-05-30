import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ imgAlt, imgSrc }) {
  return (
    <div className={css.galleryItem}>
      <img src={imgSrc} alt={imgAlt} className={css.galleryImg} />
    </div>
  );
}
