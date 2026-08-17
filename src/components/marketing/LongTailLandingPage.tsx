'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getLocalizedPath, type Locale } from '@/lib/i18n/config';
import type { LandingPageContent } from '@/content/seo/landing-pages';

interface LongTailLandingPageProps {
  locale: Locale;
  content: LandingPageContent;
}

export function LongTailLandingPage({ locale, content }: LongTailLandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--color-primary))] mb-4">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {content.h1}
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--color-primary))] font-medium mb-4">
                {content.intro}
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-3xl mx-auto mb-8">
                {content.heroBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                <span>Last updated: {content.lastUpdated}</span>
                <span className="hidden sm:inline" aria-hidden="true">•</span>
                <span>Reviewed by {content.reviewedBy}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={getLocalizedPath(content.primaryCtaHref, locale)}>
                  <Button variant="primary" size="lg">
                    {content.primaryCtaLabel}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href={getLocalizedPath(content.secondaryCtaHref, locale)}>
                  <Button variant="secondary" size="lg">
                    {content.secondaryCtaLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-6">{content.sectionTitle}</h2>
              <div className="space-y-4 text-[hsl(var(--color-muted-foreground))] text-base md:text-lg leading-relaxed">
                {content.sectionBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[hsl(var(--color-muted)/0.2)]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-8">{content.evidenceTitle}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {content.evidenceItems.map((item) => (
                  <Card key={item.title} className="p-6 h-full border-[hsl(var(--color-border)/0.65)]">
                    <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))] mb-4">{item.body}</p>
                    <Link
                      href={item.sourceHref.startsWith('http') ? item.sourceHref : getLocalizedPath(item.sourceHref, locale)}
                      className="text-sm font-medium text-[hsl(var(--color-primary))] hover:underline"
                      target={item.sourceHref.startsWith('http') ? '_blank' : undefined}
                      rel={item.sourceHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      Source: {item.sourceLabel}
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[hsl(var(--color-muted)/0.25)]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-8">{content.stepsTitle}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {content.steps.map((step, index) => (
                  <Card key={step.title} className="p-6 h-full border-[hsl(var(--color-border)/0.65)]">
                    <div className="text-sm font-semibold text-[hsl(var(--color-primary))] mb-3">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))]">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-2">
              <Card className="p-8 border-[hsl(var(--color-border)/0.65)]">
                <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-6">{content.whyTitle}</h2>
                <ul className="space-y-4">
                  {content.whyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[hsl(var(--color-muted-foreground))]">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-[hsl(var(--color-primary))] shrink-0" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-8 border-[hsl(var(--color-border)/0.65)]">
                <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-6">{content.scenariosTitle}</h2>
                <ul className="space-y-4">
                  {content.scenarios.map((scenario) => (
                    <li key={scenario} className="flex items-start gap-3 text-[hsl(var(--color-muted-foreground))]">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-[hsl(var(--color-primary))] shrink-0" aria-hidden="true" />
                      <span>{scenario}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[hsl(var(--color-muted)/0.25)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-8">{content.faqTitle}</h2>
              <Link
                href={getLocalizedPath(content.faqLinkHref, locale)}
                className="mb-6 inline-flex text-sm font-medium text-[hsl(var(--color-primary))] hover:underline"
              >
                {content.faqLinkLabel}
              </Link>
              <div className="space-y-4">
                {content.faqs.map((faq) => (
                  <Card key={faq.question} className="p-6 border-[hsl(var(--color-border)/0.65)]">
                    <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-3">{faq.question}</h3>
                    <p className="text-[hsl(var(--color-muted-foreground))] leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-8">{content.relatedTitle}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {content.relatedLinks.map((link) => (
                  <Link key={link.href} href={getLocalizedPath(link.href, locale)} className="group">
                    <Card className="p-6 h-full border-[hsl(var(--color-border)/0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-3 group-hover:text-[hsl(var(--color-primary))]">
                        {link.label}
                      </h3>
                      <p className="text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))]">{link.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
