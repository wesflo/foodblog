import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent, RefObject, UIEvent } from 'react';
import { ArrowRight, Menu, Search, X, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Teaser } from '../teaser/teaser';
import { classNames } from '../../utilities/class-names';
import styles from './navigation.module.css';

export type NavigationPreviewImageSource = {
    srcSet: string;
    media?: string;
    type?: string;
};

export type NavigationPreviewItem = {
    id: string;
    eyebrow?: string;
    headline: string;
    description?: string;
    href: string;
    image: {
        src: string;
        alt: string;
        sources?: NavigationPreviewImageSource[];
    };
};

export type NavigationLinkItem = {
    label: string;
    href: string;
};

export type NavigationSectionMode = 'navigation' | 'teasers';

export type NavigationTagGroup = {
    id: string;
    label: string;
    links: NavigationLinkItem[];
};

export type NavigationGroup = NavigationTagGroup;

export type NavigationNavigationSection = {
    id: string;
    label: string;
    href?: string;
    mode: 'navigation';
    groups: NavigationTagGroup[];
    featuredItems?: NavigationPreviewItem[];
};

export type TeaserNavigationSection = {
    id: string;
    label: string;
    href?: string;
    mode: 'teasers';
    links?: NavigationLinkItem[];
    featuredItems: NavigationPreviewItem[];
    teaserLayout?: 'large' | 'small';
};

export type NavigationSection = NavigationNavigationSection | TeaserNavigationSection;

export type NavigationView = 'closed' | 'menu' | 'search';

export type NavigationState = {
    view: NavigationView;
    activeSectionId: string;
    activeGroupId: string | undefined;
};

export type NavigationProps = {
    sections: NavigationSection[];
    searchLabel?: string;
    menuLabel?: string;
    closeLabel?: string;
    searchPlaceholder?: string;
    defaultOpen?: boolean;
    defaultSectionId?: string;
    defaultGroupId?: string;
    defaultView?: NavigationView;
    className?: string;
};

const MAX_GROUPS = 4;
const MAX_LINKS = 6;
const MAX_FEATURED = 4;
const MAX_LARGE_TEASERS = 2;

