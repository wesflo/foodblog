import type { Preview } from '@storybook/react-vite';

import '@wesflo/ui/styles';
import './preview.css';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: [
                    'Foundations',
                    [
                        'Colors',
                        'Typography',
                        'Spacing',
                        'Radii',
                        'Borders',
                        'Shadows',
                        'Icons',
                        'Motion',
                        'Breakpoints',
                    ],
                    'Content',
                    ['Rich Text', 'Multi Column Text', 'Lists', 'Quote', 'Table', 'Figure'],
                    'Components',
                    [
                        'Breadcrumb',
                        'Button',
                        'Icon Button',
                        'Links',
                        'Input',
                        'Search Input',
                        'Textarea',
                        'Select',
                        'Checkbox',
                        'Radio Group',
                        'Switch',
                        'File Upload',
                        'Alert',
                        'Accordion',
                        'Tabs',
                    ],
                    'Overlays',
                    ['Tooltip', 'Popover', 'Dropdown Menu', 'Dialog', 'Sheet', 'Toast'],
                ],
            },
        },
    },
};

export default preview;
