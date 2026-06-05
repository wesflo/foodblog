'use client';

type ErrorPageProps = {
    error: Error;
    reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => (
    <main className="page-shell">
        <section className="page-document" aria-labelledby="error-title">
            <p>Something went wrong</p>
            <h1 id="error-title">The page could not be loaded</h1>
            <p>{error.message}</p>
            <button type="button" onClick={reset}>
                Try again
            </button>
        </section>
    </main>
);

export default ErrorPage;
