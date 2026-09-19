import React, { useState } from 'react';
import { ANIMALS_DATA } from '../data/animals';
import { X, Copy, Check, Download, Search, Terminal, Sparkles, SlidersHorizontal } from 'lucide-react';

interface PromptsModalProps {
  onClose: () => void;
}

export const PromptsModal: React.FC<PromptsModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEngine, setSelectedEngine] = useState<'midjourney' | 'imagen' | 'dalle'>('midjourney');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filteredAnimals = ANIMALS_DATA.filter((a) =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyPrompt = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDownloadAllJson = () => {
    const exportData = {
      bookTitle: "My First Cute Animal Coloring Book",
      targetAge: "3-5 years",
      format: "8.5 x 11 inches, single-sided, thick outlines",
      engine: selectedEngine,
      coverPrompt: {
        midjourney: "front cover illustration for children's coloring book titled 'My First Cute Animal Coloring Book', featuring cute smiling baby elephant, playful lion cub, sweet bunny rabbit, chubby panda, and friendly giraffe together on rolling grassy hills under a bright rainbow and sunny blue sky, vibrant colorful 3D cartoon style, big playful letters, child-safe, high resolution --ar 17:22 --v 6.0",
        dalle: "Vibrant front cover illustration for a toddler coloring book featuring 5 cute cartoon animals: baby elephant, lion cub, bunny, panda, and baby giraffe smiling together on green hills with a bright colorful background.",
        imagen: "Amazon KDP front cover illustration for kids aged 3-5: five cute kawaii baby animals (elephant, lion, bunny, panda, giraffe) smiling joyfully on a colorful sunny meadow, vibrant cartoon style, commercial book cover quality."
      },
      animals: ANIMALS_DATA.map((a) => ({
        pageNumber: 3 + (a.id - 1) * 2,
        name: a.name,
        category: a.category,
        description: a.description,
        coloringLineArtPrompt: a.coloringPrompt[selectedEngine],
        negativePrompt: a.coloringPrompt.negativePrompt,
        colorReferencePrompt: a.referencePrompt[selectedEngine]
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kdp-coloring-book-prompts-${selectedEngine}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAllMarkdown = () => {
    let md = `# My First Cute Animal Coloring Book — AI Image Generation Prompts\n\n`;
    md += `**Target Audience:** Ages 3–5 (Toddler/Preschool)\n`;
    md += `**Format:** 8.5 x 11 in, Single-Sided Pages, Bold Outlines\n`;
    md += `**Engine Selected:** ${selectedEngine.toUpperCase()}\n\n`;
    md += `## Front Cover Prompt\n\n`;
    md += `\`\`\`text\nfront cover illustration for children's coloring book titled 'My First Cute Animal Coloring Book', featuring cute smiling baby elephant, playful lion cub, sweet bunny rabbit, chubby panda, and friendly giraffe together on rolling grassy hills under a bright rainbow and sunny blue sky, vibrant colorful cartoon style, child-safe, high resolution --ar 17:22 --v 6.0\n\`\`\`\n\n`;
    md += `---\n\n`;

    ANIMALS_DATA.forEach((a) => {
      const pageNum = 3 + (a.id - 1) * 2;
      md += `### Animal #${a.id}: ${a.name} (Interior Page ${pageNum})\n`;
      md += `- **Category:** ${a.category}\n`;
      md += `- **Visual Anatomy:** ${a.description}\n`;
      md += `- **Top 20% Color Reference Prompt:**\n`;
      md += `  \`\`\`text\n  ${a.referencePrompt[selectedEngine]}\n  \`\`\`\n`;
      md += `- **Bottom 80% Coloring Line Art Prompt:**\n`;
      md += `  \`\`\`text\n  ${a.coloringPrompt[selectedEngine]}\n  \`\`\`\n`;
      md += `- **Negative Prompt:** \`${a.coloringPrompt.negativePrompt}\`\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kdp-coloring-book-prompts-${selectedEngine}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Terminal size={22} className="text-amber-400" />
            <div>
              <h3 className="text-xl font-black font-heading leading-tight">
                AI Image Generation Prompts Generator
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Standardized prompts for all 40 animals & cover (Midjourney v6, Imagen 3, DALL-E 3)
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

        {/* Engine Switcher & Export Controls */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          {/* AI Engine Tabs */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Target Engine:</span>
            {(['midjourney', 'imagen', 'dalle'] as const).map((engine) => (
              <button
                key={engine}
                onClick={() => setSelectedEngine(engine)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  selectedEngine === engine
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {engine === 'midjourney' ? 'Midjourney v6' : engine === 'imagen' ? 'Google Imagen 3' : 'DALL-E 3'}
              </button>
            ))}
          </div>

          {/* Quick Search & Export Actions */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search animals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl text-xs border border-slate-300 bg-white w-36 sm:w-44 font-medium"
              />
            </div>

            <button
              onClick={handleDownloadAllJson}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs"
              title="Export all prompts to JSON"
            >
              <Download size={13} />
              <span>JSON</span>
            </button>

            <button
              onClick={handleDownloadAllMarkdown}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs"
              title="Export all prompts to Markdown"
            >
              <Download size={13} />
              <span>Markdown</span>
            </button>
          </div>
        </div>

        {/* Prompts List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-slate-800 text-sm">
          {/* Cover Prompt Card */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-2xl border-2 border-amber-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold text-[10px] uppercase">
                  Page 1: Book Cover
                </span>
                <strong className="text-slate-900 font-heading text-base">
                  Professional Amazon KDP Front Cover
                </strong>
              </div>
              <button
                onClick={() =>
                  copyPrompt(
                    "front cover illustration for children's coloring book titled 'My First Cute Animal Coloring Book', featuring cute smiling baby elephant, playful lion cub, sweet bunny rabbit, chubby panda, and friendly giraffe together on rolling grassy hills under a bright rainbow and sunny blue sky, vibrant colorful cartoon style, large playful lettering, child-safe, high resolution --ar 17:22 --v 6.0",
                    'cover_prompt'
                  )
                }
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs"
              >
                {copiedKey === 'cover_prompt' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copiedKey === 'cover_prompt' ? 'Copied!' : 'Copy Cover Prompt'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              Features: Cute smiling elephant, baby lion, bunny rabbit, panda, giraffe with bright colorful background and title "My First Cute Animal Coloring Book".
            </p>
            <div className="bg-white p-3 rounded-xl border border-amber-200 text-xs font-mono text-slate-700">
              front cover illustration for children's coloring book titled 'My First Cute Animal Coloring Book', featuring cute smiling baby elephant, playful lion cub, sweet bunny rabbit, chubby panda, and friendly giraffe together on rolling grassy hills under a bright rainbow and sunny blue sky, vibrant colorful cartoon style, child-safe, high resolution --ar 17:22 --v 6.0
            </div>
          </div>

          {/* 40 Animals Prompts */}
          {filteredAnimals.map((animal) => {
            const pageNum = 3 + (animal.id - 1) * 2;
            const coloringPromptText = animal.coloringPrompt[selectedEngine];
            const refPromptText = animal.referencePrompt[selectedEngine];

            return (
              <div
                key={animal.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors"
              >
                {/* Animal Title Bar */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center">
                      #{animal.id}
                    </span>
                    <strong className="text-base font-black text-slate-900 font-heading">
                      {animal.name}
                    </strong>
                    <span className="text-xs text-slate-400 font-medium">
                      (Interior Page {pageNum} • Blank Page {pageNum + 1})
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => copyPrompt(coloringPromptText, `color_${animal.id}`)}
                      className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                      title="Copy Bottom 80% Coloring Line-Art Prompt"
                    >
                      {copiedKey === `color_${animal.id}` ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                      <span>Coloring Prompt</span>
                    </button>
                    <button
                      onClick={() => copyPrompt(refPromptText, `ref_${animal.id}`)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200 transition-colors"
                      title="Copy Top 20% Color Reference Prompt"
                    >
                      {copiedKey === `ref_${animal.id}` ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                      <span>Reference Prompt</span>
                    </button>
                  </div>
                </div>

                {/* Character Anatomy Description */}
                <p className="text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <strong className="text-slate-800">Character Design:</strong> {animal.description}
                </p>

                {/* Prompts Display */}
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-1">
                      <span>BOTTOM 80%: COLORING LINE ART ({selectedEngine.toUpperCase()})</span>
                      <span className="text-emerald-600">Thick 6pt outlines • Zero shading</span>
                    </div>
                    <div className="bg-slate-900 text-amber-300 p-2.5 rounded-xl font-mono text-[11px] select-all">
                      {coloringPromptText}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-1">
                      <span>TOP 20%: COLORED REFERENCE GUIDE</span>
                      <span className="text-pink-600">Kawaii pastel cartoon</span>
                    </div>
                    <div className="bg-slate-100 text-slate-800 p-2.5 rounded-xl font-mono text-[11px] select-all border border-slate-200">
                      {refPromptText}
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400">
                    <strong>Negative Prompt:</strong> <span className="font-mono">{animal.coloringPrompt.negativePrompt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
