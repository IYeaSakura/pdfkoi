'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, Mail } from 'lucide-react';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { getToolsByCategory } from '@/config/tools';
import { type ToolCategory } from '@/types/tool';

export interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('common');
  const tHome = useTranslations('home');
  const currentYear = new Date().getFullYear();
  const homePath = getPublicPath('/', locale);
  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };
  const footerCategoryOrder: ToolCategory[] = [
    'edit-annotate',
    'convert-to-pdf',
    'convert-from-pdf',
    'organize-manage',
    'optimize-repair',
    'secure-pdf',
  ];
  const categoryLinks = footerCategoryOrder.map((category) => ({
    href: getPublicPath(`/tools/category/${category}`, locale),
    label: tHome(`categories.${categoryTranslationKeys[category]}`),
    count: getToolsByCategory(category).length,
  }));

  return (
    <footer
      className="w-full border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] pt-16 pb-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link
              href={homePath}
              className="group flex items-center gap-2.5 text-xl font-bold text-[hsl(var(--color-foreground))]"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <Image
                src="/images/logo.png"
                alt={`${t('brand')} logo`}
                width={32}
                height={32}
                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
              />
              <span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-sm">
              {t('tagline') || 'Browser-based PDF tools. Files stay on your device.'}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/pdfkoi/pdfkoi"
                aria-label="GitHub"
                className="p-2 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary))] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <Link
                href={getPublicPath('/contact', locale)}
                aria-label={t('navigation.contact')}
                className="p-2 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary))] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Core Tools */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-5">
              {t('navigation.tools')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--color-muted-foreground))] group-hover:bg-[hsl(var(--color-primary))] transition-colors" />
                    <span>{link.label}</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))/0.8]">
                      ({link.count})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[hsl(var(--color-border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
            &copy; {currentYear} {t('brand')}. {t('footer.copyright', { year: '' }).replace(/^\d{4}\s*/, '')}
          </p>
          <div className="flex items-center gap-6">
            <Link href={getPublicPath('/terms', locale)} className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Terms</Link>
            <Link href={getPublicPath('/privacy', locale)} className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



