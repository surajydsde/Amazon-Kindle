export interface KdpConfig {
  title: string;
  subtitle: string;
  seriesName: string;
  edition: string;
  author: string;
  illustrator: string;
  primaryMarketplace: string;
  trimSize: string;
  bleedOption: string;
  paperType: 'White' | 'Cream' | 'Premium Color';
  interiorType: string;
  coverFinish: 'Glossy' | 'Matte';
  readingAge: string;
  gradeLevel: string;
  pageCount: number;
}

export const KDP_CONFIG_DEFAULT: KdpConfig = {
  title: "My First Cute Animal Coloring Book",
  subtitle: "40 Fun and Easy Animals for Kids Ages 3-5",
  seriesName: "My First Creative Toddler Books",
  edition: "1st Edition",
  author: "Little Paw Studio",
  illustrator: "Little Paw Studio",
  primaryMarketplace: "Amazon.com",
  trimSize: "8.5 x 11 inches (21.59 x 27.94 cm)",
  bleedOption: "No Bleed (or Bleed 8.625 x 11.25 in)",
  paperType: "White",
  interiorType: "Black & White interior with colored reference headers (or Standard Color)",
  coverFinish: "Glossy",
  readingAge: "3 - 5 years",
  gradeLevel: "Preschool - Kindergarten",
  pageCount: 83
};

export const KDP_KEYWORDS = [
  "toddler animal coloring book ages 3-5",
  "preschool coloring book bold lines easy shapes",
  "my first coloring book for 3 year old boys and girls",
  "cute simple animal coloring book for crayons and markers",
  "single sided coloring book bleed proof blank back",
  "beginner animal coloring book with color guide",
  "kindergarten fine motor skills early learning art"
];

export const KDP_CATEGORIES = [
  {
    path: "Books > Children's Books > Activities, Crafts & Games > Activity Books > Coloring Books",
    bisac: "JNF001000 - JUVENILE NONFICTION / Activity Books / Coloring"
  },
  {
    path: "Books > Children's Books > Animals > General",
    bisac: "JUV002000 - JUVENILE FICTION / Animals / General"
  },
  {
    path: "Books > Children's Books > Early Learning > Basic Concepts",
    bisac: "JNF013000 - JUVENILE NONFICTION / Concepts / General"
  }
];

export const KDP_BOOK_DESCRIPTION_HTML = `<h3><b>Give Your Little One The Joy of Coloring with Friendly Animal Friends! 🦁🐘🐰</b></h3>

<p><b>"My First Cute Animal Coloring Book"</b> is specially designed for toddlers and preschoolers aged <b>3 to 5 years</b>. Featuring 40 delightfully adorable, smiling animals with <b>extra-thick lines and large simple shapes</b> across 83 print-ready single-sided pages, this book guarantees stress-free coloring fun that builds confidence and motor skills!</p>

<h4><b>✨ WHY PARENTS & TODDLERS LOVE THIS BOOK:</b></h4>
<ul>
  <li><b>40 Adorable Animal Friends:</b> Safari, farm, ocean, forest, and pet friends including Elephant, Lion, Bunny, Panda, Giraffe, Monkey, Dolphin, Sea Turtle, Whale, Zebra, Hippo, Kangaroo, Deer, and many more!</li>
  <li><b>Top Color Guide on Every Page:</b> A vibrant, fully-colored mini example at the top of each page helps children identify colors, recognize animals, and learn their names!</li>
  <li><b>Giant Coloring Area:</b> 80% of each page is dedicated to large, clear, centered illustrations with zero distracting clutter.</li>
  <li><b>Super-Thick Bold Outlines:</b> Heavy 5–6px equivalent outlines make it effortless for tiny hands and beginner grips to stay within the lines.</li>
  <li><b>Single-Sided Pages (No Bleed-Through):</b> Every coloring page is followed by a blank sheet so your child can color freely using crayons, colored pencils, or washable markers without ruining the next drawing!</li>
  <li><b>Perfect 8.5 x 11 Inch Format:</b> Generous US Letter size gives toddlers plenty of room to explore and create.</li>
  <li><b>Bonus Certificate of Achievement:</b> A cute completion diploma at the back of the book celebrates your child's creative milestone!</li>
</ul>

<h4><b>🎨 SPECIFICATIONS:</b></h4>
<ul>
  <li><b>Dimensions:</b> 8.5 x 11 inches (US Letter)</li>
  <li><b>Age Range:</b> 3 to 5 years (Toddler, Preschool, Pre-K, Kindergarten)</li>
  <li><b>Style:</b> Joyful Kawaii Animals with big sparkling eyes and cheerful smiles</li>
  <li><b>Paper:</b> High quality 55# white paper, single-sided</li>
  <li><b>Binding:</b> Amazon KDP professional paperback</li>
</ul>

<p><i>The perfect birthday gift, holiday stocking stuffer, or quiet-time screen-free activity for creative toddlers! Scroll up and order your copy today!</i></p>`;

export function calculateSpineWidth(pageCount: number, paperType: 'White' | 'Cream' | 'Premium Color'): number {
  let multiplier = 0.002252; // White paper
  if (paperType === 'Cream') multiplier = 0.0025;
  if (paperType === 'Premium Color') multiplier = 0.002347;
  return Number((pageCount * multiplier).toFixed(4));
}

export function calculateCoverDimensions(pageCount: number, paperType: 'White' | 'Cream' | 'Premium Color') {
  const trimWidth = 8.5;
  const trimHeight = 11.0;
  const bleed = 0.125;
  const spine = calculateSpineWidth(pageCount, paperType);

  // Total Cover Width = Bleed (0.125") + Back Cover (8.5") + Spine + Front Cover (8.5") + Bleed (0.125")
  const totalWidth = Number((bleed + trimWidth + spine + trimWidth + bleed).toFixed(4));
  // Total Cover Height = Bleed (0.125") + Trim Height (11.0") + Bleed (0.125")
  const totalHeight = Number((bleed + trimHeight + bleed).toFixed(4));

  return {
    trimWidth,
    trimHeight,
    bleed,
    spine,
    totalWidth,
    totalHeight,
    totalWidthPixels300Dpi: Math.round(totalWidth * 300),
    totalHeightPixels300Dpi: Math.round(totalHeight * 300)
  };
}
