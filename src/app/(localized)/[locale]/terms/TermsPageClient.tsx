'use client';

import { useTranslations } from 'next-intl';
import { FileText, Shield, Lock, AlertTriangle, Scale, Globe, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { getLocalizedPath, type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
  locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
  const t = useTranslations();

  const termsHighlights = [
    {
      icon: Shield,
      title: '100% Client-Side',
      description: 'Your files are processed locally in your browser and never uploaded to any server.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We do not access, store, or transmit your documents. Your data stays on your device.',
    },
    {
      icon: FileText,
      title: 'Free to Use',
      description: 'All PDF tools are free. No registration required, no hidden fees, no premium tiers.',
    },
    {
      icon: Scale,
      title: 'Fair Use',
      description: 'We ask that you use our service responsibly and not for any illegal purposes.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Please read these terms carefully before using {t('common.brand')}.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {termsHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: March 24, 2026
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                By accessing and using {t('common.brand')} (&quot;the Service&quot;), you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                2. Service Description
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} is a free, browser-based suite of PDF tools that allows users to 
                merge, split, compress, convert, edit, and perform various operations on PDF files. 
                The Service processes all files entirely client-side using WebAssembly technology.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                3. Privacy & Data Handling
              </h2>
              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                3.1 Client-Side Processing
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>All file processing occurs locally in your browser.</strong> Your documents are never uploaded to any external server.</li>
                <li>We do not have access to, store, or transmit your files.</li>
                <li>Once you close or refresh the browser tab, your data is permanently deleted from memory.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                3.2 Information We Collect
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We may collect minimal usage data (e.g., which tools are used) for analytics purposes. 
                We do not collect, store, or process the content of your PDF files.
              </p>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                3.3 Cookies
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We use essential cookies to maintain session functionality. No third-party tracking 
                or advertising cookies are used.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                4. User Responsibilities
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>Use the Service for any illegal purpose</li>
                <li>Upload or process files containing malicious content</li>
                <li>Attempt to reverse engineer or exploit the Service</li>
                <li>Use automated tools to access the Service beyond normal human usage</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>{t('common.brand')}:</strong> The Service, including its design, code, and branding, 
                    is the property of {t('common.brand')} and is licensed under AGPL-3.0.</li>
                <li><strong>Your Files:</strong> You retain full ownership of any files you process through the Service.</li>
                <li><strong>Third-Party Libraries:</strong> The Service uses open-source libraries (PDF.js, 
                    pdf-lib, PyMuPDF) under their respective licenses.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                6. Disclaimer of Warranties
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-[hsl(var(--color-muted-foreground))] mb-2">
                  <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</strong> 
                  WE DO NOT GUARANTEE:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[hsl(var(--color-muted-foreground))]">
                  <li>The Service will be uninterrupted or error-free</li>
                  <li>The results from using the Service will be accurate or reliable</li>
                  <li>The quality of any products or services obtained through the Service will meet your expectations</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                <strong>IN NO EVENT SHALL {t('common.brand').toUpperCase()} BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH 
                YOUR USE OF THE SERVICE.</strong>
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                8. Service Changes
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>Modify or discontinue any part of the Service at any time</li>
                <li>Update these Terms at any time. Continued use constitutes acceptance of changes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                9. Beta Features
              </h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    Certain features (e.g., Workflow Editor) may be labeled as &quot;Beta&quot; or 
                    &quot;Early Development.&quot; These features may be unstable, and we disclaim 
                    liability for issues arising from their use.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                10. Governing Law
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                11. Contact
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                For questions about these Terms, please contact us through our{' '}
                <a href={getLocalizedPath('/contact', locale)} className="text-[hsl(var(--color-primary))] hover:underline">
                  contact page
                </a>{' '}
                 or email: support@pdfkoi.com
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Mail className="h-8 w-8 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold text-blue-800">
                    Questions?
                  </p>
                  <p className="text-sm text-blue-600">
                    Contact us if you have any questions about these Terms
                  </p>
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
