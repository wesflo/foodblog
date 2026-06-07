import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/button/button';
import { Sheet } from './sheet';

const meta = {
    title: 'Overlays/Sheet',
    component: Sheet,
    args: { trigger: <Button>Open menu</Button> },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
