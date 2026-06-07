import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from './alert';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    args: {
        title: 'Hinweis',
        description: 'Dies ist eine neutrale Information für dich.',
        dismissible: true,
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Information: Story = {};
export const Success: Story = {
    args: {
        status: 'success',
        title: 'Erfolg',
        description: 'Deine Aktion wurde erfolgreich ausgeführt.',
    },
};
export const Warning: Story = {
    args: {
        status: 'warning',
        title: 'Warnung',
        description: 'Diese Aktion kann nicht rückgängig gemacht werden.',
    },
};
export const Error: Story = {
    args: { status: 'error', title: 'Fehler', description: 'Bitte überprüfe deine Eingaben.' },
};
