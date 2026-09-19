import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas-pro';

export interface PdfGenerationProgress {
  currentPage: number;
  totalPages: number;
  currentTitle: string;
  status: 'rendering' | 'compiling' | 'ready' | 'error';
  errorMessage?: string;
}

export interface PageToRender {
  elementId: string;
  title: string;
}

/**
 * Generates a multi-page PDF from DOM elements and triggers a direct .pdf file download
 */
export async function downloadPagesAsPdf({
  pages,
  fileName = 'My-First-Cute-Animal-Coloring-Book.pdf',
  onProgress
}: {
  pages: PageToRender[];
  fileName?: string;
  onProgress?: (progress: PdfGenerationProgress) => void;
}): Promise<boolean> {
  try {
    const total = pages.length;
    if (total === 0) {
      throw new Error('No pages selected for PDF generation.');
    }

    // Initialize 8.5 x 11 inch PDF in portrait mode
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: [8.5, 11],
      compress: true
    });

    for (let i = 0; i < total; i++) {
      const pageInfo = pages[i];
      if (onProgress) {
        onProgress({
          currentPage: i + 1,
          totalPages: total,
          currentTitle: pageInfo.title,
          status: 'rendering'
        });
      }

      // Find the element in DOM
      let el = document.getElementById(pageInfo.elementId);
      if (!el) {
        // Fallback: try finding by query selector
        el = document.querySelector(`[id="${pageInfo.elementId}"]`) as HTMLElement;
      }

      if (!el) {
        console.warn(`Element with ID ${pageInfo.elementId} not found in DOM, skipping.`);
        continue;
      }

      // Clone or capture element with html2canvas-pro at high-res print quality (~240-300 DPI)
      const canvas = await html2canvas(el, {
        scale: 2.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        ignoreElements: (element) => element.classList.contains('no-print'),
        onclone: (clonedDoc) => {
          const stage = clonedDoc.getElementById('pdf-render-offscreen-stage');
          if (stage) {
            stage.style.position = 'static';
            stage.style.left = '0';
            stage.style.top = '0';
            stage.style.display = 'block';
            stage.style.visibility = 'visible';
            stage.style.width = '816px';
          }
          const clonedEl = clonedDoc.getElementById(pageInfo.elementId);
          if (clonedEl) {
            clonedEl.style.display = 'block';
            clonedEl.style.visibility = 'visible';
            clonedEl.style.width = '816px';
            clonedEl.style.height = '1056px';
            clonedEl.style.minWidth = '816px';
            clonedEl.style.minHeight = '1056px';
            clonedEl.style.maxWidth = '816px';
            clonedEl.style.maxHeight = '1056px';
            clonedEl.style.boxShadow = 'none';
            clonedEl.style.borderRadius = '0';
            clonedEl.style.border = 'none';
            clonedEl.style.margin = '0';
            clonedEl.style.overflow = 'hidden';

            const innerPage = clonedEl.querySelector('.pdf-page-container, .print-page') as HTMLElement;
            if (innerPage) {
              innerPage.style.width = '816px';
              innerPage.style.height = '1056px';
              innerPage.style.maxWidth = '816px';
              innerPage.style.maxHeight = '1056px';
              innerPage.style.boxShadow = 'none';
              innerPage.style.borderRadius = '0';
              innerPage.style.border = 'none';
              innerPage.style.margin = '0';
            }
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      if (i > 0) {
        pdf.addPage([8.5, 11], 'portrait');
      }

      // Add image spanning 8.5 x 11 inches
      pdf.addImage(imgData, 'JPEG', 0, 0, 8.5, 11, undefined, 'FAST');

      // Small yield to let UI re-render progress smoothly
      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    if (onProgress) {
      onProgress({
        currentPage: total,
        totalPages: total,
        currentTitle: 'Saving PDF file...',
        status: 'compiling'
      });
    }

    // Save & download the actual PDF file
    pdf.save(fileName);

    if (onProgress) {
      onProgress({
        currentPage: total,
        totalPages: total,
        currentTitle: 'Download complete!',
        status: 'ready'
      });
    }

    return true;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to generate PDF';
    console.error('PDF Generation Error:', err);
    if (onProgress) {
      onProgress({
        currentPage: 0,
        totalPages: pages.length,
        currentTitle: 'Error',
        status: 'error',
        errorMessage: errorMsg
      });
    }
    return false;
  }
}

/**
 * Instant Single Page PDF Download
 */
export async function downloadSingleElementPdf(
  elementId: string,
  fileName: string = 'cute-animal-page.pdf'
): Promise<boolean> {
  const el = document.getElementById(elementId);
  if (!el) return false;

  const canvas = await html2canvas(el, {
    scale: 2.5,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    ignoreElements: (element) => element.classList.contains('no-print'),
    onclone: (clonedDoc) => {
      const stage = clonedDoc.getElementById('pdf-render-offscreen-stage');
      if (stage) {
        stage.style.position = 'static';
        stage.style.left = '0';
        stage.style.top = '0';
        stage.style.display = 'block';
        stage.style.visibility = 'visible';
      }
      const clonedEl = clonedDoc.getElementById(elementId);
      if (clonedEl) {
        clonedEl.style.display = 'block';
        clonedEl.style.visibility = 'visible';
      }
    }
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.95);
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: [8.5, 11],
    compress: true
  });

  pdf.addImage(imgData, 'JPEG', 0, 0, 8.5, 11, undefined, 'FAST');
  pdf.save(fileName);
  return true;
}
