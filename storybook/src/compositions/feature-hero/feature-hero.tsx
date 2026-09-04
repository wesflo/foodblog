import { ArrowRight, Clock3, Gauge, Leaf, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../../components/button/button';
import type { TeaserImage } from '../teaser/teaser';
import { classNames } from '../../utilities/class-names';
import styles from './feature-hero.module.css';

export type FeatureHeroVariant = 'recipe' | 'travel';
export type FeatureHeroMetaKind = 'time' | 'difficulty' | 'category';

export type FeatureHeroMetaItem = {
    kind: FeatureHeroMetaKind;
    value: string;
    label: string;
};

export type FeatureHeroProps = {
    variant: FeatureHeroVariant;
    eyebrow: string;
    headline: string;
    description: string;
    image: TeaserImage;
    href: string;
    linkLabel: string;
    meta?: FeatureHeroMetaItem[];
    metaAriaLabel?: string;
    className?: string;
};

const metaIcons = {
    time: Clock3,
    difficulty: Gauge,
    category: Leaf,
} satisfies Record<FeatureHeroMetaKind, typeof Clock3>;

export const FeatureHero = ({
    variant,
    eyebrow,
    headline,
    description,
    image,
    href,
    linkLabel,
    meta,
    metaAriaLabel,
    className,
}: FeatureHeroProps) => {
    const visibleMeta = variant === 'recipe' ? meta : undefined;

    return (
        <article
            className={classNames(styles.hero, className)}
            data-testid="feature-hero"
            data-variant={variant}
        >
            <div className={styles.copy}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>{eyebrow}</p>
                    <h2 className={styles.headline}>{headline}</h2>
                    <p className={styles.description}>{description}</p>

                    {visibleMeta?.length ? (
                        <dl aria-label={metaAriaLabel} className={styles.meta}>
                            {visibleMeta.map((item) => {
                                const MetaIcon = metaIcons[item.kind];

                                return (
                                    <div
                                        className={styles.metaItem}
                                        key={`${item.kind}-${item.label}`}
                                    >
                                        <MetaIcon {...iconDefaults} className={styles.metaIcon} />
                                        <div>
                                            <dt>{item.value}</dt>
                                            <dd>{item.label}</dd>
                                        </div>
                                    </div>
                                );
                            })}
                        </dl>
                    ) : null}
                </div>

                <Button data-href={href} size="small" variant="primary">
                    {linkLabel}
                    <ArrowRight {...iconDefaults} />
                </Button>
            </div>

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
        </article>
    );
};
