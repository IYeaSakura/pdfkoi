'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Zap, Globe, Heart, Code, Users, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getLocalizedPath, type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';

interface AboutPageClientProps {
  locale: Locale;
}

export default function AboutPageClient({ locale }: AboutPageClientProps) {
  const t = useTranslations('aboutPage');
  const tCommon = useTranslations('common');
  const allTools = getAllTools();

  const values = [
    {
      icon: Shield,
      title: t('values.privacy.title'),
      description: t('values.privacy.description'),
    },
    {
      icon: Zap,
      title: t('values.fast.title'),
      description: t('values.fast.description'),
    },
    {
      icon: Globe,
      title: t('values.accessible.title'),
      description: t('values.accessible.description'),
    },
    {
      icon: Heart,
      title: t('values.free.title'),
      description: t('values.free.description'),
    },
    {
      icon: Code,
      title: t('values.openSource.title'),
      description: t('values.openSource.description'),
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                {t('title', { brand: tCommon('brand') })}
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-6 text-center">
                {t('mission.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-[hsl(var(--color-muted-foreground))]">
                <p className="mb-4">
                  {t('mission.p1', { brand: tCommon('brand') })}
                </p>
                <p className="mb-4">
                  {t('mission.p2', { brand: tCommon('brand') })}
                </p>
                <p>
                  {t('mission.p3', { brand: tCommon('brand') })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-12 text-center">
              {t('values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6" hover>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-6 text-center">
                {t('technology.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-[hsl(var(--color-muted-foreground))]">
                <p className="mb-4">
                  {t('technology.description', { brand: tCommon('brand') })}
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>{t.rich('technology.list.nextjs', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.wasm', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.workers', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.pdflib', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.indexeddb', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                </ul>
                <p>
                  {t('technology.summary')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--color-primary)/0.05)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('cta.description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
              <Link href={getLocalizedPath('/tools', locale)}>
                <Button variant="primary" size="lg">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
