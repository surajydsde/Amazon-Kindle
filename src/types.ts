export type PageViewMode = 'single' | 'spread' | 'grid' | 'print';

export interface AnimalColorPalette {
  name: string;
  hex: string;
}

export interface AnimalData {
  id: number;
  name: string;
  category: 'Wild' | 'Safari' | 'Farm' | 'Pets' | 'Birds' | 'Reptiles' | 'Ocean' | 'Forest';
  funFact: string;
  colorPalette: AnimalColorPalette[];
  description: string;
  coloringPrompt: {
    midjourney: string;
    dalle: string;
    imagen: string;
    negativePrompt?: string;
  };
  referencePrompt: {
    midjourney: string;
    dalle: string;
    imagen: string;
  };
  // Pre-crafted SVG components/render keys
  svgType: string;
}

export interface BookPageItem {
  pageNumber: number;
  type: 'cover' | 'welcome' | 'animal' | 'blank' | 'certificate' | 'back-cover';
  animalIndex?: number; // 0 to 17
  title: string;
}

export interface KdpSpecification {
  trimSize: string; // e.g. "8.5 x 11 inches"
  pageCount: number;
  bleed: string;
  paperType: 'white' | 'cream' | 'color';
  spineWidth: number; // in inches
  fullCoverWidth: number; // in inches
  fullCoverHeight: number; // in inches
  minMargin: string;
  recommendedResolution: string;
}
