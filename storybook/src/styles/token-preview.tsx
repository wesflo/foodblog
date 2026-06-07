import type { CSSProperties } from 'react';

import styles from './token-preview.module.css';

export type TokenPreviewProps = {
    title: string;
    tokens: string[];
    type: 'color' | 'typography' | 'spacing' | 'radius';
};

export const TokenPreview = ({ title, tokens, type }: TokenPreviewProps) => (
    <section className={styles.page}>
        <div>
            <h1>{title}</h1>
            <p>These previews render real CSS Custom Properties from the shared UI stylesheet.</p>
        </div>
        <div className={styles.grid}>
            {tokens.map((token) => (
                <article className={type === 'color' ? styles.swatch : styles.sample} key={token}>
                    {type === 'color' ? (
                        <span className={styles.color} style={tokenStyle(token)} />
                    ) : null}
                    {type === 'typography' ? (
                        <span className={styles.typeSample} style={tokenStyle(token)}>
                            Aa Recipe Notes
                        </span>
                    ) : null}
                    {type === 'spacing' ? (
                        <span className={styles.spaceSample} style={tokenStyle(token)} />
                    ) : null}
                    {type === 'radius' ? (
                        <span className={styles.radiusSample} style={tokenStyle(token)} />
                    ) : null}
                    <code className={styles.name}>{token}</code>
                </article>
            ))}
        </div>
    </section>
);

const tokenStyle = (token: string): CSSProperties =>
    ({
        '--preview-token': `var(${token})`,
    }) as CSSProperties;
