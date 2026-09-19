import React, { useState } from 'react';
import { AnimalData } from '../types';
import { AnimalVector } from './AnimalVectors';
import { X, RotateCcw, Download, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface DigitalColoringStudioProps {
  animal: AnimalData;
  onClose: () => void;
}

const CRAYON_PALETTE = [
  { name: 'Sky Blue', hex: '#64B5F6' },
  { name: 'Ocean Blue', hex: '#1E88E5' },
  { name: 'Sun Yellow', hex: '#FFEE58' },
  { name: 'Warm Amber', hex: '#FFA726' },
  { name: 'Peach Orange', hex: '#FF7043' },
  { name: 'Apple Red', hex: '#EF5350' },
  { name: 'Bubblegum', hex: '#F48FB1' },
  { name: 'Rose Pink', hex: '#EC407A' },
  { name: 'Grape Purple', hex: '#AB47BC' },
  { name: 'Sweet Lilac', hex: '#CE93D8' },
  { name: 'Mint Green', hex: '#81C784' },
  { name: 'Emerald', hex: '#43A047' },
  { name: 'Teddy Brown', hex: '#8D6E63' },
  { name: 'Cream Biscuit', hex: '#FFE0B2' },
  { name: 'Charcoal', hex: '#37474F' },
  { name: 'Pure White', hex: '#FFFFFF' }
];

export const DigitalColoringStudio: React.FC<DigitalColoringStudioProps> = ({ animal, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string>(CRAYON_PALETTE[2].hex); // Sun Yellow default
  const [colorMap, setColorMap] = useState<Record<string, string>>({});
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Gentle synth chime on tap
  const playChime = (freq = 440) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch {
      // Audio context might be restricted before gesture
    }
  };

  const handleRegionClick = (regionId: string) => {
    setColorMap((prev) => ({
      ...prev,
      [regionId]: prev[regionId] === selectedColor ? '#FFFFFF' : selectedColor
    }));
    playChime(520 + Math.floor(Math.random() * 200));
  };

  const handleReset = () => {
    setColorMap({});
    playChime(320);
  };

  const handleDownloadSvg = () => {
    const svgEl = document.getElementById('studio-coloring-svg');
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${animal.name.toLowerCase()}-colored.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-300 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-amber-50 px-6 py-4 border-b border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <div>
              <h3 className="text-xl font-black text-slate-900 font-heading">
                Coloring Studio: {animal.name}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Tap any part of {animal.name} with your favorite crayon color!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl hover:bg-amber-100 text-slate-600 transition-colors"
              title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-amber-100 text-slate-600 transition-colors"
              title="Close Studio"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Studio Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col md:flex-row gap-6 items-center justify-center overflow-y-auto">
          {/* Main Large Drawing Area */}
          <div className="w-full max-w-md h-72 sm:h-96 bg-amber-50/30 rounded-2xl border-2 border-dashed border-amber-200 flex items-center justify-center p-4 relative shadow-inner">
            <div id="studio-coloring-svg" className="w-full h-full flex items-center justify-center">
              <AnimalVector
                type={animal.svgType}
                isColored={false}
                strokeWidth={6}
                interactiveColorMap={colorMap}
                onRegionClick={handleRegionClick}
                className="w-full h-full max-h-80 cursor-pointer transition-all"
              />
            </div>

            {/* Instruction tooltip */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-700 px-3 py-1 rounded-full shadow-xs border border-slate-200 flex items-center gap-1 pointer-events-none">
              <Sparkles size={12} className="text-amber-500" />
              <span>Tap a body part to fill color</span>
            </div>
          </div>

          {/* Palette & Controls Panel */}
          <div className="w-full md:w-64 flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Crayon Box</span>
                <span className="text-[10px] text-amber-600 font-semibold">16 Child-Safe Colors</span>
              </h4>

              {/* Color Grid */}
              <div className="grid grid-cols-4 gap-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                {CRAYON_PALETTE.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => {
                      setSelectedColor(c.hex);
                      playChime(600);
                    }}
                    title={c.name}
                    className={`h-9 rounded-xl border-2 transition-all flex items-center justify-center shadow-xs ${
                      selectedColor === c.hex
                        ? 'scale-110 ring-3 ring-amber-400 ring-offset-2 border-slate-800'
                        : 'border-slate-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  >
                    {selectedColor === c.hex && (
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Color Preview */}
            <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-2xl border border-amber-200">
              <div
                className="w-10 h-10 rounded-xl border-2 border-slate-700 shadow-xs shrink-0"
                style={{ backgroundColor: selectedColor }}
              />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">
                  {CRAYON_PALETTE.find((c) => c.hex === selectedColor)?.name || 'Custom Color'}
                </span>
                <span className="text-slate-500 text-[10px]">Ready to paint on {animal.name}!</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw size={14} />
                <span>Start Over</span>
              </button>

              <button
                onClick={handleDownloadSvg}
                className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 font-bold text-white text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download size={14} />
                <span>Save Art</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
