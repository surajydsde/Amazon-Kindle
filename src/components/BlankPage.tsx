import React from 'react';
import { ShieldCheck, Pencil } from 'lucide-react';

interface BlankPageProps {
  pageNumber: number;
  showKdpGuides?: boolean;
}

export const BlankPage: React.FC<BlankPageProps> = ({ pageNumber, showKdpGuides = false }) => {
  return (
    <div
      id={`blank-page-${pageNumber}`}
      className="print-page relative w-full bg-white overflow-hidden shadow-sm rounded-xl mx-auto flex flex-col justify-between text-slate-800 p-8 select-none border border-slate-100"
      style={{
        aspectRatio: '8.5 / 11',
        maxWidth: '720px'
      }}
    >
      {/* Amazon KDP Safe Margin Overlay */}
      {showKdpGuides && (
        <div className="absolute inset-0 z-50 pointer-events-none border-4 border-dashed border-slate-300/40 m-6 flex flex-col justify-between p-2">
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded self-start">
            BLANK BLEED-GUARD SAFE ZONE
          </span>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded self-end">
            0.375" MARGIN
          </span>
        </div>
      )}

      {/* Gentle watermarked center note (faint in print, useful for parents) */}
      <div className="my-auto text-center opacity-40 hover:opacity-80 transition-opacity">
        <div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 mb-3">
          <ShieldCheck size={28} />
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
          Marker Bleed-Through Barrier
        </p>
        <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-1">
          This single-sided blank page protects your next drawing from marker bleed. Feel free to use this space for extra doodles!
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
          <Pencil size={12} />
          <span>Little Artist Doodle Space</span>
        </div>
      </div>

      {/* Page Number */}
      <div className="w-full pt-2 flex justify-between items-center text-[10px] text-slate-300 font-medium">
        <span>Single-Sided Page Protection</span>
        <span>Page {pageNumber}</span>
      </div>
    </div>
  );
};
