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

  // Helper to compile page list
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

  // 1. Download Full 39-Page PDF
  const handleDownloadFullBook = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getFullBookPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: 'My-First-Cute-Animal-Coloring-Book-39Pages.pdf',
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess('Complete 39-Page Coloring Book PDF downloaded successfully!');
    } else {
      setDownloadError('Could not compile all pages automatically. You can also use "Save as PDF via Browser Print" below for instant 100% vector printing.');
    }
  };

  // 2. Download 18 Animals Only PDF
  const handleDownloadAnimalsOnly = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getAnimalsOnlyPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: '18-Cute-Animals-Coloring-Sheets.pdf',
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess('18 Animals Coloring Sheets PDF downloaded successfully!');
    } else {
      setDownloadError('Failed to generate animal sheets PDF. Please try again or use the browser print option below.');
    }
  };

  // 3. Download Activity Pack (20 pages)
  const handleDownloadActivityPack = async () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    setDownloadError(null);
    const pages = getActivityPackPages();
    const success = await downloadPagesAsPdf({
      pages,
      fileName: 'Cute-Animal-Activity-Pack-20Pages.pdf',
      onProgress: (p) => setProgress(p)
    });
    setIsGenerating(false);
    if (success) {
      setDownloadSuccess('20-Page Activity Pack PDF downloaded successfully!');
    } else {
      setDownloadError('Failed to generate activity pack PDF. Please try again or use the browser print option below.');
    }
  };

  // 4. Download Current Page PDF
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
                    : `Rendering Page ${progress?.currentPage || 1} of ${progress?.totalPages || 39}...`}
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
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Your PDF Download:
              </div>

              {/* OPTION 1: FULL 39-PAGE MANUSCRIPT */}
              <div className="bg-amber-50/70 hover:bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-heading text-sm sm:text-base">
                        Full Coloring Book PDF (39 Pages)
                      </strong>
                      <span className="bg-amber-200 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Front Cover + Welcome + 18 Animals + 18 Blank Bleed-Guards + Completion Diploma.
                    </p>
                    <span className="text-[11px] text-amber-700 font-bold block mt-1">
                      Exact Amazon KDP 8.5" × 11" print-ready interior & single-sided sequence.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadFullBook}
                  className="w-full sm:w-auto px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 shrink-0"
                >
                  <Download size={15} />
                  <span>Download .PDF</span>
                </button>
              </div>

              {/* OPTION 2: 18 ANIMALS ONLY */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      18 Animal Coloring Sheets Only PDF
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Contains only the 18 animal activities (no blank pages, no cover).
                    </p>
                    <span className="text-[11px] text-indigo-600 font-bold block mt-0.5">
                      Fastest download, perfect for printing on home printers to save paper.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadAnimalsOnly}
                  className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download (18p)</span>
                </button>
              </div>

              {/* OPTION 3: 20-PAGE ACTIVITY PACK */}
              <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText size={20} />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-sm">
                      Kids Activity Pack PDF (20 Pages)
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Welcome page + 18 Animals + Certificate (without blank bleed barrier pages).
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleDownloadActivityPack}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 shrink-0"
                >
                  <Download size={14} />
                  <span>Download (20p)</span>
                </button>
              </div>

              {/* OPTION 4: CURRENT PAGE ONLY */}
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

              {/* OPTION 5: BROWSER VECTOR PRINT-TO-PDF */}
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
