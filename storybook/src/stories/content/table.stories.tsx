import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableExample } from './content-preview';

const meta = {
    title: 'Content/Table',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <TableExample />,
};

export const Responsive: Story = {
    render: () => (
        <div style={{ maxWidth: '22rem' }}>
            <TableExample />
        </div>
    ),
};
