import type { Meta, StoryObj } from '@storybook/react-vite';

import { FigureExample } from './content-preview';

const meta = {
    title: 'Content/Figure',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <FigureExample />,
};

export const WithLongCaption: Story = {
    name: 'With Long Caption',
    render: () => <FigureExample longCaption />,
};
