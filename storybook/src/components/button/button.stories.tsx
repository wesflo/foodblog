import type { Meta, StoryObj } from '@storybook/react-vite';

import { ArrowRightIcon, SearchIcon } from '../../utilities/icons';
import { Button } from './button';

const meta = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Delete</Button>
        </div>
    ),
};

export const States: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Button disabled>Disabled</Button>
            <Button loading>Saving</Button>
            <Button leadingIcon={<SearchIcon />}>Search</Button>
            <Button trailingIcon={<ArrowRightIcon />}>Mehr lesen</Button>
            <Button>Ein sehr langer Buttontext für Umbrüche</Button>
        </div>
    ),
};
