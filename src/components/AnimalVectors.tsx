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

    case 'kangaroo':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Big Tail */}
          <path d="M 90 240 C 60 250, 40 230, 45 200 C 50 190, 70 210, 100 220 Z" fill={getFill('tail', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tail')} />
          {/* Body */}
          <ellipse cx="150" cy="205" rx="65" ry="58" fill={getFill('body', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Big Feet */}
          <rect x="95" y="248" width="45" height="20" rx="10" fill={getFill('footL', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <rect x="160" y="248" width="45" height="20" rx="10" fill={getFill('footR', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
          {/* Tummy Pouch */}
          <path d="M 115 190 Q 150 245 185 190 Z" fill={getFill('pouch', '#FAEDCD')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('pouch')} />
          {/* Baby Joey Head in Pouch */}
          <circle cx="150" cy="180" r="18" fill={getFill('joeyHead', '#D4A373')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('joeyHead')} />
          <ellipse cx="140" cy="162" rx="4" ry="10" fill={getFill('joeyEarL', '#D4A373')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="160" cy="162" rx="4" ry="10" fill={getFill('joeyEarR', '#D4A373')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="145" cy="178" r="2.5" fill="#111827" />
          <circle cx="155" cy="178" r="2.5" fill="#111827" />
          <path d="M 148 184 Q 150 186 152 184" fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" />
          {/* Mother Kangaroo Head */}
          <ellipse cx="150" cy="110" rx="45" ry="40" fill={getFill('head', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Long Ears */}
          <ellipse cx="120" cy="55" rx="12" ry="36" transform="rotate(-15 120 55)" fill={getFill('earL', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <ellipse cx="120" cy="55" rx="6" ry="24" transform="rotate(-15 120 55)" fill={getFill('earLInner', '#FFCAD4')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="180" cy="55" rx="12" ry="36" transform="rotate(15 180 55)" fill={getFill('earR', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <ellipse cx="180" cy="55" rx="6" ry="24" transform="rotate(15 180 55)" fill={getFill('earRInner', '#FFCAD4')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Cheerful Eyes */}
          <circle cx="132" cy="105" r="7" fill="#111827" />
          <circle cx="134" cy="103" r="2.5" fill="#FFFFFF" />
          <circle cx="168" cy="105" r="7" fill="#111827" />
          <circle cx="170" cy="103" r="2.5" fill="#FFFFFF" />
          {/* Nose & Smile */}
          <ellipse cx="150" cy="120" rx="7" ry="5" fill="#111827" />
          <path d="M 142 128 Q 150 135 158 128" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <circle cx="122" cy="115" r="6" fill={getFill('blushL', '#FFCAD4')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <circle cx="178" cy="115" r="6" fill={getFill('blushR', '#FFCAD4')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
        </svg>
      );

    case 'hippo':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Chubby Body */}
          <ellipse cx="150" cy="215" rx="75" ry="55" fill={getFill('body', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Little Feet */}
          <rect x="100" y="248" width="34" height="24" rx="12" fill={getFill('footL', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footL')} />
          <rect x="166" y="248" width="34" height="24" rx="12" fill={getFill('footR', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('footR')} />
          {/* Head Base */}
          <circle cx="150" cy="115" r="50" fill={getFill('head', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Tiny Ears */}
          <circle cx="95" cy="80" r="14" fill={getFill('earL', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earL')} />
          <circle cx="95" cy="80" r="7" fill={getFill('earLIn', '#FFC6FF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="205" cy="80" r="14" fill={getFill('earR', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('earR')} />
          <circle cx="205" cy="80" r="7" fill={getFill('earRIn', '#FFC6FF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Eyes */}
          <circle cx="128" cy="98" r="8" fill="#111827" />
          <circle cx="130" cy="96" r="3" fill="#FFFFFF" />
          <circle cx="172" cy="98" r="8" fill="#111827" />
          <circle cx="174" cy="96" r="3" fill="#FFFFFF" />
          {/* Giant Friendly Snout */}
          <ellipse cx="150" cy="148" rx="60" ry="38" fill={getFill('snout', '#B8C0FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('snout')} />
          {/* Nostrils */}
          <ellipse cx="132" cy="140" rx="5" ry="7" fill="#111827" />
          <ellipse cx="168" cy="140" rx="5" ry="7" fill="#111827" />
          {/* Two Little Peg Teeth */}
          <rect x="132" y="165" width="10" height="12" rx="4" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <rect x="158" y="165" width="10" height="12" rx="4" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Big Happy Smile */}
          <path d="M 125 162 Q 150 178 175 162" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'zebra':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="150" cy="210" rx="65" ry="52" fill={getFill('body', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Zebra Body Stripes */}
          <path d="M 115 175 Q 120 200 110 225" fill="none" stroke="#111827" strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          <path d="M 135 170 Q 140 200 130 230" fill="none" stroke="#111827" strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          <path d="M 165 170 Q 160 200 170 230" fill="none" stroke="#111827" strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          <path d="M 185 175 Q 180 200 190 225" fill="none" stroke="#111827" strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          {/* Hooves */}
          <rect x="105" y="245" width="30" height="24" rx="8" fill="#111827" />
          <rect x="165" y="245" width="30" height="24" rx="8" fill="#111827" />
          {/* Mane */}
          <path d="M 135 48 C 145 35, 155 35, 165 48" fill="none" stroke="#111827" strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 138 40 L 140 55 M 146 36 L 148 55 M 154 36 L 154 55 M 162 40 L 160 55" stroke="#111827" strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="150" cy="115" rx="46" ry="50" fill={getFill('head', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Ears */}
          <ellipse cx="118" cy="72" rx="10" ry="24" transform="rotate(-20 118 72)" fill={getFill('earL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="182" cy="72" rx="10" ry="24" transform="rotate(20 182 72)" fill={getFill('earR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Face Stripes */}
          <path d="M 115 100 L 128 102 M 185 100 L 172 102" stroke="#111827" strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="132" cy="110" r="7.5" fill="#111827" />
          <circle cx="134" cy="108" r="2.5" fill="#FFFFFF" />
          <circle cx="168" cy="110" r="7.5" fill="#111827" />
          <circle cx="170" cy="108" r="2.5" fill="#FFFFFF" />
          {/* Snout */}
          <ellipse cx="150" cy="142" rx="30" ry="20" fill={getFill('muzzle', '#3D3D3D')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('muzzle')} />
          <circle cx="140" cy="138" r="3" fill="#FFFFFF" />
          <circle cx="160" cy="138" r="3" fill="#FFFFFF" />
          <path d="M 143 148 Q 150 154 157 148" fill="none" stroke="#FFFFFF" strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
        </svg>
      );

    case 'hedgehog':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Spiky Rounded Back */}
          <path d="M 80 200 C 60 140, 100 80, 170 80 C 230 80, 260 130, 255 190 C 250 230, 210 245, 160 245 C 110 245, 90 230, 80 200 Z" fill={getFill('quills', '#C68B59')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('quills')} />
          {/* Cute Little Apple on Back */}
          <circle cx="195" cy="85" r="20" fill={getFill('apple', '#E63946')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('apple')} />
          <path d="M 195 65 Q 200 55 208 58" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
          <ellipse cx="205" cy="62" rx="6" ry="3" fill="#588157" stroke={stroke} strokeWidth={2} />
          {/* Face */}
          <path d="M 120 150 C 90 155, 60 180, 60 195 C 60 215, 90 225, 130 225 Z" fill={getFill('face', '#E9D5A1')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('face')} />
          {/* Little Ear */}
          <circle cx="125" cy="155" r="10" fill={getFill('ear', '#E9D5A1')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Eye */}
          <circle cx="95" cy="180" r="7" fill="#111827" />
          <circle cx="97" cy="178" r="2.5" fill="#FFFFFF" />
          {/* Button Nose */}
          <circle cx="58" cy="195" r="7" fill="#111827" />
          {/* Smile */}
          <path d="M 75 205 Q 85 212 95 206" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Paws */}
          <ellipse cx="105" cy="238" rx="14" ry="9" fill={getFill('pawL', '#E9D5A1')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="160" cy="242" rx="14" ry="9" fill={getFill('pawR', '#E9D5A1')} stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      );

    case 'squirrel':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Giant Fluffy Curly Tail */}
          <path d="M 175 230 C 235 240, 275 190, 260 120 C 250 70, 195 50, 185 85 C 175 120, 220 145, 205 185 C 195 210, 175 215, 160 220 Z" fill={getFill('tail', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tail')} />
          {/* Body */}
          <ellipse cx="135" cy="195" rx="45" ry="48" fill={getFill('body', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="125" cy="195" rx="26" ry="32" fill={getFill('belly', '#F4F1DE')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />
          {/* Head */}
          <ellipse cx="125" cy="115" rx="38" ry="35" fill={getFill('head', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Ears with tufts */}
          <ellipse cx="105" cy="75" rx="8" ry="18" fill={getFill('earL', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="145" cy="75" rx="8" ry="18" fill={getFill('earR', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Big Eyes */}
          <circle cx="112" cy="112" r="7.5" fill="#111827" />
          <circle cx="114" cy="110" r="2.5" fill="#FFFFFF" />
          <circle cx="142" cy="112" r="7.5" fill="#111827" />
          <circle cx="144" cy="110" r="2.5" fill="#FFFFFF" />
          {/* Nose & Smile */}
          <polygon points="124,123 130,123 127,127" fill="#111827" stroke="#111827" />
          <path d="M 121 130 Q 127 136 133 130" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Giant Acorn in Paws */}
          <g onClick={() => handleClick('acorn')}>
            <ellipse cx="125" cy="180" rx="18" ry="22" fill={getFill('acornNut', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M 107 170 Q 125 160 143 170 Z" fill={getFill('acornCap', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M 125 160 L 125 152" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
          {/* Feet */}
          <ellipse cx="110" cy="242" rx="18" ry="10" fill={getFill('footL', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="155" cy="242" rx="18" ry="10" fill={getFill('footR', '#E07A5F')} stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      );

    case 'whale':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Water Spout */}
          <path d="M 130 90 C 120 50, 95 60, 110 40 C 125 60, 130 75, 130 90 Z" fill={getFill('spoutL', '#48CAE4')} stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M 135 90 C 145 45, 170 55, 155 35 C 140 55, 135 75, 135 90 Z" fill={getFill('spoutR', '#48CAE4')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Whale Body */}
          <path d="M 50 170 C 50 110, 160 100, 220 135 C 255 155, 270 170, 275 160 C 280 150, 275 140, 285 140 C 290 160, 280 185, 260 190 C 220 200, 180 230, 100 230 C 65 230, 50 205, 50 170 Z" fill={getFill('body', '#48CAE4')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('body')} />
          {/* Whale Belly Stripes */}
          <path d="M 65 200 C 100 230, 160 230, 200 200" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
          <path d="M 80 215 C 110 235, 150 235, 180 215" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinecap="round" />
          {/* Flipper */}
          <ellipse cx="140" cy="188" rx="28" ry="15" transform="rotate(25 140 188)" fill={getFill('flipper', '#0077B6')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('flipper')} />
          {/* Happy Eye */}
          <circle cx="95" cy="155" r="8" fill="#111827" />
          <circle cx="98" cy="152" r="3" fill="#FFFFFF" />
          {/* Big Cheerful Smile */}
          <path d="M 75 178 Q 100 192 120 178" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Rosy Cheek */}
          <circle cx="112" cy="168" r="7" fill={getFill('cheek', '#FFB5A7')} opacity={isColored ? 0.7 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
        </svg>
      );

    case 'octopus':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Bulbous Head */}
          <path d="M 90 140 C 80 70, 220 70, 210 140 C 210 175, 90 175, 90 140 Z" fill={getFill('head', '#B5838D')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('head')} />
          {/* Big Cartoon Eyes */}
          <circle cx="125" cy="130" r="14" fill="#111827" />
          <circle cx="129" cy="126" r="5" fill="#FFFFFF" />
          <circle cx="175" cy="130" r="14" fill="#111827" />
          <circle cx="179" cy="126" r="5" fill="#FFFFFF" />
          {/* Wide Smile */}
          <path d="M 135 152 Q 150 162 165 152" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="108" cy="142" r="8" fill={getFill('cheekL', '#FFC6FF')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <circle cx="192" cy="142" r="8" fill={getFill('cheekR', '#FFC6FF')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          {/* 6 Chunky Toddler Tentacles */}
          <g fill={getFill('tentacles', '#B5838D')} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M 95 165 Q 65 190 70 230 Q 85 245 95 220 Q 105 190 110 170" onClick={() => handleClick('t1')} />
            <path d="M 115 170 Q 105 210 115 245 Q 130 250 135 225 Q 135 195 135 172" onClick={() => handleClick('t2')} />
            <path d="M 140 172 Q 145 215 155 250 Q 170 250 170 225 Q 165 195 160 172" onClick={() => handleClick('t3')} />
            <path d="M 165 172 Q 175 210 185 245 Q 200 245 195 220 Q 190 190 185 170" onClick={() => handleClick('t4')} />
            <path d="M 190 170 Q 205 190 225 220 Q 235 240 220 235 Q 210 190 205 165" onClick={() => handleClick('t5')} />
          </g>
          {/* Suction Cups */}
          <circle cx="78" cy="225" r="4" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
          <circle cx="120" cy="235" r="4" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
          <circle cx="160" cy="240" r="4" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
          <circle cx="190" cy="235" r="4" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
        </svg>
      );

    case 'crab':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Big Claws Left and Right */}
          <g fill={getFill('clawL', '#FF6B6B')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('clawL')}>
            <path d="M 75 140 C 45 110, 45 65, 80 80 C 65 95, 75 115, 95 115 Z" strokeLinejoin="round" />
            <path d="M 75 140 L 105 160" strokeLinecap="round" />
          </g>
          <g fill={getFill('clawR', '#FF6B6B')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('clawR')}>
            <path d="M 225 140 C 255 110, 255 65, 220 80 C 235 95, 225 115, 205 115 Z" strokeLinejoin="round" />
            <path d="M 225 140 L 195 160" strokeLinecap="round" />
          </g>
          {/* Walking Legs */}
          <path d="M 95 205 Q 65 225 65 245" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 110 220 Q 85 245 90 260" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 205 205 Q 235 225 235 245" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 190 220 Q 215 245 210 260" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Main Shell */}
          <ellipse cx="150" cy="195" rx="68" ry="48" fill={getFill('shell', '#FF6B6B')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('shell')} />
          {/* Stalk Eyes */}
          <rect x="125" y="115" width="10" height="35" rx="5" fill={getFill('stalkL', '#FF6B6B')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="130" cy="115" r="18" fill="#FFFFFF" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="133" cy="113" r="8" fill="#111827" />
          <circle cx="135" cy="110" r="3" fill="#FFFFFF" />
          <rect x="165" y="115" width="10" height="35" rx="5" fill={getFill('stalkR', '#FF6B6B')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="170" cy="115" r="18" fill="#FFFFFF" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="167" cy="113" r="8" fill="#111827" />
          <circle cx="169" cy="110" r="3" fill="#FFFFFF" />
          {/* Happy Smile on Shell */}
          <path d="M 135 195 Q 150 210 165 195" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <circle cx="120" cy="188" r="6" fill={getFill('blushL', '#FFA07A')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <circle cx="180" cy="188" r="6" fill={getFill('blushR', '#FFA07A')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
        </svg>
      );

    case 'otter':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Body floating */}
          <ellipse cx="150" cy="190" rx="58" ry="65" fill={getFill('body', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="190" rx="34" ry="42" fill={getFill('belly', '#DDC3A5')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />
          {/* Tail */}
          <path d="M 150 255 Q 150 285 160 290" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) + 4} strokeLinecap="round" />
          {/* Floating Paws holding Shell */}
          <ellipse cx="115" cy="185" rx="14" ry="12" fill={getFill('pawL', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="185" cy="185" rx="14" ry="12" fill={getFill('pawR', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Pretty Scallop Shell */}
          <path d="M 132 175 Q 150 160 168 175 Q 165 200 150 202 Q 135 200 132 175 Z" fill={getFill('shell', '#F4ACB7')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('shell')} />
          {/* Head */}
          <circle cx="150" cy="105" r="44" fill={getFill('head', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Round Ears */}
          <circle cx="110" cy="80" r="11" fill={getFill('earL', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="190" cy="80" r="11" fill={getFill('earR', '#A98467')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Big Innocent Eyes */}
          <circle cx="134" cy="100" r="7" fill="#111827" />
          <circle cx="136" cy="98" r="2.5" fill="#FFFFFF" />
          <circle cx="166" cy="100" r="7" fill="#111827" />
          <circle cx="168" cy="98" r="2.5" fill="#FFFFFF" />
          {/* Muzzle */}
          <ellipse cx="150" cy="115" rx="18" ry="12" fill={getFill('muzzle', '#DDC3A5')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="150" cy="112" rx="5" ry="4" fill="#111827" />
          <path d="M 144 118 Q 150 123 156 118" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'seal':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Chubby Round Pup Body */}
          <path d="M 150 70 C 80 70, 70 200, 100 240 C 120 260, 180 260, 200 240 C 230 200, 220 70, 150 70 Z" fill={getFill('body', '#ADB5BD')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('body')} />
          {/* Tail Flippers */}
          <polygon points="135,248 115,275 145,260" fill={getFill('tailL', '#ADB5BD')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          <polygon points="165,248 185,275 155,260" fill={getFill('tailR', '#ADB5BD')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          {/* Clapping Front Flippers */}
          <ellipse cx="120" cy="190" rx="22" ry="14" transform="rotate(30 120 190)" fill={getFill('flipperL', '#ADB5BD')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('flipperL')} />
          <ellipse cx="180" cy="190" rx="22" ry="14" transform="rotate(-30 180 190)" fill={getFill('flipperR', '#ADB5BD')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('flipperR')} />
          {/* Soulful Big Eyes */}
          <circle cx="128" cy="120" r="11" fill="#111827" />
          <circle cx="131" cy="116" r="4" fill="#FFFFFF" />
          <circle cx="172" cy="120" r="11" fill="#111827" />
          <circle cx="175" cy="116" r="4" fill="#FFFFFF" />
          {/* Snout with Whiskers */}
          <ellipse cx="150" cy="140" rx="20" ry="14" fill={getFill('snout', '#E9ECEF')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <polygon points="144,134 156,134 150,140" fill="#111827" />
          <path d="M 142 145 Q 150 151 158 145" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <circle cx="138" cy="142" r="1.5" fill="#111827" />
          <circle cx="162" cy="142" r="1.5" fill="#111827" />
        </svg>
      );

    case 'deer':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="150" cy="205" rx="55" ry="46" fill={getFill('body', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* White Spots on Back */}
          <circle cx="130" cy="190" r="5" fill="#FEFAE0" stroke={stroke} strokeWidth={1.5} />
          <circle cx="150" cy="180" r="5" fill="#FEFAE0" stroke={stroke} strokeWidth={1.5} />
          <circle cx="170" cy="190" r="5" fill="#FEFAE0" stroke={stroke} strokeWidth={1.5} />
          {/* Slender Legs */}
          <rect x="115" y="240" width="16" height="30" rx="8" fill={getFill('legL', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="169" y="240" width="16" height="30" rx="8" fill={getFill('legR', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Head */}
          <ellipse cx="150" cy="115" rx="42" ry="44" fill={getFill('head', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Tall Sweet Ears */}
          <ellipse cx="108" cy="65" rx="14" ry="32" transform="rotate(-30 108 65)" fill={getFill('earL', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="108" cy="65" rx="7" ry="20" transform="rotate(-30 108 65)" fill={getFill('earLIn', '#F28482')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="192" cy="65" rx="14" ry="32" transform="rotate(30 192 65)" fill={getFill('earR', '#DDA15E')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="192" cy="65" rx="7" ry="20" transform="rotate(30 192 65)" fill={getFill('earRIn', '#F28482')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Eyes */}
          <circle cx="132" cy="110" r="8" fill="#111827" />
          <circle cx="135" cy="107" r="3" fill="#FFFFFF" />
          <circle cx="168" cy="110" r="8" fill="#111827" />
          <circle cx="171" cy="107" r="3" fill="#FFFFFF" />
          {/* Muzzle */}
          <ellipse cx="150" cy="135" rx="20" ry="14" fill={getFill('muzzle', '#FEFAE0')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="150" cy="128" rx="5" ry="4" fill="#111827" />
          <path d="M 144 137 Q 150 142 156 137" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'raccoon':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Striped Tail */}
          <path d="M 205 210 Q 255 215 250 255 Q 230 280 200 250" fill={getFill('tail', '#CED4DA')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tail')} />
          <path d="M 220 220 L 235 240 M 235 235 L 245 260" stroke="#495057" strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="150" cy="205" rx="56" ry="50" fill={getFill('body', '#CED4DA')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="205" rx="32" ry="32" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Feet */}
          <rect x="110" y="244" width="28" height="18" rx="9" fill={getFill('footL', '#495057')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="162" y="244" width="28" height="18" rx="9" fill={getFill('footR', '#495057')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Head */}
          <ellipse cx="150" cy="115" rx="52" ry="44" fill={getFill('head', '#CED4DA')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Bandit Eye Mask */}
          <path d="M 105 105 Q 150 125 195 105 Q 195 125 150 135 Q 105 125 105 105 Z" fill={getFill('mask', '#495057')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinejoin="round" onClick={() => handleClick('mask')} />
          {/* Ears */}
          <circle cx="106" cy="75" r="15" fill={getFill('earL', '#CED4DA')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="106" cy="75" r="8" fill="#495057" />
          <circle cx="194" cy="75" r="15" fill={getFill('earR', '#CED4DA')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="194" cy="75" r="8" fill="#495057" />
          {/* Eyes */}
          <circle cx="130" cy="115" r="7" fill="#FFFFFF" />
          <circle cx="130" cy="115" r="4.5" fill="#111827" />
          <circle cx="170" cy="115" r="7" fill="#FFFFFF" />
          <circle cx="170" cy="115" r="4.5" fill="#111827" />
          {/* Nose & Smile */}
          <polygon points="145,133 155,133 150,138" fill="#111827" />
          <path d="M 143 144 Q 150 149 157 144" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'beaver':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Paddle Tail */}
          <ellipse cx="230" cy="225" rx="35" ry="22" transform="rotate(25 230 225)" fill={getFill('tail', '#A68A64')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('tail')} />
          {/* Body */}
          <ellipse cx="145" cy="200" rx="60" ry="52" fill={getFill('body', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Feet */}
          <rect x="100" y="242" width="35" height="20" rx="10" fill={getFill('footL', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="160" y="242" width="35" height="20" rx="10" fill={getFill('footR', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Twig in Paws */}
          <g onClick={() => handleClick('twig')}>
            <rect x="120" y="195" width="50" height="8" rx="4" transform="rotate(-10 120 195)" fill={getFill('twigWood', '#588157')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
            <circle cx="115" cy="195" r="10" fill={getFill('pawL', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
            <circle cx="175" cy="188" r="10" fill={getFill('pawR', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
          </g>
          {/* Head */}
          <circle cx="145" cy="115" r="46" fill={getFill('head', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Ears */}
          <circle cx="106" cy="80" r="12" fill={getFill('earL', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="184" cy="80" r="12" fill={getFill('earR', '#7F4F24')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Eyes */}
          <circle cx="128" cy="108" r="7" fill="#111827" />
          <circle cx="130" cy="106" r="2.5" fill="#FFFFFF" />
          <circle cx="162" cy="108" r="7" fill="#111827" />
          <circle cx="164" cy="106" r="2.5" fill="#FFFFFF" />
          {/* Snout */}
          <ellipse cx="145" cy="128" rx="20" ry="14" fill={getFill('snout', '#A68A64')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="145" cy="124" rx="6" ry="4" fill="#111827" />
          {/* Two White Front Teeth */}
          <rect x="138" y="138" width="7" height="10" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <rect x="145" y="138" width="7" height="10" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
        </svg>
      );

    case 'sloth':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Sturdy Tree Branch */}
          <rect x="20" y="80" width="260" height="24" rx="12" fill={getFill('branch', '#8D6E63')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('branch')} />
          {/* Leaves on Branch */}
          <ellipse cx="40" cy="72" rx="14" ry="7" fill={getFill('leafL', '#52B788')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="260" cy="72" rx="14" ry="7" fill={getFill('leafR', '#52B788')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Hanging Claws / Arms */}
          <path d="M 105 104 Q 105 75 115 75 Q 125 75 125 104" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          <path d="M 175 104 Q 175 75 185 75 Q 195 75 195 104" fill="none" stroke={stroke} strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          {/* Hanging Body */}
          <ellipse cx="150" cy="170" rx="55" ry="48" fill={getFill('body', '#D6CCC2')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Head */}
          <circle cx="150" cy="140" r="38" fill={getFill('head', '#D6CCC2')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          <ellipse cx="150" cy="144" rx="26" ry="22" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Sleepy Eyepatches */}
          <ellipse cx="135" cy="140" rx="10" ry="7" transform="rotate(-15 135 140)" fill={getFill('patchL', '#8D6E63')} />
          <ellipse cx="165" cy="140" rx="10" ry="7" transform="rotate(15 165 140)" fill={getFill('patchR', '#8D6E63')} />
          {/* Happy Sleepy Curved Eyes */}
          <path d="M 130 142 Q 135 146 140 142" fill="none" stroke="#111827" strokeWidth={3} strokeLinecap="round" />
          <path d="M 160 142 Q 165 146 170 142" fill="none" stroke="#111827" strokeWidth={3} strokeLinecap="round" />
          {/* Nose & Peaceful Smile */}
          <ellipse cx="150" cy="149" rx="5" ry="3.5" fill="#111827" />
          <path d="M 144 156 Q 150 160 156 156" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'cow':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Chubby Body with spots */}
          <ellipse cx="150" cy="210" rx="66" ry="52" fill={getFill('body', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <path d="M 110 180 Q 125 185 120 210 Q 105 215 110 180 Z" fill={getFill('spot1', '#4A4E69')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <path d="M 175 190 Q 195 185 190 220 Q 170 215 175 190 Z" fill={getFill('spot2', '#4A4E69')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Hooves */}
          <rect x="105" y="245" width="30" height="24" rx="8" fill="#111827" />
          <rect x="165" y="245" width="30" height="24" rx="8" fill="#111827" />
          {/* Head */}
          <ellipse cx="150" cy="115" rx="50" ry="46" fill={getFill('head', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Horns & Ears */}
          <path d="M 118 78 Q 112 60 120 58 Q 128 68 126 78" fill={getFill('hornL', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <path d="M 182 78 Q 188 60 180 58 Q 172 68 174 78" fill={getFill('hornR', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <ellipse cx="98" cy="100" rx="20" ry="10" transform="rotate(-15 98 100)" fill={getFill('earL', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="202" cy="100" rx="20" ry="10" transform="rotate(15 202 100)" fill={getFill('earR', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Eyes */}
          <circle cx="128" cy="105" r="8" fill="#111827" />
          <circle cx="131" cy="102" r="3" fill="#FFFFFF" />
          <circle cx="172" cy="105" r="8" fill="#111827" />
          <circle cx="175" cy="102" r="3" fill="#FFFFFF" />
          {/* Big Pink Snout */}
          <ellipse cx="150" cy="138" rx="36" ry="24" fill={getFill('snout', '#FFC6FF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('snout')} />
          <ellipse cx="136" cy="136" rx="5" ry="6" fill="#111827" />
          <ellipse cx="164" cy="136" rx="5" ry="6" fill="#111827" />
          <path d="M 140 148 Q 150 155 160 148" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'horse':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="150" cy="210" rx="64" ry="50" fill={getFill('body', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Fluffy Tail */}
          <path d="M 86 210 Q 60 230 70 260" fill="none" stroke="#FAEDCD" strokeWidth={Number(strokeWidth) + 4} strokeLinecap="round" />
          {/* Legs */}
          <rect x="110" y="244" width="28" height="24" rx="8" fill={getFill('legL', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="162" y="244" width="28" height="24" rx="8" fill={getFill('legR', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="110" y="258" width="28" height="10" rx="3" fill="#111827" />
          <rect x="162" y="258" width="28" height="10" rx="3" fill="#111827" />
          {/* Mane */}
          <path d="M 135 50 Q 150 35 165 50 Q 155 80 168 110" fill="none" stroke="#FAEDCD" strokeWidth={Number(strokeWidth) + 4} strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="150" cy="118" rx="44" ry="52" fill={getFill('head', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Ears */}
          <polygon points="120,70 128,45 138,68" fill={getFill('earL', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          <polygon points="180,70 172,45 162,68" fill={getFill('earR', '#D4A373')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          {/* Cute White Star on Forehead */}
          <polygon points="150,88 153,94 159,95 154,99 156,105 150,102 144,105 146,99 141,95 147,94" fill="#FFFFFF" />
          {/* Eyes */}
          <circle cx="132" cy="115" r="7.5" fill="#111827" />
          <circle cx="135" cy="112" r="2.5" fill="#FFFFFF" />
          <circle cx="168" cy="115" r="7.5" fill="#111827" />
          <circle cx="171" cy="112" r="2.5" fill="#FFFFFF" />
          {/* Muzzle */}
          <ellipse cx="150" cy="148" rx="28" ry="18" fill={getFill('muzzle', '#FAEDCD')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="140" cy="145" r="3" fill="#111827" />
          <circle cx="160" cy="145" r="3" fill="#111827" />
          <path d="M 142 153 Q 150 158 158 153" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'chick':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Bottom Cracked Eggshell */}
          <path d="M 85 200 C 85 260, 215 260, 215 200 L 195 210 L 175 195 L 150 215 L 125 195 L 105 210 Z" fill={getFill('eggBottom', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('eggBottom')} />
          {/* Fluffy Round Yellow Chick Body */}
          <circle cx="150" cy="155" r="55" fill={getFill('body', '#FFEE88')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Flapping Tiny Wings */}
          <ellipse cx="92" cy="165" rx="14" ry="10" transform="rotate(-20 92 165)" fill={getFill('wingL', '#FFEE88')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="208" cy="165" rx="14" ry="10" transform="rotate(20 208 165)" fill={getFill('wingR', '#FFEE88')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Top Eggshell Hat */}
          <path d="M 115 115 C 120 75, 180 75, 185 115 L 170 110 L 150 122 L 130 110 Z" fill={getFill('eggHat', '#FFFFFF')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('eggHat')} />
          {/* Sparkling Big Eyes */}
          <circle cx="132" cy="150" r="8" fill="#111827" />
          <circle cx="135" cy="147" r="3" fill="#FFFFFF" />
          <circle cx="168" cy="150" r="8" fill="#111827" />
          <circle cx="171" cy="147" r="3" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="118" cy="160" r="7" fill={getFill('blushL', '#FFAAA6')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <circle cx="182" cy="160" r="7" fill={getFill('blushR', '#FFAAA6')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          {/* Peeping Orange Beak */}
          <polygon points="144,158 156,158 150,168" fill={getFill('beak', '#F77F00')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinejoin="round" onClick={() => handleClick('beak')} />
        </svg>
      );

    case 'parrot':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Perched Branch */}
          <rect x="50" y="240" width="200" height="16" rx="8" fill="#8D6E63" stroke={stroke} strokeWidth={strokeWidth} />
          {/* Long Tail Feathers */}
          <path d="M 125 220 Q 110 270 120 290 Q 130 270 135 220" fill={getFill('tail', '#2EC4B6')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('tail')} />
          {/* Body */}
          <ellipse cx="150" cy="170" rx="46" ry="60" fill={getFill('body', '#2EC4B6')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Wing with sunny yellow stripe */}
          <path d="M 160 140 C 190 160, 195 210, 165 220 C 150 200, 150 160, 160 140 Z" fill={getFill('wing', '#FFBF69')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('wing')} />
          {/* Head Feather Crest */}
          <path d="M 130 65 Q 150 50 155 75 Q 165 55 170 78" fill="none" stroke="#FF9F1C" strokeWidth={Number(strokeWidth) + 2} strokeLinecap="round" />
          {/* Head */}
          <circle cx="145" cy="115" r="40" fill={getFill('head', '#2EC4B6')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Eye Patch & Eye */}
          <ellipse cx="138" cy="112" rx="14" ry="16" fill="#FFFFFF" stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="138" cy="112" r="7" fill="#111827" />
          <circle cx="140" cy="110" r="2.5" fill="#FFFFFF" />
          {/* Big Curved Beak */}
          <path d="M 112 110 C 85 115, 85 140, 115 138 Z" fill={getFill('beak', '#FF9F1C')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('beak')} />
          {/* Little Talons on Branch */}
          <circle cx="140" cy="242" r="6" fill="#FFBF69" stroke={stroke} strokeWidth={2} />
          <circle cx="160" cy="242" r="6" fill="#FFBF69" stroke={stroke} strokeWidth={2} />
        </svg>
      );

    case 'flamingo':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Legs - One Standing, One Bent */}
          <path d="M 155 200 L 155 275" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M 145 200 L 130 225 L 155 225" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Foot */}
          <path d="M 145 275 L 165 275" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Oval Body */}
          <ellipse cx="150" cy="180" rx="42" ry="32" fill={getFill('body', '#FFB4A2')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Wing Feather Scallop */}
          <path d="M 135 175 Q 155 160 175 180 Q 155 195 135 175 Z" fill={getFill('wing', '#E5989B')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('wing')} />
          {/* Graceful S-Curved Neck */}
          <path d="M 175 165 C 195 130, 160 100, 150 85" fill="none" stroke={getFill('neck', '#FFB4A2')} strokeWidth={Number(strokeWidth) + 8} strokeLinecap="round" />
          <path d="M 175 165 C 195 130, 160 100, 150 85" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Head */}
          <circle cx="145" cy="80" r="22" fill={getFill('head', '#FFB4A2')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Eye */}
          <circle cx="146" cy="78" r="5" fill="#111827" />
          <circle cx="148" cy="76" r="2" fill="#FFFFFF" />
          {/* Curved Beak */}
          <path d="M 130 80 C 110 85, 110 108, 125 105 Z" fill={getFill('beak', '#FFE66D')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('beak')} />
          <path d="M 115 95 L 125 105" stroke="#111827" strokeWidth={strokeWidth} />
        </svg>
      );

    case 'frog':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Lily Pad Base */}
          <ellipse cx="150" cy="245" rx="100" ry="32" fill={getFill('lilyPad', '#52B788')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('lilyPad')} />
          {/* Golden Crown */}
          <polygon points="135,70 142,50 150,65 158,50 165,70" fill={getFill('crown', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} strokeLinejoin="round" onClick={() => handleClick('crown')} />
          {/* Big Back Jumping Legs */}
          <ellipse cx="85" cy="210" rx="30" ry="24" fill={getFill('legL', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx="215" cy="210" rx="30" ry="24" fill={getFill('legR', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Chubby Frog Body */}
          <ellipse cx="150" cy="190" rx="55" ry="46" fill={getFill('body', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          <ellipse cx="150" cy="195" rx="32" ry="26" fill={getFill('belly', '#CCFF33')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('belly')} />
          {/* Front Feet */}
          <circle cx="125" cy="235" r="9" fill={getFill('footL', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="175" cy="235" r="9" fill={getFill('footR', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Head */}
          <ellipse cx="150" cy="130" rx="58" ry="40" fill={getFill('head', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Big Popping Eyes */}
          <circle cx="115" cy="98" r="22" fill={getFill('eyeDomeL', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="115" cy="98" r="14" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
          <circle cx="117" cy="96" r="8" fill="#111827" />
          <circle cx="120" cy="93" r="3" fill="#FFFFFF" />
          <circle cx="185" cy="98" r="22" fill={getFill('eyeDomeR', '#70E000')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="185" cy="98" r="14" fill="#FFFFFF" stroke={stroke} strokeWidth={2} />
          <circle cx="183" cy="96" r="8" fill="#111827" />
          <circle cx="186" cy="93" r="3" fill="#FFFFFF" />
          {/* Huge Wide Grin */}
          <path d="M 115 138 Q 150 162 185 138" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="110" cy="140" r="7" fill={getFill('cheekL', '#FF99C8')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
          <circle cx="190" cy="140" r="7" fill={getFill('cheekR', '#FF99C8')} opacity={isColored ? 0.8 : 0.4} stroke={stroke} strokeWidth={Number(strokeWidth) - 3} />
        </svg>
      );

    case 'chameleon':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Perched Branch */}
          <rect x="30" y="215" width="240" height="18" rx="9" fill="#8D6E63" stroke={stroke} strokeWidth={strokeWidth} />
          {/* Cute Spiral Curled Tail */}
          <path d="M 80 180 C 45 180, 40 250, 75 250 C 95 250, 95 230, 80 230 C 70 230, 70 240, 78 240" fill="none" stroke={getFill('tail', '#52B788')} strokeWidth={Number(strokeWidth) + 6} strokeLinecap="round" />
          <path d="M 80 180 C 45 180, 40 250, 75 250 C 95 250, 95 230, 80 230 C 70 230, 70 240, 78 240" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="145" cy="175" rx="55" ry="42" fill={getFill('body', '#52B788')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Tummy Stripes */}
          <path d="M 130 160 Q 140 175 130 195" fill="none" stroke={getFill('stripe1', '#FFF3B0')} strokeWidth={Number(strokeWidth) + 1} strokeLinecap="round" />
          <path d="M 155 160 Q 165 175 155 195" fill="none" stroke={getFill('stripe2', '#FFF3B0')} strokeWidth={Number(strokeWidth) + 1} strokeLinecap="round" />
          {/* Little Clamping Claws */}
          <circle cx="120" cy="216" r="8" fill={getFill('clawL', '#52B788')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="170" cy="216" r="8" fill={getFill('clawR', '#52B788')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Head & Crest */}
          <path d="M 160 145 C 170 110, 215 110, 225 145 C 225 175, 170 180, 160 145 Z" fill={getFill('head', '#52B788')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('head')} />
          {/* Giant Swivel Eye Cone */}
          <circle cx="192" cy="140" r="18" fill={getFill('swivelEye', '#74C69D')} stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="192" cy="140" r="8" fill="#111827" />
          <circle cx="194" cy="138" r="3" fill="#FFFFFF" />
          {/* Sweet Grin */}
          <path d="M 195 162 Q 210 166 220 156" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );

    case 'dino':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Long Curled Tail */}
          <path d="M 95 210 C 50 215, 35 170, 50 150 Q 55 170 85 190" fill={getFill('tail', '#64DFDF')} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" onClick={() => handleClick('tail')} />
          {/* Big Chubby Body */}
          <ellipse cx="140" cy="205" rx="60" ry="46" fill={getFill('body', '#64DFDF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('body')} />
          {/* Cute Yellow Spots on Back */}
          <circle cx="120" cy="185" r="8" fill={getFill('spot1', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="145" cy="180" r="10" fill={getFill('spot2', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          <circle cx="170" cy="192" r="7" fill={getFill('spot3', '#FFD166')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} />
          {/* Chubby Dinosaur Pillar Legs */}
          <rect x="100" y="235" width="26" height="25" rx="12" fill={getFill('legL', '#64DFDF')} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="155" y="235" width="26" height="25" rx="12" fill={getFill('legR', '#64DFDF')} stroke={stroke} strokeWidth={strokeWidth} />
          {/* Friendly Long Neck */}
          <path d="M 175 190 C 190 150, 205 100, 195 70" fill="none" stroke={getFill('neck', '#64DFDF')} strokeWidth={Number(strokeWidth) + 16} strokeLinecap="round" />
          <path d="M 175 190 C 190 150, 205 100, 195 70" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="205" cy="70" rx="28" ry="22" fill={getFill('head', '#64DFDF')} stroke={stroke} strokeWidth={strokeWidth} onClick={() => handleClick('head')} />
          {/* Big Gentle Eye */}
          <circle cx="208" cy="65" r="7" fill="#111827" />
          <circle cx="210" cy="63" r="2.5" fill="#FFFFFF" />
          {/* Cheerful Smile */}
          <path d="M 215 76 Q 224 82 230 74" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Cute Little Heart on Chest */}
          <path d="M 182 170 C 178 162, 168 162, 168 174 C 168 182, 182 192, 182 192 C 182 192, 196 182, 196 174 C 196 162, 186 162, 182 170 Z" fill={getFill('heart', '#FF85A1')} stroke={stroke} strokeWidth={Number(strokeWidth) - 2} onClick={() => handleClick('heart')} />
        </svg>
      );

    default:
      return null;
  }
};
