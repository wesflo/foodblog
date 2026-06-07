import type { CSSProperties, ReactNode } from 'react';

import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CheckIcon,
    CloseIcon,
    ExternalLinkIcon,
    InfoIcon,
    SearchIcon,
    UploadIcon,
    WarningIcon,
} from '../../utilities/icons';
import styles from '../story-layout.module.css';

export const TokenGrid = ({
    tokens,
    type,
}: {
    tokens: string[];
    type: 'color' | 'space' | 'radius' | 'shadow' | 'breakpoint';
}) => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {tokens.map((token) => (
                <article className={styles.card} key={token}>
                    <span className={tokenClass(type)} style={tokenStyle(token)} />
                    <code className={styles.tokenName}>{token}</code>
                </article>
            ))}
        </div>
    </section>
);

export const TypographyPreview = () => (
    <section className={styles.page}>
        <p className={styles.sectionLabel}>Typography</p>
        <h1>Kochen ohne Kulisse.</h1>
        <h2>Echte Gerichte. Ehrliche Bilder.</h2>
        <h3>Zutaten, die ich wirklich nutze</h3>
        <h4>Kochen ist Alltag</h4>
        <h5>Kleiner Titel</h5>
        <h6>Noch ein Titel</h6>
        <p>
            Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend. Hier findest du{' '}
            <a href="#">Rezepte</a>, die im Alltag funktionieren.
        </p>
        <p>
            <strong>Wichtiger Text</strong>, <em>betonte Wörter</em>, <mark>markierter Text</mark>{' '}
            und <code>inline-code</code> bleiben ruhig und gut lesbar.
        </p>
        <blockquote>
            Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend.
        </blockquote>
        <pre>
            <code>{'const recipe = { title: "Pasta mit Erbsen", time: "25 Minuten" };'}</code>
        </pre>
    </section>
);

export const IconPreview = () => (
    <section className={styles.page}>
        <div className={styles.row}>
            {[
                ArrowRightIcon,
                ArrowLeftIcon,
                CheckIcon,
                CloseIcon,
                ExternalLinkIcon,
                InfoIcon,
                SearchIcon,
                UploadIcon,
                WarningIcon,
            ].map((Icon, index) => (
                <span className={styles.iconSample} key={index}>
                    <Icon />
                </span>
            ))}
        </div>
    </section>
);

export const MotionPreview = () => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {['--wf-transition-fast', '--wf-transition-interaction', '--wf-transition-layout'].map(
                (token) => (
                    <article className={styles.card} key={token}>
                        <code className={styles.tokenName}>{token}</code>
                        <p>
                            Used for component state changes while respecting reduced motion
                            preferences.
                        </p>
                    </article>
                ),
            )}
        </div>
    </section>
);

export const BorderPreview = () => (
    <section className={styles.page}>
        <div className={styles.card}>
            <code className={styles.tokenName}>--wf-border-width / --wf-border-color</code>
            <p>Light 1px borders are the default separator and control outline.</p>
        </div>
    </section>
);

export const FramedStory = ({ children }: { children: ReactNode }) => (
    <section className={styles.page}>{children}</section>
);

const tokenStyle = (token: string): CSSProperties =>
    ({
        '--token': `var(${token})`,
    }) as CSSProperties;

const tokenClass = (type: 'color' | 'space' | 'radius' | 'shadow' | 'breakpoint') => {
    if (type === 'color') return styles.swatch;
    if (type === 'space') return styles.space;
    if (type === 'radius') return styles.radius;
    if (type === 'shadow') return styles.shadow;
    return styles.breakpoint;
};
