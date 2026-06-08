import { ArrowRight, iconDefaults } from '@wesflo/ui/icons';

import { classNames } from '../../utilities/class-names';
import styles from './teaser.module.css';

export type TeaserVariant = 'standard' | 'side-by-side-left' | 'side-by-side-right';

export type TeaserImageSource = {
    srcSet: string;
    media?: string;
    type?: string;
};

export type TeaserImage = {
    src: string;
    alt: string;
    sources?: TeaserImageSource[];
};

export type TeaserProps = {
    eyebrow?: string;
    headline: string;
    description?: string;
    image: TeaserImage;
    href: string;
    variant?: TeaserVariant;
    className?: string;
};

export const Teaser = ({
    eyebrow,
    headline,
    description,
    image,
    href,
    variant = 'standard',
    className,
}: TeaserProps) => (
    <article className={classNames(styles.teaser, className)} data-variant={variant}>
        <a className={styles.link} href={href}>
            <div className={styles.media}>
                <picture className={styles.picture}>
                    {image.sources?.map((source) => (
                        <source
                            key={`${source.media ?? 'default'}-${source.srcSet}`}
                            media={source.media}
                            srcSet={source.srcSet}
                            type={source.type}
                        />
                    ))}
                    <img alt={image.alt} className={styles.image} src={image.src} />
                </picture>
            </div>
            <div className={styles.content}>
                <div className={styles.copy}>
                    {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
                    <h2 className={styles.headline}>{headline}</h2>
                    {description ? <p className={styles.description}>{description}</p> : null}
                </div>
                <ArrowRight {...iconDefaults} className={styles.arrow} />
            </div>
        </a>
    </article>
);
