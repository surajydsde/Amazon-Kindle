import React from 'react';
import { PageViewMode } from '../types';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Printer,
  Grid,
  FileSpreadsheet,
  Terminal,
  Layers,
  Sparkles,
  ShieldAlert,
  Eye,
  FileDown,
  Download
} from 'lucide-react';

interface NavbarProps {
  currentPageIndex: number;
  totalPages: number;
  onPageChange: (newIndex: number) => void;
  viewMode: PageViewMode;
  onViewModeChange: (mode: PageViewMode) => void;
  showKdpGuides: boolean;
  onToggleKdpGuides: () => void;
  onOpenKdpSpecs: () => void;
  onOpenPromptsModal: () => void;
  onOpenPdfModal: () => void;
  onPrintBook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPageIndex,
  totalPages,
  onPageChange,
  viewMode,
  onViewModeChange,
  showKdpGuides,
  onToggleKdpGuides,
  onOpenKdpSpecs,
  onOpenPromptsModal,
  onOpenPdfModal,
  onPrintBook
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Book Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-xs">
              <BookOpen size={22} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg font-black text-slate-900 font-heading leading-tight">
                  My First Cute Animal Coloring Book
                </h1>
                <span className="hidden sm:inline-block bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  KDP 8.5"×11"
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                18 Fun and Easy Animals for Kids Ages 3–5 • Print-Ready Manuscript
              </p>
            </div>
          </div>

          {/* Quick PDF & Print on Mobile */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={onOpenPdfModal}
              className="p-2 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center gap-1 shadow-xs"
              title="Download PDF"
            >
              <FileDown size={17} />
              <span className="text-[11px]">PDF</span>
            </button>
            <button
              onClick={onPrintBook}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center"
              title="Print"
            >
              <Printer size={16} />
            </button>
          </div>
        </div>

        {/* Center Page Navigator (Single/Spread mode) */}
        {viewMode !== 'grid' && (
          <div className="flex items-center gap-2 bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => onPageChange(Math.max(0, currentPageIndex - 1))}
              disabled={currentPageIndex === 0}
              className="p-1.5 rounded-xl hover:bg-white text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Previous Page"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1 text-xs font-bold text-slate-700 px-2">
              <span>Page</span>
              <select
                value={currentPageIndex}
                onChange={(e) => onPageChange(parseInt(e.target.value))}
                className="bg-white border border-slate-300 rounded-lg px-2 py-0.5 font-bold text-slate-800 text-xs focus:ring-2 focus:ring-amber-500"
              >
                {Array.from({ length: totalPages }, (_, i) => {
                  let label = `p.${i + 1}`;
                  if (i === 0) label += ` (Cover)`;
                  else if (i === 1) label += ` (Welcome)`;
                  else if (i === totalPages - 1) label += ` (Certificate)`;
                  else if (i % 2 === 0) label += ` (Animal #${i / 2})`;
                  else label += ` (Blank Bleed Guard)`;

                  return (
                    <option key={i} value={i}>
                      {label}
                    </option>
                  );
                })}
              </select>
              <span className="text-slate-400">of {totalPages}</span>
            </div>

            <button
              onClick={() => onPageChange(Math.min(totalPages - 1, currentPageIndex + 1))}
              disabled={currentPageIndex === totalPages - 1}
              className="p-1.5 rounded-xl hover:bg-white text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Next Page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Right Tools & View Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Modes */}
          <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
            <button
              onClick={() => onViewModeChange('single')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                viewMode === 'single'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Single Page Reader"
            >
              <Eye size={13} />
              <span className="hidden sm:inline">Page</span>
            </button>

            <button
              onClick={() => onViewModeChange('spread')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                viewMode === 'spread'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Two-Page Spread View"
            >
              <FileSpreadsheet size={13} />
              <span className="hidden sm:inline">Spread</span>
            </button>

            <button
              onClick={() => onViewModeChange('grid')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="39-Page Grid Overview"
            >
              <Grid size={13} />
              <span className="hidden sm:inline">39 Pages</span>
            </button>
          </div>

          {/* KDP Guides Toggle */}
          <button
            onClick={onToggleKdpGuides}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all ${
              showKdpGuides
                ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-2xs'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Toggle KDP 0.375 inch margin & bleed safety lines"
          >
            <ShieldAlert size={14} className={showKdpGuides ? 'text-rose-600' : 'text-slate-400'} />
            <span className="hidden lg:inline">KDP Margins</span>
          </button>

          {/* KDP Specs Modal Trigger */}
          <button
            onClick={onOpenKdpSpecs}
            className="px-3 py-1.5 bg-amber-100/80 hover:bg-amber-100 text-amber-900 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-amber-300 transition-colors shadow-2xs"
            title="Amazon KDP Publishing Specs & Listing Kit"
          >
            <Layers size={14} className="text-amber-700" />
            <span className="hidden sm:inline">KDP Suite</span>
          </button>

          {/* AI Prompts Master Trigger */}
          <button
            onClick={onOpenPromptsModal}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Master AI Image Generation Prompts"
          >
            <Terminal size={14} className="text-amber-400" />
            <span className="hidden sm:inline">AI Prompts</span>
          </button>

          {/* Download PDF Main Button */}
          <button
            onClick={onOpenPdfModal}
            className="hidden md:flex px-3.5 py-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl text-xs font-black items-center gap-1.5 shadow-sm transition-transform active:scale-95 ring-2 ring-amber-300/60 ring-offset-1"
            title="Download PDF (.pdf file download)"
          >
            <FileDown size={15} />
            <span>Download PDF</span>
          </button>

          {/* Print Manuscript Button */}
          <button
            onClick={onPrintBook}
            className="hidden md:flex px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold items-center gap-1.5 transition-colors"
            title="Print or Save PDF via Browser (8.5x11 inches)"
          >
            <Printer size={14} />
            <span>Print</span>
          </button>
        </div>
      </div>
    </header>
  );
};