export const Navigation = ({
    sections,
    searchLabel = 'Search',
    menuLabel = 'Menu',
    closeLabel = 'Close',
    searchPlaceholder = 'Search recipes and stories...',
    defaultOpen = false,
    defaultSectionId,
    defaultGroupId,
    defaultView,
    className,
}: NavigationProps) => {
    const safeSections = useMemo(() => sections, [sections]);
    const initialSectionId = defaultSectionId ?? safeSections[0]?.id ?? '';
    const initialSection = safeSections.find((section) => section.id === initialSectionId);
    const initialGroupId =
        defaultGroupId ??
        (initialSection?.mode === 'navigation' ? initialSection.groups[0]?.id : undefined);
    const initialView = defaultView ?? (defaultOpen ? 'menu' : 'closed');
    const [state, setState] = useState<NavigationState>({
        view: initialView,
        activeSectionId: initialSectionId,
        activeGroupId: initialGroupId,
    });
    const [isContentScrolled, setIsContentScrolled] = useState(false);
    const searchButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const openerRef = useRef<HTMLButtonElement | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const panelScrollerRef = useRef<HTMLDivElement>(null);
    const isOpen = state.view !== 'closed';
    const actionSize = isContentScrolled ? 'small' : 'medium';

    const activeSection =
        safeSections.find((section) => section.id === state.activeSectionId) ?? safeSections[0];
    const activeGroups =
        activeSection?.mode === 'navigation' ? constrainGroups(activeSection.groups) : [];
    const activeGroup =
        activeGroups.find((group) => group.id === state.activeGroupId) ?? activeGroups[0];

    const openMenu = () => {
        if (state.view === 'closed') {
            openerRef.current = menuButtonRef.current;
        }

        setState((current) => ({ ...current, view: 'menu' }));
    };

    const openSearch = () => {
        if (state.view === 'closed') {
            openerRef.current = searchButtonRef.current;
        }

        setState((current) => ({ ...current, view: 'search' }));
    };

    const closePanel = () => {
        setState((current) => ({ ...current, view: 'closed' }));

        window.requestAnimationFrame(() => {
            if (openerRef.current?.isConnected) {
                openerRef.current.focus();
            }
        });
    };

    const selectSection = (section: NavigationSection) => {
        const nextGroupId = section.mode === 'navigation' ? section.groups[0]?.id : undefined;

        setState((current) => ({
            ...current,
            activeSectionId: section.id,
            activeGroupId: nextGroupId,
        }));
    };

    const selectGroup = (groupId: string) => {
        setState((current) => ({ ...current, activeGroupId: groupId }));
    };

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    useEffect(() => {
        if (state.view === 'search') {
            searchInputRef.current?.focus();
        }
    }, [state.view]);

    useEffect(() => {
        const scroller = panelScrollerRef.current;
        scroller?.scrollTo({ top: 0 });
        setIsContentScrolled(false);
    }, [state.view]);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Escape' || state.view === 'closed') return;

        closePanel();
    };

    const handlePanelScroll = (event: UIEvent<HTMLDivElement>) => {
        const nextIsScrolled = event.currentTarget.scrollTop > 2;

        setIsContentScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
    };

    return (
        <div
            className={classNames(styles.root, className)}
            data-open={String(isOpen)}
            data-view={state.view}
            onKeyDown={handleKeyDown}
        >
            <div className={styles.actions} data-scrolled={String(isContentScrolled)}>
                <Button
                    aria-label={searchLabel}
                    aria-pressed={state.view === 'search'}
                    iconOnly
                    onClick={openSearch}
                    ref={searchButtonRef}
                    size={actionSize}
                    title={searchLabel}
                    variant="secondary"
                >
                    <Search {...iconDefaults} />
                </Button>
                <Button
                    aria-label={menuLabel}
                    aria-pressed={state.view === 'menu'}
                    iconOnly
                    onClick={openMenu}
                    ref={menuButtonRef}
                    size={actionSize}
                    title={menuLabel}
                    variant="secondary"
                >
                    <Menu {...iconDefaults} />
                </Button>
                <div
                    aria-hidden={!isOpen}
                    className={styles.closeSlot}
                    data-visible={String(isOpen)}
                    inert={!isOpen ? true : undefined}
                >
                    <Button
                        aria-label={closeLabel}
                        iconOnly
                        onClick={closePanel}
                        size={actionSize}
                        tabIndex={isOpen ? 0 : -1}
                        title={closeLabel}
                        variant="secondary"
                    >
                        <X {...iconDefaults} />
                    </Button>
                </div>
            </div>
            <aside
                aria-hidden={!isOpen}
                aria-label="Site navigation"
                className={styles.panel}
                data-open={String(isOpen)}
            >
                <div className={styles.panelInner}>
                    <div className={styles.panelHeader}>
                        <RootSections
                            activeSectionId={state.activeSectionId}
                            onSectionChange={selectSection}
                            sections={safeSections}
                        />
                    </div>
                    <div
                        className={styles.panelScroller}
                        onScroll={handlePanelScroll}
                        ref={panelScrollerRef}
                    >
                        <div
                            aria-hidden={state.view !== 'menu'}
                            className={styles.view}
                            data-active={String(state.view === 'menu')}
                            inert={state.view !== 'menu' ? true : undefined}
                        >
                            <NavigationContent
                                activeGroup={activeGroup}
                                activeGroupId={state.activeGroupId}
                                activeSection={activeSection}
                                onGroupChange={selectGroup}
                            />
                        </div>
                        <div
                            aria-hidden={state.view !== 'search'}
                            className={styles.view}
                            data-active={String(state.view === 'search')}
                            inert={state.view !== 'search' ? true : undefined}
                        >
                            <SearchContent
                                inputRef={searchInputRef}
                                searchPlaceholder={searchPlaceholder}
                            />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

const RootSections = ({
    sections,
    activeSectionId,
    onSectionChange,
}: {
    sections: NavigationSection[];
    activeSectionId: string;
    onSectionChange: (section: NavigationSection) => void;
}) => (
    <nav className={styles.rootNav} aria-label="Main sections">
        {sections.map((section) => (
            <a
                aria-current={section.id === activeSectionId ? 'page' : undefined}
                className={styles.rootLink}
                href={section.href ?? '#'}
                key={section.id}
                onClick={(event) => {
                    if (!section.href || section.href.startsWith('#')) event.preventDefault();
                    onSectionChange(section);
                }}
            >
                {section.label}
            </a>
        ))}
    </nav>
);

const NavigationContent = ({
    activeSection,
    activeGroup,
    activeGroupId,
    onGroupChange,
}: {
    activeSection: NavigationSection | undefined;
    activeGroup: NavigationTagGroup | undefined;
    activeGroupId: string | undefined;
    onGroupChange: (groupId: string) => void;
}) => {
    if (!activeSection) return null;

    if (activeSection.mode === 'teasers') {
        return <TeaserSection section={activeSection} />;
    }

    const groups = constrainGroups(activeSection.groups);

    return (
        <div className={styles.navigationContent}>
            <FeaturedTeasers
                items={constrainFeaturedItems(activeSection.featuredItems)}
                layout="navigation"
            />
            <TagLinks group={activeGroup} />
            <TagGroups
                activeGroupId={activeGroupId ?? groups[0]?.id}
                groups={groups}
                onGroupChange={onGroupChange}
            />
        </div>
    );
};

const TagGroups = ({
    groups,
    activeGroupId,
    onGroupChange,
}: {
    groups: NavigationTagGroup[];
    activeGroupId: string | undefined;
    onGroupChange: (groupId: string) => void;
}) => (
    <section className={styles.tagGroups} aria-label="Recipe tag groups">
        <p className={styles.eyebrow}>Browse by</p>
        <div className={styles.tagGroupList}>
            {groups.map((group) => (
                <button
                    aria-pressed={group.id === activeGroupId}
                    className={styles.tagGroupButton}
                    key={group.id}
                    onClick={() => onGroupChange(group.id)}
                    type="button"
                >
                    <span>{group.label}</span>
                    <ArrowRight {...iconDefaults} size={16} />
                </button>
            ))}
        </div>
    </section>
);

const TagLinks = ({ group }: { group: NavigationTagGroup | undefined }) => (
    <section className={styles.tagLinks} aria-label={group ? group.label : 'Links'}>
        <p className={styles.eyebrow}>{group?.label ?? 'Links'}</p>
        <ul className={styles.linkList}>
            {constrainLinks(group?.links ?? []).map((link) => (
                <li key={link.href}>
                    <a className={styles.navLink} href={link.href}>
                        <span>{link.label}</span>
                        <ArrowRight {...iconDefaults} size={16} />
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

const TeaserSection = ({ section }: { section: TeaserNavigationSection }) => {
    const layout = section.teaserLayout ?? 'small';
    const featuredItems =
        layout === 'large'
            ? section.featuredItems.slice(0, MAX_LARGE_TEASERS)
            : constrainFeaturedItems(section.featuredItems);

    return (
        <div className={styles.teaserSection} data-layout={layout}>
            {section.links?.length ? (
                <nav className={styles.sectionLinks} aria-label={`${section.label} links`}>
                    {section.links.map((link) => (
                        <a className={styles.sectionLink} href={link.href} key={link.href}>
                            <span>{link.label}</span>
                            <ArrowRight {...iconDefaults} size={16} />
                        </a>
                    ))}
                </nav>
            ) : null}
            <FeaturedTeasers items={featuredItems} layout={layout} />
        </div>
    );
};

const FeaturedTeasers = ({
    items,
    layout,
}: {
    items: NavigationPreviewItem[];
    layout: 'navigation' | 'large' | 'small';
}) => (
    <div className={styles.featuredTeasers} data-layout={layout}>
        {items.map((item) => (
            <Teaser
                headline={item.headline}
                href={item.href}
                image={item.image}
                key={item.id}
                variant="side-by-side-left"
                {...(styles.featuredTeaser ? { className: styles.featuredTeaser } : {})}
                {...(item.description ? { description: item.description } : {})}
                {...(item.eyebrow ? { eyebrow: item.eyebrow } : {})}
            />
        ))}
    </div>
);

const SearchContent = ({
    inputRef,
    searchPlaceholder,
}: {
    inputRef: RefObject<HTMLInputElement | null>;
    searchPlaceholder: string;
}) => (
    <div className={styles.searchContent}>
        <Input
            label="Search"
            leadingIcon={<Search {...iconDefaults} size={16} />}
            placeholder={searchPlaceholder}
            ref={inputRef}
            type="search"
        />
        <div aria-live="polite" className={styles.resultsRegion} tabIndex={-1}>
            <p>Suggestions and results will appear here.</p>
        </div>
    </div>
);

const constrainGroups = (groups: NavigationTagGroup[]) => groups.slice(0, MAX_GROUPS);

const constrainLinks = (links: NavigationLinkItem[]) => links.slice(0, MAX_LINKS);

const constrainFeaturedItems = (items: NavigationPreviewItem[] | undefined) =>
    items?.slice(0, MAX_FEATURED) ?? [];
