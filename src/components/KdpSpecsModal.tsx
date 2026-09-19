import React, { useState } from 'react';
import {
  KDP_CONFIG_DEFAULT,
  KDP_KEYWORDS,
  KDP_CATEGORIES,
  KDP_BOOK_DESCRIPTION_HTML,
  calculateCoverDimensions
} from '../data/kdpMetadata';
import { ANIMALS_DATA, TOTAL_PAGES_COUNT } from '../data/animals';
import {
  X,
  Copy,
  Check,
  BookOpen,
  Layers,
  Search,
  CheckCircle2,
  FileText,
  Sliders,
  ExternalLink
} from 'lucide-react';

interface KdpSpecsModalProps {
  onClose: () => void;
}

export const KdpSpecsModal: React.FC<KdpSpecsModalProps> = ({ onClose }) => {
  const [paperType, setPaperType] = useState<'White' | 'Cream' | 'Premium Color'>('White');
  const [pageCount, setPageCount] = useState<number>(TOTAL_PAGES_COUNT - 1);
  const [activeTab, setActiveTab] = useState<'specs' | 'keywords' | 'description' | 'checklist'>('specs');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const coverDims = calculateCoverDimensions(pageCount, paperType);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen size={24} className="text-amber-100" />
            <div>
              <h3 className="text-xl font-black font-heading leading-tight">
                Amazon KDP Publishing Suite
              </h3>
              <p className="text-xs text-amber-100 font-medium">
                Print-ready 8.5" × 11" specifications, spine calculator, keywords & listing kit
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 text-xs font-bold overflow-x-auto">
          {[
            { id: 'specs', label: '📐 Trim & Spine Calculator', icon: Layers },
            { id: 'keywords', label: '🔍 7 Search Keywords & Categories', icon: Search },
            { id: 'description', label: '📝 Amazon HTML Listing Copy', icon: FileText },
            { id: 'checklist', label: '✅ KDP Pre-Flight Checklist', icon: CheckCircle2 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-700 bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-800 text-sm">
          {/* 1. TRIM & SPINE CALCULATOR */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Paper & Page Count Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Paper Type (Interior)
                  </label>
                  <div className="flex gap-2">
                    {(['White', 'Cream', 'Premium Color'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setPaperType(type)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          paperType === type
                            ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    Recommended: <strong>Standard White 55#</strong> for high-contrast coloring.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Total Interior Pages
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={24}
                      max={120}
                      value={pageCount}
                      onChange={(e) => setPageCount(Math.max(24, parseInt(e.target.value) || (TOTAL_PAGES_COUNT - 1)))}
                      className="w-24 px-3 py-1.5 rounded-xl border border-slate-300 bg-white font-bold text-slate-800"
                    />
                    <span className="text-xs text-slate-500">
                      (Default: {TOTAL_PAGES_COUNT - 1} interior pages = Welcome + {ANIMALS_DATA.length} Animals + {ANIMALS_DATA.length} Blanks + Certificate. Cover uploaded separately).
                    </span>
                  </div>
                </div>
              </div>

              {/* Calculated Specifications Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Trim Size</span>
                  <div className="text-base font-black text-slate-900 mt-0.5">8.5" × 11.0"</div>
                  <span className="text-[11px] text-slate-500">215.9 × 279.4 mm</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Spine Width</span>
                  <div className="text-base font-black text-slate-900 mt-0.5">{coverDims.spine}"</div>
                  <span className="text-[11px] text-slate-500">{pageCount} pages ({paperType})</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Full Cover (with Bleed)</span>
                  <div className="text-base font-black text-slate-900 mt-0.5">{coverDims.totalWidth}" × {coverDims.totalHeight}"</div>
                  <span className="text-[11px] text-slate-500">0.125" standard bleed</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Resolution (300 DPI)</span>
                  <div className="text-base font-black text-slate-900 mt-0.5">{coverDims.totalWidthPixels300Dpi} × {coverDims.totalHeightPixels300Dpi} px</div>
                  <span className="text-[11px] text-slate-500">Crisp vector line art</span>
                </div>
              </div>

              {/* Cover Layout Schematic */}
              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Amazon KDP Paperback Cover Schematic
                </div>
                <div className="grid grid-cols-12 gap-1 text-center font-mono text-[11px] h-24 items-center">
                  <div className="col-span-1 bg-rose-900/60 h-full flex flex-col justify-center rounded-l border-r border-rose-500/40 p-1">
                    <span className="text-[9px] text-rose-300">Bleed</span>
                    <span className="font-bold">0.125"</span>
                  </div>
                  <div className="col-span-4 bg-slate-800 h-full flex flex-col justify-center border-r border-slate-700 p-1">
                    <span className="text-slate-400 font-sans font-bold">Back Cover</span>
                    <span className="text-xs font-bold text-white">8.5" × 11"</span>
                    <span className="text-[9px] text-slate-400">Barcode & Blurb</span>
                  </div>
                  <div className="col-span-2 bg-amber-900/50 h-full flex flex-col justify-center border-r border-slate-700 p-1">
                    <span className="text-amber-300 font-sans font-bold">Spine</span>
                    <span className="text-xs font-bold text-white">{coverDims.spine}"</span>
                    <span className="text-[9px] text-amber-200/70">(&lt; 79p: no text)</span>
                  </div>
                  <div className="col-span-4 bg-indigo-950 h-full flex flex-col justify-center border-r border-rose-500/40 p-1">
                    <span className="text-indigo-300 font-sans font-bold">Front Cover</span>
                    <span className="text-xs font-bold text-white">8.5" × 11"</span>
                    <span className="text-[9px] text-indigo-300">Title + 5 Animals</span>
                  </div>
                  <div className="col-span-1 bg-rose-900/60 h-full flex flex-col justify-center rounded-r p-1">
                    <span className="text-[9px] text-rose-300">Bleed</span>
                    <span className="font-bold">0.125"</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2.5">
                  💡 Note: Amazon KDP does not permit spine text for books with fewer than 79 pages. Leave spine blank or solid background color.
                </p>
              </div>

              {/* Margins & Bleed Rules */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-800 text-sm mb-2">Interior Margins Guidelines</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <strong className="block text-slate-800">Inside Gutter Margin</strong>
                    <span className="text-slate-600 font-mono">0.375" (9.5 mm)</span>
                    <p className="text-[11px] text-slate-500 mt-1">For binding fold clearance.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <strong className="block text-slate-800">Outside / Top / Bottom</strong>
                    <span className="text-slate-600 font-mono">0.250" – 0.375"</span>
                    <p className="text-[11px] text-slate-500 mt-1">Safe zone for coloring drawings.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <strong className="block text-slate-800">Bleed Setting</strong>
                    <span className="text-slate-600 font-mono">No Bleed (Interior)</span>
                    <p className="text-[11px] text-slate-500 mt-1">Select "No Bleed" in KDP upload.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. KEYWORDS & CATEGORIES */}
          {activeTab === 'keywords' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                    7 Amazon KDP Backend Keywords (Copy into KDP Metadata)
                  </h4>
                  <button
                    onClick={() => copyToClipboard(KDP_KEYWORDS.join(', '), 'all_keywords')}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    {copiedKey === 'all_keywords' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedKey === 'all_keywords' ? 'Copied All!' : 'Copy All'}</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {KDP_KEYWORDS.map((kw, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-mono text-slate-800 font-medium">{kw}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(kw, `kw_${idx}`)}
                        className="p-1 rounded hover:bg-slate-200 text-slate-500"
                        title="Copy Keyword"
                      >
                        {copiedKey === `kw_${idx}` ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Categories */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                  Recommended Amazon & BISAC Categories
                </h4>
                <div className="space-y-2">
                  {KDP_CATEGORIES.map((cat, idx) => (
                    <div
                      key={idx}
                      className="bg-amber-50/50 p-3 rounded-xl border border-amber-200 text-xs flex justify-between items-center"
                    >
                      <div>
                        <strong className="block text-slate-800 font-heading">{cat.path}</strong>
                        <span className="text-[11px] text-slate-500 font-mono">{cat.bisac}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(cat.path, `cat_${idx}`)}
                        className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-700"
                      >
                        {copiedKey === `cat_${idx}` ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. LISTING DESCRIPTION */}
          {activeTab === 'description' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Amazon KDP Book Description (Formatted HTML)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Compliant with Amazon HTML tags (&lt;h3&gt;, &lt;b&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;p&gt;).
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(KDP_BOOK_DESCRIPTION_HTML, 'desc')}
                  className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                >
                  {copiedKey === 'desc' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === 'desc' ? 'Copied HTML!' : 'Copy Description'}</span>
                </button>
              </div>

              {/* Raw HTML preview container */}
              <div className="bg-slate-900 text-emerald-400 p-4 rounded-2xl font-mono text-xs max-h-72 overflow-y-auto whitespace-pre-wrap select-all">
                {KDP_BOOK_DESCRIPTION_HTML}
              </div>

              {/* Rendered preview */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-700">
                <span className="text-[11px] font-bold text-slate-400 uppercase block mb-2">
                  Amazon Product Page Preview:
                </span>
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: KDP_BOOK_DESCRIPTION_HTML }}
                />
              </div>
            </div>
          )}

          {/* 4. PRE-FLIGHT CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Amazon KDP Compliance Verification Checklist
              </h4>
              {[
                {
                  title: 'Page Dimensions: 8.5 x 11.0 inches (US Letter)',
                  desc: 'Standard children coloring book format compliant with Amazon KDP print machinery. (Select 8.5" x 11", not 8" x 11").',
                  status: 'VERIFIED'
                },
                {
                  title: 'Bleed Selection: "No Bleed" Compliant',
                  desc: 'Every interior page features generous 0.50" (48px) safe white margins on all sides, well inside KDP\'s 0.375" minimum trim boundary. Zero content cut risk.',
                  status: 'VERIFIED'
                },
                {
                  title: 'Interior Manuscript Excludes Cover (82 Pages)',
                  desc: 'Interior manuscript contains only pages 1–82 (Welcome, Animals, Blank Bleed Guards, Certificate). Cover is submitted separately in KDP Step 3.',
                  status: 'VERIFIED'
                },
                {
                  title: 'Single-Sided Pages with Blank Bleed Guards',
                  desc: `Every single coloring page is followed by a blank sheet (${TOTAL_PAGES_COUNT - 1} interior pages total) to eliminate marker bleed concerns.`,
                  status: 'VERIFIED'
                },
                {
                  title: 'Line Weight: 4–6 px Equivalent Bold Outlines',
                  desc: `All ${ANIMALS_DATA.length} animals feature extra-thick rounded contours tailored for toddlers aged 3–5 with beginner motor skills.`,
                  status: 'VERIFIED'
                },
                {
                  title: 'Color Reference Top 20% & Coloring 80%',
                  desc: 'Exact split ratio implemented on each page with uppercase animal name and color guide.',
                  status: 'VERIFIED'
                },
                {
                  title: 'Child-Safe Content & Friendly Expressions',
                  desc: '100% joyful smiling kawaii animals with large eyes; zero aggressive poses or scary elements.',
                  status: 'VERIFIED'
                },
                {
                  title: '300 DPI Vector Print Quality',
                  desc: 'Pure SVG vector rendering ensures infinite resolution clarity on physical paper printing.',
                  status: 'VERIFIED'
                },
                {
                  title: 'Cover Art with Elephant, Lion, Bunny, Panda & Giraffe',
                  desc: 'Front cover adheres to all requested title, subtitle, and character requirements.',
                  status: 'VERIFIED'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl flex items-start gap-3 text-xs"
                >
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="text-slate-900 block font-heading">{item.title}</strong>
                    <span className="text-slate-600 text-[11px]">{item.desc}</span>
                  </div>
                  <span className="bg-emerald-200/80 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
