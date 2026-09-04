import { Link } from '../../components/link/link';
import { FeatureHero, type FeatureHeroProps } from '../../compositions/feature-hero/feature-hero';
import {
    SideBySideHero,
    type SideBySideHeroProps,
} from '../../compositions/side-by-side-hero/side-by-side-hero';
import { Teaser, type TeaserImage, type TeaserProps } from '../../compositions/teaser/teaser';
import { RichText } from '../../content/rich-text/rich-text';
import styles from './home-page.module.css';

export type HomeHero = {
    eyebrow: string;
    headline: string;
    description: string;
    collage: TeaserImage;
};

export type HomeTeaserSection = {
    title: string;
    items: TeaserProps[];
    columns: 2 | 3 | 4;
    allItemsHref?: string;
    allItemsLabel?: string;
};

export type HomeAbout = {
    eyebrow?: string;
    headline: string;
    paragraphs: string[];
    image: TeaserImage;
    href: string;
    linkLabel: string;
    stampLabel?: string;
};

export type HomePageProps = {
    hero: HomeHero;
    sideBySideHero: SideBySideHeroProps;
    featureHero: FeatureHeroProps;
    teaserSections: HomeTeaserSection[];
    about: HomeAbout;
    travelSection: HomeTeaserSection;
};

export const HomePage = ({
    hero,
    sideBySideHero,
    featureHero,
    teaserSections,
    about,
    travelSection,
}: HomePageProps) => (
    <main className={styles.page}>
        <section className={`${styles.shell} ${styles.homeHero}`}>
            <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
                <h1 className={styles.heroHeadline}>{hero.headline}</h1>
                <p className={styles.heroDescription}>{hero.description}</p>
            </div>

            <div className={styles.collageStage}>
                <picture className={styles.collagePicture}>
                    {hero.collage.sources?.map((source) => (
                        <source
                            key={`${source.media ?? 'default'}-${source.srcSet}`}
                            media={source.media}
                            srcSet={source.srcSet}
                            type={source.type}
                        />
                    ))}
                    <img
                        alt={hero.collage.alt}
                        className={styles.collageImage}
                        src={hero.collage.src}
                    />
                </picture>
            </div>
        </section>

        <div className={`${styles.shell} ${styles.content}`}>
            <SideBySideHero {...sideBySideHero} />
            <FeatureHero {...featureHero} />

            {teaserSections.map((section) => (
                <TeaserSection key={section.title} {...section} />
            ))}

            <div className={styles.lowerContent}>
                <AboutCard {...about} />
                <TeaserSection {...travelSection} />
            </div>
        </div>
    </main>
);

const TeaserSection = ({
    title,
    items,
    columns,
    allItemsHref,
    allItemsLabel,
}: HomeTeaserSection) => (
    <section className={styles.teaserSection}>
        <div className={styles.sectionHeader}>
            <h2>{title}</h2>
            {allItemsHref && allItemsLabel ? (
                <Link href={allItemsHref} variant="arrow">
                    {allItemsLabel}
                </Link>
            ) : null}
        </div>
        <div className={styles.teaserGrid} data-columns={columns}>
            {items.map((item) => (
                <Teaser {...item} key={`${item.headline}-${item.href}`} />
            ))}
        </div>
    </section>
);

const AboutCard = ({
    eyebrow,
    headline,
    paragraphs,
    image,
    href,
    linkLabel,
    stampLabel,
}: HomeAbout) => (
    <article className={styles.about}>
        <div className={styles.aboutPhoto}>
            <picture className={styles.aboutPicture}>
                {image.sources?.map((source) => (
                    <source
                        key={`${source.media ?? 'default'}-${source.srcSet}`}
                        media={source.media}
                        srcSet={source.srcSet}
                        type={source.type}
                    />
                ))}
                <img alt={image.alt} className={styles.aboutImage} src={image.src} />
            </picture>
        </div>
        <div className={styles.aboutCopy}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h2>{headline}</h2>
            <RichText>
                {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </RichText>
            <Link href={href} variant="arrow">
                {linkLabel}
            </Link>
            {stampLabel ? (
                <div aria-label={stampLabel} className={styles.aboutStamp} role="img">
                    {stampLabel}
                </div>
            ) : null}
        </div>
    </article>
);
