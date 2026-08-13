'use client';

import { useTranslations } from 'next-intl';
import { Tool, ToolContent, HowToStep, UseCase, FAQ, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { getToolById } from '@/config/tools';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { getToolIcon } from '@/config/icons';
import { getPreferredToolAnchorText } from '@/lib/seo/internal-linking';
import { normalizeInternalHtmlLinks } from '@/lib/seo/normalize-internal-links';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export interface ToolPageProps {
  /** Tool data */
  tool: Tool;
  /** Tool content for SEO and documentation */
  content: ToolContent;
  /** Current locale */
  locale: string;
  /** Children for the tool interface area */
  children?: React.ReactNode;
  /** Localized content for related tools */
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
}

type SectionLinkKey = 'howTo' | 'useCases' | 'faq';

const coreSectionLinkMap: Partial<Record<string, Record<SectionLinkKey, string[]>>> = {
  'merge-pdf': {
    howTo: ['compress-pdf', 'pdf-to-docx'],
    useCases: ['split-pdf', 'compress-pdf'],
    faq: ['jpg-to-pdf', 'pdf-to-docx'],
  },
  'split-pdf': {
    howTo: ['merge-pdf', 'pdf-to-jpg'],
    useCases: ['compress-pdf', 'merge-pdf'],
    faq: ['pdf-to-jpg', 'compress-pdf'],
  },
  'compress-pdf': {
    howTo: ['merge-pdf', 'pdf-to-docx'],
    useCases: ['split-pdf', 'jpg-to-pdf'],
    faq: ['pdf-to-docx', 'merge-pdf'],
  },
  'jpg-to-pdf': {
    howTo: ['compress-pdf', 'merge-pdf'],
    useCases: ['pdf-to-jpg', 'compress-pdf'],
    faq: ['merge-pdf', 'pdf-to-jpg'],
  },
  'pdf-to-jpg': {
    howTo: ['jpg-to-pdf', 'pdf-to-docx'],
    useCases: ['compress-pdf', 'jpg-to-pdf'],
    faq: ['pdf-to-docx', 'compress-pdf'],
  },
  'pdf-to-docx': {
    howTo: ['compress-pdf', 'merge-pdf'],
    useCases: ['pdf-to-jpg', 'compress-pdf'],
    faq: ['merge-pdf', 'pdf-to-jpg'],
  },
};

const sectionLinkPrefixByLocale: Record<Locale, Record<SectionLinkKey, string>> = {
  en: {
    howTo: 'Common next step after this:',
    useCases: 'Often paired with:',
    faq: 'Related tools:',
  },
  zh: {
    howTo: '做完这一步后，常见下一步是：',
    useCases: '这类场景也常会搭配：',
    faq: '相关工具：',
  },
  'zh-TW': {
    howTo: '完成這一步後，常見下一步是：',
    useCases: '這類情境也常會搭配：',
    faq: '相關工具：',
  },
  de: {
    howTo: 'Häufiger nächster Schritt danach:',
    useCases: 'Wird oft kombiniert mit:',
    faq: 'Verwandte Tools:',
  },
  es: {
    howTo: 'Siguiente paso habitual después de esto:',
    useCases: 'Suele combinarse con:',
    faq: 'Herramientas relacionadas:',
  },
  fr: {
    howTo: 'Étape suivante fréquente après cela :',
    useCases: 'Souvent associé à :',
    faq: 'Outils liés :',
  },
  ja: {
    howTo: 'この後によく続けて使うツール：',
    useCases: 'この用途で一緒によく使われるツール：',
    faq: '関連ツール：',
  },
  ko: {
    howTo: '이 다음 단계로 자주 이어지는 도구:',
    useCases: '이런 용도에서 자주 함께 쓰는 도구:',
    faq: '관련 도구:',
  },
  pt: {
    howTo: 'Próximo passo comum depois disso:',
    useCases: 'Costuma ser usado junto com:',
    faq: 'Ferramentas relacionadas:',
  },
};

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolPage layout component provides the structure for individual tool pages.
 * Includes tool interface, description, how-to, use cases, FAQ, and related tools.
 */
export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  // Get related tools data
  const relatedTools = tool.relatedTools
    .map(id => getToolById(id))
    .filter((t): t is Tool => t !== undefined);

  const t = useTranslations();
  const homePath = getPublicPath('/', locale as Locale);

  // Get tool display name
  const toolDisplayName = content.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]" data-testid="tool-page">
        <Header locale={locale as Locale} />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-sm text-[hsl(var(--color-muted-foreground))] animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
              <Link
                href={homePath}
                className="flex items-center hover:text-[hsl(var(--color-primary))] transition-colors"
                title={t('common.navigation.home')}
              >
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <Link
                href={getPublicPath('/tools', locale as Locale)}
                className="hover:text-[hsl(var(--color-primary))] transition-colors"
              >
                {t('common.navigation.tools')}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <Link
                href={getPublicPath(`/tools/category/${tool.category}`, locale as Locale)}
                className="hover:text-[hsl(var(--color-primary))] transition-colors"
              >
                {t(`home.categories.${categoryTranslationKeys[tool.category]}`)}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <span className="font-medium text-[hsl(var(--color-foreground))] truncate max-w-[200px] sm:max-w-md" aria-current="page">
                {content.title || toolDisplayName}
              </span>
            </nav>

            {/* Tool Header */}
            <ToolHeader tool={tool} content={content} />

            {/* Tool Interface Area */}
            <Card
              className="mt-6 p-4 sm:p-6 border border-[hsl(var(--color-border))/0.7]"
              data-testid="tool-page-interface"
            >
              {children}
            </Card>

            {/* Description Section */}
            <DescriptionSection description={content.description} />

            {/* How to Use Section */}
            <HowToUseSection steps={content.howToUse} tool={tool} locale={locale} localizedRelatedTools={localizedRelatedTools} />

            {/* Use Cases Section */}
            <UseCasesSection useCases={content.useCases} tool={tool} locale={locale} localizedRelatedTools={localizedRelatedTools} />

            {/* FAQ Section */}
            <FAQSection faq={content.faq} tool={tool} locale={locale} localizedRelatedTools={localizedRelatedTools} />

            {/* Related Tools Section */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale}
              localizedRelatedTools={localizedRelatedTools}
            />
          </div>
        </main>

        <Footer locale={locale as Locale} />
      </div>
    </ToolProvider>
  );
}

