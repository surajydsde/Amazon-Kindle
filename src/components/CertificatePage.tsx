import React from 'react';
import { Award, Sparkles, Star, Trophy, Heart } from 'lucide-react';

interface CertificatePageProps {
  pageNumber: number;
  showKdpGuides?: boolean;
}

export const CertificatePage: React.FC<CertificatePageProps> = ({ pageNumber, showKdpGuides = false }) => {
  return (
    <div
      id="certificate-page"
      className="print-page relative w-full bg-gradient-to-b from-amber-50/60 via-white to-sky-50/60 overflow-hidden shadow-xl rounded-xl mx-auto flex flex-col justify-between text-slate-800 p-8 sm:p-12 select-none border-4 border-amber-300"
      style={{
        aspectRatio: '8.5 / 11',
        maxWidth: '720px'
      }}
    >
      {/* Amazon KDP Safe Zone Overlay */}
      {showKdpGuides && (
        <div className="absolute inset-0 z-50 pointer-events-none border-4 border-dashed border-rose-400/50 m-6 flex flex-col justify-between p-2">
          <span className="text-[10px] font-bold text-rose-600 bg-rose-50/80 px-2 py-0.5 rounded self-start">
            KDP 0.375" SAFE MARGIN
          </span>
          <span className="text-[10px] font-bold text-rose-600 bg-rose-50/80 px-2 py-0.5 rounded self-end">
            CERTIFICATE PAGE
          </span>
        </div>
      )}

      {/* Certificate Frame */}
      <div className="border-4 border-dashed border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full text-center relative bg-white/80 backdrop-blur-xs shadow-xs">
        {/* Top Trophy Icon */}
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center text-amber-500 shadow-md">
            <Trophy size={40} />
          </div>
          <div className="flex justify-center items-center gap-1 text-amber-500 mt-2">
            <Star size={18} fill="#F59E0B" />
            <Star size={22} fill="#F59E0B" />
            <Star size={18} fill="#F59E0B" />
          </div>
        </div>

        {/* Heading */}
        <div className="my-auto py-2">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full mb-2">
            <Sparkles size={14} />
            <span>Official Creative Milestone</span>
            <Sparkles size={14} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-950 font-heading tracking-tight leading-tight">
            SUPER COLORIST<br />
            <span className="text-pink-600">AWARD</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base font-bold text-slate-600">
            This certificate is proudly awarded to:
          </p>

          {/* Child Name Blank Line */}
          <div className="mt-6 max-w-sm mx-auto border-b-4 border-dashed border-slate-700 h-10 flex items-center justify-center text-slate-400 font-bold text-lg">
            (Write Super Colorist's Name)
          </div>

          <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-600 max-w-md mx-auto">
            For successfully coloring all 18 friendly animals in <br />
            <strong className="text-indigo-900">"My First Cute Animal Coloring Book"</strong> <br />
            with wonderful imagination, bright colors, and joyful energy!
          </p>
        </div>

        {/* Signatures & Seal */}
        <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-around text-center text-xs font-bold text-slate-700">
          <div>
            <div className="border-b-2 border-slate-400 w-28 sm:w-36 mx-auto mb-1 h-6"></div>
            <span className="text-[11px] text-slate-500">Date</span>
          </div>

          <div className="w-12 h-12 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center text-pink-500 shadow-2xs">
            <Award size={24} />
          </div>

          <div>
            <div className="border-b-2 border-slate-400 w-28 sm:w-36 mx-auto mb-1 h-6 flex items-center justify-center text-indigo-600 font-heading">
              Little Paw
            </div>
            <span className="text-[11px] text-slate-500">Official Art Club Seal</span>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="w-full pt-3 flex justify-between items-center text-[10px] text-slate-400 font-medium">
        <span>Completion Award</span>
        <span>Page {pageNumber}</span>
      </div>
    </div>
  );
};
