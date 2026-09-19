import React, { useState } from 'react';
import { TOTAL_PAGES_COUNT, ANIMALS_DATA } from '../data/animals';
import { downloadPagesAsPdf, downloadSingleElementPdf, PdfGenerationProgress, PageToRender } from '../utils/pdfGenerator';
import {
  X,
  Download,
  FileDown,
  Printer,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Layers,
  BookOpen,
  FileText,
  ShieldCheck,
  Check,
  Info
} from 'lucide-react';

interface PdfDownloadModalProps {
  currentPageIndex: number;
  onClose: () => void;
  onNativePrint: () => void;
}

export const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  currentPageIndex,
  onClose,
  onNativePrint
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [progress, setProgress] = useState<PdfGenerationProgress | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // KDP Interior Manuscript (82 Pages: Welcome + 40 Animals + 40 Blanks + Certificate) - Excludes Cover
  const getKdpInteriorPages = (): PageToRender[] => {
    const list: PageToRender[] = [
      { elementId: 'pdf-page-1', title: 'Welcome / Belongs To' }
    ];

    ANIMALS_DATA.forEach((animal, idx) => {
      const coloringIdx = 2 + idx * 2;
      const blankIdx = coloringIdx + 1;
      list.push({ elementId: `pdf-page-${coloringIdx}`, title: `${animal.name} Coloring Page` });
      list.push({ elementId: `pdf-page-${blankIdx}`, title: `${animal.name} Blank Bleed Guard` });
    });

    list.push({ elementId: `pdf-page-${TOTAL_PAGES_COUNT - 1}`, title: 'Super Colorist Certificate' });
    return list;
  };

  const getFullBookPages = (): PageToRender[] => {
    const list: PageToRender[] = [
      { elementId: 'pdf-page-0', title: 'Front Cover' },
      { elementId: 'pdf-page-1', title: 'Welcome / Belongs To' }
    ];

    ANIMALS_DATA.forEach((animal, idx) => {
      const coloringIdx = 2 + idx * 2;
      const blankIdx = coloringIdx + 1;
      list.push({ elementId: `pdf-page-${coloringIdx}`, title: `${animal.name} Coloring Page` });
      list.push({ elementId: `pdf-page-${blankIdx}`, title: `${animal.name} Blank Bleed Guard` });
    });

    list.push({ elementId: `pdf-page-${TOTAL_PAGES_COUNT - 1}`, title: 'Super Colorist Certificate' });
    return list;
  };

  const getAnimalsOnlyPages = (): PageToRender[] => {
    return ANIMALS_DATA.map((animal, idx) => ({
      elementId: `pdf-page-${2 + idx * 2}`,
      title: `${animal.name} Coloring Page`
    }));
  };

  const getActivityPackPages = (): PageToRender[] => {
    const list: PageToRender[] = [
      { elementId: 'pdf-page-1', title: 'Welcome / Belongs To' }
    ];
    ANIMALS_DATA.forEach((animal, idx) => {
      list.push({ elementId: `pdf-page-${2 + idx * 2}`, title: `${animal.name} Coloring Page` });
    });
    list.push({ elementId: `pdf-page-${TOTAL_PAGES_COUNT - 1}`, title: 'Super Colorist Certificate' });
    return list;
  };

  // 1. Download KDP Interior Manuscript (No Bleed, 82 Pages, no cover)
  const handleDownloadKdpInterior = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getKdpInteriorPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: `Cute-Animals-Coloring-Book-KDP-Interior-${pages.length}Pages-NoBleed.pdf`,
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess(`Amazon KDP Interior Manuscript (${pages.length} Pages, No Bleed) downloaded successfully! Ready for KDP manuscript upload.`);
    } else {
      setDownloadError('Could not compile interior pages automatically. You can also use "Save as PDF via Browser Print" below.');
    }
  };

  // 2. Download Front Cover PDF
  const handleDownloadCover = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const success = await downloadSingleElementPdf('pdf-page-0', 'Cute-Animals-Coloring-Book-Front-Cover-8.5x11.pdf');
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess('Front Cover 8.5" × 11" PDF downloaded successfully! (Upload to KDP Cover section or design tools).');
    } else {
      setDownloadError('Failed to download cover PDF. Please try again.');
    }
  };

  // 3. Download Full Book PDF with Cover
  const handleDownloadFullBook = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getFullBookPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: `My-First-Cute-Animal-Coloring-Book-${TOTAL_PAGES_COUNT}Pages-Complete.pdf`,
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess(`Complete ${TOTAL_PAGES_COUNT}-Page Coloring Book PDF downloaded successfully!`);
    } else {
      setDownloadError('Could not compile all pages automatically. You can also use "Save as PDF via Browser Print" below.');
    }
  };

  // 4. Download Animals Only PDF
  const handleDownloadAnimalsOnly = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getAnimalsOnlyPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: `${ANIMALS_DATA.length}-Cute-Animals-Coloring-Sheets.pdf`,
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess(`${ANIMALS_DATA.length} Animals Coloring Sheets PDF downloaded successfully!`);
    } else {
      setDownloadError('Failed to generate animal sheets PDF. Please try again or use the browser print option below.');
    }
  };

  // 5. Download Activity Pack
  const handleDownloadActivityPack = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getActivityPackPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: `Cute-Animal-Activity-Pack-${ANIMALS_DATA.length + 2}Pages.pdf`,
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess(`${ANIMALS_DATA.length + 2}-Page Activity Pack PDF downloaded successfully!`);
    } else {
      setDownloadError('Failed to generate activity pack PDF. Please try again or use the browser print option below.');
    }
  };

  // 6. Download Current Page PDF
  const handleDownloadCurrentPage = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pageId = `pdf-page-${currentPageIndex}`;
    const pageNumber = currentPageIndex + 1;
    const success = await downloadSingleElementPdf(pageId, `coloring-book-page-${pageNumber}.pdf`);
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess(`Page ${pageNumber} PDF downloaded successfully!`);
    } else {
      setDownloadError(`Failed to download page ${pageNumber}. Please try again.`);
    }
  };

  const progressPercent = progress && progress.totalPages > 0
    ? Math.round((progress.currentPage / progress.totalPages) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <FileDown size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black font-heading leading-tight flex items-center gap-2">
                <span>Download PDF</span>
                <span className="text-xs bg-white text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  8.5" × 11" US Letter
                </span>
              </h3>
              <p className="text-xs text-amber-100 font-medium">
                Instant PDF download for printing at home or publishing to Amazon KDP
              </p>
            </div>
          </div>
          {!isGenerating && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {/* Active Generation Progress Indicator */}
          {isGenerating && (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 text-center space-y-3 animate-pulse">
              <div className="flex items-center justify-center gap-2 text-amber-800 font-bold text-sm">
                <Loader2 size={20} className="animate-spin text-amber-600" />
                <span>
                  {progress?.status === 'compiling'
                    ? 'Packaging your PDF file...'
                    : `Rendering Page ${progress?.currentPage || 1} of ${progress?.totalPages || TOTAL_PAGES_COUNT}...`}
                </span>
              </div>

              <div className="text-xs font-semibold text-slate-600">
                {progress?.currentTitle || 'Preparing artwork...'}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] text-slate-500 font-bold px-1">
                <span>Rendering high-res 8.5" × 11" pages</span>
                <span>{progressPercent}%</span>
              </div>
            </div>
          )}

          {/* Success Banner */}
          {downloadSuccess && !isGenerating && (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex items-center gap-3 text-emerald-800 text-xs font-bold shadow-2xs">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <span className="flex-1">{downloadSuccess}</span>
              <span className="bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full text-[10px]">
                Downloaded
              </span>
            </div>
          )}

          {/* Error Banner */}
          {downloadError && !isGenerating && (
            <div className="bg-rose-50 border border-rose-300 rounded-2xl p-4 flex items-center gap-3 text-rose-800 text-xs font-semibold shadow-2xs">
              <AlertCircle size={20} className="text-rose-600 shrink-0" />
              <span className="flex-1">{downloadError}</span>
            </div>
          )}

          {/* Download Options Grid */}
          {!isGenerating && (
            <div className="space-y-3">
              {/* Amazon KDP No-Bleed Setup Guide Banner */}
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-xs text-emerald-950 shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-bold text-emerald-950 text-sm block">
                      Amazon KDP "No Bleed" Preflight Resolution:
                    </strong>
                    <p className="text-emerald-900 leading-relaxed">
                      If Amazon KDP's previewer warned that content was cut off or flagged bleed issues, here is the exact solution:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-emerald-800 font-medium mt-1">
                      <li>
                        <strong>Select 8.5" × 11" Trim Size & "No Bleed":</strong> On KDP Step 2 (Paperback Content), select <strong>8.5" × 11"</strong> and <strong>No Bleed</strong>.
                      </li>
                      <li>
                        <strong>Upload Manuscript Separately from Cover:</strong> Amazon KDP requires the interior manuscript to NOT include the cover. Download <strong>Option 1 (Interior Manuscript • 82 Pages)</strong> below — it excludes the colored cover and provides strict 0.50" (48px) safe white margins on every page (exceeding KDP's 0.375" minimum).
                      </li>
                      <li>
                        <strong>Upload Cover in Step 3:</strong> Download <strong>Option 2 (Front Cover)</strong> to use in KDP's separate "Book Cover" section.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-1">
                Select Your PDF Download:
              </div>

              {/* OPTION 1: KDP INTERIOR MANUSCRIPT (RECOMMENDED FOR AMAZON KDP) */}
              <div className="bg-amber-50/80 hover:bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <strong className="text-slate-900 font-heading text-sm sm:text-base">
                        Amazon KDP Interior Manuscript ({TOTAL_PAGES_COUNT - 1} Pages • No Bleed)
                      </strong>
                      <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                        KDP Upload Ready
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Welcome + {ANIMALS_DATA.length} Animals + {ANIMALS_DATA.length} Blank Bleed-Guards + Certificate.
                    </p>
                    <span className="text-[11px] text-amber-800 font-bold block mt-1">
                      ✓ No cover included • Strict 0.50" safe margin on every page • Zero full-bleed color • Passes KDP No Bleed review.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadKdpInterior}
                  className="w-full sm:w-auto px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 shrink-0"
                >
                  <Download size={15} />
                  <span>Download Interior ({TOTAL_PAGES_COUNT - 1}p)</span>
                </button>
              </div>

              {/* OPTION 2: STANDALONE FRONT COVER */}
              <div className="bg-white hover:bg-sky-50/50 border border-sky-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      Front Book Cover Art PDF (8.5" × 11" High-Res)
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Standalone high-resolution front cover for Amazon KDP Step 3 ("Book Cover") or graphic tools.
                    </p>
                    <span className="text-[11px] text-sky-700 font-bold block mt-0.5">
                      Upload into KDP Cover Creator or combine into your wrap-around paperback cover spread.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadCover}
                  className="w-full sm:w-auto px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download Cover</span>
                </button>
              </div>

              {/* OPTION 3: COMPLETE KEEPSAKE BOOK (WITH COVER) */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      Complete Keepsake Book PDF ({TOTAL_PAGES_COUNT} Pages with Cover)
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Front Cover + All {TOTAL_PAGES_COUNT - 1} Interior Pages in one single digital document.
                    </p>
                    <span className="text-[11px] text-purple-700 font-semibold block mt-0.5">
                      Ideal for personal digital reading or tablet coloring (not for KDP interior manuscript).
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadFullBook}
                  className="w-full sm:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download Complete ({TOTAL_PAGES_COUNT}p)</span>
                </button>
              </div>

              {/* OPTION 4: ANIMALS ONLY */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      {ANIMALS_DATA.length} Animal Coloring Sheets Only PDF
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Contains only the {ANIMALS_DATA.length} animal activities (no blank pages, no cover).
                    </p>
                    <span className="text-[11px] text-indigo-600 font-bold block mt-0.5">
                      Paper-saver home print pack.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadAnimalsOnly}
                  className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download ({ANIMALS_DATA.length}p)</span>
                </button>
              </div>

              {/* OPTION 5: CURRENT PAGE ONLY */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      Current Page Only (Page {currentPageIndex + 1})
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Instant single-sheet PDF download of the active page.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleDownloadCurrentPage}
                  className="w-full sm:w-auto px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download Page {currentPageIndex + 1}</span>
                </button>
              </div>

              {/* OPTION 6: BROWSER VECTOR PRINT-TO-PDF */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Printer size={20} />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-heading text-sm flex items-center gap-1.5">
                        <span>Save as PDF via Browser Print</span>
                        <span className="text-[10px] text-slate-500 font-normal">(100% Crisp Vector)</span>
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Opens your system print window. Select <strong>"Save as PDF"</strong> for ultra-high-definition vector lines.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onNativePrint();
                    }}
                    className="px-3.5 py-2 border border-slate-300 hover:bg-white text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
                  >
                    <Printer size={14} />
                    <span>Open Print Dialog</span>
                  </button>
                </div>

                {/* Print Guide Quick Tips */}
                <div className="mt-3 bg-white p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <span className="font-bold text-slate-800 block">1. Destination</span>
                    <span>Save as PDF</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">2. Margins</span>
                    <span>None / Default</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">3. Options</span>
                    <span>Check "Background graphics"</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
