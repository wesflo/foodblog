import { createElement } from 'react';

import { RichText } from '../../content/rich-text/rich-text';
import styles from './content-preview.module.css';

const pastaImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 520'%3E%3Crect width='900' height='520' fill='%23f7f4ee'/%3E%3Ccircle cx='450' cy='260' r='180' fill='%23fffcf8'/%3E%3Cpath d='M270 282c86-116 159 111 241 0s139 75 201 5' stroke='%232d99f7' stroke-width='34' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='368' cy='220' r='24' fill='%23fa3c9b'/%3E%3Ccircle cx='520' cy='315' r='20' fill='%23e7e89d'/%3E%3C/svg%3E";

export const ArticleOverview = () => (
    <article className={styles.article}>
        <p className={styles.eyebrow}>Aus meiner Küche</p>
        <RichText>
            <h1>Kochen ohne Kulisse.</h1>
            <p className={styles.lead}>
                Ehrliche Rezepte, echte Zutaten und Geschichten aus meiner Küche. Schnell, manchmal
                chaotisch, immer mit Geschmack.
            </p>
            <p>
                Kochen ist für mich keine Inszenierung. Es ist mein Ausgleich, mein kreativer
                Freiraum und manchmal auch einfach Lösung für die Frage: Was gibt es heute?
            </p>
            <p>
                Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend. Hier ist ein{' '}
                <a href="#">Inline-Link</a> im Textfluss.
            </p>
            <h2>Echte Gerichte. Ehrliche Bilder.</h2>
            <p>
                Keine exotischen Superfoods. Sondern das, was im Kühlschrank liegt und gute Laune
                macht.
            </p>
            <ul>
                <li>Frische Zutaten</li>
                <li>Einfache Zubereitung</li>
                <li>Für jeden Tag gemacht</li>
            </ul>
            <blockquote>
                Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend.
            </blockquote>
            <figure>
                <img
                    alt="Abstract plate with pasta-like blue line and colorful garnish dots."
                    src={pastaImage}
                />
                <figcaption>
                    Pasta mit Erbsen, Zitrone und Ricotta. Schnell, einfach und voller Geschmack.
                </figcaption>
            </figure>
        </RichText>
    </article>
);

export const HeadingsExample = () => (
    <RichText>
        {[
            { level: 'h1', text: 'Kochen ohne Kulisse.' },
            { level: 'h2', text: 'Echte Gerichte. Ehrliche Bilder.' },
            { level: 'h3', text: 'Zutaten, die ich wirklich nutze' },
            { level: 'h4', text: 'Kochen ist Alltag' },
            { level: 'h5', text: 'Kleiner Titel' },
            { level: 'h6', text: 'Noch ein Titel' },
        ].map(({ level, text }) => {
            return (
                <section className={styles.headingBlock} key={level}>
                    {createElement(level, null, text)}
                    <p>Ein kurzer Absatz macht den Abstand nach der Überschrift sichtbar.</p>
                </section>
            );
        })}
    </RichText>
);

export const ParagraphsExample = () => (
    <RichText>
        <p className={styles.lead}>
            Ehrliche Rezepte, echte Zutaten und Geschichten aus meiner Küche.
        </p>
        <p>Kochen ist Alltag. Manchmal dauert es 20 Minuten, manchmal drei Stunden.</p>
        <p>Manchmal wird improvisiert, manchmal plane ich wochenlang.</p>
        <p className={styles.small}>Dies ist ein kleiner Hilfstext für ergänzende Informationen.</p>
        <p className={styles.muted}>Dieser Text ist reduziert und dient der Orientierung.</p>
        <p className={styles.metadata}>Aktualisiert am 7. Juni 2026</p>
        <p className={styles.caption}>Bild: Pasta mit Erbsen und Zitrone.</p>
    </RichText>
);

export const InlineElementsExample = () => (
    <RichText>
        <p>
            Hier ist ein <a href="#">Inline-Link</a>, ein <strong>wichtiger Text</strong>, eine{' '}
            <em>Betonung</em>, ein <mark>markierter Text</mark> und ein <code>Code-Bereich</code> in
            einem natürlichen Absatz.
        </p>
    </RichText>
);

