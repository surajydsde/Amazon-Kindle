import React, { useState } from 'react';
import { AnimalData } from '../types';
import { AnimalVector } from './AnimalVectors';
import { Sparkles, Copy, Check, Palette, RotateCcw, FileDown } from 'lucide-react';

interface AnimalColoringPageProps {
  animal: AnimalData;
  pageNumber: number;
  showKdpGuides?: boolean;
  onOpenColorStudio?: (animal: AnimalData) => void;
  onDownloadPdf?: () => void;
}

export const AnimalColoringPage: React.FC<AnimalColoringPageProps> = ({
  animal,
  pageNumber,
  showKdpGuides = false,
  onOpenColorStudio,
  onDownloadPdf
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [interactiveFills, setInteractiveFills] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState<string>(animal.colorPalette[0].hex);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(animal.coloringPrompt.midjourney);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleRegionClick = (regionId: string) => {
    setInteractiveFills((prev) => ({
      ...prev,
      [regionId]: prev[regionId] === selectedColor ? '#FFFFFF' : selectedColor
    }));
  };

  const resetColors = () => {
    setInteractiveFills({});
  };

  return (
    <div
      id={`animal-page-${animal.id}`}
      className="print-page relative w-full bg-white overflow-hidden shadow-xl rounded-xl mx-auto flex flex-col justify-between text-slate-800 p-6 sm:p-8 select-none border border-slate-100"
      style={{
        aspectRatio: '8.5 / 11',
        maxWidth: '720px'
      }}
    >
      {/* Amazon KDP Safe Zone Overlay (0.375" Margin / Gutter Guide) */}
      {showKdpGuides && (
        <div className="absolute inset-0 z-50 pointer-events-none border-4 border-dashed border-rose-400/60 m-6 flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-rose-600 bg-rose-50/90 px-2 py-0.5 rounded">
            <span>KDP 0.375" SAFE MARGIN</span>
            <span>TOP SECTION (20%)</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-rose-600 bg-rose-50/90 px-2 py-0.5 rounded">
            <span>BOTTOM SECTION (80%)</span>
            <span>NO-BLEED BOUNDARY</span>
          </div>
        </div>
      )}

      {/* TOP SECTION (20% OF PAGE): Small colored reference image + animal name */}
      <div className="w-full h-[20%] border-b-2 border-dashed border-slate-200 pb-3 flex items-center justify-between gap-4 px-2">
        {/* Left Side: Animal Info & Fun Fact */}
        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-0.5">
            <Sparkles size={13} className="text-amber-500" />
            <span>Activity #{animal.id} • {animal.category} Animal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading leading-tight">
            {animal.name}
          </h2>

          <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 max-w-sm mt-0.5">
            💡 {animal.funFact}
          </p>

          {/* Color Palette Suggestions */}
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Palette:
            </span>
            <div className="flex items-center gap-1">
              {animal.colorPalette.map((col, idx) => (
                <button
                  key={idx}
                  title={col.name}
                  onClick={() => setSelectedColor(col.hex)}
                  className={`w-4 h-4 rounded-full border border-slate-300 transition-transform ${
                    selectedColor === col.hex ? 'scale-125 ring-2 ring-indigo-500 ring-offset-1' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Small fully colored reference illustration in a badge card */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-amber-50 to-sky-50 rounded-2xl p-1.5 border-2 border-amber-200 shadow-xs flex items-center justify-center">
            <AnimalVector type={animal.svgType} isColored={true} className="w-full h-full" />
          </div>
          <span className="text-[10px] font-black uppercase text-indigo-900 mt-1 tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">
            Color Guide
          </span>
        </div>
      </div>

      {/* BOTTOM SECTION (80% OF PAGE): Large coloring version of same animal with thick black outlines */}
      <div className="relative w-full h-[75%] flex flex-col items-center justify-center py-2">
        {/* Quick actions for digital color or prompt copying (no-print) */}
        <div className="no-print absolute top-0 right-2 z-20 flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-xs px-2 py-1 rounded-lg border border-slate-200 text-xs">
          {Object.keys(interactiveFills).length > 0 && (
            <button
              onClick={resetColors}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 flex items-center gap-1 text-[11px] font-semibold"
              title="Reset Coloring"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}

          {onOpenColorStudio && (
            <button
              onClick={() => onOpenColorStudio(animal)}
              className="px-2 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded text-[11px] font-bold flex items-center gap-1 shadow-2xs"
            >
              <Palette size={13} />
              <span>Color Digitally</span>
            </button>
          )}

          {onDownloadPdf && (
            <button
              onClick={onDownloadPdf}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded text-[11px] font-bold flex items-center gap-1 shadow-2xs"
              title="Download this page as PDF"
            >
              <FileDown size={13} className="text-amber-400" />
              <span>PDF</span>
            </button>
          )}

          <button
            onClick={handleCopyPrompt}
            className="p-1 hover:bg-slate-200 rounded text-slate-600 flex items-center gap-1 text-[11px] font-semibold"
            title="Copy Midjourney / AI Prompt"
          >
            {copiedPrompt ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
            <span>{copiedPrompt ? 'Copied!' : 'Prompt'}</span>
          </button>
        </div>

        {/* Large Coloring Vector Illustration (Thick 6px strokes, no clutter, centered) */}
        <div className="w-full h-full max-h-[480px] sm:max-h-[520px] flex items-center justify-center p-2">
          <AnimalVector
            type={animal.svgType}
            isColored={false}
            strokeWidth={6}
            interactiveColorMap={interactiveFills}
            onRegionClick={handleRegionClick}
            className="w-full h-full max-w-[420px] max-h-[420px] filter drop-shadow-xs cursor-pointer"
          />
        </div>

        {/* Tracing / Big Letter Label for Toddler Literacy at the base */}
        <div className="text-center mt-1">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-widest text-slate-300 font-heading select-all">
            {animal.name.toUpperCase()}
          </span>
          <p className="text-[10px] text-slate-400 font-medium tracking-wide">
            Trace the letters & color with your favorite crayons!
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className="w-full pt-1 flex justify-between items-center text-[10px] text-slate-400 font-medium border-t border-slate-100">
        <span>My First Cute Animal Coloring Book</span>
        <span className="font-bold text-slate-500">Page {pageNumber}</span>
      </div>
    </div>
  );
};
