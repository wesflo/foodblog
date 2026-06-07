import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './radio-group';

const meta = {
    title: 'Components/Radio Group',
    component: RadioGroup,
    args: {
        label: 'Ernährung',
        defaultValue: 'vegan',
        options: [
            { value: 'vegetarian', label: 'Vegetarisch' },
            { value: 'vegan', label: 'Vegan' },
            { value: 'meat', label: 'Mit Fleisch' },
        ],
    },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Disabled: Story = { args: { disabled: true } };