/**
 * Tool header with icon, name, and brief description
 */
interface ToolHeaderProps {
  tool: Tool;
  content: ToolContent;
}

function ToolHeader({ tool, content }: ToolHeaderProps) {
  const toolName = tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const IconComponent = getToolIcon(tool.icon);

  return (
    <header className="text-center" data-testid="tool-page-header" itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="applicationCategory" content="UtilitiesApplication" />
      <meta itemProp="operatingSystem" content="Web Browser" />
      <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" content="" />
      <meta itemProp="price" content="0" />
      <meta itemProp="priceCurrency" content="USD" />
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-lg)] bg-[hsl(var(--color-primary-50))] mb-4"
        aria-hidden="true"
      >
        <IconComponent className="w-7 h-7 text-[hsl(var(--color-primary-600))]" />
      </div>
      <h1
        className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-2"
        data-testid="tool-page-title"
        itemProp="name"
      >
        {content.title || toolName}
      </h1>
      <p
        className="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto leading-relaxed mb-4"
        data-testid="tool-page-subtitle"
        itemProp="description"
      >
        {content.metaDescription}
      </p>
      <div className="flex items-center justify-center">
        <FavoriteButton toolId={tool.id} size="lg" showLabel />
      </div>
    </header>
  );
}

/**
 * Description section with detailed tool information
 */
interface DescriptionSectionProps {
  description: string;
}

function DescriptionSection({ description }: DescriptionSectionProps) {
  const t = useTranslations();
  if (!description) return null;
  const normalizedDescription = normalizeInternalHtmlLinks(description);

  return (
    <section
      className="mt-10"
      data-testid="tool-page-description"
      aria-labelledby="description-heading"
    >
      <h2
        id="description-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.about')}
      </h2>
      <Card variant="outlined" size="lg">
        <div
          className="prose prose-sm max-w-none text-[hsl(var(--color-foreground))/0.8]"
          dangerouslySetInnerHTML={{ __html: normalizedDescription }}
        />
      </Card>
    </section>
  );
}

/**
 * How to use section with numbered steps
 */
interface HowToUseSectionProps {
  steps: HowToStep[];
  tool: Tool;
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
}

function HowToUseSection({ steps, tool, locale, localizedRelatedTools }: HowToUseSectionProps) {
  const t = useTranslations();
  if (!steps || steps.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-how-to-use"
      aria-labelledby="how-to-use-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <h2
        id="how-to-use-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
        itemProp="name"
      >
        {t('tools.howToUse')}
      </h2>
      <ol className="grid gap-6 md:grid-cols-3" data-testid="how-to-use-steps">
        {steps.map((step) => (
          <li
            key={step.step}
            className="flex flex-col h-full"
            data-testid={`how-to-step-${step.step}`}
            id={`step-${step.step}`}
            itemScope
            itemProp="step"
            itemType="https://schema.org/HowToStep"
          >
            <meta itemProp="position" content={String(step.step)} />
            <Card className="flex-1 h-full border-[hsl(var(--color-border))/0.6] hover:border-[hsl(var(--color-primary-300))] transition-colors">
              <div
                className="w-10 h-10 rounded-xl bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] flex items-center justify-center font-bold text-lg mb-4"
                aria-hidden="true"
              >
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2" itemProp="name">
                {step.title}
              </h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]" itemProp="text">
                {step.description}
              </p>
            </Card>
          </li>
        ))}
      </ol>
      <SectionLinkHint
        tool={tool}
        locale={locale}
        localizedRelatedTools={localizedRelatedTools}
        sectionKey="howTo"
      />
    </section>
  );
}

