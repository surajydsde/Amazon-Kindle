import React from 'react';
import { ANIMALS_DATA, TOTAL_PAGES_COUNT } from '../data/animals';
import { AnimalVector } from './AnimalVectors';
import { BookOpen, ShieldCheck, Award, Sparkles } from 'lucide-react';

interface BookGridOverviewProps {
  currentPageIndex: number;
  onSelectPage: (pageIndex: number) => void;
}

export const BookGridOverview: React.FC<BookGridOverviewProps> = ({
  currentPageIndex,
  onSelectPage
}) => {
  // Assemble the pages
  const pages = [
    { type: 'cover', title: 'Front Cover', animalIndex: -1 },
    { type: 'welcome', title: 'Welcome / Belongs To', animalIndex: -1 },
    ...ANIMALS_DATA.flatMap((animal, idx) => [
      { type: 'animal', title: `${animal.name} Activity`, animalIndex: idx },
      { type: 'blank', title: `Blank Bleed Guard`, animalIndex: idx }
    ]),
    { type: 'certificate', title: 'Super Colorist Certificate', animalIndex: -1 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-black text-slate-900 font-heading flex items-center gap-2">
            <BookOpen size={20} className="text-amber-500" />
            <span>Complete {TOTAL_PAGES_COUNT}-Page Manuscript Grid</span>
          </h2>
          <p className="text-xs text-slate-600">
            Ordered in exact Amazon KDP sequence: Cover → Welcome → Animal Coloring → Blank Bleed Guard → Certificate
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-bold">
          <div className="flex items-center gap-1.5 text-indigo-700">
            <span className="w-3 h-3 rounded-sm bg-indigo-500" />
            <span>Coloring Pages ({ANIMALS_DATA.length})</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 h-3 rounded-sm bg-slate-200" />
            <span>Blank Protectors ({ANIMALS_DATA.length})</span>
          </div>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {pages.map((p, idx) => {
          const isSelected = currentPageIndex === idx;
          const pageNum = idx + 1;

          return (
            <button
              key={idx}
              onClick={() => onSelectPage(idx)}
              className={`group text-left rounded-2xl p-2.5 transition-all flex flex-col justify-between border relative ${
                isSelected
                  ? 'ring-3 ring-amber-500 border-amber-500 bg-amber-50/50 shadow-md scale-102'
                  : 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-xs'
              }`}
            >
              {/* Page Number Badge */}
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[11px] font-black px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  p.{pageNum}
                </span>
                <span className="text-[10px] font-bold text-slate-400 capitalize">
                  {p.type}
                </span>
              </div>

              {/* Thumbnail Container (8.5:11 aspect ratio) */}
              <div
                className="w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-2 relative shadow-2xs group-hover:scale-102 transition-transform"
                style={{ aspectRatio: '8.5 / 11' }}
              >
                {p.type === 'cover' && (
                  <div className="w-full h-full bg-gradient-to-b from-sky-200 via-amber-100 to-emerald-200 rounded-lg flex flex-col items-center justify-center p-1 text-center">
                    <span className="text-[9px] font-black text-indigo-900 leading-none">CUTE ANIMAL</span>
                    <span className="text-[7px] font-bold text-amber-700">COLORING BOOK</span>
                    <div className="w-10 h-10 my-1">
                      <AnimalVector type="lion" isColored={true} />
                    </div>
                    <span className="text-[7px] text-slate-600 font-bold">{ANIMALS_DATA.length} Animals</span>
                  </div>
                )}

                {p.type === 'welcome' && (
                  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-1 text-center">
                    <Sparkles size={16} className="text-amber-500 mb-1" />
                    <span className="text-[8px] font-bold text-slate-800">This Book Belongs To</span>
                    <div className="w-12 border-b border-slate-300 my-1"></div>
                    <span className="text-[7px] text-slate-400">Color Palette Test</span>
                  </div>
                )}

                {p.type === 'animal' && p.animalIndex !== undefined && (
                  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-between p-1">
                    <div className="w-full flex justify-between items-center px-1 border-b border-slate-100 pb-0.5">
                      <span className="text-[8px] font-bold text-slate-800 truncate">
                        {ANIMALS_DATA[p.animalIndex].name}
                      </span>
                      <div className="w-4 h-4 shrink-0">
                        <AnimalVector type={ANIMALS_DATA[p.animalIndex].svgType} isColored={true} />
                      </div>
                    </div>
                    <div className="w-16 h-16 my-auto">
                      <AnimalVector type={ANIMALS_DATA[p.animalIndex].svgType} isColored={false} strokeWidth={5} />
                    </div>
                    <span className="text-[7px] font-extrabold text-slate-300">
                      {ANIMALS_DATA[p.animalIndex].name.toUpperCase()}
                    </span>
                  </div>
                )}

                {p.type === 'blank' && (
                  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-2 text-center">
                    <ShieldCheck size={18} className="text-slate-300 mb-1" />
                    <span className="text-[8px] font-bold text-slate-400">Blank Page</span>
                    <span className="text-[7px] text-slate-300">Bleed Barrier</span>
                  </div>
                )}

                {p.type === 'certificate' && (
                  <div className="w-full h-full bg-gradient-to-b from-amber-50 to-white rounded-lg border border-amber-200 flex flex-col items-center justify-center p-1 text-center">
                    <Award size={18} className="text-amber-500 mb-1" />
                    <span className="text-[8px] font-black text-amber-900">SUPER COLORIST</span>
                    <span className="text-[7px] text-slate-500">Official Diploma</span>
                  </div>
                )}
              </div>

              {/* Title caption */}
              <div className="mt-1.5 text-center">
                <span className="text-xs font-bold text-slate-800 block truncate">
                  {p.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
