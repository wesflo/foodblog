import { ArrowRight, iconDefaults } from '@wesflo/ui/icons';

import { classNames } from '../../utilities/class-names';
import styles from './teaser.module.css';

export type TeaserVariant = 'standard' | 'side-by-side-left' | 'side-by-side-right';
export type TeaserHeadlineSize = 's' | 'm' | 'l';

export type TeaserMetaItem = {
    label: string;
    value: string;
};

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
    meta?: TeaserMetaItem[];
    image: TeaserImage;
    href: string;
    variant?: TeaserVariant;
    headlineSize?: TeaserHeadlineSize;
    className?: string;
};

export const Teaser = ({
    eyebrow,
    headline,
    description,
    meta,
    image,
    href,
    variant = 'standard',
    headlineSize = 'l',
    className,
}: TeaserProps) => (
    <article
        className={classNames(styles.teaser, className)}
        data-headline-size={headlineSize}
        data-variant={variant}
    >
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
                    <h2 className={styles.headline} data-size={headlineSize}>
                        {headline}
                    </h2>
                    {description ? <p className={styles.description}>{description}</p> : null}
                    {meta?.length ? (
                        <dl className={styles.meta}>
                            {meta.map((item) => (
                                <div key={`${item.label}-${item.value}`}>
                                    <dt className={styles.srOnly}>{item.label}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    ) : null}
                </div>
                <ArrowRight {...iconDefaults} className={styles.arrow} />
            </div>
        </a>
    </article>
);