export const BlockquoteExample = ({ long = false }: { long?: boolean }) => (
    <RichText>
        <blockquote>
            {long
                ? 'Gutes Essen braucht keine Bühne. Nur Neugier, einen freien Abend und die Bereitschaft, aus einfachen Zutaten etwas Warmes und Persönliches zu machen.'
                : 'Gutes Essen braucht keine Bühne. Nur Neugier und einen freien Abend.'}
            <cite>Aus meiner Küche</cite>
        </blockquote>
    </RichText>
);

export const CodeExample = () => (
    <RichText>
        <p>
            Verwende <code>inline-code</code> für kurze Hinweise im Text.
        </p>
        <pre>
            <code>
                {
                    'const recipe = {\n  title: "Pasta mit Erbsen",\n  time: "25 Minuten",\n  note: "Diese Zeile ist bewusst lang, damit horizontaler Overflow im Codeblock sichtbar und kontrolliert bleibt."\n};'
                }
            </code>
        </pre>
    </RichText>
);

export const ListsExample = ({
    variant = 'unordered',
}: {
    variant?: 'unordered' | 'ordered' | 'nested';
}) => (
    <RichText>
        {variant === 'ordered' ? (
            <ol>
                <li>Zutaten vorbereiten</li>
                <li>Anbraten</li>
                <li>Mit Zitronensaft abschmecken</li>
            </ol>
        ) : variant === 'nested' ? (
            <ul>
                <li>
                    Frische Zutaten
                    <ul>
                        <li>
                            Lange Zeile mit zusätzlichem Text, damit der Zeilenumbruch sichtbar
                            wird.
                        </li>
                        <li>Gute Vorbereitung</li>
                    </ul>
                </li>
                <li>Einfache Zubereitung</li>
            </ul>
        ) : (
            <ul>
                <li>Frische Zutaten</li>
                <li>Einfache Zubereitung</li>
                <li>Für jeden Tag gemacht</li>
            </ul>
        )}
    </RichText>
);

export const TableExample = () => (
    <div className={styles.tableScroll}>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Zutat</th>
                    <th>Menge</th>
                    <th>Hinweis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Olivenöl</td>
                    <td>2 EL</td>
                    <td>Zum Anbraten</td>
                </tr>
                <tr>
                    <td>Knoblauch</td>
                    <td>2 Zehen</td>
                    <td>Fein gehackt</td>
                </tr>
                <tr>
                    <td>Tomaten</td>
                    <td>400 g</td>
                    <td>Aus der Dose</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const FigureExample = ({ longCaption = false }: { longCaption?: boolean }) => (
    <figure className={styles.figure}>
        <img
            alt="Abstract plate with pasta-like blue line and colorful garnish dots."
            src={pastaImage}
        />
        <figcaption>
            {longCaption
                ? 'Pasta mit Erbsen, Zitrone und Ricotta. Ein einfaches Gericht für Tage, an denen gutes Essen nicht kompliziert sein soll.'
                : 'Pasta mit Erbsen, Zitrone und Ricotta.'}
        </figcaption>
    </figure>
);

export const MultiColumnExample = ({
    withHeading = false,
    withList = false,
}: {
    withHeading?: boolean;
    withList?: boolean;
}) => (
    <RichText className={styles.columns} columns>
        {withHeading ? <h2>Der Wochenflow</h2> : null}
        {Array.from({ length: 8 }, (_, index) => (
            <p key={index}>
                Kochen ist für mich keine Inszenierung. Es ist mein Ausgleich, mein kreativer
                Freiraum und manchmal auch einfach Lösung für die Frage: Was gibt es heute?
            </p>
        ))}
        {withList ? (
            <ul>
                <li>Frische Zutaten</li>
                <li>Einfache Zubereitung</li>
                <li>Viel Geschmack</li>
            </ul>
        ) : null}
    </RichText>
);
