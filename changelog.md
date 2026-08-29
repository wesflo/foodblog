# Changelog

## Ist-Stand UI-System

### Grundlage

- Aufbau eines wiederverwendbaren UI-Systems fuer `@wesflo/ui`.
- Die visuellen Referenzen aus den Screenshots wurden als Art Direction genutzt.
- Layoutfehler, inkonsistente Abstaende und generierte Platzhalter aus den Referenzen wurden nicht uebernommen.
- Ziel ist ein kohärentes, token-basiertes und zugaengliches Component-System.

### Komponenten

- Erste UI-Komponenten wurden aufgebaut und verfeinert:
  - Buttons
  - Links
  - Form Controls
  - Checkboxen
  - Radio Groups
  - Switches
  - Feedback- und Overlay-Komponenten
  - typografienahe Content-Komponenten
  - Navigation mit Menu- und Suchzustand

### Icon-Architektur

- `lucide-react` wurde als einzige Icon-Library fuer das UI-Paket festgelegt.
- Lucide wird ueber den Package-Subpath `@wesflo/ui/icons` bereitgestellt.
- Der Icon Entry Point re-exportiert Lucide vollstaendig.
- Gemeinsame Defaults fuer Icons wurden eingefuehrt:
  - dekorativ per Default
  - `aria-hidden: true`
  - `focusable: false`
  - Standardgroesse `20`
  - `strokeWidth: 1.75`
- Es gibt bewusst keine Icon Registry, keine Icon-Name-Mappings und keine dynamische Icon-Aufloesung.
- Icons werden per statischen Named Imports genutzt.

### Button-System

- Die gemeinsame `Button`-Komponente unterstuetzt Icon-only Buttons direkt ueber `iconOnly`.
- Icon-only Controls verwenden weiterhin den gemeinsamen Button-Stil.
- Accessibility Labels liegen auf dem interaktiven Element, nicht auf dem SVG.
- Ehemalige Spezialloesungen fuer Icon Buttons wurden entfernt.

### Navigation

- Die Navigation wurde als Composition ausgebaut.
- Umgesetzt bzw. verfeinert wurden:
  - geschlossener Zustand
  - Menu-Zustand
  - Such-Zustand
  - Full-width Panel
  - rechts ausgerichteter Panel-Content
  - interne Panel-Scrollbereiche
  - Close-Button-Reveal-Animation
  - kompakter Action-Zustand bei gescrolltem Panel-Inhalt
  - manuell angepasste Breakpoints und Styles
- Die Navigation verwendet fuer Search, Menu und Close die gemeinsame `Button`-Komponente mit `iconOnly`.
- Es wurden keine Navigation-spezifischen Button-Styles eingefuehrt.

### Scroll Lock

- Das Scroll-Lock-Verhalten der Navigation wurde ueberarbeitet.
- Beim Oeffnen von Menu oder Suche bleibt der Dokument-Scrollbar sichtbar und reserviert.
- Die verfuegbare Seitenbreite springt beim Oeffnen nicht.
- `body.style.overflow = 'hidden'` wird nicht verwendet.
- Die darunterliegende Seite kann im offenen Zustand nicht weitergescrollt werden:
  - nicht per Wheel
  - nicht per Touch
  - nicht per Keyboard
  - nicht per Scrollbar
- Das Navigation-Panel bleibt intern scrollbar.
- Scroll-Chaining vom Panel zur Seite wird verhindert.
- Die Scroll-Position wird beim Oeffnen gespeichert und beim Schliessen wiederhergestellt.
- Der Wechsel zwischen Menu und Suche entsperrt die Seite nicht und setzt die gespeicherte Position nicht zurueck.
- Cleanup fuer Styles, Listener und internen Zustand wurde beruecksichtigt:
  - Close
  - Escape
  - Unmount
  - Story-Wechsel
  - React StrictMode

### Storybook

- Storybook dient als Arbeits- und Pruefflaeche fuer das UI-System.
- Fuer die Navigation wurde eine Scroll-Lock-Story ergaenzt.
- Icon-Nutzung wird ueber konsumierende Komponenten demonstriert, nicht ueber eine eigene `IconButton`- oder `Icon`-Komponente.
- Button-Stories zeigen Icon-only und Icon-Varianten direkt mit der gemeinsamen `Button`-Komponente.

### Verifikation

- TypeScript fuer `@wesflo/ui` wurde erfolgreich ausgefuehrt.
- Lint fuer `@wesflo/ui` wurde erfolgreich ausgefuehrt.
- Storybook Build wurde erfolgreich ausgefuehrt.
- Die konsumierende Next.js-App wurde erfolgreich gebaut.
- Das Scroll-Lock-Verhalten wurde zusaetzlich manuell im Browser geprueft.

