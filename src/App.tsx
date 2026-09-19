import React, { useState, useEffect } from 'react';
import { ANIMALS_DATA, TOTAL_PAGES_COUNT } from './data/animals';
import { AnimalData, PageViewMode } from './types';
import { Navbar } from './components/Navbar';
import { CoverPage } from './components/CoverPage';
import { WelcomePage } from './components/WelcomePage';
import { AnimalColoringPage } from './components/AnimalColoringPage';
import { BlankPage } from './components/BlankPage';
import { CertificatePage } from './components/CertificatePage';
import { BookGridOverview } from './components/BookGridOverview';
import { DigitalColoringStudio } from './components/DigitalColoringStudio';
import { KdpSpecsModal } from './components/KdpSpecsModal';
import { PromptsModal } from './components/PromptsModal';
import { PdfDownloadModal } from './components/PdfDownloadModal';
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  Sparkles,
  BookOpen,
  Info,
  Palette,
  ShieldCheck,
  FileDown,
  Download
} from 'lucide-react';

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<PageViewMode>('single');
  const [showKdpGuides, setShowKdpGuides] = useState<boolean>(false);
  const [showKdpModal, setShowKdpModal] = useState<boolean>(false);
  const [showPromptsModal, setShowPromptsModal] = useState<boolean>(false);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
  const [activeStudioAnimal, setActiveStudioAnimal] = useState<AnimalData | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showKdpModal || showPromptsModal || showPdfModal || activeStudioAnimal) {
        if (e.key === 'Escape') {
          setShowKdpModal(false);
          setShowPromptsModal(false);
          setShowPdfModal(false);
          setActiveStudioAnimal(null);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPageIndex((prev) => Math.min(TOTAL_PAGES_COUNT - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPageIndex((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showKdpModal, showPromptsModal, showPdfModal, activeStudioAnimal]);

  const handlePrint = () => {
    window.print();
  };

  // Helper to render a specific page by index
  const renderPage = (index: number, isPdfMode: boolean = false) => {
    if (index === 0) {
      return <CoverPage showKdpGuides={showKdpGuides && !isPdfMode} isPdfMode={isPdfMode} />;
    }
    if (index === 1) {
      return <WelcomePage showKdpGuides={showKdpGuides && !isPdfMode} isPdfMode={isPdfMode} />;
    }
    if (index === TOTAL_PAGES_COUNT - 1) {
      return <CertificatePage pageNumber={TOTAL_PAGES_COUNT} showKdpGuides={showKdpGuides && !isPdfMode} isPdfMode={isPdfMode} />;
    }

    // Animals start on page index 2 (Page 3 of book)
    // index 2 -> Animal 1 (Elephant), index 3 -> Blank 1
    // index 4 -> Animal 2 (Lion), index 5 -> Blank 2
    const interiorIndex = index - 2;
    const animalIdx = Math.floor(interiorIndex / 2);
    const isColoringPage = interiorIndex % 2 === 0;

    if (animalIdx >= 0 && animalIdx < ANIMALS_DATA.length) {
      const animal = ANIMALS_DATA[animalIdx];
      if (isColoringPage) {
        return (
          <AnimalColoringPage
            animal={animal}
            pageNumber={index + 1}
            showKdpGuides={showKdpGuides && !isPdfMode}
            onOpenColorStudio={(a) => setActiveStudioAnimal(a)}
            onDownloadPdf={() => setShowPdfModal(true)}
            isPdfMode={isPdfMode}
          />
        );
      } else {
        return <BlankPage pageNumber={index + 1} showKdpGuides={showKdpGuides && !isPdfMode} isPdfMode={isPdfMode} />;
      }
    }

    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800">
      {/* Top Navigation Bar */}
      <Navbar
        currentPageIndex={currentPageIndex}
        totalPages={TOTAL_PAGES_COUNT}
        onPageChange={setCurrentPageIndex}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showKdpGuides={showKdpGuides}
        onToggleKdpGuides={() => setShowKdpGuides(!showKdpGuides)}
        onOpenKdpSpecs={() => setShowKdpModal(true)}
        onOpenPromptsModal={() => setShowPromptsModal(true)}
        onOpenPdfModal={() => setShowPdfModal(true)}
        onPrintBook={handlePrint}
      />

      {/* Prominent Direct PDF Download Bar */}
      <div className="no-print bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white py-2 px-4 shadow-sm flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <FileDown size={14} className="text-white" />
          </div>
          <span className="font-semibold">
            Looking for just the PDF file? Download the complete {TOTAL_PAGES_COUNT}-page print-ready book directly to your computer.
          </span>
        </div>

        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <button
            onClick={() => setShowPdfModal(true)}
            className="px-3 py-1 bg-white hover:bg-amber-50 text-amber-900 font-extrabold rounded-lg shadow-2xs flex items-center gap-1.5 transition-transform active:scale-95"
          >
            <Download size={13} className="text-amber-700" />
            <span>Download Book PDF</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-2.5 py-1 bg-amber-700/60 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors flex items-center gap-1"
            title="Save as PDF via browser print"
          >
            <Printer size={13} />
            <span>Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Quick KDP Spec Banner Notification */}
      <div className="no-print bg-amber-100/70 border-b border-amber-200 py-1.5 px-4 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Sparkles size={14} className="text-amber-600" />
        <span>
          Amazon KDP Spec: <strong>8.5" × 11" US Letter</strong> • <strong>Single-Sided</strong> ({ANIMALS_DATA.length} Activities + {ANIMALS_DATA.length} Bleed-Guard Blank Pages • {TOTAL_PAGES_COUNT} Pages Total) • <strong>Thick 6px Outlines</strong>
        </span>
        <button
          onClick={() => setShowKdpModal(true)}
          className="underline font-bold hover:text-amber-950 ml-1"
        >
          View Full Specs
        </button>
      </div>

      {/* Main Reader Stage */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8">
        {/* VIEW 1: SINGLE PAGE MODE */}
        {viewMode === 'single' && (
          <div className="w-full flex flex-col items-center">
            {/* Page Canvas Container */}
            <div className="w-full max-w-[640px] md:max-w-[700px] transition-all">
              {renderPage(currentPageIndex)}
            </div>

            {/* Bottom Floating Navigation Buttons */}
            <div className="no-print flex items-center justify-between gap-4 mt-6 w-full max-w-md px-4">
              <button
                onClick={() => setCurrentPageIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentPageIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 shadow-xs disabled:opacity-30 disabled:hover:bg-white transition-all active:scale-95"
              >
                <ChevronLeft size={16} />
                <span>Previous Page</span>
              </button>

              <span className="text-xs font-bold text-slate-500">
                Page {currentPageIndex + 1} of {TOTAL_PAGES_COUNT}
              </span>

              <button
                onClick={() => setCurrentPageIndex((prev) => Math.min(TOTAL_PAGES_COUNT - 1, prev + 1))}
                disabled={currentPageIndex === TOTAL_PAGES_COUNT - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs disabled:opacity-30 disabled:hover:bg-amber-500 transition-all active:scale-95"
              >
                <span>Next Page</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: TWO-PAGE SPREAD MODE */}
        {viewMode === 'spread' && (
          <div className="w-full max-w-6xl flex flex-col items-center">
            <div className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-2">
              <BookOpen size={15} />
              <span>Two-Page Book Spread View (Left: Verso, Right: Recto)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center">
              {/* Left Page (Even Index) */}
              <div className="w-full max-w-[560px] mx-auto">
                <div className="text-center text-xs font-bold text-slate-400 mb-1">
                  Left Page ({currentPageIndex % 2 === 0 ? currentPageIndex + 1 : currentPageIndex})
                </div>
                {renderPage(currentPageIndex % 2 === 0 ? currentPageIndex : currentPageIndex - 1)}
              </div>

              {/* Right Page (Odd Index) */}
              <div className="w-full max-w-[560px] mx-auto">
                <div className="text-center text-xs font-bold text-slate-400 mb-1">
                  Right Page ({currentPageIndex % 2 === 0 ? currentPageIndex + 2 : currentPageIndex + 1})
                </div>
                {currentPageIndex + 1 < TOTAL_PAGES_COUNT
                  ? renderPage(currentPageIndex % 2 === 0 ? currentPageIndex + 1 : currentPageIndex)
                  : (
                    <div className="w-full h-full min-h-[400px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold text-xs">
                      End of Book
                    </div>
                  )}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="no-print flex items-center justify-between gap-4 mt-6 w-full max-w-md px-4">
              <button
                onClick={() => setCurrentPageIndex((prev) => Math.max(0, prev - 2))}
                disabled={currentPageIndex <= 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 shadow-xs disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={16} />
                <span>Previous Spread</span>
              </button>

              <button
                onClick={() => setCurrentPageIndex((prev) => Math.min(TOTAL_PAGES_COUNT - 1, prev + 2))}
                disabled={currentPageIndex >= TOTAL_PAGES_COUNT - 2}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs disabled:opacity-30 transition-all"
              >
                <span>Next Spread</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: GRID OVERVIEW */}
        {viewMode === 'grid' && (
          <BookGridOverview
            currentPageIndex={currentPageIndex}
            onSelectPage={(idx) => {
              setCurrentPageIndex(idx);
              setViewMode('single');
            }}
          />
        )}
      </main>

      {/* OFFSCREEN STAGE: Enables programmatic jsPDF rendering and native browser printing */}
      <div
        id="pdf-render-offscreen-stage"
        className="fixed pointer-events-none -z-50 -left-[99999px] top-0 w-[816px] print:static print:pointer-events-auto print:left-auto print:z-auto print:w-full print:block"
        style={{ width: '816px' }}
      >
        {Array.from({ length: TOTAL_PAGES_COUNT }, (_, idx) => (
          <div
            key={idx}
            id={`pdf-page-${idx}`}
            className="w-[816px] h-[1056px] min-w-[816px] min-h-[1056px] max-w-[816px] max-h-[1056px] bg-white print:w-full print:max-w-[8.5in] print-page mb-8 print:mb-0 overflow-hidden box-border"
            style={{ width: '816px', height: '1056px' }}
          >
            {renderPage(idx, true)}
          </div>
        ))}
      </div>

      {/* PDF Download Options Modal */}
      {showPdfModal && (
        <PdfDownloadModal
          currentPageIndex={currentPageIndex}
          onClose={() => setShowPdfModal(false)}
          onNativePrint={handlePrint}
        />
      )}

      {/* Interactive Digital Coloring Studio Modal */}
      {activeStudioAnimal && (
        <DigitalColoringStudio
          animal={activeStudioAnimal}
          onClose={() => setActiveStudioAnimal(null)}
        />
      )}

      {/* Amazon KDP Specifications & Publishing Kit Modal */}
      {showKdpModal && <KdpSpecsModal onClose={() => setShowKdpModal(false)} />}

      {/* Master AI Prompts Generator Modal */}
      {showPromptsModal && <PromptsModal onClose={() => setShowPromptsModal(false)} />}
    </div>
  );
}
