import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, RefObject, UIEvent } from 'react';
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
    pageContainerRef?: RefObject<HTMLElement | null>;
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
    pageContainerRef,
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

    usePageScrollLock({
        enabled: isOpen,
        panelScrollerRef,
        targetRef: pageContainerRef,
    });

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
        if (state.view === 'search') {
            searchInputRef.current?.focus();
        }

        const scroller = panelScrollerRef.current;
        scroller?.scrollTo({ top: 0 });
        setIsContentScrolled(false);
    }, [state.view]);

    const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
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
                <div aria-hidden={!isOpen} className={styles.closeSlot}>
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
                            <div className={styles.panelHeader}>
                                <RootSections
                                    activeSectionId={state.activeSectionId}
                                    onSectionChange={selectSection}
                                    sections={safeSections}
                                />
                            </div>
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
            <TagGroups
                activeGroupId={activeGroupId ?? groups[0]?.id}
                groups={groups}
                onGroupChange={onGroupChange}
            />
            <TagLinks group={activeGroup} />
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
    const hasLinks = Boolean(section.links?.length);
    const layout = !hasLinks ? 'teaser-only' : (section.teaserLayout ?? 'small');
    const featuredItems =
        layout === 'large'
            ? section.featuredItems.slice(0, MAX_LARGE_TEASERS)
            : constrainFeaturedItems(section.featuredItems);
    return (
        <div className={styles.teaserSection} data-layout={layout}>
            <FeaturedTeasers items={featuredItems} layout={layout} />
            {hasLinks ? (
                <nav className={styles.sectionLinks} aria-label={`${section.label} links`}>
                    {section.links!.map((link) => (
                        <a className={styles.sectionLink} href={link.href} key={link.href}>
                            <span>{link.label}</span>
                            <ArrowRight {...iconDefaults} size={16} />
                        </a>
                    ))}
                </nav>
            ) : null}
        </div>
    );
};

