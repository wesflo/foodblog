import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/button/button';
import { Popover } from './popover';

const meta = {
    title: 'Overlays/Popover',
    component: Popover,
    args: {
        title: 'Sortieren nach',
        trigger: <Button variant="outline">Sortieren</Button>,
        children: 'Neueste zuerst, Beliebteste oder A-Z.',
    },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
