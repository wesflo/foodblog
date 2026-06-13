import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { ReactElement } from 'react';
import { ExternalLink, X, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';
import styles from './sheet.module.css';

export type SheetProps = {
    trigger: ReactElement;
};

export const Sheet = ({ trigger }: SheetProps) => (
    <BaseDialog.Root>
        <BaseDialog.Trigger render={trigger} />
        <BaseDialog.Portal>
            <BaseDialog.Backdrop className={styles.backdrop} />
            <BaseDialog.Popup className={styles.sheet}>
                <div className={styles.header}>
                    <BaseDialog.Title className={styles.title}>Menu</BaseDialog.Title>
                    <BaseDialog.Close
                        render={
                            <Button
                                aria-label="Close menu"
                                iconOnly
                                title="Close menu"
                                variant="outline"
                            >
                                <X {...iconDefaults} />
                            </Button>
                        }
                    />
                </div>
                <nav className={styles.nav} aria-label="Main menu">
                    <Link href="#" variant="arrow">
                        Rezepte
                    </Link>
                    <Link href="#" variant="arrow">
                        Kategorien
                    </Link>
                    <Link href="#" variant="arrow">
                        Kollektionen
                    </Link>
                    <Link href="#" variant="arrow">
                        Newsletter
                    </Link>
                    <Link href="#" variant="arrow">
                        Kontakt
                    </Link>
                </nav>
                <div className={styles.socials}>
                    <Button aria-label="Instagram" iconOnly title="Instagram" variant="outline">
                        <ExternalLink {...iconDefaults} />
                    </Button>
                    <Button aria-label="Pinterest" iconOnly title="Pinterest" variant="outline">
                        <ExternalLink {...iconDefaults} />
                    </Button>
                    <Button aria-label="Email" iconOnly title="Email" variant="outline">
                        <ExternalLink {...iconDefaults} />
                    </Button>
                </div>
            </BaseDialog.Popup>
        </BaseDialog.Portal>
    </BaseDialog.Root>
);
