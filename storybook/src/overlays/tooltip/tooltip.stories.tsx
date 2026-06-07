import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/button/button';
import { Tooltip } from './tooltip';

const meta = {
    title: 'Overlays/Tooltip',
    component: Tooltip,
    args: {
        trigger: <Button variant="outline">Info</Button>,
        children: 'Hier findest du hilfreiche Informationen.',
    },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
