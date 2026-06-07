import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListsExample } from './content-preview';

const meta = {
    title: 'Content/Lists',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
    render: () => <ListsExample />,
};

export const Ordered: Story = {
    render: () => <ListsExample variant="ordered" />,
};

export const Nested: Story = {
    render: () => <ListsExample variant="nested" />,
};