/**
 * Use cases section with practical scenarios
 */
interface UseCasesSectionProps {
  useCases: UseCase[];
  tool: Tool;
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
}

function UseCasesSection({ useCases, tool, locale, localizedRelatedTools }: UseCasesSectionProps) {
  const t = useTranslations();
  if (!useCases || useCases.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-use-cases"
      aria-labelledby="use-cases-heading"
    >
      <h2
        id="use-cases-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.useCases')}
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="use-cases-grid"
      >
        {useCases.map((useCase, index) => (
          <Card
            key={index}
            variant="default"
            className="border border-[hsl(var(--color-border))/0.6] hover:shadow-md transition-all duration-[var(--motion-duration-hover)]"
            data-testid={`use-case-${index}`}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--color-secondary)/0.5)] flex items-center justify-center"
                aria-hidden="true"
              >
                {/* We can map icons here too if needed, for now using a generic check */}
                <div className="w-6 h-6 text-[hsl(var(--color-secondary-foreground))] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">
                  {useCase.title}
                </h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {useCase.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <SectionLinkHint
        tool={tool}
        locale={locale}
        localizedRelatedTools={localizedRelatedTools}
        sectionKey="useCases"
      />
    </section>
  );
}

/**
 * FAQ section with common questions and answers
 */
interface FAQSectionProps {
  faq: FAQ[];
  tool: Tool;
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
}

function FAQSection({ faq, tool, locale, localizedRelatedTools }: FAQSectionProps) {
  const t = useTranslations();
  if (!faq || faq.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-faq"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.faq')}
      </h2>
      <div className="space-y-4" data-testid="faq-list">
        {faq.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            data-testid={`faq-item-${index}`}
          >
            <h3 className="font-semibold text-[hsl(var(--color-foreground))]">
              {item.question}
            </h3>
            <div>
              <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                {item.answer}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <SectionLinkHint
        tool={tool}
        locale={locale}
        localizedRelatedTools={localizedRelatedTools}
        sectionKey="faq"
      />
    </section>
  );
}

interface SectionLinkHintProps {
  tool: Tool;
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
  sectionKey: SectionLinkKey;
}

function SectionLinkHint({ tool, locale, localizedRelatedTools, sectionKey }: SectionLinkHintProps) {
  const localeKey = locale as Locale;
  const relatedIds = coreSectionLinkMap[tool.id]?.[sectionKey] || [];

  if (relatedIds.length === 0) {
    return null;
  }

  const prefix = sectionLinkPrefixByLocale[localeKey]?.[sectionKey] || sectionLinkPrefixByLocale.en[sectionKey];

  const links = relatedIds
    .map((id) => getToolById(id))
    .filter((item): item is Tool => item !== undefined);

  if (links.length === 0) {
    return null;
  }

  return (
    <p className="mt-5 text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
      <span>{prefix} </span>
      {links.map((relatedTool, index) => {
        const localized = localizedRelatedTools[relatedTool.id];
        const toolName = localized?.title || relatedTool.id
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        const anchorText = getPreferredToolAnchorText(localeKey, relatedTool.id, toolName);

        return (
          <span key={relatedTool.id}>
            <Link
              href={getPublicPath(`/tools/${relatedTool.slug}`, localeKey)}
              className="text-[hsl(var(--color-primary))] underline decoration-[hsl(var(--color-primary))/0.35] underline-offset-4 hover:text-[hsl(var(--color-primary-hover))]"
            >
              {anchorText}
            </Link>
            {index < links.length - 1 ? <span>{index === links.length - 2 ? ' or ' : ', '}</span> : null}
          </span>
        );
      })}
    </p>
  );
}

/**
 * Related tools section
 */
interface RelatedToolsSectionProps {
  tools: Tool[];
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
}

function RelatedToolsSection({ tools, locale, localizedRelatedTools }: RelatedToolsSectionProps) {
  const t = useTranslations();
  if (!tools || tools.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-related-tools"
      aria-labelledby="related-tools-heading"
    >
      <h2
        id="related-tools-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.relatedTools')}
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="related-tools-grid"
      >
        {tools.map(tool => {
          const localized = localizedRelatedTools[tool.id];
          const toolName = localized?.title || tool.id
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          const anchorText = getPreferredToolAnchorText(locale as Locale, tool.id, toolName);

          const IconComponent = getToolIcon(tool.icon);
          const categoryName = t(`home.categories.${categoryTranslationKeys[tool.category]}`);

          return (
            <a
              key={tool.id}
              href={getPublicPath(`/tools/${tool.slug}`, locale as Locale)}
              className="block group"
            >
              <Card hover clickable className="h-full border border-[hsl(var(--color-border))/0.6]">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))]"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                      {anchorText}
                    </span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                      {categoryName}
                    </span>
                    {localized?.description ? (
                      <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed line-clamp-3">
                        {localized.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ToolPage;
