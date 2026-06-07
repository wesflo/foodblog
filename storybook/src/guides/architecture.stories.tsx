import type { Meta, StoryObj } from '@storybook/react-vite';

import styles from './guide-layout.module.css';

const ArchitectureGuide = () => (
    <article className={styles.page}>
        <section className={styles.section}>
            <h1>Architecture</h1>
            <p>
                The <strong>storybook</strong> workspace owns the reusable UI package. The existing{' '}
                <strong>ui</strong> workspace owns routing, Sanity data fetching, data mapping,
                metadata, and SEO.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Production Exports</h2>
            <p>
                Production exports come from <strong>storybook/src/index.ts</strong>. Global styles
                are consumed through <strong>@wesflo/ui/styles</strong>. Stories, fixtures, and
                documentation files are Storybook-only and must never be imported by production
                code.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Components and Compositions</h2>
            <p>
                Components are focused, independently reusable building blocks. Compositions combine
                multiple components into larger content or interaction patterns while still exposing
                a deliberate typed API.
            </p>
        </section>
    </article>
);

const meta = {
    title: 'Guides + Docs/Architecture',
    component: ArchitectureGuide,
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ArchitectureGuide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
