import React from 'react';

interface AnimalVectorProps {
  type: string;
  isColored?: boolean;
  className?: string;
  strokeWidth?: number | string;
  interactiveColorMap?: Record<string, string>;
  onRegionClick?: (regionId: string) => void;
}

export const AnimalVector: React.FC<AnimalVectorProps> = ({
  type,
  isColored = false,
  className = "w-full h-full",
  strokeWidth = 6,
  interactiveColorMap = {},
  onRegionClick
}) => {
  const stroke = "#111827";
  const defaultFill = isColored ? undefined : "#FFFFFF";

  // Helper to get fill: interactive map first, then colored preset, else white
  const getFill = (regionId: string, coloredFill: string) => {
    if (interactiveColorMap[regionId]) {
      return interactiveColorMap[regionId];
    }
    return isColored ? coloredFill : defaultFill;
  };

  const handleClick = (regionId: string) => {
    if (onRegionClick) {
      onRegionClick(regionId);
    }
  };

  switch (type) {
    case 'elephant':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Big Ears */}
          <ellipse cx="65" cy="140" rx="45" ry="55" fill={getFill('leftEar', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('leftEar')} />
          <ellipse cx="65" cy="140" rx="30" ry="38" fill={getFill('leftEarInner', '#FFCDD2')} stroke={stroke} strokeWidth={Number(strokeWidth) - 1} onClick={() => handleClick('leftEarInner')} />
          
          <ellipse cx="235" cy="140" rx="45" ry="55" fill={getFill('rightEar', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('rightEar')} />
          <ellipse cx="235" cy="140" rx="30" ry="38" fill={getFill('rightEarInner', '#FFCDD2')} stroke={stroke} strokeWidth={Number(strokeWidth) - 1} onClick={() => handleClick('rightEarInner')} />

          {/* Body */}
          <ellipse cx="150" cy="205" rx="70" ry="60" fill={getFill('body', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('body')} />
          
          {/* Head */}
          <ellipse cx="150" cy="130" rx="60" ry="55" fill={getFill('head', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('head')} />
          
          {/* Trunk */}
          <path d="M 140 145 C 138 180, 142 205, 168 200 C 182 195, 185 180, 175 178 C 168 178, 165 186, 160 185 C 152 182, 150 165, 152 145 Z" fill={getFill('trunk', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => handleClick('trunk')} />

          {/* Cheeks */}
          <circle cx="108" cy="145" r="10" fill={getFill('leftCheek', '#FFAB91')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('leftCheek')} />
          <circle cx="192" cy="145" r="10" fill={getFill('rightCheek', '#FFAB91')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('rightCheek')} />

          {/* Smiling Eyes */}
          <ellipse cx="120" cy="125" rx="8" ry="11" fill="#111827" />
          <circle cx="123" cy="122" r="3.5" fill="#FFFFFF" />
          <ellipse cx="180" cy="125" rx="8" ry="11" fill="#111827" />
          <circle cx="183" cy="122" r="3.5" fill="#FFFFFF" />

          {/* Smile next to trunk */}
          <path d="M 125 155 Q 133 162 140 157" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Feet */}
          <rect x="110" y="240" width="32" height="24" rx="12" fill={getFill('leftFoot', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('leftFoot')} />
          <rect x="158" y="240" width="32" height="24" rx="12" fill={getFill('rightFoot', '#90CAF9')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('rightFoot')} />
          
          {/* Cute Little Heart on top */}
          <path d="M 150 62 C 145 52, 130 52, 130 68 C 130 80, 150 94, 150 94 C 150 94, 170 80, 170 68 C 170 52, 155 52, 150 62 Z" fill={getFill('heart', '#FF80AB')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('heart')} />
        </svg>
      );

    case 'lion':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Flower Petal Mane */}
          <g fill={getFill('mane', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <circle key={deg} cx={150 + 68 * Math.cos((deg * Math.PI) / 180)} cy={135 + 68 * Math.sin((deg * Math.PI) / 180)} r="32" onClick={() => handleClick(`mane_${deg}`)} />
            ))}
          </g>

          {/* Body */}
          <ellipse cx="150" cy="225" rx="60" ry="50" fill={getFill('body', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="225" rx="36" ry="30" fill={getFill('belly', '#FFF9C4')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head Base */}
          <circle cx="150" cy="135" r="58" fill={getFill('head', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Ears */}
          <circle cx="106" cy="90" r="18" fill={getFill('earLeft', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earLeft')} />
          <circle cx="106" cy="90" r="10" fill={getFill('earLeftInner', '#FFAB91')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="194" cy="90" r="18" fill={getFill('earRight', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earRight')} />
          <circle cx="194" cy="90" r="10" fill={getFill('earRightInner', '#FFAB91')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />

          {/* Eyes */}
          <circle cx="128" cy="126" r="9" fill="#111827" />
          <circle cx="131" cy="123" r="3.5" fill="#FFFFFF" />
          <circle cx="172" cy="126" r="9" fill="#111827" />
          <circle cx="175" cy="123" r="3.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="114" cy="144" r="8" fill={getFill('cheekL', '#FF8A80')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="186" cy="144" r="8" fill={getFill('cheekR', '#FF8A80')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nose & Mouth */}
          <polygon points="144,138 156,138 150,146" fill="#111827" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <path d="M 150 146 L 150 154 M 142 154 Q 150 162 158 154" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Paws */}
          <ellipse cx="122" cy="256" rx="20" ry="14" fill={getFill('pawL', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <ellipse cx="178" cy="256" rx="20" ry="14" fill={getFill('pawR', '#FFD54F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'bunny':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Tall Ears */}
          <ellipse cx="112" cy="75" rx="18" ry="55" fill={getFill('earL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <ellipse cx="112" cy="78" rx="10" ry="38" fill={getFill('earLInner', '#FF80AB')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earLInner')} />
          
          <ellipse cx="188" cy="75" rx="18" ry="55" fill={getFill('earR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <ellipse cx="188" cy="78" rx="10" ry="38" fill={getFill('earRInner', '#FF80AB')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earRInner')} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="65" ry="55" fill={getFill('body', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="210" rx="40" ry="35" fill={getFill('belly', '#FFF0F5')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="140" rx="55" ry="48" fill={getFill('head', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Eyes */}
          <ellipse cx="130" cy="132" rx="8" ry="11" fill="#111827" />
          <circle cx="133" cy="129" r="3.5" fill="#FFFFFF" />
          <ellipse cx="170" cy="132" rx="8" ry="11" fill="#111827" />
          <circle cx="173" cy="129" r="3.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="112" cy="148" r="9" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="188" cy="148" r="9" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nose & Smile with cute single tooth */}
          <ellipse cx="150" cy="145" rx="6" ry="4" fill="#FF80AB" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <path d="M 142 153 Q 150 161 158 153" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <rect x="147" y="157" width="6" height="6" rx="2" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />

          {/* Carrot Held in Paws */}
          <g transform="translate(132, 195)">
            <path d="M 18 -10 C 22 -20, 26 -20, 30 -10 C 24 -14, 20 -14, 18 -10 Z" fill={getFill('carrotTop', '#4CAF50')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('carrotTop')} />
            <polygon points="10,-6 26,-6 18,34" fill={getFill('carrot', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('carrot')} />
          </g>

          {/* Feet */}
          <ellipse cx="114" cy="254" rx="22" ry="15" fill={getFill('footL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="186" cy="254" rx="22" ry="15" fill={getFill('footR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'panda':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Black Ears */}
          <circle cx="102" cy="85" r="22" fill={getFill('earL', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="198" cy="85" r="22" fill={getFill('earR', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />

          {/* Body */}
          <ellipse cx="150" cy="215" rx="68" ry="58" fill={getFill('body', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="215" rx="44" ry="38" fill={getFill('belly', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="135" rx="62" ry="52" fill={getFill('head', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Panda Eye Patches */}
          <ellipse cx="122" cy="130" rx="16" ry="20" transform="rotate(-15 122 130)" fill={getFill('patchL', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('patchL')} />
          <ellipse cx="178" cy="130" rx="16" ry="20" transform="rotate(15 178 130)" fill={getFill('patchR', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('patchR')} />

          {/* Sparkling Eyes inside Patches */}
          <circle cx="124" cy="128" r="6" fill="#FFFFFF" />
          <circle cx="124" cy="128" r="3.5" fill="#111827" />
          <circle cx="126" cy="126" r="1.5" fill="#FFFFFF" />

          <circle cx="176" cy="128" r="6" fill="#FFFFFF" />
          <circle cx="176" cy="128" r="3.5" fill="#111827" />
          <circle cx="178" cy="126" r="1.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="106" cy="148" r="9" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="194" cy="148" r="9" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nose & Smile */}
          <ellipse cx="150" cy="142" rx="7" ry="5" fill="#37474F" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <path d="M 142 149 Q 150 157 158 149" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Paws */}
          <circle cx="108" cy="254" r="18" fill={getFill('pawL', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <circle cx="192" cy="254" r="18" fill={getFill('pawR', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'giraffe':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Horns / Ossicones */}
          <path d="M 132 80 L 132 55 M 168 80 L 168 55" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <circle cx="132" cy="50" r="8" fill={getFill('hornL', '#FB8C00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('hornL')} />
          <circle cx="168" cy="50" r="8" fill={getFill('hornR', '#FB8C00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('hornR')} />

          {/* Ears */}
          <ellipse cx="102" cy="92" rx="16" ry="10" transform="rotate(-20 102 92)" fill={getFill('earL', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <ellipse cx="198" cy="92" rx="16" ry="10" transform="rotate(20 198 92)" fill={getFill('earR', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />

          {/* Neck & Body */}
          <path d="M 130 145 L 125 210 Q 110 240 150 240 Q 190 240 175 210 L 170 145 Z" fill={getFill('body', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('body')} />

          {/* Big Simple Spots */}
          <circle cx="145" cy="180" r="14" fill={getFill('spot1', '#FB8C00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('spot1')} />
          <circle cx="160" cy="215" r="16" fill={getFill('spot2', '#FB8C00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('spot2')} />
          <circle cx="134" cy="225" r="12" fill={getFill('spot3', '#FB8C00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('spot3')} />

          {/* Head */}
          <ellipse cx="150" cy="115" rx="46" ry="40" fill={getFill('head', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          <ellipse cx="150" cy="132" rx="32" ry="20" fill={getFill('muzzle', '#FFE082')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('muzzle')} />

          {/* Eyes */}
          <ellipse cx="132" cy="108" rx="7" ry="10" fill="#111827" />
          <circle cx="135" cy="105" r="3" fill="#FFFFFF" />
          <ellipse cx="168" cy="108" rx="7" ry="10" fill="#111827" />
          <circle cx="171" cy="105" r="3" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="118" cy="122" r="7" fill={getFill('cheekL', '#FF8A80')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="182" cy="122" r="7" fill={getFill('cheekR', '#FF8A80')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nostrils & Smile */}
          <circle cx="144" cy="130" r="2.5" fill="#111827" />
          <circle cx="156" cy="130" r="2.5" fill="#111827" />
          <path d="M 142 138 Q 150 146 158 138" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Legs */}
          <rect x="122" y="240" width="18" height="30" rx="9" fill={getFill('legL', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('legL')} />
          <rect x="160" y="240" width="18" height="30" rx="9" fill={getFill('legR', '#FFF59D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('legR')} />
        </svg>
      );

    case 'monkey':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Curly Tail */}
          <path d="M 195 220 Q 250 200 240 160 Q 230 130 250 130" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Big Round Ears */}
          <circle cx="86" cy="125" r="24" fill={getFill('earL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="86" cy="125" r="14" fill={getFill('earLInner', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earLInner')} />
          <circle cx="214" cy="125" r="24" fill={getFill('earR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <circle cx="214" cy="125" r="14" fill={getFill('earRInner', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earRInner')} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="55" ry="48" fill={getFill('body', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="210" rx="34" ry="28" fill={getFill('belly', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <circle cx="150" cy="130" r="54" fill={getFill('head', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Peach Heart Face Mask */}
          <path d="M 150 110 C 135 90, 115 90, 115 118 C 115 145, 150 165, 150 165 C 150 165, 185 145, 185 118 C 185 90, 165 90, 150 110 Z" fill={getFill('faceMask', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('faceMask')} />

          {/* Eyes */}
          <circle cx="132" cy="122" r="7" fill="#111827" />
          <circle cx="135" cy="119" r="2.5" fill="#FFFFFF" />
          <circle cx="168" cy="122" r="7" fill="#111827" />
          <circle cx="171" cy="119" r="2.5" fill="#FFFFFF" />

          {/* Big Cheerful Smile */}
          <path d="M 136 142 Q 150 156 164 142" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Holding Banana */}
          <path d="M 125 210 Q 150 235 175 210 Q 150 220 125 210 Z" fill={getFill('banana', '#FFEE58')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('banana')} />

          {/* Feet */}
          <ellipse cx="120" cy="254" rx="16" ry="12" fill={getFill('footL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="180" cy="254" rx="16" ry="12" fill={getFill('footR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'bear':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Round Ears */}
          <circle cx="100" cy="90" r="22" fill={getFill('earL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="100" cy="90" r="12" fill={getFill('earLInner', '#D7CCC8')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earLInner')} />
          <circle cx="200" cy="90" r="22" fill={getFill('earR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <circle cx="200" cy="90" r="12" fill={getFill('earRInner', '#D7CCC8')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earRInner')} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="66" ry="56" fill={getFill('body', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="210" rx="42" ry="34" fill={getFill('belly', '#D7CCC8')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="135" rx="58" ry="50" fill={getFill('head', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Muzzle */}
          <ellipse cx="150" cy="148" rx="26" ry="18" fill={getFill('muzzle', '#D7CCC8')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('muzzle')} />

          {/* Nose & Smile */}
          <ellipse cx="150" cy="142" rx="8" ry="6" fill="#111827" />
          <path d="M 142 150 Q 150 158 158 150" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Eyes */}
          <circle cx="128" cy="125" r="8" fill="#111827" />
          <circle cx="131" cy="122" r="3" fill="#FFFFFF" />
          <circle cx="172" cy="125" r="8" fill="#111827" />
          <circle cx="175" cy="122" r="3" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="112" cy="142" r="8" fill={getFill('cheekL', '#FFAB91')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="188" cy="142" r="8" fill={getFill('cheekR', '#FFAB91')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Paws */}
          <circle cx="112" cy="254" r="18" fill={getFill('footL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <circle cx="188" cy="254" r="18" fill={getFill('footR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'tiger':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <circle cx="102" cy="90" r="20" fill={getFill('earL', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="102" cy="90" r="10" fill={getFill('earLInner', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="198" cy="90" r="20" fill={getFill('earR', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <circle cx="198" cy="90" r="10" fill={getFill('earRInner', '#FFCCBC')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="64" ry="54" fill={getFill('body', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="210" rx="40" ry="32" fill={getFill('belly', '#FFF8E1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="135" rx="58" ry="48" fill={getFill('head', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Simple Bold Stripes */}
          <polygon points="150,92 144,110 156,110" fill="#111827" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <polygon points="98,135 116,132 116,138" fill="#111827" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <polygon points="202,135 184,132 184,138" fill="#111827" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />

          {/* Eyes */}
          <ellipse cx="130" cy="130" rx="8" ry="11" fill="#111827" />
          <circle cx="133" cy="127" r="3.5" fill="#FFFFFF" />
          <ellipse cx="170" cy="130" rx="8" ry="11" fill="#111827" />
          <circle cx="173" cy="127" r="3.5" fill="#FFFFFF" />

          {/* Muzzle & Whiskers */}
          <ellipse cx="150" cy="148" rx="24" ry="15" fill={getFill('muzzle', '#FFF8E1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('muzzle')} />
          <polygon points="146,142 154,142 150,148" fill="#E91E63" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <path d="M 142 152 Q 150 160 158 152" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="115" y1="146" x2="128" y2="148" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
          <line x1="185" y1="146" x2="172" y2="148" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />

          {/* Paws */}
          <ellipse cx="118" cy="254" rx="18" ry="12" fill={getFill('footL', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="182" cy="254" rx="18" ry="12" fill={getFill('footR', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'koala':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Big Fluffy Ears */}
          <circle cx="86" cy="100" r="32" fill={getFill('earL', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="86" cy="100" r="18" fill={getFill('earLInner', '#ECEFF1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earLInner')} />
          <circle cx="214" cy="100" r="32" fill={getFill('earR', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <circle cx="214" cy="100" r="18" fill={getFill('earRInner', '#ECEFF1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('earRInner')} />

          {/* Body */}
          <ellipse cx="150" cy="215" rx="60" ry="52" fill={getFill('body', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="215" rx="36" ry="30" fill={getFill('belly', '#ECEFF1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="138" rx="56" ry="46" fill={getFill('head', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Big Oval Koala Nose */}
          <ellipse cx="150" cy="144" rx="16" ry="22" fill={getFill('nose', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('nose')} />

          {/* Eyes */}
          <circle cx="124" cy="126" r="7" fill="#111827" />
          <circle cx="126" cy="124" r="2.5" fill="#FFFFFF" />
          <circle cx="176" cy="126" r="7" fill="#111827" />
          <circle cx="178" cy="124" r="2.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="108" cy="146" r="8" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="192" cy="146" r="8" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Eucalyptus Leaf */}
          <ellipse cx="120" cy="210" rx="14" ry="8" transform="rotate(-30 120 210)" fill={getFill('leaf', '#81C784')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('leaf')} />

          {/* Paws */}
          <ellipse cx="118" cy="254" rx="18" ry="12" fill={getFill('pawL', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <ellipse cx="182" cy="254" rx="18" ry="12" fill={getFill('pawR', '#B0BEC5')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'fox':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Big Fluffy Tail behind */}
          <path d="M 180 230 C 260 250, 270 160, 220 150 C 200 170, 190 200, 180 230 Z" fill={getFill('tail', '#FF7043')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tail')} />
          <path d="M 235 152 C 265 170, 255 195, 235 185 Z" fill={getFill('tailTip', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('tailTip')} />

          {/* Triangular Ears */}
          <polygon points="100,60 80,120 125,110" fill={getFill('earL', '#FF7043')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earL')} />
          <polygon points="98,75 88,115 118,108" fill={getFill('earLInner', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          
          <polygon points="200,60 220,120 175,110" fill={getFill('earR', '#FF7043')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earR')} />
          <polygon points="202,75 212,115 182,108" fill={getFill('earRInner', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />

          {/* Body */}
          <ellipse cx="150" cy="215" rx="55" ry="48" fill={getFill('body', '#FF7043')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <path d="M 130 180 Q 150 220 170 180 Q 150 240 130 180 Z" fill={getFill('chest', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('chest')} />

          {/* Head Base */}
          <ellipse cx="150" cy="135" rx="56" ry="45" fill={getFill('head', '#FF7043')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* White Fox Cheeks */}
          <path d="M 98 135 Q 120 155 150 152 Q 180 155 202 135 Q 150 175 98 135 Z" fill={getFill('cheeks', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('cheeks')} />

          {/* Eyes */}
          <ellipse cx="130" cy="126" rx="7" ry="10" fill="#111827" />
          <circle cx="132" cy="123" r="3" fill="#FFFFFF" />
          <ellipse cx="170" cy="126" rx="7" ry="10" fill="#111827" />
          <circle cx="172" cy="123" r="3" fill="#FFFFFF" />

          {/* Nose & Smile */}
          <circle cx="150" cy="150" r="5" fill="#111827" />
          <path d="M 144 156 Q 150 162 156 156" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Paws */}
          <ellipse cx="122" cy="254" rx="16" ry="12" fill={getFill('pawL', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <ellipse cx="178" cy="254" rx="16" ry="12" fill={getFill('pawR', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'cat':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Tail */}
          <path d="M 195 210 Q 235 200 230 150 Q 225 125 240 120" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Ears */}
          <polygon points="105,75 90,120 130,110" fill={getFill('earL', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earL')} />
          <polygon points="105,88 98,115 122,110" fill={getFill('earLInner', '#FF80AB')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          
          <polygon points="195,75 210,120 170,110" fill={getFill('earR', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earR')} />
          <polygon points="195,88 202,115 178,110" fill={getFill('earRInner', '#FF80AB')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="56" ry="48" fill={getFill('body', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="212" rx="34" ry="28" fill={getFill('belly', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="135" rx="55" ry="44" fill={getFill('head', '#FFA726')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Eyes */}
          <ellipse cx="130" cy="128" rx="8" ry="11" fill="#111827" />
          <circle cx="133" cy="125" r="3.5" fill="#FFFFFF" />
          <ellipse cx="170" cy="128" rx="8" ry="11" fill="#111827" />
          <circle cx="173" cy="125" r="3.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="114" cy="144" r="8" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="186" cy="144" r="8" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nose & Whiskers */}
          <polygon points="146,140 154,140 150,146" fill="#FF80AB" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <path d="M 142 149 Q 150 156 158 149" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="110" y1="142" x2="124" y2="144" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
          <line x1="190" y1="142" x2="176" y2="144" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />

          {/* Collar with Bell */}
          <path d="M 125 174 Q 150 186 175 174" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <circle cx="150" cy="184" r="7" fill={getFill('bell', '#FFD54F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('bell')} />

          {/* Paws */}
          <ellipse cx="122" cy="254" rx="16" ry="12" fill={getFill('pawL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <ellipse cx="178" cy="254" rx="16" ry="12" fill={getFill('pawR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'dog':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Floppy Ears */}
          <path d="M 95 105 C 70 120, 70 170, 95 175 C 110 175, 115 140, 105 105 Z" fill={getFill('earL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earL')} />
          <path d="M 205 105 C 230 120, 230 170, 205 175 C 190 175, 185 140, 195 105 Z" fill={getFill('earR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earR')} />

          {/* Wagging Tail */}
          <path d="M 195 210 Q 240 200 245 165" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="58" ry="50" fill={getFill('body', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="212" rx="36" ry="30" fill={getFill('belly', '#FFF9C4')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Head */}
          <ellipse cx="150" cy="135" rx="55" ry="46" fill={getFill('head', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Eye Patch on Left */}
          <ellipse cx="130" cy="128" rx="16" ry="18" fill={getFill('patch', '#8D6E63')} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('patch')} />

          {/* Eyes */}
          <ellipse cx="130" cy="128" rx="7" ry="10" fill="#111827" />
          <circle cx="132" cy="125" r="3" fill="#FFFFFF" />
          <ellipse cx="170" cy="128" rx="7" ry="10" fill="#111827" />
          <circle cx="172" cy="125" r="3" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="114" cy="144" r="8" fill={getFill('cheekL', '#FF8A80')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="186" cy="144" r="8" fill={getFill('cheekR', '#FF8A80')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Nose & Happy Tongue */}
          <ellipse cx="150" cy="144" rx="8" ry="6" fill="#111827" />
          <path d="M 140 152 Q 150 160 160 152" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 146 156 C 146 168, 154 168, 154 156 Z" fill={getFill('tongue', '#FF5252')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('tongue')} />

          {/* Paws */}
          <ellipse cx="122" cy="254" rx="18" ry="12" fill={getFill('pawL', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawL')} />
          <ellipse cx="178" cy="254" rx="18" ry="12" fill={getFill('pawR', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('pawR')} />
        </svg>
      );

    case 'cow':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Cute Horns */}
          <path d="M 118 78 Q 112 60 126 64" fill={getFill('hornL', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('hornL')} />
          <path d="M 182 78 Q 188 60 174 64" fill={getFill('hornR', '#FFE082')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => handleClick('hornR')} />

          {/* Round Ears */}
          <ellipse cx="96" cy="104" rx="18" ry="11" transform="rotate(-20 96 104)" fill={getFill('earL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <ellipse cx="204" cy="104" rx="18" ry="11" transform="rotate(20 204 104)" fill={getFill('earR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="66" ry="54" fill={getFill('body', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Big Spots */}
          <circle cx="120" cy="210" r="16" fill={getFill('spot1', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('spot1')} />
          <circle cx="178" cy="195" r="18" fill={getFill('spot2', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('spot2')} />

          {/* Head */}
          <ellipse cx="150" cy="125" rx="55" ry="45" fill={getFill('head', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          <circle cx="125" cy="105" r="12" fill={getFill('headSpot', '#37474F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('headSpot')} />

          {/* Large Pink Muzzle */}
          <ellipse cx="150" cy="150" rx="38" ry="24" fill={getFill('muzzle', '#FFCDD2')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('muzzle')} />

          {/* Eyes */}
          <ellipse cx="128" cy="116" rx="7" ry="10" fill="#111827" />
          <circle cx="130" cy="113" r="3" fill="#FFFFFF" />
          <ellipse cx="172" cy="116" rx="7" ry="10" fill="#111827" />
          <circle cx="174" cy="113" r="3" fill="#FFFFFF" />

          {/* Nostrils & Cheerful Smile */}
          <circle cx="140" cy="144" r="3" fill="#111827" />
          <circle cx="160" cy="144" r="3" fill="#111827" />
          <path d="M 140 156 Q 150 164 160 156" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Bell Collar */}
          <path d="M 132 176 Q 150 186 168 176" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <polygon points="144,184 156,184 152,194 148,194" fill={getFill('bell', '#FFD54F')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('bell')} />

          {/* Feet */}
          <ellipse cx="118" cy="254" rx="18" ry="12" fill={getFill('footL', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="182" cy="254" rx="18" ry="12" fill={getFill('footR', '#37474F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'horse':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Fluffy Cloud Mane */}
          <g fill={getFill('mane', '#FFE0B2')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round">
            <circle cx="110" cy="80" r="16" />
            <circle cx="128" cy="65" r="18" />
            <circle cx="150" cy="62" r="18" />
            <circle cx="172" cy="68" r="16" />
            <circle cx="188" cy="85" r="15" />
          </g>

          {/* Cute Ears */}
          <polygon points="110,65 100,100 125,95" fill={getFill('earL', '#D7CCC8')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earL')} />
          <polygon points="190,65 200,100 175,95" fill={getFill('earR', '#D7CCC8')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('earR')} />

          {/* Body */}
          <ellipse cx="150" cy="210" rx="60" ry="50" fill={getFill('body', '#D7CCC8')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />

          {/* Head */}
          <path d="M 125 95 Q 150 90 175 95 L 170 145 Q 150 170 130 145 Z" fill={getFill('head', '#D7CCC8')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('head')} />
          <ellipse cx="150" cy="148" rx="26" ry="16" fill={getFill('muzzle', '#FAEDCD')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('muzzle')} />

          {/* Eyes with Lashes */}
          <ellipse cx="132" cy="115" rx="7" ry="10" fill="#111827" />
          <circle cx="134" cy="112" r="3" fill="#FFFFFF" />
          <line x1="130" y1="105" x2="124" y2="100" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />

          <ellipse cx="168" cy="115" rx="7" ry="10" fill="#111827" />
          <circle cx="170" cy="112" r="3" fill="#FFFFFF" />
          <line x1="170" y1="105" x2="176" y2="100" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />

          {/* Nostrils & Smile */}
          <circle cx="142" cy="144" r="2.5" fill="#111827" />
          <circle cx="158" cy="144" r="2.5" fill="#111827" />
          <path d="M 142 152 Q 150 158 158 152" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Legs & Hooves */}
          <rect x="115" y="240" width="20" height="25" rx="6" fill={getFill('hoofL', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('hoofL')} />
          <rect x="165" y="240" width="20" height="25" rx="6" fill={getFill('hoofR', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('hoofR')} />
        </svg>
      );

    case 'penguin':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Wings / Flippers */}
          <ellipse cx="80" cy="180" rx="16" ry="34" transform="rotate(25 80 180)" fill={getFill('flipperL', '#263238')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('flipperL')} />
          <ellipse cx="220" cy="180" rx="16" ry="34" transform="rotate(-25 220 180)" fill={getFill('flipperR', '#263238')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('flipperR')} />

          {/* Body */}
          <ellipse cx="150" cy="175" rx="65" ry="75" fill={getFill('body', '#263238')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />

          {/* Big White Belly */}
          <ellipse cx="150" cy="185" rx="46" ry="58" fill={getFill('belly', '#FFFFFF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />

          {/* Eyes */}
          <ellipse cx="130" cy="125" rx="8" ry="11" fill="#111827" />
          <circle cx="133" cy="122" r="3.5" fill="#FFFFFF" />
          <ellipse cx="170" cy="125" rx="8" ry="11" fill="#111827" />
          <circle cx="173" cy="122" r="3.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="112" cy="142" r="8" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="188" cy="142" r="8" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Orange Beak */}
          <polygon points="140,135 160,135 150,148" fill={getFill('beak', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('beak')} />

          {/* Cute Little Bowtie */}
          <polygon points="140,165 160,165 150,172" fill={getFill('bowtie', '#E91E63')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('bowtie')} />
          <polygon points="140,179 160,179 150,172" fill={getFill('bowtie', '#E91E63')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="150" cy="172" r="3" fill="#111827" />

          {/* Feet */}
          <ellipse cx="120" cy="254" rx="20" ry="12" fill={getFill('footL', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="180" cy="254" rx="20" ry="12" fill={getFill('footR', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'duck':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Little Wings */}
          <ellipse cx="95" cy="195" rx="16" ry="24" transform="rotate(15 95 195)" fill={getFill('wingL', '#FFEE58')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('wingL')} />

          {/* Chubby Body */}
          <ellipse cx="150" cy="200" rx="65" ry="52" fill={getFill('body', '#FFEE58')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />

          {/* Round Head */}
          <circle cx="150" cy="125" r="50" fill={getFill('head', '#FFEE58')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Eyes */}
          <ellipse cx="130" cy="115" rx="8" ry="11" fill="#111827" />
          <circle cx="133" cy="112" r="3.5" fill="#FFFFFF" />
          <ellipse cx="170" cy="115" rx="8" ry="11" fill="#111827" />
          <circle cx="173" cy="112" r="3.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="114" cy="130" r="8" fill={getFill('cheekL', '#FFAB91')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="186" cy="130" r="8" fill={getFill('cheekR', '#FFAB91')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Wide Friendly Duck Bill */}
          <ellipse cx="150" cy="138" rx="26" ry="14" fill={getFill('bill', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('bill')} />
          <path d="M 138 138 Q 150 144 162 138" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Little Webbed Feet */}
          <ellipse cx="125" cy="254" rx="18" ry="10" fill={getFill('footL', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <ellipse cx="175" cy="254" rx="18" ry="10" fill={getFill('footR', '#FF9800')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
        </svg>
      );

    case 'owl':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Perched Branch */}
          <line x1="60" y1="250" x2="240" y2="250" stroke={stroke} strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />

          {/* Round Body & Head all-in-one */}
          <ellipse cx="150" cy="160" rx="66" ry="78" fill={getFill('body', '#B07D62')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />

          {/* Ear Tufts */}
          <polygon points="95,95 80,125 110,120" fill={getFill('tuftL', '#B07D62')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tuftL')} />
          <polygon points="205,95 220,125 190,120" fill={getFill('tuftR', '#B07D62')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tuftR')} />

          {/* Giant Spectacle Eye Rings */}
          <circle cx="120" cy="135" r="28" fill={getFill('eyeRingL', '#FFF8E1')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('eyeRingL')} />
          <circle cx="180" cy="135" r="28" fill={getFill('eyeRingR', '#FFF8E1')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('eyeRingR')} />

          {/* Big Luminous Eyes */}
          <circle cx="120" cy="135" r="14" fill="#111827" />
          <circle cx="124" cy="131" r="5" fill="#FFFFFF" />
          <circle cx="180" cy="135" r="14" fill="#111827" />
          <circle cx="184" cy="131" r="5" fill="#FFFFFF" />

          {/* Tiny Smiling Beak */}
          <polygon points="144,148 156,148 150,160" fill={getFill('beak', '#FFA726')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinejoin="round" onClick={() => handleClick('beak')} />

          {/* Tummy Scallops */}
          <path d="M 135 190 Q 142 198 150 190 Q 158 198 165 190" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 130 208 Q 140 216 150 208 Q 160 216 170 208" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Little Talons on Branch */}
          <circle cx="130" cy="248" r="6" fill={getFill('footL', '#FFA726')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="140" cy="248" r="6" fill={getFill('footL', '#FFA726')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="160" cy="248" r="6" fill={getFill('footR', '#FFA726')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="170" cy="248" r="6" fill={getFill('footR', '#FFA726')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
        </svg>
      );

    case 'turtle':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Flipper Feet */}
          <ellipse cx="90" cy="150" rx="18" ry="12" fill={getFill('footFL', '#A5D6A7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footFL')} />
          <ellipse cx="210" cy="150" rx="18" ry="12" fill={getFill('footFR', '#A5D6A7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footFR')} />
          <ellipse cx="95" cy="210" rx="16" ry="10" fill={getFill('footBL', '#A5D6A7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footBL')} />
          <ellipse cx="205" cy="210" rx="16" ry="10" fill={getFill('footBR', '#A5D6A7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footBR')} />
          
          {/* Little Tail */}
          <polygon points="146,230 154,230 150,245" fill={getFill('tail', '#A5D6A7')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinejoin="round" onClick={() => handleClick('tail')} />

          {/* Big Domed Shell */}
          <ellipse cx="150" cy="180" rx="65" ry="50" fill={getFill('shell', '#66BB6A')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('shell')} />

          {/* Simple Shell Hexagon / Circle Segments */}
          <circle cx="150" cy="175" r="16" fill={getFill('segCenter', '#81C784')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('segCenter')} />
          <circle cx="120" cy="178" r="12" fill={getFill('segL', '#81C784')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('segL')} />
          <circle cx="180" cy="178" r="12" fill={getFill('segR', '#81C784')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('segR')} />

          {/* Friendly Head */}
          <ellipse cx="150" cy="105" rx="36" ry="28" fill={getFill('head', '#A5D6A7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />

          {/* Eyes */}
          <ellipse cx="136" cy="100" rx="6" ry="8" fill="#111827" />
          <circle cx="138" cy="98" r="2.5" fill="#FFFFFF" />
          <ellipse cx="164" cy="100" rx="6" ry="8" fill="#111827" />
          <circle cx="166" cy="98" r="2.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="125" cy="110" r="6" fill={getFill('cheekL', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekL')} />
          <circle cx="175" cy="110" r="6" fill={getFill('cheekR', '#FF80AB')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} onClick={() => handleClick('cheekR')} />

          {/* Sweet Smile */}
          <path d="M 142 114 Q 150 122 158 114" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};
