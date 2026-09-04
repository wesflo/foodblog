import { ArrowRight, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../../components/button/button';
import type { TeaserImage } from '../teaser/teaser';
import { classNames } from '../../utilities/class-names';
import styles from './side-by-side-hero.module.css';

export type SideBySideHeroItem = {
    eyebrow: string;
    headline: string;
    description: string;
    image: TeaserImage;
    href: string;
    linkLabel: string;
};

export type SideBySideHeroProps = {
    items: readonly [SideBySideHeroItem, SideBySideHeroItem];
    badge: {
        firstLine: string;
        separator: string;
        secondLine: string;
        ariaLabel: string;
    };
    ariaLabel?: string;
    className?: string;
};

export const SideBySideHero = ({ items, badge, ariaLabel, className }: SideBySideHeroProps) => (
    <section
        aria-label={ariaLabel}
        className={classNames(styles.hero, className)}
        data-testid="side-by-side-hero"
    >
        <HeroItem item={items[0]} position={1} />
        <div aria-label={badge.ariaLabel} className={styles.badge} role="img">
            <span>{badge.firstLine}</span>
            <span aria-hidden="true">{badge.separator}</span>
            <span>{badge.secondLine}</span>
        </div>
        <HeroItem item={items[1]} position={2} />
    </section>
);

const HeroItem = ({ item, position }: { item: SideBySideHeroItem; position: 1 | 2 }) => (
    <article className={styles.item} data-position={position}>
        <div className={styles.copy}>
            <p className={styles.eyebrow}>{item.eyebrow}</p>
            <h2 className={styles.headline}>{item.headline}</h2>
            <p className={styles.description}>{item.description}</p>
            <Button data-href={item.href} size="small" variant="primary">
                {item.linkLabel}
                <ArrowRight {...iconDefaults} />
            </Button>
        </div>

        <picture className={styles.picture}>
            {item.image.sources?.map((source) => (
                <source
                    key={`${source.media ?? 'default'}-${source.srcSet}`}
                    media={source.media}
                    srcSet={source.srcSet}
                    type={source.type}
                />
            ))}
            <img alt={item.image.alt} className={styles.image} src={item.image.src} />
        </picture>
    </article>
);
