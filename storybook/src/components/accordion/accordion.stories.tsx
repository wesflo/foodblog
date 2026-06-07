import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    args: {
        items: [
            {
                title: 'Was ist der Wochenflow?',
                content: 'Der Wochenflow ist dein persönlicher Begleiter für entspanntes Kochen.',
            },
            {
                title: 'Kann ich Rezepte speichern?',
                content: 'Ja, die Oberfläche ist darauf vorbereitet.',
            },
        ],
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
