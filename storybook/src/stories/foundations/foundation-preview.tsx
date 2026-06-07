import {
    useEffect,
    useState,
    type CSSProperties,
    type ReactElement,
    type ReactNode,
    type SVGProps,
} from 'react';

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

type TokenType = 'color' | 'space' | 'radius' | 'shadow' | 'breakpoint';
type TokenDescriptor = string | { name: string; role: string };
type PreviewIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export const TokenGrid = ({ tokens, type }: { tokens: TokenDescriptor[]; type: TokenType }) => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {tokens.map((token) => {
                const name = typeof token === 'string' ? token : token.name;
                const role = typeof token === 'string' ? roleForToken(name) : token.role;

                return (
                    <article className={styles.card} key={name}>
                        <span className={tokenClass(type)} style={tokenStyle(name)} />
                        <code className={styles.tokenName}>{name}</code>
                        <TokenValue token={name} />
                        <p className={styles.helpText}>{role}</p>
                    </article>
                );
            })}
        </div>
    </section>
);

export const TypographyPreview = () => (
    <section className={styles.page}>
        <p className={styles.sectionLabel}>Typography</p>
        <div className={styles.typographyScale}>
            <article>
                <span>H1</span>
                <h1>Kochen ohne Kulisse.</h1>
                <p>Page title with the largest rhythm after it.</p>
            </article>
            <article>
                <span>H2</span>
                <h2>Echte Gerichte. Ehrliche Bilder.</h2>
                <p>Section title for long-form articles.</p>
            </article>
            <article>
                <span>H3-H6</span>
                <h3>Zutaten, die ich wirklich nutze</h3>
                <h4>Kochen ist Alltag</h4>
                <h5>Kleiner Titel</h5>
                <h6>Noch ein Titel</h6>
            </article>
        </div>
        <div className={styles.readingSample}>
            <p>
                Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend. Hier findest du{' '}
                <a href="#">Rezepte</a>, die im Alltag funktionieren.
            </p>
            <p>
                <strong>Wichtiger Text</strong>, <em>betonte Wörter</em>,{' '}
                <mark>markierter Text</mark> und <code>inline-code</code> bleiben ruhig und gut
                lesbar.
            </p>
        </div>
    </section>
);

export const SpacingPreview = () => (
    <section className={styles.page}>
        <TokenGrid
            tokens={[
                { name: '--wf-space-2xs', role: 'Tight icon and inline spacing.' },
                { name: '--wf-space-xs', role: 'Compact form and button gaps.' },
                { name: '--wf-space-s', role: 'Small control and list spacing.' },
                { name: '--wf-space-m', role: 'Default component padding.' },
                { name: '--wf-space-l', role: 'Grouped content spacing.' },
                { name: '--wf-space-xl', role: 'Section padding.' },
                { name: '--wf-space-2xl', role: 'Large vertical rhythm.' },
                { name: '--wf-space-3xl', role: 'Major page separation.' },
            ]}
            type="space"
        />
        <article className={styles.card}>
            <h3>Applied Rhythm</h3>
            <div className={styles.spacingStack}>
                <p>Small text group</p>
                <p>Component group</p>
                <p>Section group</p>
            </div>
        </article>
    </section>
);

export const RadiiPreview = () => (
    <section className={styles.page}>
        <TokenGrid
            tokens={[
                { name: '--wf-radius-m', role: 'Inputs, tabs, menus, and compact surfaces.' },
                { name: '--wf-radius-l', role: 'Dialogs, figures, and larger surface edges.' },
                { name: '--wf-radius-xl', role: 'Sheets and prominent overlay containers.' },
                { name: '--wf-radius-pill', role: 'Buttons, toggles, and tags.' },
            ]}
            type="radius"
        />
    </section>
);

export const ShadowPreview = () => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {[
                { token: '--wf-shadow-hover', role: 'Temporary lift on interactive hover states.' },
                { token: '--wf-shadow-floating', role: 'Menus, popovers, tooltips, and toasts.' },
                { token: '--wf-shadow-overlay', role: 'Modal dialogs and blocking overlays.' },
            ].map(({ token, role }) => (
                <article className={styles.card} key={token}>
                    <span className={styles.shadow} style={tokenStyle(token)} />
                    <code className={styles.tokenName}>{token}</code>
                    <TokenValue token={token} />
                    <p className={styles.helpText}>{role}</p>
                </article>
            ))}
        </div>
    </section>
);

export const BreakpointPreview = () => (
    <section className={styles.page}>
        <TokenGrid
            tokens={[
                {
                    name: '--wf-breakpoint-s',
                    role: 'Two-column reading and compact side-by-side layouts.',
                },
                { name: '--wf-breakpoint-m', role: 'Comfortable tablet layout.' },
                { name: '--wf-breakpoint-l', role: 'Desktop content grids and three columns.' },
                {
                    name: '--wf-breakpoint-xl',
                    role: 'Wide desktop expansion without stretching prose.',
                },
            ]}
            type="breakpoint"
        />
        <article className={styles.card}>
            <h3>Responsive Content Grid</h3>
            <div className={styles.breakpointGrid}>
                <span>Article</span>
                <span>Related</span>
                <span>Notes</span>
                <span>Meta</span>
            </div>
        </article>
    </section>
);

