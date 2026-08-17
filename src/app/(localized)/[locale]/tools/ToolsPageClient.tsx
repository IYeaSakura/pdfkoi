'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Search, X, Filter, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { ToolCard } from '@/components/tools/ToolCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getToolById } from '@/config/tools';
import { toolMatchesQuery } from '@/lib/utils/search';
import { type Locale } from '@/lib/i18n/config';
import { CATEGORY_INFO, type ToolCategory } from '@/types/tool';
import { useFavorites } from '@/hooks/useFavorites';

type CategoryFilter = ToolCategory | 'all' | 'favorites';

interface ToolsPageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function ToolsPageClient({ locale, localizedToolContent }: ToolsPageClientProps) {
  const t = useTranslations();
  const allTools = getAllTools();
  const { favorites, isLoaded: favoritesLoaded, favoritesCount } = useFavorites();

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  // Hydrate search/filter state from the URL after the full tool list is server-rendered.
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const query = params.get('q');

    setSelectedCategory(
      category && category !== '' ? (category as CategoryFilter) : 'all'
    );
    setSearchQuery(query || '');
  }, []);
  const [showFilters, setShowFilters] = useState(false);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let tools = allTools;

    // Filter by category
    if (selectedCategory === 'favorites') {
      // Filter to only show favorite tools
      tools = favorites
        .map(id => getToolById(id))
        .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined);
    } else if (selectedCategory !== 'all') {
      tools = getToolsByCategory(selectedCategory as ToolCategory);
    }

    // Filter by search query (supports current language search)
    if (searchQuery.trim()) {
      tools = tools.filter(tool =>
        toolMatchesQuery(tool, searchQuery, localizedToolContent?.[tool.id])
      );
    }

    return tools;
  }, [allTools, selectedCategory, searchQuery, favorites]);

  // Category options
  const categories: { value: CategoryFilter; label: string; icon?: React.ReactNode }[] = [
    { value: 'all', label: t('toolsPage.allTools') },
    {
      value: 'favorites',
      label: t('tools.favorite.title'),
      icon: <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
    },
    { value: 'edit-annotate', label: t('home.categories.editAnnotate') },
    { value: 'convert-to-pdf', label: t('home.categories.convertToPdf') },
    { value: 'convert-from-pdf', label: t('home.categories.convertFromPdf') },
    { value: 'organize-manage', label: t('home.categories.organizeManage') },
    { value: 'optimize-repair', label: t('home.categories.optimizeRepair') },
    { value: 'secure-pdf', label: t('home.categories.securePdf') },
  ];

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-28 pb-16 bg-[hsl(var(--color-background))]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {t('toolsPage.title')}
              </h1>
              <p className="text-base md:text-lg text-[hsl(var(--color-text-secondary))] mb-8 leading-relaxed">
                {t('toolsPage.subtitle', { count: allTools.length })}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                    <Search className="h-5 w-5 text-[hsl(var(--color-text-tertiary))]" aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('tools.search.placeholder')}
                    className="w-full pl-12 pr-12 py-3.5 text-base rounded-[var(--radius-lg)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-elevated))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-text-tertiary))] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))] focus-visible:border-[hsl(var(--color-primary))] transition-all"
                    aria-label="Search tools"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-[hsl(var(--color-muted))] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))]"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4 text-[hsl(var(--color-text-tertiary))]" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Tools */}
        <section className="py-8 bg-[hsl(var(--color-surface))] min-h-[500px]">
          <div className="container mx-auto px-4">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 sticky top-20 z-40 py-3 px-4 rounded-[var(--radius-lg)] border border-[hsl(var(--color-border))/0.6] bg-[hsl(var(--color-background))/0.95] backdrop-blur-md shadow-sm transition-all">
              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                className="md:hidden w-full"
                onClick={() => setShowFilters(!showFilters)}
                aria-expanded={showFilters}
                aria-controls="category-filters"
              >
                <Filter className="h-4 w-4 mr-2" aria-hidden="true" />
                {t('toolsPage.filters')}
              </Button>

              {/* Category Filters */}
              <div
                className={`flex flex-wrap gap-2 ${showFilters ? 'block w-full' : 'hidden md:flex flex-1'}`}
                role="group"
                aria-label="Filter by category"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    aria-pressed={selectedCategory === cat.value}
                    className={`
                      px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))]
                      ${selectedCategory === cat.value
                        ? cat.value === 'favorites'
                          ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                          : 'bg-[hsl(var(--color-primary))] text-white'
                        : 'bg-transparent text-[hsl(var(--color-text-secondary))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))]'
                      }
                    `}
                  >
                    {cat.icon}
                    {cat.label}
                    {cat.value === 'favorites' && favoritesLoaded && (
                      <span className={`ml-0.5 text-xs ${selectedCategory === cat.value ? 'opacity-100' : 'opacity-60'}`}>
                        ({favoritesCount})
                      </span>
                    )}
                    {cat.value !== 'all' && cat.value !== 'favorites' && (
                      <span className={`ml-0.5 text-xs ${selectedCategory === cat.value ? 'opacity-100' : 'opacity-60'}`}>
                        ({getToolsByCategory(cat.value as ToolCategory).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="ml-auto text-sm text-[hsl(var(--color-text-secondary))]"
                >
                  {t('toolsPage.clearAll')}
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6 px-2">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                {selectedCategory === 'favorites'
                  ? `${filteredTools.length} ${t('tools.favorite.title').toLowerCase()}`
                  : filteredTools.length === allTools.length
                    ? t('toolsPage.showingAll', { count: allTools.length })
                    : t('toolsPage.showingFiltered', { filtered: filteredTools.length, total: allTools.length })}
                {searchQuery && ` ${t('toolsPage.forQuery', { query: searchQuery })}`}
                {selectedCategory !== 'all' && selectedCategory !== 'favorites' && ` ${t('toolsPage.inCategory', { category: t(`home.categories.${categoryTranslationKeys[selectedCategory as ToolCategory]}`) })}`}
              </p>
            </div>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              selectedCategory === 'all' && !searchQuery ? (
                // Show grouped by category when no filters
                <ToolGrid
                  tools={filteredTools}
                  locale={locale}
                  localizedToolContent={localizedToolContent}
                  showCategoryHeaders
                />
              ) : (
                // Show flat grid when filtered
                <ToolGrid
                  tools={filteredTools}
                  locale={locale}
                  localizedToolContent={localizedToolContent}
                />
              )
            ) : selectedCategory === 'favorites' ? (
              // Empty favorites state
              <Card className="p-16 text-center border-dashed border-2">
                <div className="max-w-md mx-auto flex flex-col items-center">
                  <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                    <Star className="h-10 w-10 text-amber-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                    {t('tools.favorite.empty')}
                  </h3>
                  <p className="text-[hsl(var(--color-text-secondary))] mb-8">
                    {t('tools.favorite.hint')}
                  </p>
                  <Button variant="outline" onClick={() => setSelectedCategory('all')} className="px-8">
                    {t('toolsPage.allTools')}
                  </Button>
                </div>
              </Card>
            ) : (
              // No results
              <Card className="p-16 text-center border-dashed border-2">
                <div className="max-w-md mx-auto flex flex-col items-center">
                  <div className="w-20 h-20 bg-[hsl(var(--color-muted))] rounded-full flex items-center justify-center mb-6">
                    <Search className="h-10 w-10 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                    {t('toolsPage.noToolsFound')}
                  </h3>
                  <p className="text-[hsl(var(--color-text-secondary))] mb-8">
                    {t('tools.search.noResults', { query: searchQuery })}
                  </p>
                  <Button variant="outline" onClick={handleClearFilters} className="px-8">
                    {t('toolsPage.clearFilters')}
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
