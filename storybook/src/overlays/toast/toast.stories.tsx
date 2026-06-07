import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toast } from './toast';

const meta = {
    title: 'Overlays/Toast',
    component: Toast,
    args: {
        status: 'success',
        title: 'Erfolg',
        description: 'Deine Änderungen wurden gespeichert.',
    },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Success: Story = {};
export const Information: Story = {
    args: {
        status: 'information',
        title: 'Hinweis',
        description: 'Dein Rezept wurde veröffentlicht.',
    },
};
export const Error: Story = {
    args: {
        status: 'error',
        title: 'Fehler',
        description: 'Beim Speichern ist etwas schiefgelaufen.',
    },
};
