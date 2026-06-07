import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/button/button';
import { DropdownMenu } from './dropdown-menu';

const meta = {
    title: 'Overlays/Dropdown Menu',
    component: DropdownMenu,
    args: {
        trigger: <Button variant="outline">Mein Konto</Button>,
        items: [
            { label: 'Profil' },
            { label: 'Gespeicherte Rezepte' },
            { label: 'Einstellungen' },
            { label: 'Abmelden' },
        ],
    },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
