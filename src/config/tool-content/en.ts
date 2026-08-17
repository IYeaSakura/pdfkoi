/**
 * English tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * English tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEn: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: 'PDF Multi Tool',
    metaDescription: 'All-in-one PDF editor: merge, split, organize, delete, rotate, and extract pages in one tool.',
    keywords: ['pdf multi tool', 'pdf editor', 'merge pdf', 'split pdf', 'organize pdf', 'all in one pdf'],
    description: `
      <p>The PDF Multi Tool combines common PDF page operations into a single interface. Merge, split, reorganize, delete, rotate, and extract pages without switching between different tools.</p>
      <p>Whether you need to merge multiple documents, split a large PDF into smaller files, reorganize pages, delete unwanted content, rotate pages, or extract specific sections, this tool handles it all without switching between different applications.</p>
      <p>All processing happens directly in your browser, ensuring your documents remain private and secure. No files are uploaded to any server.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file into the upload area, or click to browse and select files from your device.' },
      { step: 2, title: 'Choose Your Operation', description: 'Select from the available operations: merge, split, organize, delete pages, rotate, add blank pages, or extract pages.' },
      { step: 3, title: 'Configure Options', description: 'Adjust settings specific to your chosen operation, such as page ranges, rotation angles, or merge order.' },
      { step: 4, title: 'Process and Download', description: 'Click the process button and download your modified PDF once the operation completes.' },
    ],
    useCases: [
      { title: 'Document Preparation', description: 'Prepare documents for submission by removing unnecessary pages, reordering content, and combining multiple files.', icon: 'file-check' },
      { title: 'Report Assembly', description: 'Combine multiple report sections, add cover pages, and organize chapters into a single professional document.', icon: 'book-open' },
      { title: 'Archive Management', description: 'Split large archive files into manageable sections, extract relevant pages, and reorganize historical documents.', icon: 'archive' },
    ],
    faq: [
      { question: 'How many PDFs can I process at once?', answer: 'You can upload and process up to 10 PDF files simultaneously, with a combined maximum size of 500MB.' },
      { question: 'Will my bookmarks be preserved?', answer: 'Yes, when merging PDFs, the tool preserves existing bookmarks and can optionally combine them into a unified bookmark structure.' },
      { question: 'Is there a page limit?', answer: 'There is no strict page limit. The tool can handle documents with hundreds of pages, though very large files may take longer to process.' },
    ],
  },

  'merge-pdf': {
    title: 'Merge PDF Files Online',
    metaDescription: 'Merge PDF files online for free. Combine multiple PDF files in the right order and download one document in your browser.',
    keywords: ['merge pdf files online', 'combine pdf files in order', 'merge multiple pdf files into one', 'merge pdf no sign up'],
    description:       `
      <p>Merge PDF files online when you need to combine multiple PDF documents into one file. This tool helps you join PDFs in the right order and download a single finished document.</p>
      <p>It is useful for reports, scanned pages, invoices, receipts, forms, and appendices. If you have several related PDF files and want one cleaner file for sending, printing, or record keeping, merging them is the easiest next step. If the finished file is still too large, you can <a href="/tools/compress-pdf">compress the merged PDF for email or upload</a>.</p>
      <p>All merging happens in your browser, so your PDF files stay on your device and remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Files', description: 'Drag and drop multiple PDF files into the upload area, or click to select them from your device.' },
      { step: 2, title: 'Arrange the File Order', description: 'Move the files into the order you want so the final merged PDF reads correctly.' },
      { step: 3, title: 'Merge and Download', description: 'Click Merge to combine the files, then download the finished PDF.' },
    ],
    useCases: [
      { title: 'Merge Reports into One PDF', description: 'Merge a cover page, main report, and appendix into one PDF before sending.', icon: 'file-text' },
      { title: 'Combine Scanned Pages', description: 'Combine separately scanned pages or sections into a single organized file.', icon: 'scan' },
      { title: 'Merge Invoices into One PDF', description: 'Join receipts, invoices, or statements into one PDF for accounting or submission.', icon: 'receipt' },
    ],
    faq: [
      { question: 'How do I merge PDF files in the right order?', answer: 'Yes. Reordering files before merging lets you control the final document sequence.' },
      { question: 'Does merging PDF files reduce quality?', answer: 'Normally no. Merging should combine files without changing the original page quality.' },
      { question: 'Can I merge multiple PDF files into one?', answer: 'Yes. Most users merge several PDFs at once to create one final document. If you later need only part of that file, you can <a href="/tools/split-pdf">split the merged PDF into smaller sections</a>.' },
    ],
  },
  'rotate-custom': {
    title: 'Rotate by Custom Degrees',
    metaDescription: 'Rotate PDF pages by any angle. Precise custom rotation for straightening scanned documents.',
    keywords: ['rotate pdf custom angle', 'straighten pdf', 'deskew pdf', 'pdf custom rotation'],
    description: `
      <p>Rotate by Custom Degrees gives you precise control over your PDF page orientation. Unlike standard rotation tools that only support 90-degree increments, this tool allows you to rotate pages by any specific angle.</p>
      <p>Perfect for straightening scanned documents that were fed slightly askew, or adjusting diagrams and charts to their correct orientation. You can correct individual pages or apply the same rotation to the entire document.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private while achieving perfect alignment.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF', description: 'Upload the PDF file containing pages you need to rotate.' },
      { step: 2, title: 'Set Rotation Angle', description: 'Enter the exact degree of rotation for each page, or set a batch angle for all pages.' },
      { step: 3, title: 'Preview and Adjust', description: 'Use the real-time preview to ensure pages are perfectly aligned.' },
      { step: 4, title: 'Apply and Download', description: 'Click Rotate to apply the changes and download your straightened PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Straighten scanned pages that were fed into the scanner at an angle.', icon: 'scan' },
      { title: 'Technical Drawings', description: 'Adjust the orientation of technical diagrams and plans with precision.', icon: 'ruler' },
      { title: 'Creative Layouts', description: 'Create unique layouts by rotating pages to specific artistic angles.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Can I rotate by decimals, e.g., 45.5 degrees?', answer: 'Currently the tool supports integer degrees, but we are working on enabling decimal precision.' },
      { question: 'Does this affect the page content?', answer: 'The content is visually rotated. The page size is automatically adjusted to fit the rotated content.' },
      { question: 'Can I rotate just one page?', answer: 'Yes, you can set a custom rotation angle for any individual page while leaving others unchanged.' },
    ],
  },

  'grid-combine': {
    title: 'Grid Combine PDF',
    metaDescription: 'Combine multiple PDF files onto single pages with a flexible grid layout. Arrange 2, 4, 6, 9 or more PDFs per page with borders and spacing.',
    keywords: ['grid combine', 'merge pdf grid', 'pdf collage', 'multiple pdfs one page', 'pdf n-up', 'combine pdfs grid'],
    description: `
      <p>The Grid Combine tool offers a unique way to merge multiple separate PDF files onto single pages. Unlike the standard "Merge PDF" tool which simply appends pages, or the "N-Up" tool which rearranges pages from a single document, Grid Combine takes multiple input files and arranges them side-by-side in a customizable grid layout.</p>
      <p>You can choose from various grid configurations such as 2x1, 2x2, 3x3, etc. This is perfect for comparing multiple documents, creating handouts from different sources, or printing compact versions of several files.</p>
      <p>Customize the output with control over page size, orientation, margins, spacing, and borders. All processing happens locally in your browser for maximum privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Files', description: 'Upload two or more PDF files you want to combine. You can rearrange them in your desired order.' },
      { step: 2, title: 'Choose Grid Layout', description: 'Select your desired grid layout (e.g., 2x2 for 4 files per page, 3x3 for 9 files per page).' },
      { step: 3, title: 'Customize Appearance', description: 'Adjust settings like page size (A4, Letter), orientation, spacing between items, and borders.' },
      { step: 4, title: 'Combine and Download', description: 'Click "Combine PDFs" to generate your new grid layout document and download the result.' },
    ],
    useCases: [
      { title: 'Visual Comparison', description: 'Place different versions of a design or document side-by-side on a single page for easy comparison.', icon: 'layout-grid' },
      { title: 'Printing Handouts', description: 'Combine multiple short documents or slides onto a single sheet of paper to save printing costs.', icon: 'printer' },
      { title: 'Portfolio Creation', description: 'Showcase multiple project files in a clean, organized grid overview.', icon: 'image' },
    ],
    faq: [
      { question: 'How is this different from N-Up?', answer: 'N-Up takes pages from ONE PDF and puts them on a sheet. Grid Combine takes MULTIPLE DIFFERENT PDF files and puts them on a sheet.' },
      { question: 'How many files can I combine?', answer: 'You can combine up to 100 files depending on your browser memory, but layouts like 4x4 accommodate up to 16 files per page.' },
      { question: 'Can I add borders?', answer: 'Yes, you can add borders around each PDF file and customize the border color.' },
    ],
  },

  'split-pdf': {
    title: 'Split PDF Pages Online',
    metaDescription: 'Split PDF pages online by page range, extract selected pages, or save each page as a separate PDF file. Fast, simple, and private.',
    keywords: ['split pdf pages online', 'split pdf by page range', 'extract selected pages from pdf', 'split pdf into single pages'],
    description:       `
      <p>Split PDF pages online when you only need part of a document instead of the full file. You can split a PDF by page range, extract selected pages, or save each page as a separate PDF.</p>
      <p>This is useful for long reports, contracts, scanned files, class materials, and shared documents. If you want to send only certain pages or break one large PDF into smaller files, this tool makes the process fast and simple. If you later need to put selected sections back together, you can <a href="/tools/merge-pdf">merge PDF files into one document again</a>.</p>
      <p>All processing happens in your browser, so your PDF stays on your device and remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to browse and select the file you want to split.' },
      { step: 2, title: 'Choose What to Keep', description: 'Select page ranges, individual pages, or choose to save every page as a separate PDF.' },
      { step: 3, title: 'Split and Download', description: 'Click Split to create the new files, then download the pages or sections you need.' },
    ],
    useCases: [
      { title: 'Extract Selected PDF Pages', description: 'Take one section or chapter from a longer PDF without sending the full document.', icon: 'book' },
      { title: 'Split PDF into Single Pages', description: 'Split a multi-page PDF into separate one-page files for review or upload.', icon: 'copy' },
      { title: 'Split PDF for Sharing', description: 'Send only the pages a client, teacher, or colleague actually needs.', icon: 'send' },
    ],
    faq: [
      { question: 'How do I split a PDF into single pages?', answer: 'Yes. You can save every page as a separate PDF if that is the output you need. If you only need to share a visual copy of a few pages, you can also <a href="/tools/pdf-to-jpg">convert selected PDF pages to JPG</a>.' },
      { question: 'How do I split a PDF by page range?', answer: 'Yes. You can usually enter ranges like 1-3, 5-7, or select only specific pages.' },
      { question: 'Is split PDF the same as extract pages from PDF?', answer: 'Split PDF is broader and can create multiple new files, while extract pages usually focuses on pulling selected pages into a new PDF.' },
    ],
  },
  'compress-pdf': {
    title: 'Compress PDF for Email',
    metaDescription: 'Compress PDF for email, uploads, and sharing. Reduce PDF file size online while keeping text clear and documents easy to read.',
    keywords: ['compress pdf for email', 'reduce pdf size for upload', 'make scanned pdf smaller', 'compress pdf for sharing'],
    description:       `
      <p>Compress PDF for email when your file is too large to send, upload, or share. This tool helps you reduce PDF file size online without making the document difficult to read.</p>
      <p>It works well for email attachments, application forms, scanned documents, reports, and client uploads. If you need a smaller PDF for Gmail, Outlook, or online portals, this is the fastest way to make the file easier to handle. If you first need one final file before reducing size, you can <a href="/tools/merge-pdf">merge PDF files before compressing them</a>.</p>
      <p>All compression happens in your browser, so your PDF stays on your device and remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to compress.' },
      { step: 2, title: 'Choose Compression Level', description: 'Pick the option that best fits your goal, such as smaller size, balanced output, or better readability.' },
      { step: 3, title: 'Compress and Download', description: 'Click Compress to create a smaller PDF, then download the optimized file.' },
    ],
    useCases: [
      { title: 'Compress PDF for Email', description: 'Make large PDF files small enough for Gmail, Outlook, and other email attachment limits.', icon: 'mail' },
      { title: 'Reduce PDF Size for Upload', description: 'Reduce PDF size before uploading to job portals, school forms, or client systems.', icon: 'upload-cloud' },
      { title: 'Make Scanned PDFs Smaller', description: 'Shrink scanned PDFs so they upload and download faster on chat, cloud, or mobile.', icon: 'zap' },
    ],
    faq: [
      { question: 'How do I compress a PDF for email?', answer: 'Upload your file, choose a compression level, and download the smaller PDF. For email, a balanced compression setting is usually the safest starting point. If you need an editable copy as well, you can <a href="/tools/pdf-to-docx">convert the PDF to editable Word</a> after that.' },
      { question: 'Will compressing a PDF make it blurry?', answer: 'Usually no. Text should remain readable, while images may be compressed more depending on the level you choose.' },
      { question: 'What PDF file size is best for email?', answer: 'A smaller file is easier to send and receive. Many users try to keep email attachments to just a few megabytes or less.' },
    ],
  },
  'edit-pdf': {
    title: 'Edit PDF',
    metaDescription: 'Edit PDF files online. Add text, images, annotations, highlights, and shapes to your documents.',
    keywords: ['edit pdf', 'pdf editor', 'annotate pdf', 'add text to pdf', 'pdf markup'],
    description: `
      <p>Edit PDF provides a comprehensive set of tools for modifying and annotating your PDF documents. Add text, images, shapes, highlights, comments, and more without needing expensive desktop software.</p>
      <p>The intuitive editor interface makes it easy to mark up documents for review, add notes for collaboration, redact sensitive information, or enhance documents with additional content.</p>
      <p>All editing happens locally in your browser, ensuring complete privacy for your sensitive documents.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to edit.' },
      { step: 2, title: 'Select Editing Tool', description: 'Choose from the toolbar: text, highlight, shapes, images, comments, or redaction tools.' },
      { step: 3, title: 'Make Your Edits', description: 'Click on the document to add annotations, drag to position elements, and use the properties panel to customize.' },
      { step: 4, title: 'Save and Download', description: 'Click Save to apply your changes and download the edited PDF.' },
    ],
    useCases: [
      { title: 'Document Review', description: 'Add comments, highlights, and markup to documents for collaborative review processes.', icon: 'message-square' },
      { title: 'Form Completion', description: 'Fill in text fields, add signatures, and complete PDF forms without printing.', icon: 'edit-3' },
      { title: 'Content Redaction', description: 'Permanently remove sensitive information from documents before sharing.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Can I edit the original text in the PDF?', answer: 'This tool focuses on adding annotations and new content. For editing existing text, you may need to use the original source document.' },
      { question: 'Are my edits permanent?', answer: 'Annotations can be flattened to make them permanent, or kept as editable layers depending on your preference.' },
      { question: 'Can I undo my changes?', answer: 'Yes, the editor supports undo/redo functionality. You can also reset to the original document at any time before saving.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'Combine JPG Images into One PDF',
    metaDescription: 'Combine JPG images into one PDF online. Turn photos, screenshots, or scanned JPG files into a single PDF for upload, sharing, or submission.',
    keywords: ['combine jpg images into one pdf', 'convert document photos to pdf', 'photo to pdf for submission', 'turn screenshots into one pdf'],
    description:       `
      <p>Combine JPG images into one PDF when you need to turn multiple photos into a single file. This is a simple way to convert JPG to PDF online for uploads, submissions, and sharing.</p>
      <p>Use it for phone photos of documents, screenshots, certificates, ID images, or scanned pages. Instead of sending many separate image files, you can arrange them in order and create one PDF that is easier to review and submit. If you later need to export those pages back out as images, you can <a href="/tools/pdf-to-jpg">convert PDF pages to JPG</a>.</p>
      <p>All conversion happens in your browser, so your images stay on your device and remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload JPG Images', description: 'Drag and drop your JPG or JPEG files, or click to select images from your device.' },
      { step: 2, title: 'Arrange the Page Order', description: 'Reorder the images so the final PDF follows the sequence you want.' },
      { step: 3, title: 'Create and Download', description: 'Click Convert to combine the images into one PDF and download the finished file.' },
    ],
    useCases: [
      { title: 'Combine Photos into One PDF', description: 'Combine ID cards, certificates, or supporting photos into one PDF file for applications.', icon: 'file-check' },
      { title: 'Convert Document Photos to PDF', description: 'Turn multiple phone photos of paper documents into one clean PDF.', icon: 'camera' },
      { title: 'Turn Screenshots into One PDF', description: 'Merge several screenshots into a single PDF for reporting, review, or support tickets.', icon: 'images' },
    ],
    faq: [
      { question: 'How do I combine JPG images into one PDF?', answer: 'Yes. You can upload multiple JPG or JPEG files, put them in order, and export them as a single PDF document.' },
      { question: 'Can I reorder JPG images before converting to PDF?', answer: 'Yes. Reordering your images before conversion lets you control the page sequence in the final PDF.' },
      { question: 'Can I turn document photos into one PDF for submission?', answer: 'Yes. It is one of the easiest ways to package several images into one file for upload, review, and sharing. If the finished file becomes too large, the next step is often to <a href="/tools/compress-pdf">compress the PDF for email or upload</a>.' },
    ],
  },
  'sign-pdf': {
    title: 'Sign PDF',
    metaDescription: 'Add electronic signatures to PDF documents. Draw, type, or upload your signature.',
    keywords: ['sign pdf', 'electronic signature', 'e-signature', 'pdf signature', 'digital signature'],
    description: `
      <p>Sign PDF allows you to add electronic signatures to your PDF documents quickly and securely. Create your signature by drawing, typing, or uploading an image, then place it anywhere on your document.</p>
      <p>You can add multiple signatures to a single document, resize and position them precisely, and save your signature for future use. The tool is perfect for contracts, agreements, forms, and any document requiring your signature.</p>
      <p>All signing happens locally in your browser, ensuring your documents and signature remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you need to sign.' },
      { step: 2, title: 'Create Your Signature', description: 'Draw your signature with mouse or touch, type your name to generate a signature, or upload a signature image.' },
      { step: 3, title: 'Place and Adjust', description: 'Click on the document to place your signature, then drag to position and resize as needed.' },
      { step: 4, title: 'Save and Download', description: 'Click Save to apply your signature and download the signed PDF.' },
    ],
    useCases: [
      { title: 'Contract Signing', description: 'Sign contracts and agreements electronically without printing and scanning.', icon: 'file-signature' },
      { title: 'Form Completion', description: 'Add your signature to application forms, consent forms, and official documents.', icon: 'clipboard' },
      { title: 'Approval Workflows', description: 'Sign off on documents as part of review and approval processes.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Is an electronic signature legally binding?', answer: 'Electronic signatures are legally recognized in most countries. However, some documents may require specific types of digital signatures. Check your local regulations.' },
      { question: 'Can I save my signature for future use?', answer: 'Yes, you can save your signature to your browser\'s local storage for quick access when signing future documents.' },
      { question: 'Can I add multiple signatures to one document?', answer: 'Yes, you can add as many signatures as needed, positioning each one independently on any page.' },
    ],
  },

  'crop-pdf': {
    title: 'Crop PDF',
    metaDescription: 'Crop PDF pages to remove margins and unwanted areas. Trim PDF documents precisely.',
    keywords: ['crop pdf', 'trim pdf', 'cut pdf margins', 'resize pdf pages', 'pdf cropper'],
    description: `
      <p>Crop PDF allows you to trim margins and remove unwanted areas from your PDF pages. This is useful for removing excess whitespace, focusing on specific content areas, or standardizing page dimensions.</p>
      <p>You can crop all pages uniformly or adjust each page individually. The visual interface shows exactly what will be kept, making it easy to achieve precise results.</p>
      <p>All cropping happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to crop.' },
      { step: 2, title: 'Define Crop Area', description: 'Drag the crop handles to define the area you want to keep, or enter precise measurements.' },
      { step: 3, title: 'Apply to Pages', description: 'Choose to apply the crop to all pages or select specific pages to crop.' },
      { step: 4, title: 'Crop and Download', description: 'Click Crop to apply the changes and download your cropped PDF.' },
    ],
    useCases: [
      { title: 'Remove Margins', description: 'Trim excessive margins from scanned documents or PDFs with large borders.', icon: 'maximize-2' },
      { title: 'Focus Content', description: 'Crop to highlight specific content areas, removing headers, footers, or sidebars.', icon: 'target' },
      { title: 'Standardize Pages', description: 'Make all pages the same size by cropping to uniform dimensions.', icon: 'square' },
    ],
    faq: [
      { question: 'Does cropping permanently remove content?', answer: 'Yes, cropping removes the content outside the crop area. Make sure to keep a backup of your original file.' },
      { question: 'Can I crop different pages differently?', answer: 'Yes, you can apply different crop settings to individual pages or groups of pages.' },
      { question: 'Will cropping affect the text quality?', answer: 'No, cropping only removes areas outside the crop boundary. The remaining content maintains its original quality.' },
    ],
  },

  'extract-pages': {
    title: 'Extract Pages',
    metaDescription: 'Extract specific pages from PDF files. Select and save individual pages as new documents.',
    keywords: ['extract pdf pages', 'save pdf pages', 'copy pdf pages', 'pdf page extractor'],
    description: `
      <p>Extract Pages allows you to select and save specific pages from a PDF document as new files. This is perfect for pulling out relevant sections, creating excerpts, or separating combined documents.</p>
      <p>You can extract individual pages, page ranges, or multiple non-consecutive pages. The visual page preview makes it easy to identify and select exactly the pages you need.</p>
      <p>All extraction happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document from which you want to extract pages.' },
      { step: 2, title: 'Select Pages', description: 'Click on page thumbnails to select them, or enter page numbers and ranges in the input field.' },
      { step: 3, title: 'Extract and Download', description: 'Click Extract to create a new PDF with your selected pages and download it.' },
    ],
    useCases: [
      { title: 'Create Excerpts', description: 'Extract relevant pages from reports or books to create focused reference documents.', icon: 'file-minus' },
      { title: 'Share Specific Content', description: 'Pull out specific pages to share without sending the entire document.', icon: 'share-2' },
      { title: 'Archive Important Pages', description: 'Extract and save key pages from documents for long-term archival.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can I extract non-consecutive pages?', answer: 'Yes, you can select any combination of pages, whether consecutive or scattered throughout the document.' },
      { question: 'Will bookmarks be preserved?', answer: 'Bookmarks that point to extracted pages are preserved in the new document.' },
      { question: 'Can I extract pages from multiple PDFs?', answer: 'This tool works with one PDF at a time. For combining pages from multiple PDFs, use the Merge PDF tool.' },
    ],
  },

  'organize-pdf': {
    title: 'Organize PDF',
    metaDescription: 'Reorder, duplicate, and delete PDF pages. Drag and drop to reorganize your documents.',
    keywords: ['organize pdf', 'reorder pdf pages', 'rearrange pdf', 'pdf page organizer'],
    description: `
      <p>Organize PDF provides an intuitive drag-and-drop interface for rearranging pages in your PDF documents. Reorder pages, duplicate important sections, or remove unwanted pages with ease.</p>
      <p>The visual page thumbnails make it easy to identify content and arrange pages exactly as you need them. Perfect for restructuring documents, creating custom page orders, or cleaning up scanned files.</p>
      <p>All organization happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to organize.' },
      { step: 2, title: 'Rearrange Pages', description: 'Drag page thumbnails to reorder them. Click the duplicate or delete buttons on each page as needed.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply your changes and download the reorganized PDF.' },
    ],
    useCases: [
      { title: 'Fix Page Order', description: 'Correct the order of pages that were scanned or combined incorrectly.', icon: 'arrow-up-down' },
      { title: 'Create Custom Order', description: 'Arrange pages in a specific sequence for presentations or reports.', icon: 'list' },
      { title: 'Remove Unwanted Pages', description: 'Delete blank pages, duplicates, or irrelevant content from documents.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Can I duplicate pages?', answer: 'Yes, you can duplicate any page and place the copy anywhere in the document.' },
      { question: 'Is there an undo function?', answer: 'Yes, you can undo and redo changes. You can also reset to the original order at any time.' },
      { question: 'Can I organize multiple PDFs together?', answer: 'This tool works with one PDF at a time. To combine and organize multiple PDFs, first merge them using the Merge PDF tool.' },
    ],
  },

  'delete-pages': {
    title: 'Delete Pages',
    metaDescription: 'Remove unwanted pages from PDF files. Select and delete specific pages easily.',
    keywords: ['delete pdf pages', 'remove pdf pages', 'pdf page remover', 'delete pages from pdf'],
    description: `
      <p>Delete Pages allows you to remove unwanted pages from your PDF documents quickly and easily. Whether you need to remove blank pages, outdated content, or sensitive information, this tool makes it simple.</p>
      <p>Visual page thumbnails help you identify exactly which pages to remove. You can delete individual pages or multiple pages at once.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document from which you want to delete pages.' },
      { step: 2, title: 'Select Pages to Delete', description: 'Click on page thumbnails to mark them for deletion, or enter page numbers in the input field.' },
      { step: 3, title: 'Delete and Download', description: 'Click Delete to remove the selected pages and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Remove Blank Pages', description: 'Clean up documents by removing accidentally included blank pages.', icon: 'file-x' },
      { title: 'Remove Sensitive Content', description: 'Delete pages containing confidential information before sharing documents.', icon: 'shield' },
      { title: 'Streamline Documents', description: 'Remove outdated or irrelevant pages to create more focused documents.', icon: 'filter' },
    ],
    faq: [
      { question: 'Can I recover deleted pages?', answer: 'Deletion is permanent in the output file. Keep a backup of your original document if you might need the pages later.' },
      { question: 'Can I delete multiple pages at once?', answer: 'Yes, you can select and delete multiple pages simultaneously.' },
      { question: 'Will deleting pages affect bookmarks?', answer: 'Bookmarks pointing to deleted pages will be removed. Bookmarks to remaining pages are preserved.' },
    ],
  },


  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: 'Edit Bookmarks',
    metaDescription: 'Add, edit, and manage PDF bookmarks. Create navigation structure for your documents.',
    keywords: ['pdf bookmarks', 'edit bookmarks', 'add bookmarks', 'pdf navigation', 'table of contents'],
    description: `
      <p>Edit Bookmarks allows you to create, modify, and organize bookmarks in your PDF documents. Bookmarks provide quick navigation to specific sections, making long documents easier to use.</p>
      <p>You can add new bookmarks, edit existing ones, reorganize the bookmark hierarchy, or import bookmarks from external sources. This tool is essential for creating professional, navigable documents.</p>
      <p>All editing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to edit.' },
      { step: 2, title: 'Manage Bookmarks', description: 'Add new bookmarks, edit existing ones, or drag to reorganize the hierarchy.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply your changes and download the PDF with updated bookmarks.' },
    ],
    useCases: [
      { title: 'Create Navigation', description: 'Add bookmarks to long documents to help readers navigate to specific sections quickly.', icon: 'navigation' },
      { title: 'Organize Chapters', description: 'Create a hierarchical bookmark structure that mirrors your document\'s chapter organization.', icon: 'book-open' },
      { title: 'Improve Accessibility', description: 'Add bookmarks to make documents more accessible and user-friendly.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Can I create nested bookmarks?', answer: 'Yes, you can create a hierarchical structure with parent and child bookmarks.' },
      { question: 'Can I import bookmarks from a file?', answer: 'Yes, you can import bookmark structures from JSON or text files.' },
      { question: 'Will bookmarks work in all PDF readers?', answer: 'Yes, bookmarks are a standard PDF feature supported by all major PDF readers.' },
    ],
  },

  'table-of-contents': {
    title: 'Table of Contents',
    metaDescription: 'Generate a table of contents for your PDF. Create clickable navigation from bookmarks.',
    keywords: ['pdf table of contents', 'toc generator', 'pdf index', 'document navigation'],
    description: `
      <p>Table of Contents generates a navigable table of contents page for your PDF documents. The TOC can be created from existing bookmarks or custom entries, providing readers with an overview and quick navigation.</p>
      <p>Customize the appearance with different styles, fonts, and layouts. The generated TOC includes clickable links that jump directly to the referenced pages.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure TOC', description: 'Choose to generate from bookmarks or create custom entries. Select style and positioning options.' },
      { step: 3, title: 'Generate and Download', description: 'Click Generate to create the table of contents and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Academic Papers', description: 'Add a professional table of contents to theses, dissertations, and research papers.', icon: 'graduation-cap' },
      { title: 'Business Reports', description: 'Create navigable reports with clear section listings for stakeholders.', icon: 'bar-chart' },
      { title: 'User Manuals', description: 'Generate comprehensive TOCs for technical documentation and user guides.', icon: 'book' },
    ],
    faq: [
      { question: 'Can I customize the TOC appearance?', answer: 'Yes, you can choose from different styles, fonts, and layouts for your table of contents.' },
      { question: 'Where is the TOC inserted?', answer: 'By default, the TOC is inserted at the beginning of the document, but you can choose a different location.' },
      { question: 'Are the TOC entries clickable?', answer: 'Yes, each entry is a clickable link that navigates to the corresponding page.' },
    ],
  },

  'page-numbers': {
    title: 'Page Numbers',
    metaDescription: 'Add page numbers to PDF documents. Customize position, format, and starting number.',
    keywords: ['add page numbers', 'pdf page numbers', 'number pdf pages', 'pdf pagination'],
    description: `
      <p>Page Numbers adds customizable page numbering to your PDF documents. Choose from various formats, positions, and styles to match your document's design.</p>
      <p>You can set the starting number, skip certain pages, and use different numbering formats (1, 2, 3 or i, ii, iii). Perfect for creating professional documents with proper pagination.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Numbering', description: 'Choose position, format, starting number, and which pages to number.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add page numbers and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Professional Documents', description: 'Add page numbers to reports, proposals, and business documents.', icon: 'file-text' },
      { title: 'Academic Papers', description: 'Number pages according to academic formatting requirements.', icon: 'graduation-cap' },
      { title: 'Legal Documents', description: 'Add proper pagination to contracts and legal filings.', icon: 'scale' },
    ],
    faq: [
      { question: 'Can I skip the first page?', answer: 'Yes, you can specify which pages to number and which to skip, such as title pages or cover pages.' },
      { question: 'What number formats are available?', answer: 'You can use Arabic numerals (1, 2, 3), Roman numerals (i, ii, iii or I, II, III), or letters (a, b, c).' },
      { question: 'Can I add "Page X of Y" format?', answer: 'Yes, you can include the total page count in your numbering format.' },
    ],
  },

  'add-watermark': {
    title: 'Add Watermark',
    metaDescription: 'Add text or image watermarks to PDF files. Protect and brand your documents.',
    keywords: ['add watermark', 'pdf watermark', 'stamp pdf', 'brand pdf', 'protect pdf'],
    description: `
      <p>Add Watermark allows you to place text or image watermarks on your PDF documents. Watermarks can indicate document status (Draft, Confidential), add branding, or deter unauthorized copying.</p>
      <p>Customize the watermark's position, size, opacity, rotation, and color. Apply to all pages or select specific pages. The tool supports both text watermarks and image watermarks.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Create Watermark', description: 'Enter text or upload an image for your watermark. Adjust position, size, opacity, and rotation.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add the watermark and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Document Protection', description: 'Add "Confidential" or "Draft" watermarks to indicate document status.', icon: 'shield' },
      { title: 'Brand Documents', description: 'Add company logos or names to official documents.', icon: 'award' },
      { title: 'Copyright Notice', description: 'Add copyright information to protect intellectual property.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Can I use an image as a watermark?', answer: 'Yes, you can upload PNG, JPG, or SVG images to use as watermarks.' },
      { question: 'Can I make the watermark semi-transparent?', answer: 'Yes, you can adjust the opacity from fully transparent to fully opaque.' },
      { question: 'Can I apply different watermarks to different pages?', answer: 'The tool applies the same watermark to selected pages. For different watermarks, process the document multiple times.' },
    ],
  },

  'header-footer': {
    title: 'Header & Footer',
    metaDescription: 'Add headers and footers to PDF documents. Include page numbers, dates, and custom text.',
    keywords: ['pdf header', 'pdf footer', 'add header footer', 'pdf letterhead'],
    description: `
      <p>Header & Footer adds customizable headers and footers to your PDF documents. Include page numbers, dates, document titles, or any custom text in the header or footer areas.</p>
      <p>Position content on the left, center, or right of the header/footer. Use different content for odd and even pages if needed. Perfect for creating professional documents with consistent formatting.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Header/Footer', description: 'Enter text for header and footer areas. Add page numbers, dates, or custom text.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add headers/footers and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Business Documents', description: 'Add company name and page numbers to professional documents.', icon: 'briefcase' },
      { title: 'Legal Documents', description: 'Include case numbers, dates, and page references in legal filings.', icon: 'scale' },
      { title: 'Academic Papers', description: 'Add running headers with paper title and author name.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Can I have different headers on odd and even pages?', answer: 'Yes, you can configure different content for odd and even pages.' },
      { question: 'Can I include the current date?', answer: 'Yes, you can insert dynamic date fields that show the current date.' },
      { question: 'Can I skip the header/footer on certain pages?', answer: 'Yes, you can specify which pages should have headers/footers and which should be skipped.' },
    ],
  },

  'invert-colors': {
    title: 'Invert Colors',
    metaDescription: 'Invert PDF colors for dark mode reading. Convert documents to negative colors.',
    keywords: ['invert pdf colors', 'pdf dark mode', 'negative pdf', 'reverse colors'],
    description: `
      <p>Invert Colors reverses the colors in your PDF documents, creating a negative image effect. This is particularly useful for creating dark mode versions of documents for easier reading in low-light conditions.</p>
      <p>The tool can invert all colors or selectively preserve certain elements like images. Perfect for reducing eye strain when reading documents at night.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Options', description: 'Choose whether to invert all content or preserve images.' },
      { step: 3, title: 'Invert and Download', description: 'Click Invert to process the document and download the result.' },
    ],
    useCases: [
      { title: 'Night Reading', description: 'Create dark mode versions of documents for comfortable reading at night.', icon: 'moon' },
      { title: 'Reduce Eye Strain', description: 'Invert bright documents to reduce eye fatigue during extended reading.', icon: 'eye' },
      { title: 'Print Savings', description: 'Invert documents to reduce ink usage when printing drafts.', icon: 'printer' },
    ],
    faq: [
      { question: 'Will images be inverted too?', answer: 'By default, yes. You can choose to preserve original images while inverting text and backgrounds.' },
      { question: 'Can I invert only specific pages?', answer: 'Yes, you can select which pages to invert.' },
      { question: 'Is the inversion reversible?', answer: 'You can invert the document again to return to approximately the original colors.' },
    ],
  },

  'background-color': {
    title: 'Background Color',
    metaDescription: 'Change PDF background color. Add colored backgrounds to document pages.',
    keywords: ['pdf background color', 'change pdf background', 'colored pdf', 'pdf page color'],
    description: `
      <p>Background Color allows you to change or add background colors to your PDF pages. This can improve readability, add visual interest, or match your branding requirements.</p>
      <p>Choose any color for the background and apply it to all pages or selected pages. The tool preserves all existing content while adding the background layer.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Choose Color', description: 'Select a background color using the color picker or enter a hex code.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add the background and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Improve Readability', description: 'Add a light cream or sepia background to reduce eye strain.', icon: 'eye' },
      { title: 'Brand Documents', description: 'Use brand colors as backgrounds for marketing materials.', icon: 'palette' },
      { title: 'Highlight Sections', description: 'Use different background colors to distinguish document sections.', icon: 'layers' },
    ],
    faq: [
      { question: 'Will the background cover existing content?', answer: 'No, the background is added behind existing content, preserving all text and images.' },
      { question: 'Can I use different colors for different pages?', answer: 'You would need to process the document multiple times for different colors on different pages.' },
      { question: 'Can I remove an existing background?', answer: 'This tool adds backgrounds. To remove backgrounds, you may need to use the Edit PDF tool.' },
    ],
  },

  'text-color': {
    title: 'Change Text Color',
    metaDescription: 'Change text color in PDF documents. Modify the color of all text content.',
    keywords: ['change pdf text color', 'pdf text color', 'modify text color', 'recolor pdf text'],
    description: `
      <p>Change Text Color allows you to modify the color of text in your PDF documents. This is useful for improving contrast, matching branding, or creating visual variations of documents.</p>
      <p>Select a new color and apply it to all text in the document. The tool processes text elements while preserving images and other content.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Choose Color', description: 'Select a new text color using the color picker or enter a hex code.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to change the text color and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Improve Contrast', description: 'Change text color to improve readability against the background.', icon: 'contrast' },
      { title: 'Brand Consistency', description: 'Update text colors to match brand guidelines.', icon: 'palette' },
      { title: 'Accessibility', description: 'Adjust text colors to meet accessibility contrast requirements.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Will all text be changed?', answer: 'Yes, the tool changes the color of all text elements in the document.' },
      { question: 'Can I change only specific text?', answer: 'This tool changes all text. For selective changes, use the Edit PDF tool.' },
      { question: 'Will formatted text (bold, italic) be preserved?', answer: 'Yes, text formatting is preserved; only the color is changed.' },
    ],
  },

  'add-stamps': {
    title: 'Add Stamps',
    metaDescription: 'Add stamps to PDF documents. Use preset or custom stamps for approval, review, and more.',
    keywords: ['pdf stamps', 'add stamp', 'approval stamp', 'pdf rubber stamp'],
    description: `
      <p>Add Stamps allows you to place stamp images on your PDF documents. Use preset stamps like "Approved", "Rejected", "Draft", or upload custom stamp images.</p>
      <p>Position stamps anywhere on the page, resize them, and apply to single or multiple pages. Perfect for document workflows, approvals, and status indicators.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Select Stamp', description: 'Choose a preset stamp or upload a custom stamp image.' },
      { step: 3, title: 'Position and Apply', description: 'Click to place the stamp, adjust position and size, then download.' },
    ],
    useCases: [
      { title: 'Document Approval', description: 'Add "Approved" or "Rejected" stamps to documents in review workflows.', icon: 'check-circle' },
      { title: 'Status Indication', description: 'Mark documents as "Draft", "Final", or "Confidential".', icon: 'tag' },
      { title: 'Quality Control', description: 'Add QC stamps to indicate inspection or review completion.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'What preset stamps are available?', answer: 'Presets include Approved, Rejected, Draft, Final, Confidential, Copy, and more.' },
      { question: 'Can I upload custom stamps?', answer: 'Yes, you can upload PNG or JPG images to use as custom stamps.' },
      { question: 'Can I add multiple stamps to one document?', answer: 'Yes, you can add multiple stamps and position each one independently.' },
    ],
  },

  'remove-annotations': {
    title: 'Remove Annotations',
    metaDescription: 'Remove annotations from PDF files. Delete comments, highlights, and markup.',
    keywords: ['remove pdf annotations', 'delete comments', 'remove highlights', 'clean pdf'],
    description: `
      <p>Remove Annotations strips comments, highlights, sticky notes, and other annotations from your PDF documents. This creates a clean version of the document without markup.</p>
      <p>You can remove all annotations or selectively remove specific types. Perfect for creating final versions of reviewed documents or removing sensitive comments.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Select Annotation Types', description: 'Choose which types of annotations to remove: comments, highlights, links, etc.' },
      { step: 3, title: 'Remove and Download', description: 'Click Remove to strip annotations and download the clean PDF.' },
    ],
    useCases: [
      { title: 'Finalize Documents', description: 'Remove review comments and markup before publishing final documents.', icon: 'file-check' },
      { title: 'Privacy Protection', description: 'Remove comments that may contain sensitive information before sharing.', icon: 'shield' },
      { title: 'Clean Distribution', description: 'Create clean copies of annotated documents for distribution.', icon: 'copy' },
    ],
    faq: [
      { question: 'What types of annotations can be removed?', answer: 'Comments, highlights, underlines, strikethroughs, sticky notes, stamps, and links can all be removed.' },
      { question: 'Can I keep some annotations?', answer: 'Yes, you can select which types of annotations to remove and which to keep.' },
      { question: 'Is this reversible?', answer: 'No, annotation removal is permanent. Keep a backup of the original if needed.' },
    ],
  },

  'form-filler': {
    title: 'Form Filler',
    metaDescription: 'Fill PDF forms online. Complete interactive PDF forms without printing.',
    keywords: ['fill pdf form', 'pdf form filler', 'complete pdf form', 'interactive pdf'],
    description: `
      <p>Form Filler allows you to complete interactive PDF forms directly in your browser. Fill text fields, check boxes, select options, and add signatures without printing the document.</p>
      <p>The tool supports standard PDF forms and XFA forms. Your filled data can be saved and the form can be flattened to prevent further editing.</p>
      <p>All processing happens locally in your browser, ensuring your form data remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF Form', description: 'Drag and drop your PDF form or click to select the file.' },
      { step: 2, title: 'Fill the Form', description: 'Click on form fields to enter text, check boxes, or select options.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to preserve your entries and download the filled form.' },
    ],
    useCases: [
      { title: 'Application Forms', description: 'Complete job applications, permit applications, and registration forms.', icon: 'clipboard' },
      { title: 'Tax Forms', description: 'Fill out tax documents and financial forms electronically.', icon: 'file-text' },
      { title: 'Contracts', description: 'Complete contract forms with your information before signing.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'Can I save my progress?', answer: 'Yes, you can save partially filled forms and continue later.' },
      { question: 'What is form flattening?', answer: 'Flattening converts form fields to static content, preventing further editing.' },
      { question: 'Are XFA forms supported?', answer: 'Yes, the tool supports both standard AcroForms and XFA forms.' },
    ],
  },

  'form-creator': {
    title: 'Form Creator',
    metaDescription: 'Create fillable PDF forms. Add text fields, checkboxes, and dropdowns to documents.',
    keywords: ['create pdf form', 'pdf form creator', 'fillable pdf', 'add form fields'],
    description: `
      <p>Form Creator transforms static PDF documents into interactive fillable forms. Add text fields, checkboxes, radio buttons, dropdowns, and more to create professional forms.</p>
      <p>Drag and drop form elements onto your document, configure field properties, and create forms that can be filled electronically. Perfect for creating applications, surveys, and data collection forms.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document to convert into a form.' },
      { step: 2, title: 'Add Form Fields', description: 'Select field types from the toolbar and click to place them on the document.' },
      { step: 3, title: 'Configure and Save', description: 'Set field properties, then save and download your fillable PDF form.' },
    ],
    useCases: [
      { title: 'Application Forms', description: 'Create fillable job applications, membership forms, and registrations.', icon: 'user-plus' },
      { title: 'Surveys', description: 'Build interactive surveys and questionnaires for data collection.', icon: 'clipboard-list' },
      { title: 'Order Forms', description: 'Create product order forms with quantity fields and checkboxes.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'What field types can I add?', answer: 'Text fields, checkboxes, radio buttons, dropdowns, date pickers, and signature fields.' },
      { question: 'Can I make fields required?', answer: 'Yes, you can mark fields as required and add validation rules.' },
      { question: 'Can I add calculations?', answer: 'Basic calculations like sum and average can be added to numeric fields.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Remove Blank Pages',
    metaDescription: 'Automatically detect and remove blank pages from PDF documents.',
    keywords: ['remove blank pages', 'delete empty pages', 'clean pdf', 'pdf blank page remover'],
    description: `
      <p>Remove Blank Pages automatically detects and removes empty pages from your PDF documents. This is useful for cleaning up scanned documents, removing separator pages, or eliminating accidentally included blank pages.</p>
      <p>The tool uses intelligent detection to identify truly blank pages while preserving pages with minimal content. You can adjust the sensitivity threshold to control what counts as "blank".</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Adjust Threshold', description: 'Set the blank detection threshold if needed (default works for most documents).' },
      { step: 3, title: 'Remove and Download', description: 'Click Remove to delete blank pages and download the cleaned PDF.' },
    ],
    useCases: [
      { title: 'Clean Scanned Documents', description: 'Remove blank pages from batch-scanned documents.', icon: 'scan' },
      { title: 'Remove Separators', description: 'Delete blank separator pages from merged documents.', icon: 'minus' },
      { title: 'Reduce File Size', description: 'Remove unnecessary blank pages to reduce document size.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'How does blank detection work?', answer: 'The tool analyzes page content and considers pages with minimal or no visible content as blank.' },
      { question: 'Can I preview which pages will be removed?', answer: 'Yes, detected blank pages are highlighted for review before removal.' },
      { question: 'What if a page has only a header/footer?', answer: 'You can adjust the threshold to determine whether pages with minimal content should be considered blank.' },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Image to PDF',
    metaDescription: 'Convert any image to PDF. Support for JPG, PNG, WebP, BMP, TIFF, SVG, and HEIC formats.',
    keywords: ['image to pdf', 'convert image', 'photo to pdf', 'picture to pdf'],
    description: `
      <p>Image to PDF converts images of any format into PDF documents. Support for JPG, PNG, WebP, BMP, TIFF, SVG, and HEIC formats makes this the universal image converter.</p>
      <p>Combine multiple images into a single PDF, arrange them in any order, and customize page size and orientation. Perfect for creating photo albums, document archives, or portfolios.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Images', description: 'Drag and drop images of any supported format or click to select files.' },
      { step: 2, title: 'Arrange and Configure', description: 'Reorder images and select page size and orientation options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF and download the result.' },
    ],
    useCases: [
      { title: 'Photo Collections', description: 'Combine photos from various sources into a single PDF album.', icon: 'images' },
      { title: 'Mixed Format Documents', description: 'Convert images from different formats into a unified PDF.', icon: 'file-stack' },
      { title: 'Archive Creation', description: 'Create PDF archives from image collections for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'What image formats are supported?', answer: 'JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC, and HEIF formats are all supported.' },
      { question: 'Can I mix different image formats?', answer: 'Yes, you can combine images of different formats into a single PDF.' },
      { question: 'Will image quality be preserved?', answer: 'Yes, images are embedded at their original quality unless you choose to compress them.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG to PDF',
    metaDescription: 'Convert PNG images to PDF. Preserve transparency and combine multiple PNG files.',
    keywords: ['png to pdf', 'convert png', 'png converter', 'transparent image to pdf'],
    description: `
      <p>PNG to PDF converts your PNG images into PDF documents while preserving transparency. Perfect for graphics, logos, screenshots, and images with transparent backgrounds.</p>
      <p>Combine multiple PNG files into a single PDF, arrange them in any order, and customize page settings. The conversion maintains the high quality of your original images.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PNG Files', description: 'Drag and drop your PNG images or click to select files.' },
      { step: 2, title: 'Arrange and Configure', description: 'Reorder images and select page size options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF and download.' },
    ],
    useCases: [
      { title: 'Graphics Portfolio', description: 'Compile PNG graphics and designs into a professional portfolio.', icon: 'palette' },
      { title: 'Screenshot Documentation', description: 'Convert screenshots into PDF documentation.', icon: 'monitor' },
      { title: 'Logo Collections', description: 'Create PDF catalogs of logos and brand assets.', icon: 'award' },
    ],
    faq: [
      { question: 'Is transparency preserved?', answer: 'PNG transparency is preserved in the PDF output.' },
      { question: 'What about PNG animations?', answer: 'Animated PNGs are converted as static images using the first frame.' },
      { question: 'Can I set a background color?', answer: 'Yes, you can choose a background color for transparent areas.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP to PDF',
    metaDescription: 'Convert WebP images to PDF. Modern image format conversion with quality preservation.',
    keywords: ['webp to pdf', 'convert webp', 'webp converter', 'web image to pdf'],
    description: `
      <p>WebP to PDF converts modern WebP images into PDF documents. WebP is a popular web image format, and this tool makes it easy to convert these images for printing or archiving.</p>
      <p>Combine multiple WebP files into a single PDF with customizable page settings. The conversion preserves image quality while creating compact PDF files.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload WebP Files', description: 'Drag and drop your WebP images or click to select files.' },
      { step: 2, title: 'Configure Options', description: 'Arrange images and select page size and orientation.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Web Content Archiving', description: 'Convert web images to PDF for offline archiving.', icon: 'globe' },
      { title: 'Print Preparation', description: 'Convert WebP images to PDF for printing purposes.', icon: 'printer' },
      { title: 'Format Standardization', description: 'Convert modern WebP to universally compatible PDF.', icon: 'file-check' },
    ],
    faq: [
      { question: 'What is WebP format?', answer: 'WebP is a modern image format developed by Google that provides superior compression for web images.' },
      { question: 'Is quality preserved?', answer: 'Yes, the conversion preserves the original image quality.' },
      { question: 'Can I convert animated WebP?', answer: 'Animated WebP files are converted as static images.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG to PDF',
    metaDescription: 'Convert SVG vector graphics to PDF. Preserve scalability and quality.',
    keywords: ['svg to pdf', 'convert svg', 'vector to pdf', 'scalable graphics to pdf'],
    description: `
      <p>SVG to PDF converts scalable vector graphics into PDF documents while preserving their vector quality. SVG files remain sharp at any size, and this quality is maintained in the PDF output.</p>
      <p>Perfect for converting logos, icons, illustrations, and technical drawings. The resulting PDF maintains the scalability of the original vector graphics.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload SVG Files', description: 'Drag and drop your SVG files or click to select.' },
      { step: 2, title: 'Configure Settings', description: 'Select page size and arrangement options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your vector PDF.' },
    ],
    useCases: [
      { title: 'Logo Conversion', description: 'Convert SVG logos to PDF for print materials.', icon: 'award' },
      { title: 'Technical Drawings', description: 'Convert CAD exports and technical illustrations to PDF.', icon: 'ruler' },
      { title: 'Icon Collections', description: 'Create PDF catalogs of icon sets and graphics.', icon: 'grid' },
    ],
    faq: [
      { question: 'Is vector quality preserved?', answer: 'Yes, SVG vector quality is fully preserved in the PDF output.' },
      { question: 'Can I convert complex SVGs?', answer: 'Yes, complex SVGs with gradients, filters, and effects are supported.' },
      { question: 'What about embedded fonts?', answer: 'Embedded fonts in SVG files are preserved in the PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP to PDF',
    metaDescription: 'Convert BMP bitmap images to PDF. Legacy format support with quality preservation.',
    keywords: ['bmp to pdf', 'convert bmp', 'bitmap to pdf', 'bmp converter'],
    description: `
      <p>BMP to PDF converts bitmap images into PDF documents. BMP is a legacy image format commonly used in Windows environments, and this tool makes it easy to convert these files to modern PDF format.</p>
      <p>Combine multiple BMP files into a single PDF with customizable settings. The conversion compresses the typically large BMP files while maintaining image quality.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload BMP Files', description: 'Drag and drop your BMP images or click to select files.' },
      { step: 2, title: 'Configure Options', description: 'Arrange images and select page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Legacy File Conversion', description: 'Convert old BMP files to modern PDF format.', icon: 'history' },
      { title: 'Windows Screenshots', description: 'Convert Windows bitmap screenshots to PDF.', icon: 'monitor' },
      { title: 'Archive Modernization', description: 'Update legacy image archives to PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Will file size be reduced?', answer: 'Yes, BMP files are typically compressed significantly when converted to PDF.' },
      { question: 'Is quality preserved?', answer: 'Yes, image quality is maintained during conversion.' },
      { question: 'What BMP color depths are supported?', answer: 'All standard BMP color depths are supported, including 24-bit and 32-bit.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD to PDF',
    metaDescription: 'Convert Adobe Photoshop (PSD) files to PDF format. Supports multiple files and preserves image quality.',
    keywords: ['psd to pdf', 'convert psd', 'photoshop to pdf', 'psd converter', 'adobe psd to pdf'],
    description: `
      <p>PSD to PDF converts Adobe Photoshop (PSD) files into PDF documents. This tool allows you to view and share PSD designs without needing Photoshop installed.</p>
      <p>You can convert multiple PSD files at once and combine them into a single PDF document. The tool processes each PSD file, rendering the visible layers into high-quality PDF pages.</p>
      <p>All conversion happens locally in your browser, ensuring your designs remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PSD Files', description: 'Drag and drop your PSD or PSB files, or click to select them from your device.' },
      { step: 2, title: 'Arrange Order', description: 'Drag and drop the file thumbnails to arrange them in the desired order.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to render the PSDs and download your PDF document.' },
    ],
    useCases: [
      { title: 'Share Designs', description: 'Share Photoshop designs with clients or colleagues who don\'t have Photoshop.', icon: 'share-2' },
      { title: 'Portfolio Creation', description: 'Compile your design work into a professional PDF portfolio.', icon: 'layout' },
      { title: 'Print Preparation', description: 'Convert designs to PDF for printing purposes.', icon: 'printer' },
    ],
    faq: [
      { question: 'Do I need Photoshop installed?', answer: 'No, this tool works entirely in your browser without requiring Adobe Photoshop.' },
      { question: 'Are layers preserved?', answer: 'The tool renders the visible state of the PSD (composite image). Individual layers are flattened in the PDF.' },
      { question: 'What is the maximum file size?', answer: 'You can upload files up to 100MB each. Large PSD files may take a moment to process.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC to PDF',
    metaDescription: 'Convert iPhone HEIC photos to PDF. Apple image format conversion made easy.',
    keywords: ['heic to pdf', 'convert heic', 'iphone photo to pdf', 'apple image to pdf'],
    description: `
      <p>HEIC to PDF converts Apple's High Efficiency Image Format photos into PDF documents. HEIC is the default photo format on iPhones and iPads, and this tool makes sharing these photos easy.</p>
      <p>Combine multiple HEIC photos into a single PDF, perfect for creating photo albums or document archives from your iPhone photos.</p>
      <p>All conversion happens in your browser, ensuring your photos remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload HEIC Files', description: 'Drag and drop your HEIC photos or click to select files.' },
      { step: 2, title: 'Arrange Photos', description: 'Reorder photos and select page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'iPhone Photo Albums', description: 'Create PDF albums from iPhone photos for sharing.', icon: 'smartphone' },
      { title: 'Document Scanning', description: 'Convert iPhone document scans to PDF format.', icon: 'scan' },
      { title: 'Cross-Platform Sharing', description: 'Convert HEIC to PDF for universal compatibility.', icon: 'share-2' },
    ],
    faq: [
      { question: 'What is HEIC format?', answer: 'HEIC (High Efficiency Image Container) is Apple\'s image format that provides better compression than JPEG.' },
      { question: 'Are Live Photos supported?', answer: 'Live Photos are converted as static images using the key frame.' },
      { question: 'Is EXIF data preserved?', answer: 'Photo metadata can be optionally preserved or removed during conversion.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF to PDF',
    metaDescription: 'Convert TIFF images to PDF. Support for multi-page TIFF files and high-quality conversion.',
    keywords: ['tiff to pdf', 'convert tiff', 'tif to pdf', 'multi-page tiff'],
    description: `
      <p>TIFF to PDF converts TIFF images, including multi-page TIFF files, into PDF documents. TIFF is commonly used for high-quality scans and professional graphics.</p>
      <p>Multi-page TIFF files are automatically converted to multi-page PDFs. The conversion preserves the high quality of your original images.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload TIFF Files', description: 'Drag and drop your TIFF files or click to select.' },
      { step: 2, title: 'Configure Options', description: 'Select page settings and compression options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Convert high-quality scans from TIFF to PDF.', icon: 'scan' },
      { title: 'Professional Graphics', description: 'Convert professional TIFF graphics for distribution.', icon: 'image' },
      { title: 'Archive Conversion', description: 'Convert TIFF archives to more accessible PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are multi-page TIFFs supported?', answer: 'Yes, multi-page TIFF files are converted to multi-page PDFs automatically.' },
      { question: 'Is quality preserved?', answer: 'Yes, TIFF quality is fully preserved in the PDF output.' },
      { question: 'What compression is used?', answer: 'You can choose between lossless and lossy compression options.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Text to PDF',
    metaDescription: 'Convert plain text files to PDF. Customize fonts, margins, and page layout.',
    keywords: ['txt to pdf', 'text to pdf', 'convert text file', 'plain text to pdf'],
    description: `
      <p>Text to PDF converts plain text files into formatted PDF documents. Customize fonts, sizes, margins, and page layout to create professional-looking documents from simple text.</p>
      <p>Perfect for converting code files, logs, notes, or any plain text content into shareable PDF format.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Text File', description: 'Drag and drop your .txt file or click to select.' },
      { step: 2, title: 'Customize Formatting', description: 'Choose font, size, margins, and page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your formatted PDF.' },
    ],
    useCases: [
      { title: 'Code Documentation', description: 'Convert source code files to PDF for documentation.', icon: 'code' },
      { title: 'Log Archives', description: 'Convert log files to PDF for archival purposes.', icon: 'file-text' },
      { title: 'Note Conversion', description: 'Convert plain text notes to formatted PDF documents.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'What fonts are available?', answer: 'Multiple fonts are available including monospace fonts for code.' },
      { question: 'Is line wrapping automatic?', answer: 'Yes, long lines are automatically wrapped to fit the page.' },
      { question: 'Can I preserve formatting?', answer: 'Whitespace and indentation from the original text are preserved.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON to PDF',
    metaDescription: 'Convert JSON files to formatted PDF. Syntax highlighting and structured output.',
    keywords: ['json to pdf', 'convert json', 'json viewer', 'json formatter'],
    description: `
      <p>JSON to PDF converts JSON data files into formatted, readable PDF documents. The output includes syntax highlighting and proper indentation for easy reading.</p>
      <p>Perfect for documenting API responses, configuration files, or any JSON data that needs to be shared or archived in a readable format.</p>
      <p>All conversion happens in your browser, ensuring your data remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload JSON File', description: 'Drag and drop your .json file or click to select.' },
      { step: 2, title: 'Configure Display', description: 'Choose formatting options and syntax highlighting.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your formatted PDF.' },
    ],
    useCases: [
      { title: 'API Documentation', description: 'Convert API responses to PDF for documentation.', icon: 'code' },
      { title: 'Config Archives', description: 'Archive configuration files in readable PDF format.', icon: 'settings' },
      { title: 'Data Reports', description: 'Create PDF reports from JSON data exports.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Is syntax highlighting included?', answer: 'Yes, JSON syntax is highlighted with colors for keys, values, and types.' },
      { question: 'How is nested data handled?', answer: 'Nested objects and arrays are properly indented for readability.' },
      { question: 'What about large JSON files?', answer: 'Large files are paginated automatically across multiple pages.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word to PDF',
    metaDescription: 'Convert Word documents (DOCX) to PDF. Preserve formatting and layout in your converted documents.',
    keywords: ['word to pdf', 'docx to pdf', 'convert word', 'word converter', 'microsoft word to pdf'],
    description: `
      <p>Word to PDF converts Microsoft Word documents into PDF format while preserving the original formatting, layout, and content structure.</p>
      <p>Upload your DOCX files and get high-quality PDF output suitable for sharing, printing, or archiving. The conversion maintains text formatting, paragraph styles, and basic document structure.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Word Document', description: 'Drag and drop your .docx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will load the document and prepare it for conversion.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Document Sharing', description: 'Convert Word documents to PDF for universal sharing and viewing.', icon: 'share-2' },
      { title: 'Print Preparation', description: 'Create print-ready PDFs from Word documents.', icon: 'printer' },
      { title: 'Document Archive', description: 'Archive Word documents in stable PDF format for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'Is .doc format supported?', answer: 'Currently only .docx format is supported. Please convert .doc files to .docx first using Microsoft Word or LibreOffice.' },
      { question: 'Are images preserved?', answer: 'Text content and basic formatting are preserved. Complex layouts with many images may have simplified rendering.' },
      { question: 'Is the conversion secure?', answer: 'Yes, all processing happens in your browser. Your documents never leave your device.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel to PDF',
    metaDescription: 'Convert Excel spreadsheets (XLSX) to PDF. Preserve tables and data in your converted documents.',
    keywords: ['excel to pdf', 'xlsx to pdf', 'convert excel', 'spreadsheet to pdf', 'microsoft excel to pdf'],
    description: `
      <p>Excel to PDF converts Microsoft Excel spreadsheets into PDF format while preserving table structure and data organization.</p>
      <p>Upload your XLSX files and get clean PDF output with properly formatted tables. Each sheet in your workbook becomes a separate section in the PDF.</p>
      <p>All conversion happens locally in your browser, ensuring your data remains private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Excel File', description: 'Drag and drop your .xlsx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will load the spreadsheet and convert all sheets.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Report Sharing', description: 'Convert Excel reports to PDF for distribution to stakeholders.', icon: 'file-text' },
      { title: 'Data Archiving', description: 'Archive spreadsheet data in stable PDF format.', icon: 'archive' },
      { title: 'Print Preparation', description: 'Create print-ready PDFs from Excel worksheets.', icon: 'printer' },
    ],
    faq: [
      { question: 'Are multiple sheets supported?', answer: 'Yes, all sheets in the workbook are converted and included in the PDF.' },
      { question: 'Is .xls format supported?', answer: 'Currently only .xlsx format is supported. Please save .xls files as .xlsx first.' },
      { question: 'Are formulas preserved?', answer: 'The PDF shows calculated values. Formulas are not executable in PDF format.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint to PDF',
    metaDescription: 'Convert PowerPoint presentations (PPTX) to PDF. Preserve slides and content for easy sharing.',
    keywords: ['powerpoint to pdf', 'pptx to pdf', 'convert pptx', 'presentation to pdf', 'slides to pdf'],
    description: `
      <p>PowerPoint to PDF converts Microsoft PowerPoint presentations into PDF format, preserving slide content and text for easy sharing and viewing.</p>
      <p>Each slide becomes a page in the PDF, maintaining the presentation flow. Perfect for sharing presentations with people who don't have PowerPoint installed.</p>
      <p>All conversion happens locally in your browser, ensuring your presentations remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PowerPoint File', description: 'Drag and drop your .pptx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will extract slide content and create the PDF.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Presentation Sharing', description: 'Share presentations with anyone without requiring PowerPoint.', icon: 'share-2' },
      { title: 'Handout Creation', description: 'Create PDF handouts from your presentation slides.', icon: 'file-text' },
      { title: 'Archive Presentations', description: 'Archive presentations in stable PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are animations preserved?', answer: 'PDF is a static format, so animations and transitions are not preserved. Each slide becomes a static page.' },
      { question: 'Is .ppt format supported?', answer: 'Currently only .pptx format is supported. Please convert .ppt files to .pptx first.' },
      { question: 'Are speaker notes included?', answer: 'Currently, speaker notes are not included in the PDF output.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS to PDF',
    metaDescription: 'Convert XPS documents to PDF format. High-fidelity conversion preserving layout and graphics.',
    keywords: ['xps to pdf', 'convert xps', 'xps converter', 'microsoft xps to pdf', 'oxps to pdf'],
    description: `
      <p>XPS to PDF converts Microsoft XPS (XML Paper Specification) documents into PDF format while preserving the original layout, text, and vector graphics.</p>
      <p>XPS is a fixed-document format similar to PDF. This tool provides high-fidelity conversion using native XPS parsing, ensuring accurate reproduction of your documents.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload XPS File', description: 'Drag and drop your .xps file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will parse and convert the XPS document.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Format Conversion', description: 'Convert XPS documents to more widely supported PDF format.', icon: 'file' },
      { title: 'Document Sharing', description: 'Share XPS documents with users who don\'t have XPS viewers.', icon: 'share-2' },
      { title: 'Archive Migration', description: 'Migrate XPS archives to PDF format for better compatibility.', icon: 'archive' },
    ],
    faq: [
      { question: 'What is XPS format?', answer: 'XPS (XML Paper Specification) is Microsoft\'s fixed-document format, similar to PDF. It\'s commonly used for Windows printing.' },
      { question: 'Is the conversion lossless?', answer: 'Yes, the conversion preserves text, graphics, and layout with high fidelity.' },
      { question: 'Are multi-page XPS files supported?', answer: 'Yes, all pages in the XPS document are converted to the PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF to PDF',
    metaDescription: 'Convert RTF (Rich Text Format) files to PDF. Preserve text formatting in your documents.',
    keywords: ['rtf to pdf', 'convert rtf', 'rich text to pdf', 'rtf converter'],
    description: `
      <p>RTF to PDF converts Rich Text Format files into PDF documents. RTF is a widely supported text format that includes basic formatting like fonts, colors, and styles.</p>
      <p>Upload your RTF files and get clean PDF output while preserving text content and basic formatting. Perfect for converting legacy documents to modern PDF format.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload RTF File', description: 'Drag and drop your .rtf file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will parse and convert the RTF content.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Legacy Conversion', description: 'Convert old RTF documents to modern PDF format.', icon: 'history' },
      { title: 'Document Sharing', description: 'Share RTF documents in universally viewable PDF format.', icon: 'share-2' },
      { title: 'Archive Documents', description: 'Archive RTF files in stable PDF format for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'What formatting is preserved?', answer: 'Basic text formatting including fonts, paragraphs, and styles are converted. Complex RTF features may be simplified.' },
      { question: 'Can I convert multiple RTF files?', answer: 'Currently, one file is converted at a time. Use Merge PDF to combine multiple converted files.' },
      { question: 'Are embedded images supported?', answer: 'Text content is the primary focus. Embedded objects may not be rendered.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB to PDF',
    metaDescription: 'Convert EPUB e-books to PDF. Preserve formatting, images, and chapter structure.',
    keywords: ['epub to pdf', 'convert epub', 'ebook to pdf', 'epub converter'],
    description: `
      <p>EPUB to PDF converts electronic book files into high-quality PDF documents. EPUB is the most popular e-book format, used by most e-readers and digital libraries.</p>
      <p>This tool preserves text formatting, images, and the chapter structure of your e-books. Perfect for printing, archiving, or sharing e-books in a universally viewable format.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private and the conversion is fast.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload EPUB File', description: 'Drag and drop your .epub file or click to select from your device.' },
      { step: 2, title: 'Wait for Conversion', description: 'The tool will render and convert all pages of your e-book.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Print E-books', description: 'Convert e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Archive Books', description: 'Store e-books in long-term stable PDF format.', icon: 'archive' },
      { title: 'Share Documents', description: 'Share e-books with anyone, even without an e-reader.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Is the formatting preserved?', answer: 'Yes! This tool uses native EPUB rendering, preserving text formatting, images, and layout with high fidelity.' },
      { question: 'Are DRM-protected EPUBs supported?', answer: 'No, DRM-protected e-books cannot be converted. Only DRM-free EPUB files are supported.' },
      { question: 'How is page size determined?', answer: 'EPUB content is rendered to standard A4 page size for optimal readability.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI to PDF',
    metaDescription: 'Convert MOBI e-books to PDF. Support for Kindle format with high-quality rendering.',
    keywords: ['mobi to pdf', 'convert mobi', 'kindle to pdf', 'azw to pdf', 'mobi converter'],
    description: `
      <p>MOBI to PDF converts Amazon Kindle e-book files into high-quality PDF documents. MOBI format (including AZW and AZW3) is Amazon's proprietary e-book format used on Kindle devices.</p>
      <p>This tool preserves text formatting, images, and the structure of your Kindle books. Perfect for printing, archiving, or reading on devices that don't support MOBI format.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload MOBI File', description: 'Drag and drop your .mobi, .azw, or .azw3 file or click to select from your device.' },
      { step: 2, title: 'Wait for Conversion', description: 'The tool will render and convert all pages of your e-book.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Print Kindle Books', description: 'Convert Kindle e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Archive Books', description: 'Store Kindle books in universal PDF format.', icon: 'archive' },
      { title: 'Cross-Device Reading', description: 'Read Kindle books on devices that only support PDF.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'What MOBI formats are supported?', answer: 'This tool supports .mobi, .azw, and .azw3 files (non-DRM versions).' },
      { question: 'Are DRM-protected Kindle books supported?', answer: 'No, DRM-protected e-books cannot be converted. Only DRM-free files are supported.' },
      { question: 'Will my formatting be preserved?', answer: 'Yes! The tool uses native MOBI rendering to preserve text, images, and layout.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU to PDF',
    metaDescription: 'Convert DJVU document files to PDF. High-quality rendering for scanned documents and books.',
    keywords: ['djvu to pdf', 'convert djvu', 'djvu converter', 'djvu pdf', 'djv to pdf'],
    description: `
      <p>DJVU to PDF converts DjVu document files into high-quality PDF documents. DjVu is a computer file format designed primarily to store scanned documents, especially those containing a combination of text, line drawings, and photographs.</p>
      <p>This tool renders each page of your DJVU file at your chosen DPI (dots per inch) and combines them into a searchable PDF document. Perfect for converting scanned books, technical manuals, and archival documents.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload DJVU File', description: 'Drag and drop your .djvu or .djv file, or click to select from your device.' },
      { step: 2, title: 'Configure Options', description: 'Choose output DPI (72, 150, or 300) and image quality for the PDF.' },
      { step: 3, title: 'Convert & Download', description: 'Click Convert to PDF and download your converted document.' },
    ],
    useCases: [
      { title: 'Archive Documents', description: 'Convert DJVU archives to universal PDF format.', icon: 'archive' },
      { title: 'Share Scanned Books', description: 'Share scanned books in PDF format for wider compatibility.', icon: 'share-2' },
      { title: 'Print Documents', description: 'Convert DJVU to high-quality PDF for printing.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is DJVU format?', answer: 'DjVu is a file format designed for storing scanned documents, especially those with text, drawings, and images. It offers better compression than PDF for scanned content.' },
      { question: 'What DPI should I choose?', answer: '72 DPI is suitable for web viewing, 150 DPI for standard documents, and 300 DPI for high-quality printing.' },
      { question: 'Will the text be searchable?', answer: 'The text will be rendered as images. If you need searchable text, consider using our OCR PDF tool after conversion.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 to PDF',
    metaDescription: 'Convert FictionBook (FB2) e-books to PDF. Supports multiple files with high-quality rendering.',
    keywords: ['fb2 to pdf', 'convert fb2', 'fictionbook to pdf', 'fb2 converter', 'fb2.zip to pdf'],
    description: `
      <p>FB2 to PDF converts FictionBook (FB2) e-book files into high-quality PDF documents. FB2 is a popular XML-based e-book format widely used in Russia and Eastern Europe.</p>
      <p>This tool supports both .fb2 and .fb2.zip files, and can process multiple files at once. It preserves text formatting, images, and the chapter structure of your e-books.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private and the conversion is fast.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload FB2 Files', description: 'Drag and drop one or more .fb2 or .fb2.zip files, or click to select from your device.' },
      { step: 2, title: 'Select Quality', description: 'Choose output quality: Low (72 DPI), Medium (150 DPI), or High (300 DPI).' },
      { step: 3, title: 'Convert & Download', description: 'Click Convert to PDF and download your converted document(s).' },
    ],
    useCases: [
      { title: 'Print E-books', description: 'Convert FB2 e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Batch Conversion', description: 'Convert multiple FB2 files to PDF at once.', icon: 'layers' },
      { title: 'Universal Format', description: 'Share e-books in PDF format that works on any device.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Can I convert multiple FB2 files at once?', answer: 'Yes! This tool supports batch conversion of up to 20 FB2 files simultaneously.' },
      { question: 'Are .fb2.zip files supported?', answer: 'Yes, the tool automatically extracts and converts FB2 files from .fb2.zip archives.' },
      { question: 'Is the formatting preserved?', answer: 'Yes! The tool uses native FB2 rendering, preserving text formatting, images, and chapter structure with high fidelity.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'Convert PDF Pages to JPG',
    metaDescription: 'Convert PDF pages to JPG online. Export one page or every page as high-quality JPG images for sharing, slides, social posts, or web use.',
    keywords: ['convert pdf pages to jpg', 'save pdf page as jpg', 'convert one pdf page to jpg', 'pdf to jpg high quality'],
    description:       `
      <p>Convert PDF pages to JPG when you need to save a PDF page as an image. This tool lets you export one page or multiple pages as high-quality JPG files online.</p>
      <p>It is useful for slides, brochures, reports, social posts, previews, and web uploads. If a PDF is harder to share than an image, converting PDF pages to JPG gives you a faster and more flexible format. If you later want to bundle those exported images back into one file, you can <a href="/tools/jpg-to-pdf">combine JPG images into one PDF</a>.</p>
      <p>All conversion happens in your browser, so your PDF stays on your device and remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to convert.' },
      { step: 2, title: 'Choose Pages and Quality', description: 'Select one page, several pages, or all pages, then adjust image quality or resolution if needed.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to export JPG files and download the result.' },
    ],
    useCases: [
      { title: 'Save PDF Pages as Images', description: 'Save a single PDF page as a JPG image for messaging, email, or quick sharing.', icon: 'image' },
      { title: 'Convert Slides to JPG', description: 'Convert presentation or report pages into JPG files for slides, thumbnails, or previews.', icon: 'presentation' },
      { title: 'Export PDF Pages for Social Media', description: 'Export brochure or flyer pages as images for websites, social posts, or design handoff.', icon: 'share-2' },
    ],
    faq: [
      { question: 'How do I convert one PDF page to JPG?', answer: 'Yes. You can export just one page or choose a custom page range instead of converting the entire PDF.' },
      { question: 'Does each PDF page get saved as a separate JPG?', answer: 'Yes. Each converted page is usually exported as its own JPG image file. If you need to regroup those images afterward, you can <a href="/tools/jpg-to-pdf">turn JPG pages back into one PDF</a>.' },
      { question: 'How do I convert PDF to JPG in high quality?', answer: 'Use a higher DPI or image quality setting if available. That usually produces sharper text and cleaner images.' },
    ],
  },
  'pdf-to-png': {
    title: 'PDF to PNG',
    metaDescription: 'Convert PDF pages to PNG images. Lossless quality with transparency support.',
    keywords: ['pdf to png', 'convert pdf to png', 'pdf image extraction', 'lossless pdf conversion'],
    description: `
      <p>PDF to PNG converts PDF document pages into high-quality PNG images with lossless compression. PNG format preserves image quality perfectly and supports transparency.</p>
      <p>Ideal for extracting graphics, diagrams, or any content where quality preservation is critical.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Options', description: 'Select pages and set resolution (DPI) options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to extract PNG images.' },
    ],
    useCases: [
      { title: 'Graphics Extraction', description: 'Extract diagrams and graphics with perfect quality.', icon: 'image' },
      { title: 'Design Assets', description: 'Convert PDF designs to PNG for editing software.', icon: 'palette' },
      { title: 'Documentation', description: 'Create high-quality images for technical documentation.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Why choose PNG over JPG?', answer: 'PNG offers lossless compression and transparency support, ideal for graphics and text.' },
      { question: 'Are transparent backgrounds supported?', answer: 'Yes, PDF pages with transparency are preserved in PNG output.' },
      { question: 'What DPI should I use?', answer: 'Use 150 DPI for screen viewing, 300 DPI for printing.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF to WebP',
    metaDescription: 'Convert PDF pages to WebP images. Modern format with excellent compression.',
    keywords: ['pdf to webp', 'convert pdf to webp', 'modern image format', 'web optimized images'],
    description: `
      <p>PDF to WebP converts PDF document pages into WebP images, Google's modern image format that offers excellent compression with high quality.</p>
      <p>WebP images are smaller than JPG or PNG while maintaining comparable quality, making them ideal for web use.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Quality Options', description: 'Choose pages and set quality/compression settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create WebP images.' },
    ],
    useCases: [
      { title: 'Web Optimization', description: 'Create web-optimized images from PDF content.', icon: 'globe' },
      { title: 'Bandwidth Savings', description: 'Reduce image file sizes for faster loading.', icon: 'zap' },
      { title: 'Modern Websites', description: 'Use modern image formats for contemporary web projects.', icon: 'layout' },
    ],
    faq: [
      { question: 'What is WebP format?', answer: 'WebP is a modern image format by Google offering superior compression.' },
      { question: 'Is WebP widely supported?', answer: 'Yes, all modern browsers support WebP format.' },
      { question: 'How much smaller are WebP files?', answer: 'WebP files are typically 25-35% smaller than equivalent JPG files.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF to BMP',
    metaDescription: 'Convert PDF pages to BMP bitmap images. Uncompressed format for maximum compatibility.',
    keywords: ['pdf to bmp', 'convert pdf to bitmap', 'uncompressed images', 'legacy format'],
    description: `
      <p>PDF to BMP converts PDF document pages into BMP bitmap images. BMP is an uncompressed format that ensures maximum compatibility with legacy systems and applications.</p>
      <p>While BMP files are larger than compressed formats, they offer perfect quality and universal compatibility.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Pages', description: 'Choose which pages to convert and set DPI.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create BMP images.' },
    ],
    useCases: [
      { title: 'Legacy Systems', description: 'Create images compatible with older software.', icon: 'history' },
      { title: 'Windows Applications', description: 'Generate BMP files for Windows-specific applications.', icon: 'monitor' },
      { title: 'Uncompressed Archives', description: 'Create uncompressed image archives from PDFs.', icon: 'archive' },
    ],
    faq: [
      { question: 'Why use BMP format?', answer: 'BMP offers uncompressed quality and maximum compatibility with legacy systems.' },
      { question: 'Are BMP files larger?', answer: 'Yes, BMP files are uncompressed and significantly larger than JPG or PNG.' },
      { question: 'What color depths are supported?', answer: '24-bit and 32-bit color depths are supported.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF to TIFF',
    metaDescription: 'Convert PDF to TIFF images. Professional quality with multi-page support.',
    keywords: ['pdf to tiff', 'convert pdf to tiff', 'professional images', 'multi-page tiff'],
    description: `
      <p>PDF to TIFF converts PDF documents into high-quality TIFF images. TIFF is the preferred format for professional printing and archiving due to its lossless compression.</p>
      <p>Create single-page TIFFs or combine all pages into a multi-page TIFF file. Perfect for professional and archival purposes.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Output', description: 'Choose single or multi-page TIFF and set DPI.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create TIFF images.' },
    ],
    useCases: [
      { title: 'Professional Printing', description: 'Create print-ready TIFF files from PDF documents.', icon: 'printer' },
      { title: 'Document Archiving', description: 'Archive documents in high-quality TIFF format.', icon: 'archive' },
      { title: 'Publishing', description: 'Convert PDFs to TIFF for publishing workflows.', icon: 'book' },
    ],
    faq: [
      { question: 'Can I create multi-page TIFFs?', answer: 'Yes, you can combine all PDF pages into a single multi-page TIFF.' },
      { question: 'What compression options are available?', answer: 'LZW, ZIP, and no compression options are available.' },
      { question: 'What DPI should I use for printing?', answer: 'Use 300 DPI or higher for professional printing.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF to SVG',
    metaDescription: 'Convert PDF pages to SVG vector graphics. Perfect scalability at any size with individual page export.',
    keywords: ['pdf to svg', 'convert pdf to svg', 'vector graphics', 'scalable pdf', 'svg converter'],
    description: `
      <p>PDF to SVG converts each page of your PDF document into a scalable vector graphic (SVG). SVG is a vector format that maintains perfect quality at any zoom level or print size.</p>
      <p>Unlike raster formats (JPG, PNG), SVG graphics never become pixelated when scaled. This makes them ideal for logos, diagrams, technical drawings, and any content that needs to be displayed at different sizes.</p>
      <p>Preview each converted page and download them individually or as a ZIP file. All processing happens locally in your browser, ensuring complete privacy for your documents.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to browse and select.' },
      { step: 2, title: 'Configure Options', description: 'Set the resolution quality and optionally specify page ranges.' },
      { step: 3, title: 'Preview and Convert', description: 'Click Convert to process. Preview each page by clicking on thumbnails.' },
      { step: 4, title: 'Download', description: 'Download individual SVG files or all pages as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Logos and Graphics', description: 'Extract logos and vector graphics from PDFs for use in design software.', icon: 'pen-tool' },
      { title: 'Technical Diagrams', description: 'Convert technical drawings and diagrams to scalable SVG format.', icon: 'ruler' },
      { title: 'Web Development', description: 'Create web-ready SVG files from PDF content for responsive websites.', icon: 'globe' },
      { title: 'Print at Any Size', description: 'Generate vector graphics that print perfectly at any size.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is SVG format?', answer: 'SVG (Scalable Vector Graphics) is a vector image format that can be scaled to any size without losing quality. It is widely used for logos, icons, and web graphics.' },
      { question: 'Will the SVG be truly vector?', answer: 'The SVG contains a high-resolution rendering of the PDF page. For PDFs with vector content, you get crisp output at any scale.' },
      { question: 'Can I preview before downloading?', answer: 'Yes! Click on any thumbnail to see a full-size preview of the SVG. You can download individual pages or all at once.' },
      { question: 'What resolution should I choose?', answer: 'Higher resolution (216 or 288 DPI) produces larger, more detailed SVGs. Use lower settings for faster processing and smaller files.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF to Greyscale',
    metaDescription: 'Convert color PDF to greyscale. Reduce file size and prepare for black-and-white printing.',
    keywords: ['pdf to greyscale', 'grayscale pdf', 'black and white pdf', 'remove colors'],
    description: `
      <p>PDF to Greyscale converts color PDF documents to greyscale (black and white). This reduces file size and prepares documents for black-and-white printing.</p>
      <p>The conversion preserves text clarity and image detail while removing color information. Perfect for draft printing or creating printer-friendly versions.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your color PDF file or click to select.' },
      { step: 2, title: 'Preview Conversion', description: 'Preview how the greyscale version will look.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create the greyscale PDF.' },
    ],
    useCases: [
      { title: 'Print Savings', description: 'Convert to greyscale to save on color printing costs.', icon: 'printer' },
      { title: 'Draft Documents', description: 'Create black-and-white drafts for review.', icon: 'file-text' },
      { title: 'File Size Reduction', description: 'Reduce PDF size by removing color information.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Will text remain readable?', answer: 'Yes, text clarity is preserved during greyscale conversion.' },
      { question: 'How much smaller will the file be?', answer: 'File size reduction varies but can be 20-50% for color-heavy documents.' },
      { question: 'Can I convert specific pages only?', answer: 'Yes, you can select which pages to convert to greyscale.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF to JSON',
    metaDescription: 'Extract PDF content to JSON format. Get structured data from PDF documents.',
    keywords: ['pdf to json', 'extract pdf data', 'pdf parser', 'structured pdf data'],
    description: `
      <p>PDF to JSON extracts content from PDF documents into structured JSON format. Extract text, metadata, page information, and document structure for programmatic use.</p>
      <p>Perfect for data extraction, document analysis, or integrating PDF content into applications and workflows.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Data to Extract', description: 'Choose what content to extract: text, metadata, structure.' },
      { step: 3, title: 'Extract and Download', description: 'Click Extract to generate JSON and download.' },
    ],
    useCases: [
      { title: 'Data Extraction', description: 'Extract structured data from PDF documents.', icon: 'database' },
      { title: 'Document Analysis', description: 'Analyze PDF structure and content programmatically.', icon: 'search' },
      { title: 'Integration', description: 'Import PDF content into applications via JSON.', icon: 'plug' },
    ],
    faq: [
      { question: 'What data is extracted?', answer: 'Text content, metadata, page dimensions, fonts, and document structure.' },
      { question: 'Is the JSON format documented?', answer: 'Yes, the JSON schema is consistent and well-documented.' },
      { question: 'Can I extract from scanned PDFs?', answer: 'Scanned PDFs require OCR first. Use our OCR PDF tool before extraction.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF to PowerPoint',
    metaDescription: 'Convert PDF to PowerPoint presentation. Each page becomes a high-quality slide.',
    keywords: ['pdf to pptx', 'pdf to powerpoint', 'convert pdf slides', 'pdf presentation'],
    description: `
      <p>PDF to PowerPoint converts your PDF documents into editable PowerPoint presentations (PPTX). Each PDF page is transformed into a high-quality slide, preserving the visual layout perfectly.</p>
      <p>This tool is ideal for converting reports, handouts, or any PDF content into presentation format. You can choose the image quality (DPI) to balance between file size and visual clarity.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select it from your device.' },
      { step: 2, title: 'Choose Quality Settings', description: 'Select the image quality (DPI) for the slides. Higher DPI means better quality but larger file size.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PowerPoint presentation and download the PPTX file.' },
    ],
    useCases: [
      { title: 'Presentation Creation', description: 'Convert PDF reports or documents into presentation slides for meetings.', icon: 'presentation' },
      { title: 'Training Materials', description: 'Transform PDF training documents into interactive PowerPoint presentations.', icon: 'book-open' },
      { title: 'Content Repurposing', description: 'Convert existing PDF content into editable slide format for further customization.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Will the slides be editable?', answer: 'Each slide contains a high-quality image of the PDF page. You can add text, shapes, and annotations on top in PowerPoint.' },
      { question: 'What DPI should I choose?', answer: 'Use 150 DPI for presentations displayed on screens. Use 300 DPI for printing or when you need the highest quality.' },
      { question: 'Can I convert multi-page PDFs?', answer: 'Yes, each page of your PDF becomes a separate slide in the PowerPoint presentation.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF to Excel',
    metaDescription: 'Convert PDF to Excel spreadsheet. Extract tables to XLSX format.',
    keywords: ['pdf to excel', 'pdf to xlsx', 'convert pdf tables', 'extract tables'],
    description: `
      <p>PDF to Excel converts your PDF documents into editable Microsoft Excel spreadsheets (XLSX). The tool automatically detects tables in your PDF and extracts them into separate sheets.</p>
      <p>This tool is ideal for analyzing financial reports, invoices, or any data presented in tables. Each page's tables are organized into sheets for easy data manipulation.</p>
      <p>All conversion happens locally in your browser, ensuring your data remains private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Process', description: 'The tool will automatically identify and extract tables.' },
      { step: 3, title: 'Download Excel', description: 'Download your Excel file with extracted tables.' },
    ],
    useCases: [
      { title: 'Financial Analysis', description: 'Convert bank statements or invoices to Excel for analysis.', icon: 'trending-up' },
      { title: 'Data Extraction', description: 'Pull data tables from research papers or reports.', icon: 'database' },
      { title: 'Inventory Management', description: 'Convert inventory lists from PDF to spreadsheet.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'How are tables handled?', answer: 'Tables detected on each page are extracted to corresponding sheets in the Excel file.' },
      { question: 'What if there are no tables?', answer: 'An info sheet will be created indicating no tables were found.' },
      { question: 'Is formatting preserved?', answer: 'Data is preserved, but complex visual formatting may be simplified for spreadsheet use.' },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Make scanned PDFs searchable with OCR. Extract text from images and scanned documents.',
    keywords: ['ocr pdf', 'searchable pdf', 'text recognition', 'scan to text'],
    description: `
      <p>OCR PDF uses Optical Character Recognition to extract text from scanned documents and images within PDFs. Convert image-based PDFs into searchable, selectable text documents.</p>
      <p>Support for multiple languages ensures accurate text recognition regardless of the document's language. The original layout is preserved while adding a searchable text layer.</p>
      <p>All OCR processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Scanned PDF', description: 'Drag and drop your scanned PDF or click to select.' },
      { step: 2, title: 'Select Language', description: 'Choose the document language for accurate recognition.' },
      { step: 3, title: 'Process and Download', description: 'Click Process to run OCR and download the searchable PDF.' },
    ],
    useCases: [
      { title: 'Digitize Archives', description: 'Make scanned document archives searchable.', icon: 'archive' },
      { title: 'Document Search', description: 'Enable text search in scanned documents.', icon: 'search' },
      { title: 'Text Extraction', description: 'Extract text from scanned documents for editing.', icon: 'type' },
    ],
    faq: [
      { question: 'What languages are supported?', answer: 'Over 100 languages are supported including English, Chinese, Japanese, Korean, and more.' },
      { question: 'Will the original layout be preserved?', answer: 'Yes, the original visual layout is preserved with a searchable text layer added.' },
      { question: 'How accurate is the OCR?', answer: 'Accuracy depends on scan quality but typically exceeds 95% for clear documents.' },
    ],
  },

  'alternate-merge': {
    title: 'Alternate Merge',
    metaDescription: 'Merge PDFs by alternating pages. Combine front and back scans into one document.',
    keywords: ['alternate merge', 'interleave pdf', 'combine scans', 'front back merge'],
    description: `
      <p>Alternate Merge combines two PDFs by interleaving their pages alternately. This is perfect for combining separately scanned front and back pages into a single document.</p>
      <p>Upload two PDFs and the tool will merge them by taking one page from each alternately. You can also reverse the order of one document for back-to-front scanning.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Two PDFs', description: 'Upload the front pages PDF and back pages PDF.' },
      { step: 2, title: 'Configure Order', description: 'Choose whether to reverse the second document for back-to-front scans.' },
      { step: 3, title: 'Merge and Download', description: 'Click Merge to interleave pages and download.' },
    ],
    useCases: [
      { title: 'Duplex Scanning', description: 'Combine separately scanned front and back pages.', icon: 'copy' },
      { title: 'Document Assembly', description: 'Interleave pages from two related documents.', icon: 'layers' },
      { title: 'Book Scanning', description: 'Combine odd and even page scans into complete books.', icon: 'book' },
    ],
    faq: [
      { question: 'What if documents have different page counts?', answer: 'Extra pages from the longer document are appended at the end.' },
      { question: 'Can I reverse page order?', answer: 'Yes, you can reverse either document before merging.' },
      { question: 'Is this different from regular merge?', answer: 'Yes, regular merge appends documents; alternate merge interleaves pages.' },
    ],
  },

  'add-attachments': {
    title: 'Add Attachments',
    metaDescription: 'Embed files in PDF documents. Attach any file type to your PDFs.',
    keywords: ['pdf attachments', 'embed files', 'attach to pdf', 'pdf portfolio'],
    description: `
      <p>Add Attachments embeds files of any type into your PDF documents. Attach spreadsheets, images, source files, or any other documents to create comprehensive PDF packages.</p>
      <p>Attachments are embedded within the PDF and can be extracted by recipients using any PDF reader. Perfect for distributing related files together.</p>
      <p>All processing happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Add Attachments', description: 'Select files to attach to the PDF.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to embed attachments and download.' },
    ],
    useCases: [
      { title: 'Project Packages', description: 'Bundle project files with documentation PDFs.', icon: 'package' },
      { title: 'Report Distribution', description: 'Attach source data files to report PDFs.', icon: 'paperclip' },
      { title: 'Contract Bundles', description: 'Include supporting documents with contracts.', icon: 'file-text' },
    ],
    faq: [
      { question: 'What file types can be attached?', answer: 'Any file type can be attached to a PDF.' },
      { question: 'Is there a size limit?', answer: 'Total PDF size including attachments should not exceed 500MB.' },
      { question: 'Can recipients extract attachments?', answer: 'Yes, any PDF reader can extract embedded attachments.' },
    ],
  },

  'extract-attachments': {
    title: 'Extract Attachments',
    metaDescription: 'Extract embedded files from PDFs. Download all attachments from PDF documents.',
    keywords: ['extract attachments', 'pdf attachments', 'download embedded files', 'pdf extraction'],
    description: `
      <p>Extract Attachments retrieves all embedded files from PDF documents. Download attachments individually or as a ZIP archive containing all files.</p>
      <p>Perfect for accessing source files, data, or supplementary materials embedded in PDF packages.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Attachments', description: 'See a list of all embedded files in the PDF.' },
      { step: 3, title: 'Extract and Download', description: 'Download individual files or all as a ZIP.' },
    ],
    useCases: [
      { title: 'Access Source Files', description: 'Extract original data files from PDF reports.', icon: 'download' },
      { title: 'Recover Attachments', description: 'Retrieve embedded files from PDF packages.', icon: 'folder-open' },
      { title: 'Batch Extraction', description: 'Extract attachments from multiple PDFs at once.', icon: 'layers' },
    ],
    faq: [
      { question: 'What if there are no attachments?', answer: 'The tool will indicate if no embedded files are found.' },
      { question: 'Are all attachment types supported?', answer: 'Yes, all embedded file types can be extracted.' },
      { question: 'Can I extract from multiple PDFs?', answer: 'Yes, you can process multiple PDFs and download all attachments.' },
    ],
  },

  'extract-images': {
    title: 'Extract Images from PDF',
    metaDescription: 'Extract all embedded images from PDF files. Download individually or as a ZIP archive. Filter small images automatically.',
    keywords: ['extract pdf images', 'pdf image extraction', 'get images from pdf', 'download pdf images', 'pdf to images'],
    description: `
      <p>Extract Images from PDF retrieves all embedded images from your PDF documents. Download high-quality images individually or as a convenient ZIP archive.</p>
      <p>The tool automatically filters out small images like icons and decorations based on customizable size thresholds. Process multiple PDFs at once for efficient batch extraction.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDFs', description: 'Drag and drop one or more PDF files or click to select from your device.' },
      { step: 2, title: 'Set Filter Options', description: 'Adjust minimum width, height, and file size to filter out unwanted small images.' },
      { step: 3, title: 'Extract Images', description: 'Click Extract to find all embedded images in your PDFs.' },
      { step: 4, title: 'Download', description: 'Download individual images or all images as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Photo Recovery', description: 'Extract photos and images embedded in PDF documents for reuse or archiving.', icon: 'image' },
      { title: 'Asset Collection', description: 'Gather all graphics and images from PDF reports, presentations, or brochures.', icon: 'folder' },
      { title: 'Content Repurposing', description: 'Extract images from PDFs to use in other documents, websites, or presentations.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'What image formats are extracted?', answer: 'Images are extracted in their native format (JPEG, PNG, etc.) when possible, or converted to PNG for raw image data.' },
      { question: 'Why are some images missing?', answer: 'Small images below the size threshold are filtered out. Adjust the filter settings to extract smaller images.' },
      { question: 'Can I extract from scanned PDFs?', answer: 'Scanned PDFs typically contain the scan as one large image per page. Use PDF to Image tool instead for page-by-page conversion.' },
    ],
  },

  'edit-attachments': {
    title: 'Edit Attachments',
    metaDescription: 'Manage PDF attachments. View, rename, and remove embedded files.',
    keywords: ['edit attachments', 'manage pdf files', 'remove attachments', 'rename attachments'],
    description: `
      <p>Edit Attachments lets you manage embedded files in PDF documents. View all attachments, rename them, or remove unwanted files from the PDF.</p>
      <p>Perfect for cleaning up PDF packages or updating attachment information before distribution.</p>
      <p>All editing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Manage Attachments', description: 'View, rename, or delete embedded files.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply changes and download.' },
    ],
    useCases: [
      { title: 'Clean Up PDFs', description: 'Remove unnecessary attachments from PDF packages.', icon: 'trash-2' },
      { title: 'Rename Files', description: 'Update attachment names for clarity.', icon: 'edit' },
      { title: 'Review Contents', description: 'Audit embedded files before distribution.', icon: 'eye' },
    ],
    faq: [
      { question: 'Can I add new attachments here?', answer: 'Use the Add Attachments tool to embed new files.' },
      { question: 'Is removal permanent?', answer: 'Yes, removed attachments cannot be recovered from the output file.' },
      { question: 'Can I preview attachments?', answer: 'You can see file names and sizes; use Extract Attachments to view contents.' },
    ],
  },

  'divide-pages': {
    title: 'Divide Pages',
    metaDescription: 'Split PDF pages into multiple sections. Divide pages horizontally or vertically.',
    keywords: ['divide pdf pages', 'split page', 'cut pdf page', 'page sections'],
    description: `
      <p>Divide Pages splits individual PDF pages into multiple sections. Cut pages horizontally, vertically, or into a grid to create multiple pages from one.</p>
      <p>Perfect for splitting scanned documents with multiple items per page, or dividing large format pages into standard sizes.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Division', description: 'Choose horizontal, vertical, or grid division and set the number of sections.' },
      { step: 3, title: 'Divide and Download', description: 'Click Divide to split pages and download.' },
    ],
    useCases: [
      { title: 'Split Scans', description: 'Divide scanned pages containing multiple documents.', icon: 'scissors' },
      { title: 'Resize Pages', description: 'Split large pages into standard paper sizes.', icon: 'maximize-2' },
      { title: 'Create Cards', description: 'Divide pages into card-sized sections for printing.', icon: 'grid' },
    ],
    faq: [
      { question: 'Can I divide into unequal sections?', answer: 'Currently, divisions are equal. Use Crop PDF for custom sections.' },
      { question: 'What happens to content at division lines?', answer: 'Content is split at the division line; ensure important content is not at boundaries.' },
      { question: 'Can I divide specific pages only?', answer: 'Yes, you can select which pages to divide.' },
    ],
  },

  'add-blank-page': {
    title: 'Add Blank Page',
    metaDescription: 'Insert blank pages into PDF documents. Add empty pages at any position.',
    keywords: ['add blank page', 'insert page', 'empty page', 'pdf page insertion'],
    description: `
      <p>Add Blank Page inserts empty pages into your PDF documents at any position. Add pages before, after, or between existing pages with customizable page size.</p>
      <p>Perfect for adding space for notes, creating section dividers, or preparing documents for printing.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Choose Position', description: 'Select where to insert blank pages and how many.' },
      { step: 3, title: 'Add and Download', description: 'Click Add to insert pages and download.' },
    ],
    useCases: [
      { title: 'Note Space', description: 'Add blank pages for handwritten notes.', icon: 'edit-3' },
      { title: 'Section Dividers', description: 'Insert blank pages between document sections.', icon: 'minus' },
      { title: 'Print Preparation', description: 'Add pages for duplex printing alignment.', icon: 'printer' },
    ],
    faq: [
      { question: 'Can I choose the page size?', answer: 'Yes, blank pages can match existing pages or use custom dimensions.' },
      { question: 'Can I add multiple blank pages?', answer: 'Yes, you can add any number of blank pages at once.' },
      { question: 'Can I add colored pages?', answer: 'Use Background Color tool after adding blank pages to add color.' },
    ],
  },

  'reverse-pages': {
    title: 'Reverse Pages',
    metaDescription: 'Reverse PDF page order. Flip document pages from last to first.',
    keywords: ['reverse pdf', 'flip page order', 'invert pages', 'reverse document'],
    description: `
      <p>Reverse Pages flips the order of pages in your PDF document, putting the last page first and the first page last. Useful for documents scanned in reverse order or for specific printing needs.</p>
      <p>The tool processes the entire document or selected page ranges, maintaining all content and formatting.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Pages', description: 'Choose to reverse all pages or a specific range.' },
      { step: 3, title: 'Reverse and Download', description: 'Click Reverse to flip page order and download.' },
    ],
    useCases: [
      { title: 'Fix Scan Order', description: 'Correct documents scanned in reverse order.', icon: 'refresh-cw' },
      { title: 'Print Preparation', description: 'Reverse pages for specific printing requirements.', icon: 'printer' },
      { title: 'Document Reordering', description: 'Quickly flip document order for review.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Are bookmarks updated?', answer: 'Yes, bookmarks are updated to point to the correct reversed pages.' },
      { question: 'Can I reverse only some pages?', answer: 'Yes, you can select a page range to reverse.' },
      { question: 'Is this the same as rotating?', answer: 'No, reversing changes page order; rotating changes page orientation.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotate PDF',
    metaDescription: 'Rotate PDF pages. Turn pages 90, 180, or 270 degrees.',
    keywords: ['rotate pdf', 'turn pdf pages', 'pdf rotation', 'fix orientation'],
    description: `
      <p>Rotate PDF turns pages in your document by 90, 180, or 270 degrees. Fix incorrectly oriented scans, rotate landscape pages, or adjust page orientation for viewing.</p>
      <p>Rotate all pages uniformly or select specific pages to rotate individually. The tool preserves all content and formatting.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Rotation', description: 'Choose rotation angle and which pages to rotate.' },
      { step: 3, title: 'Rotate and Download', description: 'Click Rotate to apply changes and download.' },
    ],
    useCases: [
      { title: 'Fix Scans', description: 'Correct orientation of scanned documents.', icon: 'rotate-cw' },
      { title: 'Landscape Pages', description: 'Rotate landscape pages for proper viewing.', icon: 'monitor' },
      { title: 'Mixed Orientation', description: 'Standardize page orientation in mixed documents.', icon: 'layout' },
    ],
    faq: [
      { question: 'Can I rotate different pages differently?', answer: 'Yes, you can apply different rotations to different pages.' },
      { question: 'Does rotation affect print quality?', answer: 'No, rotation preserves all content quality.' },
      { question: 'Can I rotate by custom angles?', answer: 'Rotation is limited to 90-degree increments (90, 180, 270).' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: 'Print multiple PDF pages per sheet. Create 2-up, 4-up, or custom layouts.',
    keywords: ['n-up pdf', 'multiple pages per sheet', '2-up printing', 'page imposition'],
    description: `
      <p>N-Up PDF arranges multiple pages onto single sheets, creating 2-up, 4-up, 6-up, 9-up, or custom layouts. Perfect for saving paper when printing or creating handouts.</p>
      <p>Choose from preset layouts or create custom arrangements. The tool automatically scales and positions pages for optimal results.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Choose Layout', description: 'Select 2-up, 4-up, 6-up, 9-up, or custom grid.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate the n-up PDF and download.' },
    ],
    useCases: [
      { title: 'Save Paper', description: 'Print multiple pages per sheet to reduce paper usage.', icon: 'leaf' },
      { title: 'Create Handouts', description: 'Make compact handouts from presentation slides.', icon: 'file-text' },
      { title: 'Review Documents', description: 'Print documents in reduced size for review.', icon: 'eye' },
    ],
    faq: [
      { question: 'What layouts are available?', answer: '2-up, 4-up, 6-up, 9-up, and custom grid layouts are available.' },
      { question: 'Can I add borders between pages?', answer: 'Yes, you can add borders and gutters between pages.' },
      { question: 'Is page order preserved?', answer: 'Yes, pages are arranged in reading order (left-to-right, top-to-bottom).' },
    ],
  },

  'combine-single-page': {
    title: 'Combine to Single Page',
    metaDescription: 'Stitch PDF pages into one continuous page. Create scrollable single-page documents.',
    keywords: ['combine pages', 'single page pdf', 'stitch pages', 'continuous scroll'],
    description: `
      <p>Combine to Single Page stitches all PDF pages into one continuous page. Create scrollable documents perfect for web viewing or continuous reading.</p>
      <p>Pages are joined vertically with customizable spacing. The result is a single long page containing all content.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Spacing', description: 'Choose the gap between stitched pages.' },
      { step: 3, title: 'Combine and Download', description: 'Click Combine to create the single-page PDF.' },
    ],
    useCases: [
      { title: 'Web Documents', description: 'Create scrollable PDFs for web embedding.', icon: 'globe' },
      { title: 'Continuous Reading', description: 'Convert paginated documents to continuous scroll.', icon: 'scroll' },
      { title: 'Long-Form Content', description: 'Combine pages for seamless long-form reading.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Is there a page limit?', answer: 'Very long documents may be limited by browser memory.' },
      { question: 'Can I add separators between pages?', answer: 'Yes, you can add spacing or lines between original pages.' },
      { question: 'Will this work for printing?', answer: 'The result is best for screen viewing; use N-Up for print layouts.' },
    ],
  },

  'view-metadata': {
    title: 'View Metadata',
    metaDescription: 'View PDF document properties. See author, title, dates, and other metadata.',
    keywords: ['pdf metadata', 'document properties', 'pdf info', 'view pdf details'],
    description: `
      <p>View Metadata displays all document properties and metadata from your PDF files. See author, title, subject, keywords, creation date, modification date, and more.</p>
      <p>Useful for auditing documents, checking file information, or verifying document authenticity.</p>
      <p>All viewing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Properties', description: 'See all metadata displayed in an organized format.' },
      { step: 3, title: 'Export if Needed', description: 'Optionally export metadata as JSON.' },
    ],
    useCases: [
      { title: 'Document Audit', description: 'Review document properties for compliance.', icon: 'clipboard-check' },
      { title: 'Verify Authenticity', description: 'Check creation dates and author information.', icon: 'shield' },
      { title: 'File Information', description: 'Get detailed information about PDF files.', icon: 'info' },
    ],
    faq: [
      { question: 'What metadata is shown?', answer: 'Title, author, subject, keywords, creator, producer, dates, and PDF version.' },
      { question: 'Can I edit metadata here?', answer: 'Use the Edit Metadata tool to modify document properties.' },
      { question: 'Is XMP metadata included?', answer: 'Yes, both standard and XMP metadata are displayed.' },
    ],
  },

  'edit-metadata': {
    title: 'Edit Metadata',
    metaDescription: 'Edit PDF document properties. Change title, author, subject, and keywords.',
    keywords: ['edit pdf metadata', 'change pdf properties', 'pdf author', 'document info'],
    description: `
      <p>Edit Metadata allows you to modify document properties in your PDF files. Change the title, author, subject, keywords, and other metadata fields.</p>
      <p>Perfect for correcting document information, adding proper attribution, or preparing files for distribution.</p>
      <p>All editing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Edit Properties', description: 'Modify title, author, subject, keywords, and other fields.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply changes and download.' },
    ],
    useCases: [
      { title: 'Add Attribution', description: 'Set proper author and creator information.', icon: 'user' },
      { title: 'SEO Optimization', description: 'Add keywords and descriptions for searchability.', icon: 'search' },
      { title: 'Document Preparation', description: 'Prepare documents with proper metadata before sharing.', icon: 'file-check' },
    ],
    faq: [
      { question: 'What fields can I edit?', answer: 'Title, author, subject, keywords, creator, and producer fields.' },
      { question: 'Can I clear all metadata?', answer: 'Use Remove Metadata tool to strip all document properties.' },
      { question: 'Are dates editable?', answer: 'Creation and modification dates are updated automatically.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs to ZIP',
    metaDescription: 'Package multiple PDFs into a ZIP archive. Compress and bundle PDF files.',
    keywords: ['pdf to zip', 'compress pdfs', 'bundle pdfs', 'archive pdfs'],
    description: `
      <p>PDFs to ZIP packages multiple PDF files into a single ZIP archive. Compress and bundle your PDFs for easier sharing, storage, or backup.</p>
      <p>The tool creates a compressed archive containing all your PDF files, reducing total size and simplifying file management.</p>
      <p>All processing happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDFs', description: 'Drag and drop multiple PDF files or click to select.' },
      { step: 2, title: 'Configure Archive', description: 'Optionally set archive name and compression level.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate the ZIP archive.' },
    ],
    useCases: [
      { title: 'File Sharing', description: 'Bundle multiple PDFs for easier sharing.', icon: 'share-2' },
      { title: 'Backup Creation', description: 'Create compressed backups of PDF collections.', icon: 'archive' },
      { title: 'Email Attachments', description: 'Combine PDFs into one attachment for email.', icon: 'mail' },
    ],
    faq: [
      { question: 'How much compression is applied?', answer: 'ZIP compression typically reduces total size by 10-30%.' },
      { question: 'Is there a file limit?', answer: 'You can include up to 100 PDFs in a single archive.' },
      { question: 'Can I set a password?', answer: 'Password-protected ZIP creation is not currently supported.' },
    ],
  },

  'compare-pdfs': {
    title: 'Compare PDFs',
    metaDescription: 'Compare two PDF documents. Highlight differences between versions.',
    keywords: ['compare pdfs', 'pdf diff', 'document comparison', 'version comparison'],
    description: `
      <p>Compare PDFs analyzes two PDF documents and highlights the differences between them. Perfect for reviewing document revisions, checking contract changes, or verifying edits.</p>
      <p>View documents side-by-side or in overlay mode with differences highlighted. The tool identifies text changes, additions, and deletions.</p>
      <p>All comparison happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Two PDFs', description: 'Upload the original and modified PDF documents.' },
      { step: 2, title: 'Compare Documents', description: 'View differences highlighted in side-by-side or overlay mode.' },
      { step: 3, title: 'Export Results', description: 'Download a comparison report or annotated PDF.' },
    ],
    useCases: [
      { title: 'Contract Review', description: 'Compare contract versions to identify changes.', icon: 'file-text' },
      { title: 'Document Revision', description: 'Review edits between document versions.', icon: 'git-compare' },
      { title: 'Quality Assurance', description: 'Verify that only intended changes were made.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What types of differences are detected?', answer: 'Text additions, deletions, modifications, and formatting changes.' },
      { question: 'Can I compare scanned documents?', answer: 'Scanned documents should be OCR processed first for text comparison.' },
      { question: 'Is visual comparison available?', answer: 'Yes, overlay mode shows visual differences between pages.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterize PDF',
    metaDescription: 'Split large PDF pages into printable tiles. Create posters from PDF pages.',
    keywords: ['posterize pdf', 'tile pdf', 'large format printing', 'pdf poster'],
    description: `
      <p>Posterize PDF splits large PDF pages into smaller tiles that can be printed on standard paper and assembled into posters. Perfect for printing large diagrams, maps, or artwork.</p>
      <p>Configure the grid size and overlap for easy assembly. The tool automatically calculates tile dimensions for your target output size.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your large-format PDF or click to select.' },
      { step: 2, title: 'Configure Tiles', description: 'Set grid size, overlap, and output paper size.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate printable tiles.' },
    ],
    useCases: [
      { title: 'Poster Printing', description: 'Print large posters on standard paper.', icon: 'maximize-2' },
      { title: 'Map Printing', description: 'Print large maps in sections for assembly.', icon: 'map' },
      { title: 'Artwork Reproduction', description: 'Create large prints from PDF artwork.', icon: 'image' },
    ],
    faq: [
      { question: 'What overlap should I use?', answer: 'A 10-20mm overlap is recommended for easy alignment during assembly.' },
      { question: 'Can I add crop marks?', answer: 'Yes, crop marks can be added to help with cutting and alignment.' },
      { question: 'What paper sizes are supported?', answer: 'A4, Letter, A3, and custom sizes are supported.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Fix Page Size',
    metaDescription: 'Standardize PDF page sizes. Convert all pages to uniform dimensions.',
    keywords: ['fix page size', 'standardize pdf', 'uniform pages', 'resize pdf pages'],
    description: `
      <p>Fix Page Size standardizes all pages in your PDF to uniform dimensions. Convert mixed-size documents to consistent page sizes for professional presentation or printing.</p>
      <p>Choose from standard sizes (A4, Letter, etc.) or set custom dimensions. Content is scaled or positioned to fit the new page size.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Target Size', description: 'Choose a standard size or enter custom dimensions.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to standardize pages and download.' },
    ],
    useCases: [
      { title: 'Print Preparation', description: 'Standardize pages for consistent printing.', icon: 'printer' },
      { title: 'Document Cleanup', description: 'Fix documents with inconsistent page sizes.', icon: 'file-check' },
      { title: 'Professional Documents', description: 'Create uniform documents for distribution.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'How is content handled?', answer: 'Content is scaled to fit or centered on the new page size.' },
      { question: 'Can I preserve aspect ratio?', answer: 'Yes, content can be scaled proportionally to fit.' },
      { question: 'What standard sizes are available?', answer: 'A4, A3, Letter, Legal, and other common sizes.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearize PDF',
    metaDescription: 'Optimize PDF for fast web viewing. Enable progressive loading.',
    keywords: ['linearize pdf', 'fast web view', 'optimize pdf', 'progressive pdf'],
    description: `
      <p>Linearize PDF optimizes your documents for fast web viewing. Linearized PDFs can begin displaying before the entire file is downloaded, improving user experience.</p>
      <p>Also known as "Fast Web View," this optimization reorganizes the PDF structure for progressive loading in web browsers.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Linearize', description: 'Click Linearize to optimize for web viewing.' },
      { step: 3, title: 'Download', description: 'Download your optimized PDF.' },
    ],
    useCases: [
      { title: 'Web Publishing', description: 'Optimize PDFs for website downloads.', icon: 'globe' },
      { title: 'Email Attachments', description: 'Create PDFs that open faster for recipients.', icon: 'mail' },
      { title: 'Online Documents', description: 'Improve viewing experience for online documents.', icon: 'cloud' },
    ],
    faq: [
      { question: 'What is linearization?', answer: 'Linearization reorganizes PDF data for progressive loading.' },
      { question: 'Does it reduce file size?', answer: 'Linearization may slightly increase file size due to added structure.' },
      { question: 'Is it compatible with all viewers?', answer: 'Yes, linearized PDFs work in all PDF readers.' },
    ],
  },

  'page-dimensions': {
    title: 'Page Dimensions',
    metaDescription: 'Analyze PDF page sizes. View dimensions of all pages in your document.',
    keywords: ['pdf page size', 'page dimensions', 'pdf measurements', 'document size'],
    description: `
      <p>Page Dimensions analyzes and displays the size of every page in your PDF document. View dimensions in various units (inches, mm, points) and identify pages with non-standard sizes.</p>
      <p>Useful for print preparation, document analysis, or identifying inconsistent page sizes.</p>
      <p>All analysis happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Dimensions', description: 'See page sizes displayed for all pages.' },
      { step: 3, title: 'Export Report', description: 'Optionally export dimensions as JSON.' },
    ],
    useCases: [
      { title: 'Print Planning', description: 'Check page sizes before printing.', icon: 'printer' },
      { title: 'Document Analysis', description: 'Identify pages with unusual dimensions.', icon: 'search' },
      { title: 'Quality Control', description: 'Verify page sizes meet specifications.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What units are available?', answer: 'Inches, millimeters, centimeters, and points.' },
      { question: 'Does it show orientation?', answer: 'Yes, portrait or landscape orientation is indicated.' },
      { question: 'Can I fix inconsistent sizes?', answer: 'Use Fix Page Size tool to standardize dimensions.' },
    ],
  },

  'remove-restrictions': {
    title: 'Remove Restrictions',
    metaDescription: 'Remove PDF restrictions. Unlock printing, copying, and editing permissions.',
    keywords: ['remove pdf restrictions', 'unlock pdf', 'pdf permissions', 'unrestrict pdf'],
    description: `
      <p>Remove Restrictions unlocks PDFs that have permission restrictions preventing printing, copying, or editing. This tool removes owner password restrictions while preserving document content.</p>
      <p>Note: This tool cannot remove user passwords that prevent opening the document. Use Decrypt PDF for password-protected files.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Restricted PDF', description: 'Drag and drop your restricted PDF or click to select.' },
      { step: 2, title: 'Remove Restrictions', description: 'Click Remove to unlock the document.' },
      { step: 3, title: 'Download', description: 'Download the unrestricted PDF.' },
    ],
    useCases: [
      { title: 'Enable Printing', description: 'Unlock PDFs that prevent printing.', icon: 'printer' },
      { title: 'Enable Copying', description: 'Allow text selection and copying.', icon: 'copy' },
      { title: 'Enable Editing', description: 'Remove restrictions on document editing.', icon: 'edit' },
    ],
    faq: [
      { question: 'Is this legal?', answer: 'Removing restrictions from documents you own or have rights to is generally legal.' },
      { question: 'Can it remove open passwords?', answer: 'No, use Decrypt PDF for password-protected documents.' },
      { question: 'Will content be affected?', answer: 'No, only restrictions are removed; content remains unchanged.' },
    ],
  },

  'repair-pdf': {
    title: 'Repair PDF',
    metaDescription: 'Fix corrupted PDF files. Recover and repair damaged documents.',
    keywords: ['repair pdf', 'fix pdf', 'recover pdf', 'corrupted pdf'],
    description: `
      <p>Repair PDF attempts to fix corrupted or damaged PDF files. The tool analyzes the document structure and rebuilds it to recover as much content as possible.</p>
      <p>Useful for recovering files that won't open, display errors, or have missing content due to corruption.</p>
      <p>All repair happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Damaged PDF', description: 'Drag and drop your corrupted PDF or click to select.' },
      { step: 2, title: 'Repair Document', description: 'Click Repair to attempt recovery.' },
      { step: 3, title: 'Download', description: 'Download the repaired PDF if successful.' },
    ],
    useCases: [
      { title: 'Recover Files', description: 'Recover PDFs that won\'t open properly.', icon: 'refresh-cw' },
      { title: 'Fix Errors', description: 'Repair files showing error messages.', icon: 'wrench' },
      { title: 'Restore Content', description: 'Recover content from partially corrupted files.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Can all PDFs be repaired?', answer: 'Success depends on the type and extent of corruption.' },
      { question: 'Will all content be recovered?', answer: 'The tool recovers as much as possible; severely damaged files may have losses.' },
      { question: 'Should I keep the original?', answer: 'Yes, always keep the original file as a backup.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'Encrypt PDF',
    metaDescription: 'Password protect PDF files. Add encryption and set permissions.',
    keywords: ['encrypt pdf', 'password protect pdf', 'secure pdf', 'pdf encryption'],
    description: `
      <p>Encrypt PDF adds password protection and encryption to your PDF documents. Set user passwords to prevent opening, and owner passwords to control permissions like printing and copying.</p>
      <p>Choose from different encryption levels (128-bit or 256-bit AES) for varying security needs.</p>
      <p>All encryption happens in your browser, ensuring your passwords and documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Passwords', description: 'Enter user password and/or owner password. Configure permissions.' },
      { step: 3, title: 'Encrypt and Download', description: 'Click Encrypt to secure your PDF and download.' },
    ],
    useCases: [
      { title: 'Confidential Documents', description: 'Protect sensitive business documents.', icon: 'lock' },
      { title: 'Personal Files', description: 'Secure personal documents like tax returns.', icon: 'shield' },
      { title: 'Controlled Distribution', description: 'Limit what recipients can do with documents.', icon: 'key' },
    ],
    faq: [
      { question: 'What\'s the difference between user and owner passwords?', answer: 'User password prevents opening; owner password controls permissions.' },
      { question: 'What encryption is used?', answer: '128-bit or 256-bit AES encryption options are available.' },
      { question: 'Can I set permissions without a user password?', answer: 'Yes, you can set an owner password only to control permissions.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitize PDF',
    metaDescription: 'Remove hidden data from PDFs. Clean metadata, scripts, and sensitive information.',
    keywords: ['sanitize pdf', 'clean pdf', 'remove hidden data', 'pdf privacy'],
    description: `
      <p>Sanitize PDF removes hidden data and potentially sensitive information from your documents. Strip metadata, embedded scripts, attachments, comments, and other hidden content.</p>
      <p>Essential for preparing documents for public distribution or when privacy is a concern.</p>
      <p>All sanitization happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select What to Remove', description: 'Choose which types of hidden data to strip.' },
      { step: 3, title: 'Sanitize and Download', description: 'Click Sanitize to clean the PDF and download.' },
    ],
    useCases: [
      { title: 'Public Release', description: 'Prepare documents for public distribution.', icon: 'globe' },
      { title: 'Privacy Protection', description: 'Remove personal information before sharing.', icon: 'shield' },
      { title: 'Security Compliance', description: 'Meet security requirements for document handling.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What hidden data is removed?', answer: 'Metadata, scripts, attachments, comments, form data, and hidden layers.' },
      { question: 'Will visible content be affected?', answer: 'No, only hidden data is removed; visible content remains.' },
      { question: 'Is this reversible?', answer: 'No, removed data cannot be recovered. Keep a backup of the original.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Decrypt PDF',
    metaDescription: 'Remove password from PDF files. Unlock password-protected documents.',
    keywords: ['decrypt pdf', 'remove pdf password', 'unlock pdf', 'pdf password remover'],
    description: `
      <p>Decrypt PDF removes password protection from PDF documents. Enter the current password to unlock the file and create an unprotected copy.</p>
      <p>This tool requires you to know the current password. It cannot crack or bypass unknown passwords.</p>
      <p>All decryption happens in your browser, ensuring your passwords and documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Protected PDF', description: 'Drag and drop your password-protected PDF.' },
      { step: 2, title: 'Enter Password', description: 'Enter the current document password.' },
      { step: 3, title: 'Decrypt and Download', description: 'Click Decrypt to remove protection and download.' },
    ],
    useCases: [
      { title: 'Remove Old Passwords', description: 'Unlock documents when password is no longer needed.', icon: 'unlock' },
      { title: 'Simplify Access', description: 'Create unprotected copies for easier sharing.', icon: 'share-2' },
      { title: 'Archive Documents', description: 'Remove passwords before long-term archiving.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can it crack unknown passwords?', answer: 'No, you must know the current password to decrypt.' },
      { question: 'Is the original file modified?', answer: 'No, a new unprotected copy is created.' },
      { question: 'What if I forgot the password?', answer: 'Unfortunately, we cannot recover forgotten passwords.' },
    ],
  },

  'flatten-pdf': {
    title: 'Flatten PDF',
    metaDescription: 'Flatten PDF forms and annotations. Make content non-editable.',
    keywords: ['flatten pdf', 'flatten forms', 'flatten annotations', 'non-editable pdf'],
    description: `
      <p>Flatten PDF converts interactive elements like form fields and annotations into static content. The flattened PDF looks the same but can no longer be edited.</p>
      <p>Perfect for finalizing filled forms, preserving annotations, or creating non-editable document versions.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF with forms or annotations.' },
      { step: 2, title: 'Select What to Flatten', description: 'Choose to flatten forms, annotations, or both.' },
      { step: 3, title: 'Flatten and Download', description: 'Click Flatten to create the static PDF.' },
    ],
    useCases: [
      { title: 'Finalize Forms', description: 'Lock filled form data to prevent changes.', icon: 'lock' },
      { title: 'Preserve Annotations', description: 'Make annotations permanent in the document.', icon: 'check-circle' },
      { title: 'Archive Documents', description: 'Create non-editable versions for archiving.', icon: 'archive' },
    ],
    faq: [
      { question: 'Is flattening reversible?', answer: 'No, flattening is permanent. Keep a backup of the original.' },
      { question: 'Will the appearance change?', answer: 'No, the document looks the same but is no longer interactive.' },
      { question: 'Does it reduce file size?', answer: 'Sometimes, as interactive elements are converted to simpler content.' },
    ],
  },

  'remove-metadata': {
    title: 'Remove Metadata',
    metaDescription: 'Strip metadata from PDF files. Remove author, dates, and document properties.',
    keywords: ['remove pdf metadata', 'strip metadata', 'pdf privacy', 'anonymous pdf'],
    description: `
      <p>Remove Metadata strips all document properties and metadata from your PDF files. Remove author names, creation dates, software information, and other identifying data.</p>
      <p>Essential for privacy when sharing documents or when metadata could reveal sensitive information.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Remove Metadata', description: 'Click Remove to strip all metadata.' },
      { step: 3, title: 'Download', description: 'Download the metadata-free PDF.' },
    ],
    useCases: [
      { title: 'Privacy Protection', description: 'Remove personal information before sharing.', icon: 'shield' },
      { title: 'Anonymous Documents', description: 'Create documents without author attribution.', icon: 'user-x' },
      { title: 'Clean Distribution', description: 'Distribute documents without internal metadata.', icon: 'send' },
    ],
    faq: [
      { question: 'What metadata is removed?', answer: 'Author, title, subject, keywords, dates, creator, and producer information.' },
      { question: 'Is XMP metadata removed?', answer: 'Yes, both standard and XMP metadata are stripped.' },
      { question: 'Will content be affected?', answer: 'No, only metadata is removed; document content remains unchanged.' },
    ],
  },

  'change-permissions': {
    title: 'Change Permissions',
    metaDescription: 'Modify PDF permissions. Control printing, copying, and editing access.',
    keywords: ['pdf permissions', 'change pdf access', 'restrict pdf', 'pdf security'],
    description: `
      <p>Change Permissions modifies the access controls on your PDF documents. Enable or disable printing, copying, editing, and annotation permissions.</p>
      <p>Set an owner password to enforce these restrictions. Recipients can view the document but are limited in what actions they can perform.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Permissions', description: 'Enable or disable printing, copying, editing, and annotations.' },
      { step: 3, title: 'Apply and Download', description: 'Set owner password and download the restricted PDF.' },
    ],
    useCases: [
      { title: 'Prevent Copying', description: 'Disable text copying to protect content.', icon: 'copy' },
      { title: 'Control Printing', description: 'Restrict or allow document printing.', icon: 'printer' },
      { title: 'Limit Editing', description: 'Prevent modifications to the document.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Do I need a password?', answer: 'An owner password is required to enforce permissions.' },
      { question: 'Can permissions be removed?', answer: 'Yes, with the owner password or using Remove Restrictions tool.' },
      { question: 'Are all PDF readers compatible?', answer: 'Most PDF readers respect permissions, but some may not enforce them.' },
    ],
  },

  'pdf-to-docx': {
    title: 'Convert PDF to Editable Word',
    metaDescription: 'Convert PDF to editable Word online and download a DOCX file you can edit. Useful for resumes, reports, forms, and contracts.',
    keywords: ['convert pdf to editable word', 'convert scanned pdf to editable word', 'pdf to word keep formatting', 'turn pdf into editable docx'],
    description:       `
      <p>Convert PDF to editable Word when you need to change content without retyping the whole document. This tool turns PDF into an editable DOCX file you can open in Word or similar editors.</p>
      <p>It works well for resumes, contracts, reports, forms, and other documents that need updates or content reuse. If you are looking for a way to convert PDF to editable Word online, this page is built for that exact task. If the original PDF also needs to be easier to send, you can <a href="/tools/compress-pdf">compress the PDF before email or upload</a>.</p>
      <p>All conversion happens in your browser, so your PDF stays on your device and remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to convert.' },
      { step: 2, title: 'Convert to DOCX', description: 'Start the conversion and wait while the PDF is turned into an editable Word file.' },
      { step: 3, title: 'Download and Edit', description: 'Download the DOCX file and open it in Word or another compatible editor.' },
    ],
    useCases: [
      { title: 'Convert PDF Contracts to Word', description: 'Turn a PDF contract into an editable Word document for revision or reuse.', icon: 'file-text' },
      { title: 'Turn Resume PDF into Word', description: 'Convert an old PDF resume to Word so you can update text and formatting more easily.', icon: 'user' },
      { title: 'Extract PDF Text for Editing', description: 'Pull text from reports or documents into Word without retyping everything from scratch.', icon: 'copy' },
    ],
    faq: [
      { question: 'How do I convert PDF to editable Word?', answer: 'Yes. The goal is to produce a DOCX file you can open and edit in Word or compatible editors.' },
      { question: 'Can I convert a scanned PDF to editable Word?', answer: 'Scanned PDFs may need OCR for the text to become truly editable. Without OCR, they may convert more like images.' },
      { question: 'Will PDF to Word keep the formatting?', answer: 'Simple layouts usually convert better. Complex tables, spacing, and page breaks may still need some cleanup after export. If you only need page previews or image snippets instead of editable text, you can <a href="/tools/pdf-to-jpg">convert PDF pages to JPG</a>.' },
    ],
  },
  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: 'Deskew PDF',
    metaDescription: 'Automatically straighten scanned or tilted PDF pages. Fix skewed documents with precision angle detection.',
    keywords: ['deskew pdf', 'straighten pdf', 'fix tilted scan', 'auto rotate pdf', 'correct pdf angle'],
    description: `
      <p>Deskew PDF automatically detects and corrects tilted or skewed pages in your PDF documents. This is essential for scanned documents that were fed into the scanner at an angle.</p>
      <p>The tool uses advanced image analysis to detect the exact rotation angle of each page and corrects it to vertical alignment. You can adjust the sensitivity threshold and DPI settings for optimal results.</p>
      <p>All processing happens locally in your browser using WebAssembly technology, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your scanned PDF file or click to select.' },
      { step: 2, title: 'Configure Settings', description: 'Adjust threshold sensitivity and DPI if needed for better detection.' },
      { step: 3, title: 'Process and Download', description: 'Click Deskew to straighten pages and download the corrected PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Fix pages that were scanned at an angle from document feeders.', icon: 'scan' },
      { title: 'Mobile Scans', description: 'Correct tilted photos of documents taken with smartphones.', icon: 'smartphone' },
      { title: 'Archive Restoration', description: 'Straighten old scanned archives for better readability.', icon: 'archive' },
    ],
    faq: [
      { question: 'How accurate is the angle detection?', answer: 'The tool can detect and correct angles as small as 0.1 degrees for precise alignment.' },
      { question: 'Will text quality be affected?', answer: 'The deskewing process maintains text quality while rotating the page content.' },
      { question: 'Can I deskew specific pages only?', answer: 'The tool processes all pages but only corrects those detected as skewed.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF Booklet Creator',
    metaDescription: 'Create booklet layouts from PDF for printing. Arrange pages for saddle-stitch binding with multiple grid options.',
    keywords: ['pdf booklet', 'booklet creator', 'print booklet', 'saddle stitch', 'imposition'],
    description: `
      <p>PDF Booklet Creator arranges your PDF pages into booklet layouts ready for print-and-fold production. Perfect for creating brochures, zines, booklets, and saddle-stitched publications.</p>
      <p>Choose from various grid modes (1x2, 2x2, 2x4, 4x4), paper sizes, and orientation options. The tool automatically handles page imposition for proper folding sequence.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF document you want to convert to a booklet.' },
      { step: 2, title: 'Choose Layout', description: 'Select grid mode, paper size, orientation, and rotation options.' },
      { step: 3, title: 'Create and Download', description: 'Generate the booklet layout and download for printing.' },
    ],
    useCases: [
      { title: 'Brochures', description: 'Create fold-ready brochures from standard PDF documents.', icon: 'book-open' },
      { title: 'Zines', description: 'Produce self-published zines with proper page imposition.', icon: 'book' },
      { title: 'Event Programs', description: 'Create professional program booklets for events.', icon: 'calendar' },
    ],
    faq: [
      { question: 'What is saddle-stitch binding?', answer: 'Saddle-stitch is a binding method where folded sheets are nested and stapled through the fold.' },
      { question: 'Which grid mode should I use?', answer: '1x2 is standard for booklets. Use 2x2 or larger for multi-up printing to save paper.' },
      { question: 'Can I preview the layout?', answer: 'Yes, the tool provides a visual preview before generating the final booklet.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterize PDF',
    metaDescription: 'Convert PDF pages to high-quality images. Export as PNG, JPEG, or WebP with custom DPI settings.',
    keywords: ['rasterize pdf', 'pdf to image', 'pdf to png', 'pdf to jpeg', 'convert pdf pages'],
    description: `
      <p>Rasterize PDF converts your PDF pages into high-quality raster images. Choose from PNG, JPEG, or WebP output formats with full control over DPI and quality settings.</p>
      <p>Perfect for creating thumbnails, social media graphics, or archiving PDF content as images. Supports page range selection and batch processing.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Output', description: 'Select DPI, output format (PNG/JPEG/WebP), quality, and page range.' },
      { step: 3, title: 'Convert and Download', description: 'Process pages and download images individually or as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Social Media', description: 'Convert PDF slides to images for social media posting.', icon: 'share-2' },
      { title: 'Thumbnails', description: 'Generate preview thumbnails for PDF documents.', icon: 'image' },
      { title: 'Web Publishing', description: 'Convert PDF content to web-friendly image formats.', icon: 'globe' },
    ],
    faq: [
      { question: 'What DPI should I use?', answer: '72 DPI for screen, 150 DPI for general use, 300 DPI for print quality.' },
      { question: 'Which format is best?', answer: 'PNG for quality/transparency, JPEG for small size, WebP for modern web use.' },
      { question: 'Can I convert specific pages?', answer: 'Yes, specify page ranges like "1-5, 8, 10-15" to convert only those pages.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown to PDF',
    metaDescription: 'Convert Markdown files to beautifully formatted PDF documents. Support for GitHub Flavored Markdown and syntax highlighting.',
    keywords: ['markdown to pdf', 'md to pdf', 'convert markdown', 'gfm to pdf', 'markdown converter'],
    description: `
      <p>Markdown to PDF converts your Markdown files into professionally styled PDF documents. Support for CommonMark and GitHub Flavored Markdown (GFM) including tables, task lists, and code blocks.</p>
      <p>Choose from multiple themes (light, dark, GitHub) and customize page size and margins. Code blocks are syntax-highlighted for better readability.</p>
      <p>All conversion happens locally in your browser, ensuring your content remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Markdown File', description: 'Upload your .md or .markdown file.' },
      { step: 2, title: 'Choose Theme', description: 'Select a visual theme and configure page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Generate the styled PDF and download.' },
    ],
    useCases: [
      { title: 'Documentation', description: 'Convert README files and docs to shareable PDFs.', icon: 'file-text' },
      { title: 'Notes Export', description: 'Export Markdown notes to PDF for printing or sharing.', icon: 'edit-3' },
      { title: 'Reports', description: 'Create reports from Markdown with professional styling.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Is GitHub Flavored Markdown supported?', answer: 'Yes, tables, task lists, strikethrough, and other GFM features are supported.' },
      { question: 'Can I customize the styling?', answer: 'Choose from preset themes or add custom CSS for full control.' },
      { question: 'Are code blocks highlighted?', answer: 'Yes, code blocks include syntax highlighting for common languages.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email to PDF',
    metaDescription: 'Convert email files (.eml) to PDF documents. Preserve formatting, inline images, and attachments.',
    keywords: ['email to pdf', 'eml to pdf', 'convert email', 'email converter', 'save email as pdf'],
    description: `
      <p>Email to PDF converts your email files (.eml format) into well-formatted PDF documents. The tool preserves the email header information, body content, inline images, and attachment listings.</p>
      <p>Customize output options including page size, date formatting, and whether to include CC/BCC fields and attachment information.</p>
      <p>All conversion happens locally in your browser, ensuring your emails remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Email File', description: 'Upload your .eml email file.' },
      { step: 2, title: 'Configure Options', description: 'Set page size and choose which fields to include.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF and download the result.' },
    ],
    useCases: [
      { title: 'Legal Records', description: 'Archive important emails as PDF for legal documentation.', icon: 'scale' },
      { title: 'Business Archives', description: 'Convert business correspondence to PDF for record keeping.', icon: 'briefcase' },
      { title: 'Evidence Preservation', description: 'Save email evidence in a non-editable PDF format.', icon: 'shield' },
    ],
    faq: [
      { question: 'What email formats are supported?', answer: 'Currently .eml files are fully supported. MSG file support is coming soon.' },
      { question: 'Are attachments included?', answer: 'Attachment names are listed in the PDF. The actual files are not embedded.' },
      { question: 'Is the email formatting preserved?', answer: 'Yes, HTML emails maintain their formatting as closely as possible.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ to PDF',
    metaDescription: 'Convert comic book archives (CBZ) to PDF. Preserve image order and quality for digital comics.',
    keywords: ['cbz to pdf', 'comic to pdf', 'convert cbz', 'comic book converter', 'cbz converter'],
    description: `
      <p>CBZ to PDF converts Comic Book Archive files into PDF documents. The tool extracts all images from the CBZ archive and compiles them into a PDF while maintaining the correct reading order.</p>
      <p>Choose from various page size options including original image dimensions or standardized comic book sizes. Perfect for reading comics on devices that support PDF but not CBZ.</p>
      <p>All conversion happens locally in your browser, ensuring your comics remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload CBZ File', description: 'Upload your .cbz comic book archive file.' },
      { step: 2, title: 'Select Options', description: 'Choose page size and image quality settings.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF and download your comic.' },
    ],
    useCases: [
      { title: 'E-Reader Compatibility', description: 'Convert CBZ to PDF for e-readers that only support PDF.', icon: 'book' },
      { title: 'Comic Archives', description: 'Create PDF archives of your digital comic collection.', icon: 'archive' },
      { title: 'Print Preparation', description: 'Convert digital comics to PDF for printing.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is CBZ format?', answer: 'CBZ is a ZIP archive containing comic book pages as image files, renamed with .cbz extension.' },
      { question: 'Is image quality preserved?', answer: 'Yes, images are embedded at their original quality in the PDF.' },
      { question: 'Are nested folders supported?', answer: 'Yes, images from all folders within the archive are extracted and sorted.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF to PDF/A',
    metaDescription: 'Convert PDF to PDF/A archival format. Ensure long-term document preservation with ISO standards.',
    keywords: ['pdf to pdfa', 'pdfa converter', 'archive pdf', 'pdf archival', 'long term preservation'],
    description: `
      <p>PDF to PDF/A converts your PDF documents to PDF/A format, the ISO standard for long-term document archiving. PDF/A ensures that documents will be viewable and reproducible for decades.</p>
      <p>Choose from PDF/A-1b (basic conformance), PDF/A-2b (recommended, supports transparency), or PDF/A-3b (allows embedded files). The tool embeds fonts and flattens transparency as needed.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF you want to convert to PDF/A.' },
      { step: 2, title: 'Select PDF/A Level', description: 'Choose PDF/A-1b, PDF/A-2b, or PDF/A-3b conformance level.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF/A and download the archival document.' },
    ],
    useCases: [
      { title: 'Legal Archives', description: 'Convert legal documents to PDF/A for court-admissible long-term storage.', icon: 'scale' },
      { title: 'Government Records', description: 'Comply with government archival requirements using PDF/A.', icon: 'building' },
      { title: 'Business Archives', description: 'Preserve important business documents for future accessibility.', icon: 'archive' },
    ],
    faq: [
      { question: 'Which PDF/A level should I use?', answer: 'PDF/A-2b is recommended for most uses. Use 1b for maximum compatibility or 3b if you need embedded files.' },
      { question: 'What makes PDF/A different?', answer: 'PDF/A embeds fonts, disables encryption, and ensures all elements are self-contained for future viewing.' },
      { question: 'Can I convert back from PDF/A?', answer: 'PDF/A files are standard PDFs and can be opened normally. The archival features add restrictions, not limitations.' },
    ],
  },

  'font-to-outline': {
    title: 'Font to Outline',
    metaDescription: 'Convert PDF fonts to vector outlines. Ensure compatibility when fonts may be unavailable.',
    keywords: ['font to outline', 'outline fonts', 'convert fonts', 'vector text', 'font compatibility'],
    description: `
      <p>Font to Outline converts all text in your PDF to vector paths (outlines). This ensures your document looks exactly the same on any system, even if the original fonts are not installed.</p>
      <p>This is essential for print preparation, ensuring graphics display correctly, and avoiding font licensing issues when sharing documents.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF containing fonts you want to convert.' },
      { step: 2, title: 'Configure Options', description: 'Set DPI for rasterization if needed for complex fonts.' },
      { step: 3, title: 'Convert and Download', description: 'Convert fonts to outlines and download the result.' },
    ],
    useCases: [
      { title: 'Print Preparation', description: 'Ensure fonts display correctly at commercial printers.', icon: 'printer' },
      { title: 'Cross-Platform Sharing', description: 'Share documents that look identical on any device.', icon: 'share-2' },
      { title: 'Font Licensing', description: 'Remove font embedding to avoid licensing concerns.', icon: 'shield' },
    ],
    faq: [
      { question: 'Can I still select text after conversion?', answer: 'No, outlined text becomes vector graphics and is no longer searchable or selectable.' },
      { question: 'Will file size increase?', answer: 'File size may increase as vectors can be larger than font data, especially for complex fonts.' },
      { question: 'Is this reversible?', answer: 'No, keep a backup of the original if you need editable text.' },
    ],
  },

  'extract-tables': {
    title: 'Extract Tables from PDF',
    metaDescription: 'Detect and extract tables from PDF documents. Export to JSON, Markdown, or CSV formats.',
    keywords: ['extract tables', 'pdf table extraction', 'pdf to csv', 'pdf to excel', 'table detection'],
    description: `
      <p>Extract Tables from PDF detects tabular data within your PDF documents and exports it in structured formats. Choose JSON for data integration, Markdown for documentation, or CSV for spreadsheets.</p>
      <p>The tool uses intelligent detection algorithms to identify table structures even in complex documents. Specify page ranges and adjust detection parameters for optimal results.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF containing tables you want to extract.' },
      { step: 2, title: 'Configure Detection', description: 'Set page range and minimum column/row thresholds.' },
      { step: 3, title: 'Export and Download', description: 'Choose output format (JSON/Markdown/CSV) and download.' },
    ],
    useCases: [
      { title: 'Data Analysis', description: 'Extract table data for analysis in spreadsheets or databases.', icon: 'bar-chart' },
      { title: 'Report Processing', description: 'Pull tables from PDF reports for further processing.', icon: 'file-text' },
      { title: 'Documentation', description: 'Convert PDF tables to Markdown for technical documentation.', icon: 'book' },
    ],
    faq: [
      { question: 'Can it detect complex tables?', answer: 'The tool works best with simple grid tables. Complex merged cells may require manual adjustment.' },
      { question: 'What if no tables are found?', answer: 'Try adjusting the minimum columns/rows threshold or check if the PDF contains actual table structures.' },
      { question: 'Can I extract from specific pages?', answer: 'Yes, specify a page range to limit extraction to certain pages.' },
    ],
  },

  'ocg-manager': {
    title: 'PDF Layer Manager (OCG)',
    metaDescription: 'Manage PDF layers (Optional Content Groups). View, toggle, add, delete, and rename layers in your PDF documents.',
    keywords: ['pdf layers', 'ocg manager', 'optional content groups', 'pdf layer visibility', 'manage pdf layers'],
    description: `
      <p>PDF Layer Manager allows you to view and manage Optional Content Groups (OCG) in your PDF documents. OCG layers are used in technical drawings, maps, and complex documents to organize content into toggleable layers.</p>
      <p>View all layers in your PDF, toggle their visibility, add new layers, delete unwanted ones, or rename existing layers. This tool is essential for working with layered PDFs like architectural plans, CAD exports, and print-ready documents.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload a PDF file that contains layers (OCG) or one you want to add layers to.' },
      { step: 2, title: 'View Layers', description: 'The tool automatically lists all layers found in the document with their visibility status.' },
      { step: 3, title: 'Manage Layers', description: 'Toggle layer visibility, rename layers, add new ones, or delete unwanted layers.' },
      { step: 4, title: 'Save and Download', description: 'Download your modified PDF with the layer changes applied.' },
    ],
    useCases: [
      { title: 'Technical Drawings', description: 'Manage layers in CAD exports to show/hide dimensions, annotations, or different views.', icon: 'ruler' },
      { title: 'Map Editing', description: 'Toggle different map layers like topography, roads, and labels for custom map prints.', icon: 'map' },
      { title: 'Print Preparation', description: 'Prepare layered PDFs for printing by toggling appropriate layers for different versions.', icon: 'printer' },
    ],
    faq: [
      { question: 'What are PDF layers (OCG)?', answer: 'Optional Content Groups (OCG) are layers in a PDF that can be shown or hidden. They are commonly used in CAD drawings, maps, and complex documents.' },
      { question: 'Why does my PDF show no layers?', answer: 'Not all PDFs contain layers. Layers are typically added during PDF creation from design software or CAD applications.' },
      { question: 'Will layer changes affect the original content?', answer: 'Layer visibility changes only affect what is displayed or printed. The actual content remains in the document.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF Reader',
    metaDescription: 'Free online PDF reader. View, navigate, zoom, rotate, and print PDF documents directly in your browser.',
    keywords: ['pdf reader', 'pdf viewer', 'view pdf online', 'read pdf', 'pdf browser viewer'],
    description: `
      <p>PDF Reader is a full-featured PDF viewer that lets you read and navigate PDF documents directly in your browser. No software installation required - just upload your PDF and start reading.</p>
      <p>Navigate between pages, zoom in and out, rotate the view, and use fullscreen mode for distraction-free reading. You can also print documents or download them for offline access.</p>
      <p>All viewing happens locally in your browser. Your documents are never uploaded to any server, ensuring complete privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open Your PDF', description: 'Click to upload or drag and drop a PDF file to open it in the reader.' },
      { step: 2, title: 'Navigate Pages', description: 'Use the page controls to go to the previous or next page, or jump to a specific page number.' },
      { step: 3, title: 'Adjust View', description: 'Zoom in or out, rotate the view, or enter fullscreen mode for comfortable reading.' },
      { step: 4, title: 'Print or Download', description: 'Print the document or download it for offline access when needed.' },
    ],
    useCases: [
      { title: 'Document Review', description: 'Quickly review PDF documents without installing any software.', icon: 'book-open' },
      { title: 'Mobile Reading', description: 'Read PDF documents on any device with a web browser.', icon: 'smartphone' },
      { title: 'Quick Preview', description: 'Preview PDFs before deciding to download or print them.', icon: 'eye' },
    ],
    faq: [
      { question: 'Is my document secure?', answer: 'Yes, your document is processed entirely in your browser and is never uploaded to any server.' },
      { question: 'Can I annotate or edit the PDF?', answer: 'This tool is for viewing only. Use our Sign PDF or Annotate PDF tools for editing.' },
      { question: 'Does it work on mobile devices?', answer: 'Yes, the PDF Reader works on all devices with a modern web browser.' },
    ],
  },
};

