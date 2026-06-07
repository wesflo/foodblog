import { Modal } from '../../components/modal/modal';

import styles from './gallery-with-lightbox.module.css';

export type GalleryImage = {
    src: string;
    alt: string;
    title: string;
    caption?: string;
};

export type GalleryWithLightboxProps = {
    images: GalleryImage[];
};

export const GalleryWithLightbox = ({ images }: GalleryWithLightboxProps) => (
    <div className={styles.gallery} aria-label="Image gallery">
        {images.map((image) => (
            <Modal
                key={image.src}
                title={image.title}
                trigger={
                    <button className={styles.item} type="button">
                        <img alt={image.alt} className={styles.thumbnail} src={image.src} />
                        <span className={styles.itemText}>{image.title}</span>
                    </button>
                }
                {...(image.caption ? { description: image.caption } : {})}
            >
                <figure className={styles.figure}>
                    <img alt={image.alt} className={styles.preview} src={image.src} />
                    {image.caption ? (
                        <figcaption className={styles.caption}>{image.caption}</figcaption>
                    ) : null}
                </figure>
            </Modal>
        ))}
    </div>
);
