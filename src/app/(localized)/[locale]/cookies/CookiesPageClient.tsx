'use client';

import { Cookie, HardDrive, Info, Lock, Settings, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
  locale: Locale;
}

const storageItems = [
  {
    name: 'Language preference',
    purpose: 'Remembers the language you selected so the site opens in your preferred locale.',
    storage: 'Local storage',
    duration: 'Until you clear browser data',
  },
  {
    name: 'Recent files and saved work',
    purpose: 'Keeps recent activity and in-progress items on your own device for convenience.',
    storage: 'Local storage',
    duration: 'Until you clear browser data',
  },
  {
    name: 'Essential site state',
    purpose: 'Supports core interface behavior such as tool state, dialogs, and user preferences.',
    storage: 'Session storage or local storage',
    duration: 'Session or until you clear browser data',
  },
];

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
  const t = useTranslations('common');

  const highlights = [
    {
      icon: Cookie,
      title: 'Minimal usage',
      description: 'We aim to use only the storage needed to make the site work and remember your preferences.',
    },
    {
      icon: Shield,
      title: 'No ad tracking',
      description: 'This policy does not permit advertising cookies or cross-site tracking for PDF content.',
    },
    {
      icon: HardDrive,
      title: 'Stored on your device',
      description: 'Preference data is typically stored in your own browser, not uploaded with your files.',
    },
    {
      icon: Lock,
      title: 'Privacy-first design',
      description: 'PDF processing stays in your browser, which reduces the need for server-side identifiers.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <Cookie className="h-8 w-8 text-amber-700" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Cookies Policy
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                This page explains how {t('brand')} uses cookies and browser storage to support essential site features.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
                      <Icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <h2 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: March 28, 2026
              </p>

              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    1. What this policy covers
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>
                      This Cookies Policy explains how {t('brand')} uses cookies, local storage, session storage,
                      and similar browser technologies when you visit the site or use our PDF tools.
                    </p>
                    <p>
                      Because our product is designed to process files in the browser, we try to keep storage usage
                      limited to essential functionality, preferences, and product usability.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    2. What we mean by cookies and similar technologies
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>
                      Cookies are small text files placed in your browser. Similar technologies include local storage,
                      session storage, and browser-managed preference data. In practice, some site features may rely on
                      browser storage instead of classic cookies.
                    </p>
                    <p>
                      For clarity, this policy uses the phrase &quot;cookies and browser storage&quot; to cover all of these
                      technologies together unless a section says otherwise.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    3. How {t('brand')} uses cookies and browser storage
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-[hsl(var(--color-border))]">
                    <table className="w-full text-sm">
                      <thead className="bg-[hsl(var(--color-muted)/0.5)]">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">Item</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">Purpose</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">Technology</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {storageItems.map((item) => (
                          <tr key={item.name} className="border-t border-[hsl(var(--color-border))]">
                            <td className="px-4 py-3 text-[hsl(var(--color-foreground))] font-medium">{item.name}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.purpose}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.storage}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    4. Categories of usage
                  </h2>
                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        Essential functionality
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        These items help the site operate reliably, keep interface state consistent, and support
                        features that users reasonably expect from a browser-based tool.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        Preference storage
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        Preference storage helps remember settings such as language choice or other non-sensitive
                        product preferences so that you do not need to reconfigure the site every visit.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        Local productivity features
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        Some tools may preserve recent actions or in-progress information on your own device to improve
                        usability after refreshes or interrupted sessions.
                      </p>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    5. What we do not use these technologies for
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))]">
                    <li>We do not use cookies to upload or inspect the contents of your PDF files.</li>
                    <li>We do not use advertising cookies to build behavioral ad profiles from your document activity.</li>
                    <li>We do not rely on cookies to move your files to third-party PDF processing services.</li>
                    <li>We do not claim a right to use browser storage to read documents outside the tools you choose to run.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    6. Third-party services
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>
                      If the site links out to services such as GitHub or X, those platforms may set their own cookies
                      when you visit them. Their cookie behavior is governed by their own policies, not this page.
                    </p>
                    <p>
                      This policy covers cookies and browser storage used for the {t('brand')} site experience itself.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    7. How to control or delete cookies and local storage
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>You can control cookies and browser storage through your browser settings.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Delete existing cookies and site storage from your browser privacy settings.</li>
                      <li>Block some or all cookies if your browser offers that option.</li>
                      <li>Clear local storage or site data for {t('brand')} if you want to remove remembered preferences.</li>
                    </ul>
                    <p>
                      Please note that disabling all cookies or site storage may affect site functionality, including
                      your saved preferences and convenience features.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    8. Changes to this Cookies Policy
                  </h2>
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    We may update this policy from time to time to reflect changes in site functionality, legal
                    requirements, or product design. When we do, we will update the date shown at the top of this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    9. Contact
                  </h2>
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    If you have questions about this policy, please use the Contact page linked in the site footer.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 md:p-8 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 flex-shrink-0">
                    <Info className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      Practical summary
                    </h2>
                    <p className="text-[hsl(var(--color-muted-foreground))] mb-3">
                      {t('brand')} is built to do most of its work in the browser. That means the site generally needs
                      only limited storage for preferences and usability, rather than invasive tracking infrastructure.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                      <Settings className="h-4 w-4" />
                      Review your browser site settings any time if you want to clear saved preferences.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
