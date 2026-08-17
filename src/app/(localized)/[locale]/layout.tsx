import type { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localeConfig, locales, normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { baseMetadata, RootDocument } from '@/app/document';
import { SkipLink } from '@/components/common/SkipLink';

export const metadata = baseMetadata;

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  if (!normalizedLocale || !locales.includes(normalizedLocale)) {
    notFound();
  }

  setRequestLocale(normalizedLocale);

  const messages = await getMessages();
  const direction = localeConfig[normalizedLocale]?.direction || 'ltr';

  return (
    <RootDocument lang={normalizedLocale} dir={direction}>
      <NextIntlClientProvider messages={messages}>
        <div className="min-h-screen bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] antialiased font-sans relative overflow-x-hidden">
          <SkipLink targetId="main-content">Skip to main content</SkipLink>
          {children}
        </div>
      </NextIntlClientProvider>
    </RootDocument>
  );
}
