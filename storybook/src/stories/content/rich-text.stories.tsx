import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    ArticleOverview,
    BlockquoteExample,
    CodeExample,
    HeadingsExample,
    InlineElementsExample,
    ParagraphsExample,
} from './content-preview';

const meta = {
    title: 'Content/Rich Text',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => <ArticleOverview />,
};

export const Headings: Story = {
    render: () => <HeadingsExample />,
};

export const Paragraphs: Story = {
    render: () => <ParagraphsExample />,
};

export const InlineElements: Story = {
    name: 'Inline Elements',
    render: () => <InlineElementsExample />,
};

export const Blockquote: Story = {
    render: () => <BlockquoteExample />,
};

export const Code: Story = {
    render: () => <CodeExample />,
};
