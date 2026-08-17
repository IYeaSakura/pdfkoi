'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { getPreferredToolAnchorText } from '@/lib/seo/internal-linking';

export interface ToolCardProps {
  /** Tool data to display */
  tool: Tool;
  /** Current locale for URL generation */
  locale: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Localized content */
  localizedContent?: { title: string; description: string };
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolCard component displays a single PDF tool with icon, name, and description.
 * Includes hover effects and links to the tool page.
 */
export function ToolCard({ tool, locale, className = '', localizedContent }: ToolCardProps) {
  const t = useTranslations();
  const toolUrl = getPublicPath(`/tools/${tool.slug}`, locale as Locale);

  // Get a human-readable name from the tool ID
  // Use localized title if available, otherwise fallback to formatting the ID
  const toolName = localizedContent?.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const anchorText = getPreferredToolAnchorText(locale as Locale, tool.id, toolName);

  // Generate a description from features
  // Use localized description (metaDescription) if available
  const description = localizedContent?.description || tool.features
    .slice(0, 3)
    .map(f => f.replace(/-/g, ' '))
    .join(', ');

  const IconComponent = getToolIcon(tool.icon);

  const categoryName = t(`home.categories.${categoryTranslationKeys[tool.category]}`);

  return (
    <Link
      href={toolUrl}
      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-background))] rounded-[var(--radius-lg)] group ${className}`}
      data-testid="tool-card"
    >
      <Card
        className="h-full transition-all duration-[var(--motion-duration-hover)] hover:shadow-lg hover:border-[hsl(var(--color-primary-300))] hover:-translate-y-1 relative overflow-hidden border-[hsl(var(--color-border))/0.6] group/card bg-[hsl(var(--color-card))]"
        data-testid="tool-card-container"
      >
        <div className="absolute top-0 right-0 p-3 z-10">
          <FavoriteButton toolId={tool.id} size="sm" />
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            {/* Tool Icon */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-[hsl(var(--color-primary-50))] flex items-center justify-center text-[hsl(var(--color-primary-600))] transition-transform duration-[var(--motion-duration-hover)] group-hover/card:scale-105"
              data-testid="tool-card-icon"
              aria-hidden="true"
            >
              <IconComponent className="w-6 h-6" />
            </div>
          </div>

          {/* Tool Info */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-semibold leading-snug text-[hsl(var(--color-card-foreground))] line-clamp-2 min-h-[2.75rem] break-words mb-2 group-hover/card:text-[hsl(var(--color-primary))] transition-colors duration-[var(--motion-duration-hover)]"
              data-testid="tool-card-name"
            >
              {anchorText}
            </h3>
            <p
              className="text-sm text-[hsl(var(--color-muted-foreground))] line-clamp-2 leading-relaxed"
              data-testid="tool-card-description"
            >
              {description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[hsl(var(--color-border)/0.5)] flex items-center justify-between text-xs text-[hsl(var(--color-muted-foreground))]">
            <span className="font-medium bg-[hsl(var(--color-secondary))] px-2 py-1 rounded-md">
              {categoryName}
            </span>
            <span className="flex items-center gap-1 text-[hsl(var(--color-primary))] font-medium">
              {t('common.buttons.open') || 'Open'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ToolCard;
