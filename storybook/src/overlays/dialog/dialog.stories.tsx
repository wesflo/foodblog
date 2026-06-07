import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/button/button';
import { ConfirmDialog, InformationDialog, NewsletterDialog, SelectionDialog } from './dialog';

const DialogExamples = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <NewsletterDialog trigger={<Button>Newsletter</Button>} />
        <ConfirmDialog
            description="Dieses Rezept wird aus deiner Sammlung entfernt."
            title="Rezept löschen?"
            trigger={<Button variant="destructive">Delete</Button>}
        />
        <InformationDialog trigger={<Button variant="outline">Information</Button>} />
        <SelectionDialog trigger={<Button variant="secondary">Auswahl</Button>} />
    </div>
);

const meta = {
    title: 'Overlays/Dialog',
    component: DialogExamples,
    parameters: { layout: 'centered' },
} satisfies Meta<typeof DialogExamples>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
