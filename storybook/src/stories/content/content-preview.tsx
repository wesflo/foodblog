import { RichText } from '../../content/rich-text/rich-text';

export const RichTextExample = ({ columns = false }: { columns?: boolean }) => (
    <RichText columns={columns}>
        <h1>Kochen ohne Kulisse.</h1>
        <p>
            Kochen ist für mich keine Inszenierung. Es ist mein Ausgleich, mein kreativer Freiraum
            und manchmal auch einfach Lösung für die Frage: Was gibt es heute?
        </p>
        <h2>Echte Gerichte. Ehrliche Bilder.</h2>
        <p>
            Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend. Hier ist ein{' '}
            <a href="#">Inline-Link</a> im Textfluss.
        </p>
        <blockquote>
            Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend.
        </blockquote>
        <ul>
            <li>Frische Zutaten</li>
            <li>Einfache Zubereitung</li>
            <li>Viel Geschmack</li>
        </ul>
        <ol>
            <li>Zutaten vorbereiten</li>
            <li>Anbraten</li>
            <li>Genießen</li>
        </ol>
        <pre>
            <code>{'const recipe = { title: "Pasta mit Erbsen", time: "25 Minuten" };'}</code>
        </pre>
        <table>
            <thead>
                <tr>
                    <th>Zutat</th>
                    <th>Menge</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Olivenöl</td>
                    <td>2 EL</td>
                </tr>
                <tr>
                    <td>Tomaten</td>
                    <td>400 g</td>
                </tr>
            </tbody>
        </table>
        <figure>
            <img
                alt="A simple abstract pasta plate."
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 280'%3E%3Crect width='640' height='280' fill='%23e7e3de'/%3E%3Ccircle cx='320' cy='140' r='82' fill='%23fffcf8'/%3E%3Cpath d='M220 150c90-90 150 100 240 0' stroke='%232d99f7' stroke-width='28' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
            />
            <figcaption>Pasta mit Erbsen, Zitrone und Ricotta.</figcaption>
        </figure>
    </RichText>
);
