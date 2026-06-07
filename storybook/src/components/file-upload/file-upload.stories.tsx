import type { Meta, StoryObj } from '@storybook/react-vite';

import { FileUpload } from './file-upload';

const meta = {
    title: 'Components/File Upload',
    component: FileUpload,
    args: { label: 'Datei auswählen' },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Selected: Story = { args: { status: 'selected', fileName: 'rezept-foto.jpg' } };
export const Success: Story = { args: { status: 'success', fileName: 'Datei hochgeladen!' } };
export const Error: Story = { args: { status: 'error', fileName: 'Datei ist zu groß.' } };
