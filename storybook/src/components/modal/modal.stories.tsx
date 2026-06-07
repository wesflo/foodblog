import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/button';

import { Modal } from './modal';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Recipe note',
        children: <p>Use this space for focused details without leaving the current page.</p>,
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
    args: {
        title: 'Storage tips',
        description: 'A short explanation can set context before the modal content.',
        children: (
            <p>
                Store herbs upright in a glass of water, loosely covered, and refresh the water
                every two days.
            </p>
        ),
    },
};

export const LongContent: Story = {
    args: {
        title: 'Make-ahead plan',
        description: 'A longer modal should remain readable and scroll within the viewport.',
        children: (
            <>
                <p>
                    Two days ahead, prepare the sauce base and cool it completely before
                    refrigerating.
                </p>
                <p>One day ahead, wash and dry the greens, then wrap them in a clean towel.</p>
                <p>
                    On serving day, warm the sauce gently, fold in the fresh herbs, and season at
                    the end.
                </p>
                <p>
                    Keep the final garnish separate until the dish is plated so it stays bright and
                    crisp.
                </p>
            </>
        ),
    },
};

export const CustomTrigger: Story = {
    args: {
        title: 'Ingredient swap',
        trigger: (
            <Button size="s" variant="outline">
                Open swap note
            </Button>
        ),
        children: (
            <p>Greek yogurt can replace sour cream in most dressings with a brighter finish.</p>
        ),
    },
};
