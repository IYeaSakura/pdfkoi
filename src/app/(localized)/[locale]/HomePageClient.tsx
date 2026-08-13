'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, ShieldCheck, Star, Edit, FileImage, FolderOpen, Settings, Search, X } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getPopularTools } from '@/config/tools';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { type ToolCategory } from '@/types/tool';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getPreferredToolAnchorText } from '@/lib/seo/internal-linking';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
  const router = useRouter();
  const allTools = getAllTools();
  const popularTools = getPopularTools();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [localizedTools, setLocalizedTools] = useState<Record<string, { title: string; description: string }>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadSearchData = async () => {
      const [{ getToolContent }, { getAllTools: getTools }] = await Promise.all([
        import('@/config/tool-content'),
        import('@/config/tools'),
      ]);

      if (isCancelled) return;

      const contentMap: Record<string, { title: string; description: string }> = {};
      const tools = getTools();

      tools.forEach((tool) => {
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
      }
    };

    void loadSearchData();
    return () => { isCancelled = true; };
  }, [locale]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchTools(searchQuery, localizedTools);
      setSearchResults(results.slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, localizedTools]);

  const navigateToTool = useCallback((slug: string) => {
    router.push(getPublicPath(`/tools/${slug}`, locale));
  }, [locale, router]);

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      navigateToTool(searchResults[0].tool.slug);
    } else if (e.key === 'Escape') {
      setSearchQuery('');
      searchInputRef.current?.blur();
    }
  }, [searchResults, navigateToTool]);

  const features = [
    {
      icon: ShieldCheck,
      titleKey: 'home.features.privacy.title',
      descriptionKey: 'home.features.privacy.description',
    },
    {
      icon: Zap,
      titleKey: 'home.features.free.title',
      descriptionKey: 'home.features.free.description',
    },
    {
      icon: Wrench,
      titleKey: 'home.features.powerful.title',
      descriptionKey: 'home.features.powerful.description',
    },
  ];

  const categoryIcons: Record<ToolCategory, typeof Edit> = {
    'edit-annotate': Edit,
    'convert-to-pdf': FileImage,
    'convert-from-pdf': FileImage,
    'organize-manage': FolderOpen,
    'optimize-repair': Settings,
    'secure-pdf': ShieldCheck,
  };

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  const categoryOrder: ToolCategory[] = [
    'edit-annotate',
    'convert-to-pdf',
    'convert-from-pdf',
    'organize-manage',
    'optimize-repair',
    'secure-pdf',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-[hsl(var(--color-background))]"
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[hsl(var(--color-primary)/0.08)] border border-[hsl(var(--color-primary)/0.15)] text-sm font-medium text-[hsl(var(--color-primary))]">
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  {t('common.brand')}
                </div>

                <h1
                  id="hero-title"
                  className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-4"
                >
                  {t('home.hero.title')}
                </h1>

                <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-6 max-w-xl leading-relaxed">
                  {t('home.hero.description')}
                </p>

                {/* Search Box */}
                <div className="relative max-w-md mb-6">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-[hsl(var(--color-text-tertiary))]" aria-hidden="true" />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
                    placeholder={t('tools.search.placeholder')}
                    className="w-full pl-11 pr-10 py-3 text-base rounded-[var(--radius-lg)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-elevated))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-text-tertiary))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary)/0.2)] focus:border-[hsl(var(--color-primary))] transition-all"
                    aria-label="Search tools"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[hsl(var(--color-muted))] rounded-full transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4 text-[hsl(var(--color-text-tertiary))]" aria-hidden="true" />
                    </button>
                  )}

                  {isSearchFocused && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[hsl(var(--color-elevated))] border border-[hsl(var(--color-border))] rounded-[var(--radius-lg)] shadow-lg overflow-hidden z-20">
                      <ul className="py-2" role="listbox">
                        {searchResults.map((result) => {
                          const localized = localizedTools[result.tool.id];
                          const toolName = localized?.title || result.tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                          const anchorText = getPreferredToolAnchorText(locale, result.tool.id, toolName);
                          const toolDescription = localized?.description || result.tool.features.slice(0, 2).join(' • ');

                          return (
                            <li key={result.tool.id}>
                              <button
                                onClick={() => navigateToTool(result.tool.slug)}
                                className="w-full px-4 py-2.5 text-left hover:bg-[hsl(var(--color-muted))] transition-colors"
                                role="option"
                              >
                                <div className="font-medium text-sm text-[hsl(var(--color-foreground))]">{anchorText}</div>
                                <div className="text-xs text-[hsl(var(--color-muted-foreground))] truncate">{toolDescription}</div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <Link href={getPublicPath('/tools', locale)}>
                    <Button variant="primary" size="lg" className="h-10 px-5 text-base">
                      {t('home.hero.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-text-secondary))]">
                    <Lock className="h-4 w-4 text-[hsl(var(--color-success))]" aria-hidden="true" />
                    <span>{t('common.footer.privacyBadge')}</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual - Abstract PDF Grid */}
              <div className="hidden lg:block relative">
                <div className="grid grid-cols-2 gap-3">
                  <Card className="p-5 border border-[hsl(var(--color-border))/0.6] bg-[hsl(var(--color-elevated))]">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] mb-3">
                      <FileImage className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--color-foreground))]">{t('home.categories.convertToPdf')}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">DOCX, JPG, PPTX</div>
                  </Card>
                  <Card className="p-5 border border-[hsl(var(--color-border))/0.6] bg-[hsl(var(--color-elevated))] mt-6">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] mb-3">
                      <FolderOpen className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--color-foreground))]">{t('home.categories.organizeManage')}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">Merge, Split, Rotate</div>
                  </Card>
                  <Card className="p-5 border border-[hsl(var(--color-border))/0.6] bg-[hsl(var(--color-elevated))]">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] mb-3">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--color-foreground))]">{t('home.categories.optimizeRepair')}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">Compress, Repair</div>
                  </Card>
                  <Card className="p-5 border border-[hsl(var(--color-border))/0.6] bg-[hsl(var(--color-elevated))] -mt-6">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] mb-3">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--color-foreground))]">{t('home.categories.securePdf')}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">Protect, Sign</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-16 bg-[hsl(var(--color-surface))]" aria-labelledby="popular-tools-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[hsl(var(--color-primary)/0.08)] border border-[hsl(var(--color-primary)/0.15)] text-sm font-medium text-[hsl(var(--color-primary))]">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                    {t('home.popularTools.badge')}
                  </div>
                  <h2 id="popular-tools-heading" className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))]">
                    {t('home.popularTools.title')}
                  </h2>
                </div>
                <p className="text-[hsl(var(--color-text-secondary))] max-w-xl text-base">
                  {t('home.popularTools.description')}
                </p>
              </div>
              <ToolGrid
                tools={popularTools}
                locale={locale}
                className="lg:grid-cols-3"
                localizedToolContent={localizedToolContent}
              />
            </div>
          </div>
        </section>

        {/* Browser Safety Section */}
        <section className="py-14" aria-labelledby="browser-safety">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-10 border border-[hsl(var(--color-border))/0.65)]">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.browserSafety.eyebrow')}
                </p>
                <h2 id="browser-safety" className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.browserSafety.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-text-secondary))]">
                  {t('home.contentModules.browserSafety.body')}
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12" aria-label="Features">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 border border-[hsl(var(--color-border))/0.6]" hover={false}>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] mb-4 text-[hsl(var(--color-primary-600))]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Everyday Tasks Section */}
        <section className="py-14 bg-[hsl(var(--color-surface))]" aria-labelledby="everyday-tasks">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.everydayTasks.eyebrow')}
                </p>
                <h2 id="everyday-tasks" className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.everydayTasks.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-text-secondary))]">
                  {t('home.contentModules.everydayTasks.body')}
                </p>
              </div>
              <Card className="p-6 h-full bg-[hsl(var(--color-elevated))] border border-[hsl(var(--color-border))/0.7]">
                <h3 className="text-base font-semibold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.everydayTasks.cardTitle')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[hsl(var(--color-text-secondary))]">
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.merge')}</div>
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.split')}</div>
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.compress')}</div>
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.convert')}</div>
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.images')}</div>
                  <div className="rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] px-4 py-3">{t('home.contentModules.everydayTasks.items.organize')}</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="py-16" aria-labelledby="categories-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 id="categories-heading" className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                  {t('home.categoriesSection.title')}
                </h2>
                <p className="text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto text-base">
                  {t('home.categoriesSection.description', { count: allTools.length })}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryOrder.map((category) => {
                  const categoryTools = getToolsByCategory(category);
                  const Icon = categoryIcons[category];
                  const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);
                  const categoryDescription = t(`home.categoriesDescription.${categoryTranslationKeys[category]}`);

                  return (
                    <Link
                      key={category}
                      href={getPublicPath(`/tools/category/${category}`, locale)}
                      className="group"
                    >
                      <Card className="p-5 h-full border border-[hsl(var(--color-border))/0.6] hover:border-[hsl(var(--color-primary-300))] transition-all duration-[var(--motion-duration-hover)] hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] group-hover:scale-105 transition-transform duration-[var(--motion-duration-hover)]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base text-[hsl(var(--color-foreground))] mb-1 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                              {categoryName}
                            </h3>
                            <p className="text-sm text-[hsl(var(--color-text-secondary))] line-clamp-2 mb-2">
                              {categoryDescription}
                            </p>
                            <div className="flex items-center text-xs font-medium text-[hsl(var(--color-primary))]">
                              <span className="bg-[hsl(var(--color-primary-50))] px-2 py-0.5 rounded-md">
                                {t('home.categoriesSection.toolsCount', { count: categoryTools.length })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Local Processing Section */}
        <section className="py-14 bg-[hsl(var(--color-surface))]" aria-labelledby="local-processing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2 p-8 md:p-10 border border-[hsl(var(--color-border))/0.65]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.localProcessing.eyebrow')}
                </p>
                <h2 id="local-processing" className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.localProcessing.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-text-secondary))]">
                  {t('home.contentModules.localProcessing.body')}
                </p>
              </Card>
              <Card className="p-6 bg-[hsl(var(--color-elevated))] border border-[hsl(var(--color-border))/0.7]">
                <h3 className="text-base font-semibold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.localProcessing.cardTitle')}
                </h3>
                <ul className="space-y-3 text-sm text-[hsl(var(--color-text-secondary))]">
                  <li>{t('home.contentModules.localProcessing.items.contracts')}</li>
                  <li>{t('home.contentModules.localProcessing.items.resumes')}</li>
                  <li>{t('home.contentModules.localProcessing.items.invoices')}</li>
                  <li>{t('home.contentModules.localProcessing.items.scanned')}</li>
                  <li>{t('home.contentModules.localProcessing.items.id')}</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" aria-label="Statistics">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-1">
                  {allTools.length}+
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-text-secondary))] uppercase tracking-wider">
                  {t('home.stats.pdfTools')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-1">
                  100%
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-text-secondary))] uppercase tracking-wider">
                  {t('home.stats.freeToUse')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-1">
                  9
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-text-secondary))] uppercase tracking-wider">
                  {t('home.stats.languages')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-1">
                  0
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-text-secondary))] uppercase tracking-wider">
                  {t('home.stats.filesUploaded')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