const FeaturedTeasers = ({
    items,
    layout,
}: {
    items: NavigationPreviewItem[];
    layout: 'navigation' | 'large' | 'small' | 'teaser-only';
}) => (
    <div className={styles.featuredTeasers} data-layout={layout}>
        {items.map((item) => (
            <Teaser
                headline={item.headline}
                href={item.href}
                image={item.image}
                key={item.id}
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
    </div>
);

const constrainGroups = (groups: NavigationTagGroup[]) => groups.slice(0, MAX_GROUPS);

const constrainLinks = (links: NavigationLinkItem[]) => links.slice(0, MAX_LINKS);

const constrainFeaturedItems = (items: NavigationPreviewItem[] | undefined) =>
    items?.slice(0, MAX_FEATURED) ?? [];

const usePageScrollLock = ({
    enabled,
    panelScrollerRef,
    targetRef,
}: {
    enabled: boolean;
    panelScrollerRef: RefObject<HTMLElement | null>;
    targetRef: RefObject<HTMLElement | null> | undefined;
}) => {
    const lockStateRef = useRef<{
        scrollY: number;
        target: HTMLElement;
        targetStyles: Pick<
            CSSStyleDeclaration,
            'left' | 'maxHeight' | 'overflow' | 'position' | 'right' | 'top' | 'width'
        >;
        bodyMinHeight: string;
        htmlOverflowY: string;
    } | null>(null);
    const previousTouchYRef = useRef<number | null>(null);

    useEffect(() => {
        if (!enabled || !targetRef?.current) return;

        const target = targetRef.current;
        const scrollY = window.scrollY;
        const targetStyles = {
            left: target.style.left,
            maxHeight: target.style.maxHeight,
            overflow: target.style.overflow,
            position: target.style.position,
            right: target.style.right,
            top: target.style.top,
            width: target.style.width,
        };
        const bodyMinHeight = document.body.style.minHeight;
        const htmlOverflowY = document.documentElement.style.overflowY;

        lockStateRef.current = {
            scrollY,
            target,
            targetStyles,
            bodyMinHeight,
            htmlOverflowY,
        };

        document.documentElement.style.overflowY = 'scroll';
        document.body.style.minHeight = `${document.body.scrollHeight}px`;
        target.style.position = 'fixed';
        target.style.top = `-${scrollY}px`;
        target.style.left = '0';
        target.style.right = '0';
        target.style.width = '100%';
        target.style.overflow = 'hidden';
        target.style.maxHeight = 'none';

        const isInsidePanelScroller = (eventTarget: EventTarget | null) =>
            eventTarget instanceof Node && panelScrollerRef.current?.contains(eventTarget);

        const canScrollPanel = (deltaY: number) => {
            const scroller = panelScrollerRef.current;
            if (!scroller) return false;

            const maxScrollTop = scroller.scrollHeight - scroller.clientHeight;
            if (maxScrollTop <= 0) return false;
            if (deltaY < 0) return scroller.scrollTop > 0;
            if (deltaY > 0) return scroller.scrollTop < maxScrollTop;

            return true;
        };

        const preventIfPageScroll = (event: WheelEvent) => {
            if (isInsidePanelScroller(event.target) && canScrollPanel(event.deltaY)) return;

            event.preventDefault();
        };

        const preventTouchScroll = (event: TouchEvent) => {
            const touch = event.touches[0];
            if (!touch) return;

            const previousTouchY = previousTouchYRef.current;
            previousTouchYRef.current = touch.clientY;
            if (previousTouchY === null) {
                event.preventDefault();
                return;
            }

            const deltaY = previousTouchY - touch.clientY;
            if (isInsidePanelScroller(event.target) && canScrollPanel(deltaY)) return;

            event.preventDefault();
        };

        const resetTouchPosition = () => {
            previousTouchYRef.current = null;
        };

        const preventScrollKeys = (event: KeyboardEvent) => {
            const scrollKeys = new Set([
                ' ',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight',
                'ArrowUp',
                'End',
                'Home',
                'PageDown',
                'PageUp',
            ]);
            if (!scrollKeys.has(event.key)) return;
            if (isInsidePanelScroller(event.target)) return;

            event.preventDefault();
        };

        const restoreScrollbarDrag = () => {
            if (window.scrollY === scrollY) return;

            window.scrollTo(0, scrollY);
        };

        window.addEventListener('wheel', preventIfPageScroll, { passive: false, capture: true });
        window.addEventListener('touchmove', preventTouchScroll, { passive: false, capture: true });
        window.addEventListener('touchend', resetTouchPosition, { passive: true });
        window.addEventListener('touchcancel', resetTouchPosition, { passive: true });
        window.addEventListener('keydown', preventScrollKeys, { capture: true });
        window.addEventListener('scroll', restoreScrollbarDrag, { passive: true });

        return () => {
            const lockState = lockStateRef.current;
            if (!lockState) return;

            window.removeEventListener('wheel', preventIfPageScroll, { capture: true });
            window.removeEventListener('touchmove', preventTouchScroll, { capture: true });
            window.removeEventListener('touchend', resetTouchPosition);
            window.removeEventListener('touchcancel', resetTouchPosition);
            window.removeEventListener('keydown', preventScrollKeys, { capture: true });
            window.removeEventListener('scroll', restoreScrollbarDrag);

            lockState.target.style.position = lockState.targetStyles.position;
            lockState.target.style.top = lockState.targetStyles.top;
            lockState.target.style.left = lockState.targetStyles.left;
            lockState.target.style.right = lockState.targetStyles.right;
            lockState.target.style.width = lockState.targetStyles.width;
            lockState.target.style.overflow = lockState.targetStyles.overflow;
            lockState.target.style.maxHeight = lockState.targetStyles.maxHeight;
            document.body.style.minHeight = lockState.bodyMinHeight;
            document.documentElement.style.overflowY = lockState.htmlOverflowY;
            window.scrollTo(0, lockState.scrollY);
            lockStateRef.current = null;
            previousTouchYRef.current = null;
        };
    }, [enabled, panelScrollerRef, targetRef]);
};
