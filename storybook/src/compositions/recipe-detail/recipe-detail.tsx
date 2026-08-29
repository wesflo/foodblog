import { useId } from 'react';
import { ChefHat, Clock3, CookingPot, Gauge, TimerReset, iconDefaults } from '@wesflo/ui/icons';

import { Breadcrumb, type BreadcrumbItem } from '../../components/breadcrumb/breadcrumb';
import { Link } from '../../components/link/link';
import { RichText } from '../../content/rich-text/rich-text';
import styles from './recipe-detail.module.css';

export type RecipeImage = {
    src: string;
    alt: string;
};

export type RecipeMetricKind = 'preparation' | 'cooking' | 'resting' | 'total' | 'difficulty';

export type RecipeMetric = {
    kind: RecipeMetricKind;
    label: string;
    value: string;
    highlighted?: boolean;
};

export type RecipeIngredient = {
    amount?: string;
    name: string;
};

export type RecipeIngredientGroup = {
    title: string;
    items: RecipeIngredient[];
};

export type RecipeStep = {
    title: string;
    description: string;
    duration?: string;
};

export type RecipeStepGroup = {
    title: string;
    steps: RecipeStep[];
};

export type RecipeAbout = {
    paragraphs: string[];
    highlights?: string[];
};

export type RecipeTag = {
    label: string;
    href: string;
};

export type RecipeDetailProps = {
    breadcrumb: BreadcrumbItem[];
    breadcrumbAriaLabel?: string;
    category: string;
    title: string;
    description: string;
    images: RecipeImage[];
    imageGalleryAriaLabel: string;
    metricsAriaLabel: string;
    metrics: RecipeMetric[];
    ingredientsTitle: string;
    ingredientGroups: RecipeIngredientGroup[];
    preparationTitle: string;
    stepGroups: RecipeStepGroup[];
    aboutTitle: string;
    about: RecipeAbout;
    tagsTitle: string;
    tags: RecipeTag[];
};

const metricIcons = {
    preparation: Clock3,
    cooking: CookingPot,
    resting: TimerReset,
    total: Clock3,
    difficulty: Gauge,
} satisfies Record<RecipeMetricKind, typeof Clock3>;

export const RecipeDetail = ({
    breadcrumb,
    breadcrumbAriaLabel,
    category,
    title,
    description,
    images,
    imageGalleryAriaLabel,
    metricsAriaLabel,
    metrics,
    ingredientsTitle,
    ingredientGroups,
    preparationTitle,
    stepGroups,
    aboutTitle,
    about,
    tagsTitle,
    tags,
}: RecipeDetailProps) => {
    const visibleImages = images.slice(0, 3);
    const ingredientsTitleId = useId();
    const preparationTitleId = useId();
    let stepNumber = 0;

    return (
        <main className={styles.page}>
            <div className={styles.shell}>
                <Breadcrumb
                    items={breadcrumb}
                    {...(breadcrumbAriaLabel ? { ariaLabel: breadcrumbAriaLabel } : {})}
                />

                <header className={styles.hero} data-has-images={visibleImages.length > 0}>
                    <div className={styles.intro}>
                        <p className={styles.category}>{category}</p>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>
                    </div>

                    {visibleImages.length > 0 ? (
                        <div
                            aria-label={imageGalleryAriaLabel}
                            className={styles.gallery}
                            data-count={visibleImages.length}
                            role="group"
                        >
                            {visibleImages.map((image, index) => (
                                <figure className={styles.imageFrame} key={`${image.src}-${index}`}>
                                    <img alt={image.alt} className={styles.image} src={image.src} />
                                </figure>
                            ))}
                        </div>
                    ) : (
                        <div aria-hidden="true" className={styles.emptyMedia} />
                    )}
                </header>
            </div>

            <section aria-label={metricsAriaLabel} className={styles.metricsSection}>
                <div className={`${styles.shell} ${styles.metrics}`}>
                    {metrics.map((metric) => {
                        const MetricIcon = metricIcons[metric.kind];

                        return (
                            <div className={styles.metric} key={`${metric.kind}-${metric.label}`}>
                                <MetricIcon
                                    {...iconDefaults}
                                    className={styles.metricIcon}
                                    size={24}
                                />
                                <div>
                                    <p className={styles.metricLabel}>{metric.label}</p>
                                    <p
                                        className={styles.metricValue}
                                        data-highlighted={metric.highlighted || undefined}
                                    >
                                        {metric.value}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className={`${styles.shell} ${styles.recipeBody}`}>
                <section aria-labelledby={ingredientsTitleId} className={styles.ingredients}>
                    <h2 className={styles.sectionTitle} id={ingredientsTitleId}>
                        {ingredientsTitle}
                    </h2>
                    <div className={styles.ingredientGroups}>
                        {ingredientGroups.map((group) => (
                            <section className={styles.ingredientGroup} key={group.title}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <dl className={styles.ingredientList}>
                                    {group.items.map((item, index) => (
                                        <div
                                            className={styles.ingredient}
                                            key={`${item.amount ?? ''}-${item.name}-${index}`}
                                        >
                                            <dt>{item.amount ?? ''}</dt>
                                            <dd>{item.name}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        ))}
                    </div>
                </section>

                <section aria-labelledby={preparationTitleId} className={styles.preparation}>
                    <h2 className={styles.sectionTitle} id={preparationTitleId}>
                        {preparationTitle}
                    </h2>
                    <div className={styles.stepGroups}>
                        {stepGroups.map((group) => (
                            <section className={styles.stepGroup} key={group.title}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <ol className={styles.stepList}>
                                    {group.steps.map((step) => {
                                        stepNumber += 1;

                                        return (
                                            <li
                                                className={styles.step}
                                                key={`${stepNumber}-${step.title}`}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={styles.stepNumber}
                                                >
                                                    {String(stepNumber).padStart(2, '0')}
                                                </span>
                                                <div className={styles.stepContent}>
                                                    <h4>{step.title}</h4>
                                                    <p>{step.description}</p>
                                                    {step.duration ? (
                                                        <p className={styles.stepDuration}>
                                                            <Clock3
                                                                {...iconDefaults}
                                                                aria-hidden="true"
                                                                size={15}
                                                            />
                                                            {step.duration}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </section>
                        ))}
                    </div>
                </section>
            </div>

            <section className={`${styles.shell} ${styles.about}`}>
                <div className={styles.aboutHeading}>
                    <ChefHat {...iconDefaults} size={26} />
                    <h2 className={styles.sectionTitle}>{aboutTitle}</h2>
                </div>
                <RichText className={styles.aboutCopy}>
                    {about.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                    {about.highlights?.length ? (
                        <ul>
                            {about.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    ) : null}
                </RichText>

                {tags.length > 0 ? (
                    <div className={styles.tags}>
                        <h2 className={styles.tagsTitle}>{tagsTitle}</h2>
                        <ul className={styles.tagList}>
                            {tags.map((tag) => (
                                <li key={`${tag.label}-${tag.href}`}>
                                    <Link href={tag.href} variant="text">
                                        {tag.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </section>
        </main>
    );
};
