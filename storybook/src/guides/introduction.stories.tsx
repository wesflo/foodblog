import type { Meta, StoryObj } from '@storybook/react-vite';

import styles from './guide-layout.module.css';

const IntroductionGuide = () => (
    <article className={styles.page}>
        <section className={styles.section}>
            <h1>Introduction</h1>
            <p>
                Storybook is the workbench for the reusable UI library in this repository. The
                production package is named <strong>@wesflo/ui</strong>, and the Next.js frontend
                consumes components and styles from that package.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Storybook Areas</h2>
            <ul>
                <li>Guides + Docs contains project-wide implementation guidance.</li>
                <li>Styles previews shared visual tokens and global element behavior.</li>
                <li>Components contains independently reusable UI pieces.</li>
                <li>Compositions combines components into larger typed patterns.</li>
                <li>Pages contains static page examples built from real UI exports.</li>
            </ul>
        </section>
        <section className={styles.section}>
            <h2>Implementation Principles</h2>
            <ul>
                <li>CSS Modules are used for component-local styles.</li>
                <li>CSS Custom Properties are used for shared visual tokens.</li>
                <li>Base UI is used for complex interactive primitives such as dialogs.</li>
                <li>
                    shadcn/ui is a conceptual reference for restrained APIs and states, but it is
                    not installed.
                </li>
                <li>Tailwind CSS is not used.</li>
                <li>Page stories use static mock data and do not call APIs.</li>
            </ul>
        </section>
    </article>
);

const meta = {
    title: 'Guides + Docs/Introduction',
    component: IntroductionGuide,
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof IntroductionGuide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
