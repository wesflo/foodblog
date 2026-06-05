import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Food Blog',
        template: '%s | Food Blog',
    },
    description: 'Seasonal recipes and practical kitchen notes.',
};

type RootLayoutProps = {
    children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;
