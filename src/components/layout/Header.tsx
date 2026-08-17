'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, Menu, X, Edit, FileImage, FolderOpen, Settings, ShieldCheck } from 'lucide-react';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { RecentFilesDropdown } from '@/components/common/RecentFilesDropdown';
import { LanguageSelector } from './LanguageSelector';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getPreferredToolAnchorText } from '@/lib/seo/internal-linking';
import { ToolCategory } from '@/types/tool';

export interface HeaderProps {
  locale: Locale;
  showSearch?: boolean;
}

interface HeaderNavItem {
  href: string;
  label: string;
}

const categoryIcons: Record<ToolCategory, typeof Edit> = {
  'edit-annotate': Edit,
  'convert-to-pdf': FileImage,
  'convert-from-pdf': FileImage,
  'organize-manage': FolderOpen,
  'optimize-repair': Settings,
  'secure-pdf': ShieldCheck,
};

export const Header: React.FC<HeaderProps> = ({ locale, showSearch = true }) => {
  const t = useTranslations('common');
  const router = useRouter();
  const homePath = getPublicPath('/', locale);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localizedTools, setLocalizedTools] = useState<Record<string, { title: string; description: string }>>({});
  const [hasLoadedSearchData, setHasLoadedSearchData] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Load localized search content only when search is first opened.
  useEffect(() => {
    if (!isSearchOpen || hasLoadedSearchData) {
      return;
    }

    let isCancelled = false;

    const loadSearchData = async () => {
      const [{ getToolContent }, { getAllTools }] = await Promise.all([
        import('@/config/tool-content'),
        import('@/config/tools'),
      ]);

      if (isCancelled) {
        return;
      }

      const contentMap: Record<string, { title: string; description: string }> = {};
      const allTools = getAllTools();

      allTools.forEach((tool) => {
        const content = getToolContent(locale, tool.id);
        if (content) {
          contentMap[tool.id] = {
            title: content.title,
            description: content.metaDescription,
          };
        }
      });

      if (!isCancelled) {
        setLocalizedTools(contentMap);
        setHasLoadedSearchData(true);
      }
    };

    void loadSearchData();

    return () => {
      isCancelled = true;
    };
  }, [hasLoadedSearchData, isSearchOpen, locale]);

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchTools(searchQuery, localizedTools);
      setSearchResults(results.slice(0, 8));
      setSelectedIndex(-1);
    } else {
      setSearchResults([]);
      setSelectedIndex(-1);
    }
  }, [searchQuery, localizedTools]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSearchOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        navigateToTool(searchResults[selectedIndex].tool.slug);
      } else if (searchResults.length > 0) {
        navigateToTool(searchResults[0].tool.slug);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [searchResults, selectedIndex]);

  const navigateToTool = useCallback((slug: string) => {
    router.push(getPublicPath(`/tools/${slug}`, locale));
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, [locale, router]);

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const navItems: HeaderNavItem[] = [
    { href: homePath, label: t('navigation.home') },
    { href: getPublicPath('/tools', locale), label: t('navigation.tools') },
    { href: getPublicPath('/workflow', locale), label: t('navigation.workflow') || 'Workflow' },
    { href: getPublicPath('/about', locale), label: t('navigation.about') },
    { href: getPublicPath('/faq', locale), label: t('navigation.faq') },
  ];

  return (
    <>
      <header
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl"
        role="banner"
      >
        <div
          className="flex h-11 items-center justify-between gap-2 rounded-full border border-[hsl(var(--color-border))/0.5] bg-[hsl(var(--color-background))/0.85] px-2 backdrop-blur-md shadow-sm"
        >
          {/* Logo */}
          <Link
            href={homePath}
            className="flex items-center gap-2 pl-2 pr-3 text-sm font-semibold text-[hsl(var(--color-foreground))] hover:opacity-80 transition-opacity"
            aria-label={`${t('brand')} - ${t('navigation.home')}`}
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
              priority
            />
            <span className="hidden sm:inline tracking-tight" data-testid="brand-name">
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors duration-[var(--motion-duration-hover)] ease-[var(--ease-standard)] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-0.5">
            {/* Search */}
            {showSearch && (
              <div className="relative" ref={searchContainerRef}>
                {isSearchOpen ? (
                  <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-full mt-3 md:-top-1.5 md:mt-0 z-50 md:origin-right animate-in fade-in slide-in-from-right-4 duration-200">
                    <div className="relative w-full md:w-80 h-9">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Search className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
                      </div>
                      <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={t('search.placeholder') || 'Search tools...'}
                        className="w-full h-full pl-9 pr-9 py-0 text-sm rounded-full border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))]"
                        aria-label="Search tools"
                        autoComplete="off"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSearchToggle}
                        aria-label="Close search"
                        className="absolute right-0.5 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                      >
                        <X className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                      </Button>

                      {/* Search Results Dropdown */}
                      {searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[hsl(var(--color-background))] border border-[hsl(var(--color-border))] rounded-[var(--radius-lg)] shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[60vh] overflow-y-auto">
                          <ul className="py-2" role="listbox">
                            {searchResults.map((result, index) => {
                              const localized = localizedTools[result.tool.id];
                              const toolName = localized?.title || result.tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                              const anchorText = getPreferredToolAnchorText(locale, result.tool.id, toolName);
                              const toolDescription = localized?.description || result.tool.features.slice(0, 3).join(' • ');
                              const CategoryIcon = categoryIcons[result.tool.category];

                              return (
                                <li key={result.tool.id}>
                                  <button
                                    onClick={() => navigateToTool(result.tool.slug)}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    className={`
                                      w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--color-ring))]
                                      ${index === selectedIndex
                                        ? 'bg-[hsl(var(--color-primary))/0.1] text-[hsl(var(--color-primary))]'
                                        : 'hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))]'
                                      }
                                    `}
                                    role="option"
                                    aria-selected={index === selectedIndex}
                                  >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center text-[hsl(var(--color-primary))]">
                                      <CategoryIcon className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-sm truncate">
                                        {anchorText}
                                      </div>
                                      <div className="text-xs text-[hsl(var(--color-muted-foreground))] truncate">
                                        {toolDescription}
                                      </div>
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSearchToggle}
                    aria-label="Open search"
                    className="h-8 w-8 p-0 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]"
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
            )}

            {/* Recent Files Dropdown */}
            <RecentFilesDropdown
              locale={locale}
              translations={{
                title: t('recentFiles.title') || 'Recent Files',
                empty: t('recentFiles.empty') || 'No recent files',
                clearAll: t('recentFiles.clearAll') || 'Clear all',
                processedWith: t('recentFiles.processedWith') || 'Processed with',
              }}
            />

            {/* Language Selector */}
            <LanguageSelector currentLocale={locale} />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-2 py-2 px-2 border border-[hsl(var(--color-border))/0.5] rounded-[var(--radius-lg)] bg-[hsl(var(--color-background))/0.95] backdrop-blur-xl shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under the floating header */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

export default Header;
