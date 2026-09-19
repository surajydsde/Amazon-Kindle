import React from 'react';
import { Heart, Sparkles, Palette, CheckCircle2 } from 'lucide-react';

interface WelcomePageProps {
  showKdpGuides?: boolean;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ showKdpGuides = false }) => {
  return (
    <div
      id="kdp-welcome-page"
      className="print-page relative w-full bg-white overflow-hidden shadow-xl rounded-xl mx-auto flex flex-col justify-between text-slate-800 p-8 sm:p-12 select-none border border-slate-100"
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
            SAFE INNER GUTTER
          </span>
        </div>
      )}

      {/* Top Header */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">
          <Sparkles size={18} className="text-amber-500" />
          <span>Welcome Little Artist!</span>
          <Sparkles size={18} className="text-amber-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
          This Book Belongs To:
        </h2>

        {/* Child Name Blank Line */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="border-b-4 border-dashed border-slate-400 h-10 flex items-center justify-center text-slate-400 font-medium text-lg">
            (Write your name here!)
          </div>
          <div className="flex justify-between items-center mt-3 text-xs font-bold text-slate-500 px-2">
            <span>I am _____ years old today!</span>
            <span>Date: _______________</span>
          </div>
        </div>
      </div>

      {/* Favorite Crayon Test Swatches */}
      <div className="bg-amber-50/60 rounded-2xl p-5 border-2 border-dashed border-amber-200 text-center my-4">
        <div className="flex items-center justify-center gap-1.5 text-slate-800 font-bold text-base mb-3 font-heading">
          <Palette size={18} className="text-amber-600" />
          <span>Test Your Favorite Crayons & Colors Here!</span>
        </div>
        <div className="grid grid-cols-6 gap-3 max-w-sm mx-auto">
          {[
            { label: 'Sun', color: 'bg-amber-100 border-amber-300' },
            { label: 'Berry', color: 'bg-rose-100 border-rose-300' },
            { label: 'Sky', color: 'bg-sky-100 border-sky-300' },
            { label: 'Grass', color: 'bg-emerald-100 border-emerald-300' },
            { label: 'Tangerine', color: 'bg-orange-100 border-orange-300' },
            { label: 'Grape', color: 'bg-purple-100 border-purple-300' }
          ].map((swatch, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-dashed ${swatch.color} flex items-center justify-center text-slate-400 font-bold text-xs hover:border-solid transition-colors`}
              >
                ✏️
              </div>
              <span className="text-[10px] font-bold text-slate-600">{swatch.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Guide For Parents & Kids */}
      <div className="space-y-3 bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 font-heading">
          <Heart size={18} className="text-pink-500 fill-pink-500" />
          <span>Tips for Toddler Coloring Fun:</span>
        </h3>
        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 font-medium">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>
              <strong>Look at the Top Guide:</strong> The top 20% shows a bright smiling example to spark imagination and color matching.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>
              <strong>Extra-Thick Bold Outlines:</strong> Designed specifically for 3–5 year olds so crayons and markers glide easily inside the shapes.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>
              <strong>Zero Bleed-Through:</strong> Every single coloring page is followed by a blank sheet—safe for washable markers!
            </span>
          </li>
        </ul>
      </div>

      {/* Footer Page info */}
      <div className="text-center pt-2 text-xs text-slate-400 font-medium">
        Page 2 • My First Cute Animal Coloring Book
      </div>
    </div>
  );
};
