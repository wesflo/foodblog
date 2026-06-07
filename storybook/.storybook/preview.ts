import type { Preview } from '@storybook/react-vite';

import '@wesflo/ui/styles';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: [
                    'Guides + Docs',
                    ['Introduction', 'Architecture'],
                    'Styles',
                    ['Colors', 'Typography', 'Spacing', 'Radius'],
                    'Components',
                    ['Button', 'Input Field', 'Modal'],
                    'Compositions',
                    ['Gallery with Lightbox'],
                    'Pages',
                    ['Home Page'],
                ],
            },
        },
    },
};

export default preview;
