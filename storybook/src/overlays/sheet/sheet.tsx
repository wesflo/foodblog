import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { ReactElement } from 'react';
import { ExternalLink, X, iconDefaults } from '@wesflo/ui/icons';

import { IconButton } from '../../components/icon-button/icon-button';
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
                            <IconButton
                                icon={<X {...iconDefaults} />}
                                label="Close menu"
                                variant="outline"
                            />
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
                    <IconButton
                        icon={<ExternalLink {...iconDefaults} />}
                        label="Instagram"
                        variant="outline"
                    />
                    <IconButton
                        icon={<ExternalLink {...iconDefaults} />}
                        label="Pinterest"
                        variant="outline"
                    />
                    <IconButton
                        icon={<ExternalLink {...iconDefaults} />}
                        label="Email"
                        variant="outline"
                    />
                </div>
            </BaseDialog.Popup>
        </BaseDialog.Portal>
    </BaseDialog.Root>
);
