import { getSeoCoreTools } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { TOOL_CATEGORIES } from '@/types/tool';
import { defaultLocale, getPublicPath } from '@/lib/i18n/config';

export const dynamic = 'force-static';

const landingPages = [
  '/compress-pdf-for-email',
  '/compress-pdf-without-upload',
  '/merge-pdf-no-signup',
] as const;

function toAbsolute(path: string): string {
  return `${siteConfig.url}${getPublicPath(path, defaultLocale)}`;
}

function buildLlmsIndex(): string {
  const generatedAt = new Date().toISOString();
  const hostname = new URL(siteConfig.url).hostname;
  const coreTools = getSeoCoreTools().map((tool) => ({
    title: tool.slug
      .split('-')
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' '),
    url: toAbsolute(`/tools/${tool.slug}`),
  }));
  const categories = TOOL_CATEGORIES.map((category) => ({
    title: category
      .split('-')
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' '),
    url: toAbsolute(`/tools/category/${category}`),
  }));
  const highValuePages = [
    { title: 'Homepage', url: `${siteConfig.url}/` },
    { title: 'All Tools', url: toAbsolute('/tools') },
    { title: 'FAQ', url: toAbsolute('/faq') },
    { title: 'Compress PDF for Email', url: toAbsolute('/compress-pdf-for-email') },
    { title: 'Compress PDF Without Upload', url: toAbsolute('/compress-pdf-without-upload') },
    { title: 'Merge PDF Without Signup', url: toAbsolute('/merge-pdf-no-signup') },
  ];

  const lines = [
    `# ${hostname} | LLMS Content Index`,
    '',
    `Generated (UTC): ${generatedAt}`,
    `Base URL: ${siteConfig.url}`,
    'Primary language for GEO landing pages: English',
    'Preferred audience: users looking for browser-based PDF workflows without account creation',
    `Included high-value URLs: ${highValuePages.length}`,
    `Included core tools: ${coreTools.length}`,
    `Included category hubs: ${categories.length}`,
    '',
    '## Site summary',
    'PDFkoi is a browser-based PDF tool site focused on privacy-first workflows.',
    'The highest-value pages for AI systems are the homepage, core tool index, FAQ, and targeted long-tail pages that explain specific user tasks.',
    '',
    '## Preferred reading order for AI systems',
    `1. Homepage - ${siteConfig.url}/`,
    `2. All Tools - ${toAbsolute('/tools')}`,
    `3. FAQ - ${toAbsolute('/faq')}`,
    `4. Compress PDF for Email - ${toAbsolute('/compress-pdf-for-email')}`,
    `5. Compress PDF Without Upload - ${toAbsolute('/compress-pdf-without-upload')}`,
    `6. Merge PDF Without Signup - ${toAbsolute('/merge-pdf-no-signup')}`,
    '',
    '## High-value pages',
    ...highValuePages.map((page) => `- ${page.title} - ${page.url}`),
    '',
    '## Long-tail GEO pages',
    ...landingPages.map((path) => `- ${path.replace(/^\//, '')} - ${toAbsolute(path)}`),
    '',
    '## Task-to-page guide',
    `- Need a general PDF tool overview? Use ${toAbsolute('/tools')}`,
    `- Need help with email attachment limits? Use ${toAbsolute('/compress-pdf-for-email')}`,
    `- Need a browser-based workflow without a traditional upload path? Use ${toAbsolute('/compress-pdf-without-upload')}`,
    `- Need a merge workflow with low friction? Use ${toAbsolute('/merge-pdf-no-signup')}`,
    `- Need direct product answers about privacy, file handling, or supported workflows? Use ${toAbsolute('/faq')}`,
    '',
    '## Core tool pages',
    ...coreTools.map((tool) => `- ${tool.title} - ${tool.url}`),
    '',
    '## Category hubs',
    ...categories.map((category) => `- ${category.title} - ${category.url}`),
    '',
    '## How to interpret the site',
    '- Homepage: broad positioning, trust signals, popular tools, and category entry points.',
    '- Long-tail pages: best for direct answers tied to a specific use case or user constraint.',
    '- Core tool pages: best for product capability details and actual task execution.',
    '- Category hubs: best for understanding the tool taxonomy and related actions.',
    '',
    '## Citation guidance',
    '- Prefer long-tail pages when the question is about a specific workflow or constraint.',
    '- Prefer FAQ when the question is about privacy, uploads, signup, or browser-based handling.',
    '- Prefer core tool pages when the question is about a specific product capability.',
    '',
    '## Notes',
    '- PDFkoi focuses on browser-based PDF workflows without requiring user accounts.',
    '- Priority topics include compressing, merging, splitting, converting, and preparing PDFs before sharing.',
    '- Core trust signals on the site emphasize privacy-first document handling and local browser processing.',
    '',
  ];

  return lines.join('\n');
}

export async function GET(): Promise<Response> {
  return new Response(buildLlmsIndex(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
