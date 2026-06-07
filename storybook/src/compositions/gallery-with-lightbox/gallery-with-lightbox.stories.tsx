import type { Meta, StoryObj } from '@storybook/react-vite';

import { GalleryWithLightbox } from './gallery-with-lightbox';
import type { GalleryImage } from './gallery-with-lightbox';

const images: GalleryImage[] = [
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23f4c95d"/%3E%3Ccircle cx="210" cy="220" r="92" fill="%23fbfaf7"/%3E%3Ccircle cx="356" cy="196" r="70" fill="%230f766e"/%3E%3Cpath d="M90 360h460" stroke="%2325221d" stroke-width="26" stroke-linecap="round"/%3E%3C/svg%3E',
        alt: 'A composed plate with yellow, white, and green shapes.',
        title: 'Seasonal plate',
        caption: 'A compact visual study for color, crop, and caption behavior.',
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23eee8df"/%3E%3Cpath d="M120 120h400v260H120z" fill="%23ffffff"/%3E%3Cpath d="M160 170h180M160 220h320M160 270h240" stroke="%236f675d" stroke-width="22" stroke-linecap="round"/%3E%3Ccircle cx="455" cy="170" r="44" fill="%230f766e"/%3E%3C/svg%3E',
        alt: 'A recipe card illustration with simple line details.',
        title: 'Recipe card',
        caption: 'A neutral fixture that avoids network or image service dependencies.',
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%2325221d"/%3E%3Cpath d="M120 320c80-140 160-140 240 0s140 110 180 20" fill="none" stroke="%23f4c95d" stroke-width="34" stroke-linecap="round"/%3E%3Ccircle cx="210" cy="170" r="54" fill="%23fbfaf7"/%3E%3Ccircle cx="390" cy="170" r="54" fill="%230f766e"/%3E%3C/svg%3E',
        alt: 'A dark editorial food illustration with curved garnish shapes.',
        title: 'Editorial crop',
        caption: 'Used to check contrast, modal scale, and keyboard-opened content.',
    },
];

const meta = {
    title: 'Compositions/Gallery with Lightbox',
    component: GalleryWithLightbox,
    parameters: {
        layout: 'padded',
    },
    args: {
        images,
    },
} satisfies Meta<typeof GalleryWithLightbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
