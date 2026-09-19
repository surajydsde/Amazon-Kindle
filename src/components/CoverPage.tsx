import React from 'react';
import { AnimalVector } from './AnimalVectors';
import { Sparkles, Star, Award, Heart } from 'lucide-react';

interface CoverPageProps {
  showKdpGuides?: boolean;
}

export const CoverPage: React.FC<CoverPageProps> = ({ showKdpGuides = false }) => {
  return (
    <div
      id="kdp-cover-page"
      className="print-page relative w-full bg-gradient-to-b from-sky-300 via-amber-100 to-emerald-200 overflow-hidden shadow-2xl rounded-xl mx-auto flex flex-col justify-between text-slate-800 select-none"
      style={{
        aspectRatio: '8.5 / 11',
        maxWidth: '720px'
      }}
    >
      {/* Amazon KDP Safe Zone & Margin Overlay (toggleable) */}
      {showKdpGuides && (
        <div className="absolute inset-0 z-50 pointer-events-none border-4 border-dashed border-rose-500/60 m-6 flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-rose-600 bg-rose-50/80 px-2 py-0.5 rounded">
            <span>KDP TRIM SAFE MARGIN (0.375" / 27pt)</span>
            <span>TOP BLEED LINE</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-rose-600 bg-rose-50/80 px-2 py-0.5 rounded">
            <span>GUTTER SAFE BOUNDARY</span>
            <span>BOTTOM BLEED LINE</span>
          </div>
        </div>
      )}

      {/* Playful Background Elements */}
      <div className="absolute top-4 left-6 text-amber-300/80 animate-pulse">
        <Sparkles size={36} />
      </div>
      <div className="absolute top-8 right-8 text-yellow-300">
        <Star size={44} fill="#FCD34D" className="drop-shadow-sm" />
      </div>
      <div className="absolute top-36 left-4 text-pink-300/80">
        <Heart size={28} fill="#F472B6" />
      </div>
      <div className="absolute top-32 right-6 text-emerald-400">
        <Star size={30} fill="#34D399" />
      </div>

      {/* Sun Ray Effect */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header Area: Series & Main Title */}
      <div className="relative z-10 pt-8 sm:pt-10 px-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-xs text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs mb-2.5">
          <Sparkles size={14} className="text-amber-500" />
          <span>KDP Print Ready • Ages 3–5</span>
          <Sparkles size={14} className="text-amber-500" />
        </div>

        {/* Large Playful Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-900 tracking-tight leading-none drop-shadow-sm font-heading">
          <span className="text-pink-600 block text-2xl sm:text-3xl md:text-4xl mb-1">
            My First Cute
          </span>
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            ANIMAL
          </span>
          <span className="block text-indigo-950 mt-1">
            COLORING BOOK
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-bold text-slate-700 max-w-md mx-auto">
          18 Fun and Easy Animals for Kids Ages 3–5
        </p>

        {/* Value Highlights Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs sm:text-sm font-extrabold text-indigo-900">
          <span className="bg-amber-300/90 px-2.5 py-0.5 rounded-full shadow-2xs">
            ✏️ Extra Thick Lines
          </span>
          <span className="bg-pink-300/90 px-2.5 py-0.5 rounded-full shadow-2xs">
            🎨 Color Guide on Top
          </span>
          <span className="bg-emerald-300/90 px-2.5 py-0.5 rounded-full shadow-2xs">
            📄 Single-Sided Pages
          </span>
        </div>
      </div>

      {/* Hero Characters Collage: Elephant, Baby Lion, Bunny, Panda, Giraffe */}
      <div className="relative z-10 my-auto px-4 py-2">
        {/* Soft grass hill backdrop */}
        <div className="relative max-w-lg mx-auto h-64 sm:h-72 md:h-80 flex items-center justify-center">
          {/* Giraffe in center-back */}
          <div className="absolute -top-4 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 z-10 transition-transform hover:scale-105">
            <AnimalVector type="giraffe" isColored={true} />
          </div>

          {/* Elephant left */}
          <div className="absolute left-0 bottom-2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 z-20 drop-shadow-md">
            <AnimalVector type="elephant" isColored={true} />
          </div>

          {/* Baby Lion center */}
          <div className="absolute bottom-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 z-30 drop-shadow-lg">
            <AnimalVector type="lion" isColored={true} />
          </div>

          {/* Panda right-center */}
          <div className="absolute right-0 bottom-2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 z-20 drop-shadow-md">
            <AnimalVector type="panda" isColored={true} />
          </div>

          {/* Bunny peek bottom-left */}
          <div className="absolute left-1/4 -bottom-6 w-24 h-24 sm:w-28 sm:h-28 z-40 drop-shadow">
            <AnimalVector type="bunny" isColored={true} />
          </div>
        </div>
      </div>

      {/* Cover Bottom Banner & Publisher Stamp */}
      <div className="relative z-10 pb-6 sm:pb-8 pt-4 px-6 text-center bg-white/60 backdrop-blur-xs border-t border-emerald-300/50">
        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-800">
          <div className="flex items-center gap-1">
            <Award size={16} className="text-amber-500" />
            <span>Big Shapes for Little Hands</span>
          </div>
          <span className="text-slate-400">•</span>
          <span>Zero Bleed-Through</span>
          <span className="text-slate-400">•</span>
          <span>300 DPI Print Ready</span>
        </div>
        <p className="mt-1.5 text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
          Little Paw Publishing • Amazon KDP 8.5" × 11" Edition
        </p>
      </div>
    </div>
  );
};