export const IconPreview = () => (
    <section className={styles.page}>
        <div className={styles.iconGrid}>
            {iconItems.map(({ label, Icon }) => (
                <article className={styles.card} key={label}>
                    <span className={styles.iconSample}>
                        <Icon />
                    </span>
                    <p>{label}</p>
                </article>
            ))}
        </div>
        <div className={styles.iconSizes}>
            <span style={{ '--size': 'var(--wf-icon-size-s)' } as CSSProperties}>
                <InfoIcon />
            </span>
            <span style={{ '--size': 'var(--wf-icon-size-m)' } as CSSProperties}>
                <InfoIcon />
            </span>
            <span style={{ '--size': 'var(--wf-icon-size-l)' } as CSSProperties}>
                <InfoIcon />
            </span>
        </div>
    </section>
);

export const MotionPreview = () => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {[
                {
                    token: '--wf-transition-fast',
                    role: 'Color, border, and small affordance changes.',
                },
                {
                    token: '--wf-transition-interaction',
                    role: 'Button lift, chevrons, and tab indicator movement.',
                },
                {
                    token: '--wf-transition-layout',
                    role: 'Accordion panels and overlay layout changes.',
                },
            ].map(({ token, role }) => (
                <article className={styles.motionCard} key={token}>
                    <code className={styles.tokenName}>{token}</code>
                    <TokenValue token={token} />
                    <p className={styles.helpText}>{role}</p>
                </article>
            ))}
        </div>
    </section>
);

export const BorderPreview = () => (
    <section className={styles.page}>
        <div className={styles.grid}>
            {[
                ['Default', 'Default separators and quiet controls.', 'var(--wf-border)'],
                ['Strong', 'Inputs, checkboxes, radio outlines.', 'var(--wf-border-strong)'],
                ['Focus', 'Visible keyboard focus states.', 'var(--wf-primary)'],
                ['Error', 'Validation and destructive feedback.', 'var(--wf-error)'],
                ['Success', 'Positive validation feedback.', 'var(--wf-success)'],
            ].map(([label, role, color]) => (
                <article
                    className={styles.borderSample}
                    key={label}
                    style={{ '--border-sample': color } as CSSProperties}
                >
                    <h3>{label}</h3>
                    <p>{role}</p>
                </article>
            ))}
        </div>
    </section>
);

export const FramedStory = ({ children }: { children: ReactNode }) => (
    <section className={styles.page}>{children}</section>
);

const TokenValue = ({ token }: { token: string }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(getComputedStyle(document.documentElement).getPropertyValue(token).trim());
    }, [token]);

    return <span className={styles.tokenValue}>{value || 'Token value'}</span>;
};

const tokenStyle = (token: string): CSSProperties =>
    ({
        '--token': `var(${token})`,
    }) as CSSProperties;

const tokenClass = (type: TokenType) => {
    if (type === 'color') return styles.swatch;
    if (type === 'space') return styles.space;
    if (type === 'radius') return styles.radius;
    if (type === 'shadow') return styles.shadow;
    return styles.breakpoint;
};

const iconItems: Array<{ label: string; Icon: PreviewIcon }> = [
    { label: 'Back', Icon: ArrowLeftIcon },
    { label: 'Forward', Icon: ArrowRightIcon },
    { label: 'Success', Icon: CheckIcon },
    { label: 'Close', Icon: CloseIcon },
    { label: 'External', Icon: ExternalLinkIcon },
    { label: 'Info', Icon: InfoIcon },
    { label: 'Search', Icon: SearchIcon },
    { label: 'Upload', Icon: UploadIcon },
    { label: 'Warning', Icon: WarningIcon },
];

const roleForToken = (token: string) => {
    const roles: Record<string, string> = {
        '--wf-background': 'Page canvas.',
        '--wf-surface': 'Cards, controls, and overlay interiors.',
        '--wf-surface-muted': 'Subtle hover and disabled surfaces.',
        '--wf-text': 'Primary readable text.',
        '--wf-text-muted': 'Secondary labels and helper text.',
        '--wf-border': 'Default separators and quiet outlines.',
        '--wf-primary': 'Primary action, focus, and links.',
        '--wf-secondary': 'Editorial accent and section labels.',
        '--wf-success': 'Positive feedback.',
        '--wf-warning': 'Caution feedback.',
        '--wf-error': 'Error and destructive feedback.',
    };

    return roles[token] ?? 'Reusable design token.';
};
