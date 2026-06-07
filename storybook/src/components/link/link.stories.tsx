import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './link';

const meta = {
    title: 'Components/Links',
    component: Link,
    args: {
        children: 'Link',
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {
    args: {},
    render: () => (
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Link href="#">Inline link</Link>
            <Link href="#" variant="text">
                Mehr erfahren
            </Link>
            <Link href="#" variant="arrow">
                Alle Rezepte
            </Link>
            <Link href="#" variant="external">
                Newsletter
            </Link>
            <Link href="#" variant="back">
                Zurück
            </Link>
            <Link href="#" variant="muted">
                Nutzungsbedingungen
            </Link>
            <Link disabled href="#" variant="arrow">
                Nicht verfügbar
            </Link>
        </p>
    ),
};
