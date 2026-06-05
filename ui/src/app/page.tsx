import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hello World',
};

const HomePage = () => (
    <main className="home-shell">
        <h1>Hello World</h1>
        <p>Foodblog setup is running.</p>
    </main>
);

export default HomePage;
