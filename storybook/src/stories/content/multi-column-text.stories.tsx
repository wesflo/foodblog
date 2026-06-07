import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiColumnExample } from './content-preview';

const meta = {
    title: 'Content/Multi Column Text',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsiveFlow: Story = {
    name: 'Responsive Flow',
    render: () => <MultiColumnExample />,
};

export const WithHeadings: Story = {
    name: 'With Headings',
    render: () => <MultiColumnExample withHeading />,
};

export const WithLists: Story = {
    name: 'With Lists',
    render: () => <MultiColumnExample withList />,
};
