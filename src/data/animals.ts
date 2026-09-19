import { AnimalData } from '../types';

export const ANIMALS_DATA: AnimalData[] = [
  {
    id: 1,
    name: "Elephant",
    category: "Safari",
    funFact: "Elephants greet their friends by wrapping their trunks together in a warm hug!",
    colorPalette: [
      { name: "Gentle Blue", hex: "#7CB9E8" },
      { name: "Rosy Cheeks", hex: "#FFB7B2" },
      { name: "Sunny Yellow", hex: "#FFE66D" },
      { name: "Sweet Lavender", hex: "#D8B4E2" }
    ],
    description: "Adorable chubby baby elephant sitting happily with huge rounded floppy ears, big sparkling anime eyes, a sweet curled upward trunk holding a small heart or daisy, and a joyful open smile. Extra thick rounded 5px outlines, no interior clutter.",
    coloringPrompt: {
      midjourney: "cute baby elephant coloring page for toddlers, ultra thick 6pt bold black outlines, simple chunky geometric shapes, large kawaii cartoon eyes with light highlights, happy smiling mouth, big floppy ears, sitting pose, pure white background, no shading, no gray, clean black and white line art, Amazon KDP coloring book style --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling baby elephant, thick bold 5px black outlines, minimal details, large simple shapes, kawaii cartoon style, clear white background, zero shading or gradients, perfect for 3 year old crayons.",
      imagen: "A friendly toddler coloring book page featuring a cute chubby baby elephant with oversized floppy ears and a smiling trunk. Ultra-bold clean black outlines, simple toddler-friendly shapes, zero background elements, pure white paper background, high contrast vector coloring page.",
      negativePrompt: "shading, gradients, fine lines, hatch marks, realistic anatomy, wrinkles, scary, angry, background scenery, noise, text, watermark"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby elephant, soft pastel blue and rosy pink cheeks, bright colorful flat cartoon sticker, clean vector, friendly smile, white background, children's picture book illustration --ar 1:1 --v 6.0",
      dalle: "Children's cartoon illustration of a cheerful baby elephant in baby blue with pink cheeks and a yellow flower, flat colors, bold friendly style, white background.",
      imagen: "Vibrant high-contrast cartoon illustration of a happy baby elephant, sky blue skin, blushing pink cheeks, simple shapes, bright children book style on pure white."
    },
    svgType: "elephant"
  },
  {
    id: 2,
    name: "Lion",
    category: "Wild",
    funFact: "A baby lion is called a cub and loves playing peek-a-boo in the soft tall grass!",
    colorPalette: [
      { name: "Golden Honey", hex: "#FFD166" },
      { name: "Warm Orange", hex: "#F78C6C" },
      { name: "Tender Pink", hex: "#FF99C8" },
      { name: "Bright Sand", hex: "#FFEBB2" }
    ],
    description: "Cute smiling baby lion cub with a puffy flower-shaped circular mane, rounded ears, a cute triangular nose, big shiny smiling eyes, and a sweet playful tail with a fluffy tuft.",
    coloringPrompt: {
      midjourney: "cute baby lion cub coloring book page for toddlers 3-5 years old, thick bold black outlines, simple daisy flower-shaped mane, friendly smiling face, large sparkling eyes, chunky paws, pure white background, zero shading, clean line art --ar 17:22 --v 6.0",
      dalle: "Coloring page for 3 year old kids showing an adorable friendly baby lion with a simple round fluffy mane, big happy eyes, thick black line art, zero shading, white background.",
      imagen: "Simple toddler coloring book page of a happy cartoon lion cub, extremely thick 6px clean black outlines, large simple shapes, no small details, smiling face, high contrast KDP ready line art.",
      negativePrompt: "sharp teeth, fierce roar, realistic mane, shading, texture, intricate fur, dark background, tiny details, scary"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby lion cub with soft orange petal mane and golden yellow fur, big happy eyes, flat colorful vector art, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful baby lion cub with a bright sunny yellow body and warm orange round mane, smiling sweetly, toddler cartoon style, white background.",
      imagen: "Cute children's book illustration of a playful baby lion cub, golden honey coat, soft orange mane, pink cheeks, flat clean colors, white background."
    },
    svgType: "lion"
  },
  {
    id: 3,
    name: "Bunny Rabbit",
    category: "Pets",
    funFact: "Bunnies twitch their cute little noses to sniff out fresh sweet carrots and crunchy clover!",
    colorPalette: [
      { name: "Cotton White", hex: "#F8F9FA" },
      { name: "Blush Pink", hex: "#FFB7B2" },
      { name: "Carrot Orange", hex: "#FF7A59" },
      { name: "Sprout Green", hex: "#6BCB77" }
    ],
    description: "Joyful chubby bunny rabbit sitting up with long rounded floppy ears, holding a cute single carrot, big kawaii sparkling eyes, and tiny rounded paws.",
    coloringPrompt: {
      midjourney: "cute baby bunny rabbit coloring page for toddlers 3 years old, holding a simple carrot, ultra thick 6pt outlines, large simple oval shapes, cheerful smile, big kawaii eyes, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling bunny rabbit holding a cartoon carrot, very thick outlines, simple shapes, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a chubby smiling bunny rabbit with tall rounded ears and a carrot. Extra bold 6px black contours, clean simple shapes, pure white paper background.",
      negativePrompt: "fur texture, realistic whiskers, shading, grass background, tiny details, gradients, complex lines"
    },
    referencePrompt: {
      midjourney: "cute kawaii white bunny rabbit with pink ear interiors holding an orange carrot, bright pastel cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Cute cartoon baby rabbit with white fur, soft pink ears, and bright orange carrot, cheerful smile, flat vector illustration.",
      imagen: "Charming children's book baby bunny in soft white and blush pink holding a bright orange carrot with green leaves, clean flat style, white background."
    },
    svgType: "bunny"
  },
  {
    id: 4,
    name: "Panda",
    category: "Wild",
    funFact: "Pandas love rolling on the ground like playful soft furry balls!",
    colorPalette: [
      { name: "Snow White", hex: "#FFFFFF" },
      { name: "Charcoal Black", hex: "#343A40" },
      { name: "Bamboo Green", hex: "#70C1B3" },
      { name: "Cheeky Rose", hex: "#FFC6FF" }
    ],
    description: "Lovable chubby giant panda cub sitting happily, rounded black-rimmed eye patches with happy eyes inside, round ears, and little paw pads.",
    coloringPrompt: {
      midjourney: "cute baby panda bear coloring page for toddlers, thick bold outlines, very simple rounded shapes, sweet smile, big sparkling eyes, sitting upright, pure white background, no shading, zero clutter --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of a cute happy baby panda, thick 5px black outlines, large clear shapes, no shading, pure white background.",
      imagen: "Cute toddler coloring book page of an adorable smiling baby panda. Ultra-thick black contours, large round head and tummy, simple toddler-friendly design, clean white background.",
      negativePrompt: "complex bamboo forest, detailed fur, realistic face, gray tones, shading, thin outlines"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby panda sitting with a green bamboo leaf, black and white with pink blushing cheeks, flat vibrant cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon panda bear with black ears and eye patches, rosy pink cheeks, holding a bamboo sprig, flat clean vector.",
      imagen: "Cheerful kawaii baby panda, crisp black and white markings, rosy pink cheeks, bright bamboo green leaf, clean vector illustration on white."
    },
    svgType: "panda"
  },
  {
    id: 5,
    name: "Giraffe",
    category: "Safari",
    funFact: "Giraffes have gentle long necks that can reach the highest sweetest leaves on acacia trees!",
    colorPalette: [
      { name: "Sunny Yellow", hex: "#FFE66D" },
      { name: "Caramel Spots", hex: "#F39C12" },
      { name: "Rosy Blush", hex: "#FFAAA6" },
      { name: "Sky Blue", hex: "#A0E7E5" }
    ],
    description: "Friendly baby giraffe with a cute medium-proportioned neck, two rounded little ossicones (horns) with balls on top, large smiling eyes, and 3-4 giant simple circular spots.",
    coloringPrompt: {
      midjourney: "cute baby giraffe coloring page for kids ages 3-5, thick bold lines, simple round spots, big smiling face, friendly cartoon eyes, no tiny details, white background, no shading, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book illustration of a smiling baby giraffe with big simple spots and round ears, thick black outlines, white background, zero shading.",
      imagen: "Adorable baby giraffe coloring page for preschool toddlers. Extra-thick smooth black lines, large circular spots, happy smiling face with round horns, pure white paper background.",
      negativePrompt: "intricate geometric spots, tall realistic anatomy, dark savannah trees, shading, small patterns"
    },
    referencePrompt: {
      midjourney: "cute baby giraffe with yellow body and large round caramel spots, blushing cheeks, friendly cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Bright cartoon baby giraffe in vibrant yellow with sweet golden orange round spots, smiling happily, flat colors, white background.",
      imagen: "Playful kawaii baby giraffe in sunshine yellow and warm caramel spots, sweet blushing face, flat children's book vector style on white."
    },
    svgType: "giraffe"
  },
  {
    id: 6,
    name: "Monkey",
    category: "Wild",
    funFact: "Monkeys have curvy tails that help them balance when swinging through tree branches!",
    colorPalette: [
      { name: "Warm Chestnut", hex: "#B07D62" },
      { name: "Peach Face", hex: "#FDE2BD" },
      { name: "Banana Yellow", hex: "#FFE66D" },
      { name: "Bright Coral", hex: "#FF8C94" }
    ],
    description: "Cheeky smiling baby monkey hanging onto a ripe yellow banana, with big round ears, a heart-shaped peach face mask, wide happy eyes, and a curvy curly tail.",
    coloringPrompt: {
      midjourney: "cute baby monkey coloring page for preschool kids, thick bold black outlines, holding a simple banana, curly tail, big smiling face, large eyes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring page of a friendly cartoon baby monkey with big ears and a smiling face, holding a banana, thick black lines, zero shading, white background.",
      imagen: "Clean vector toddler coloring page of a cute joyful baby monkey with a spiral tail and a banana. Bold 6px contours, simple shapes, white background.",
      negativePrompt: "detailed jungle trees, realistic fur, aggressive expression, shading, complex hands, crosshatching"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby monkey holding a bright yellow banana, warm brown and peach face, cheerful cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby monkey with warm caramel fur, peach tummy, holding a ripe banana, smiling face, flat colors.",
      imagen: "Charming cartoon baby monkey with curly tail and banana, soft warm brown and pastel peach, bright clean vector on white."
    },
    svgType: "monkey"
  },
  {
    id: 7,
    name: "Bear",
    category: "Wild",
    funFact: "Bears love sweet natural honey and catching fresh fish in crystal clear rivers!",
    colorPalette: [
      { name: "Teddy Brown", hex: "#8D6E63" },
      { name: "Cream Muzzle", hex: "#FFE0B2" },
      { name: "Honey Amber", hex: "#FFA000" },
      { name: "Berry Pink", hex: "#FF80AB" }
    ],
    description: "Plump friendly teddy-style brown bear sitting with paws on its tummy, circular ears with inner circles, large smiling face, and round button nose.",
    coloringPrompt: {
      midjourney: "cute friendly teddy bear coloring page for toddlers, thick 6pt outlines, simple round ears and belly, big smiling mouth, sparkling cartoon eyes, white background, no shading, clean line art --ar 17:22 --v 6.0",
      dalle: "Simple toddler coloring book page of a smiling teddy bear sitting down, thick bold black lines, no shading, pure white background.",
      imagen: "Adorable chubby teddy bear coloring page for 3-5 year old children. Extremely thick black stroke, simple curved lines, joyful smiling expression, pure white paper background.",
      negativePrompt: "sharp claws, fierce growl, realistic grizzly fur, shading, dark background, complex forest"
    },
    referencePrompt: {
      midjourney: "cute kawaii teddy bear with warm chocolate fur and cream tummy, smiling happily, flat children's book vector, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful cartoon brown teddy bear with soft cream muzzle and tummy, blushing cheeks, bright flat colors on white.",
      imagen: "Sweet toddler illustration of a happy brown bear, teddy style with honey jar accent, warm brown and cream tones, clean flat vector on white."
    },
    svgType: "bear"
  },
  {
    id: 8,
    name: "Tiger",
    category: "Wild",
    funFact: "Every tiger has its own unique cozy stripes, just like human fingerprints!",
    colorPalette: [
      { name: "Bright Tangerine", hex: "#FF9F1C" },
      { name: "Milk Cream", hex: "#FFF9E6" },
      { name: "Soft Charcoal", hex: "#2B2D42" },
      { name: "Pink Nose", hex: "#FF99C8" }
    ],
    description: "Cute cuddly tiger cub with wide rounded ears, 4-5 giant simple soft triangular stripes, large smiling eyes, cute whiskers, and a waving tail.",
    coloringPrompt: {
      midjourney: "cute baby tiger cub coloring page for toddlers 3-5 years old, thick bold black outlines, simple thick stripes, very friendly smiling face, big kawaii eyes, sitting pose, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book sheet of an adorable friendly tiger cub with simple bold stripes, smiling happily, thick black outlines, white background.",
      imagen: "Simple toddler coloring page of a cute baby tiger cub. Extra thick 6px clean black contours, few large simple stripes, friendly smiling face, pure white background.",
      negativePrompt: "ferocious fangs, predatory stance, complex striping, realistic fur, shading, jungle background"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby tiger cub, bright orange fur with simple black stripes and cream muzzle, pink nose, smiling cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Playful cartoon tiger cub in vivid tangerine orange with soft black stripes, smiling cheerfully, flat vector art.",
      imagen: "Adorable children's book tiger cub with bright orange coat, cream chest, friendly big eyes, clean flat vector on white."
    },
    svgType: "tiger"
  },
  {
    id: 9,
    name: "Koala",
    category: "Wild",
    funFact: "Koalas love munching on eucalyptus leaves and taking cozy afternoon naps in trees!",
    colorPalette: [
      { name: "Silvery Gray", hex: "#A8DADC" },
      { name: "Soft Charcoal", hex: "#457B9D" },
      { name: "Leaf Mint", hex: "#A7C957" },
      { name: "Cotton Pink", hex: "#FFC6FF" }
    ],
    description: "Chubby smiling koala with giant fuzzy circular ears, a smooth large oval black nose, big happy eyes, and holding a small round green eucalyptus leaf.",
    coloringPrompt: {
      midjourney: "cute baby koala coloring page for toddlers, thick bold outlines, giant round fluffy ears, big simple oval nose, holding a simple eucalyptus leaf, smiling face, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Preschool coloring book page of a cute baby koala with big round ears and a happy smile, thick lines, no shading, white background.",
      imagen: "Delightful toddler coloring book page of a smiling baby koala. Bold 5px contours, large simple round ears, big oval nose, pure white paper background.",
      negativePrompt: "realistic fur texture, claw details, shading, dark tree bark, complex background"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby koala holding a green leaf, soft blue-gray fur with big fluffy ears and dark oval nose, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon koala in gentle gray with pink cheek blush and green leaf, smiling face, flat colors on white.",
      imagen: "Adorable baby koala cartoon in soft silvery pastel gray with round fluffy ears, bright green leaf, clean vector illustration on white."
    },
    svgType: "koala"
  },
  {
    id: 10,
    name: "Fox",
    category: "Wild",
    funFact: "Foxes have big fluffy tails that keep them warm and cozy like a built-in blanket!",
    colorPalette: [
      { name: "Fox Rust", hex: "#E76F51" },
      { name: "Snow White", hex: "#F8F9FA" },
      { name: "Button Black", hex: "#264653" },
      { name: "Golden Glow", hex: "#F4A261" }
    ],
    description: "Sweet smiling cartoon fox with triangular rounded-tip ears, a giant fluffy tail with a white tip, big happy eyes, and a cute pointed muzzle.",
    coloringPrompt: {
      midjourney: "cute baby fox coloring page for toddlers 3 years old, thick bold black outlines, big fluffy tail with simple white tip, smiling face, large eyes, clean simple shapes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book illustration of a friendly smiling baby fox with a big puffy tail, thick black lines, zero shading, white background.",
      imagen: "Clean vector toddler coloring page of a cute smiling fox cub with huge fluffy tail. Extra bold 6px outlines, simple toddler-friendly design, pure white background.",
      negativePrompt: "cunning smirk, sharp teeth, detailed fur coat, forest scenery, shading, thin lines"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby fox with bright red-orange fur, white chest and tail tip, happy smiling face, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Playful cartoon baby fox in vibrant warm rust orange and snow white, smiling happily, flat vector style.",
      imagen: "Charming children's book baby fox in bright warm orange with white belly and tail tip, sweet blushing face, clean flat vector on white."
    },
    svgType: "fox"
  },
  {
    id: 11,
    name: "Cat",
    category: "Pets",
    funFact: "Cats purr happily when they feel loved, relaxed, and ready for head scratches!",
    colorPalette: [
      { name: "Warm Apricot", hex: "#FDBA74" },
      { name: "Snowy White", hex: "#FFFFFF" },
      { name: "Sweet Pink", hex: "#F472B6" },
      { name: "Minty Collar", hex: "#4ADE80" }
    ],
    description: "Adorable chubby kitten with triangular perky ears, a cute bell collar, curly smiling whiskers, big sparkling kawaii eyes, and an upright happy tail.",
    coloringPrompt: {
      midjourney: "cute baby kitten coloring page for toddlers, thick bold outlines, chunky round body, smiling face with simple whiskers, cute little bell collar, large round eyes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling kitten with a round tummy and sweet whiskers, thick black outlines, white background, no shading.",
      imagen: "Simple toddler coloring book page of a happy cartoon kitten with perky ears and a curly tail. Extra thick clean 6px outlines, simple shapes, white paper background.",
      negativePrompt: "scratching claws, wild fur, realistic whiskers, shading, dark background, complex patterns"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby cat kitten with warm apricot patches and white belly, pink ears, cheerful cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon kitten in soft ginger orange and white with a little bell collar, smiling, flat colors on white.",
      imagen: "Delightful children's book kitten in warm peach and white, bright happy eyes, pink nose, clean flat vector illustration on white."
    },
    svgType: "cat"
  },
  {
    id: 12,
    name: "Dog",
    category: "Pets",
    funFact: "Dogs wag their tails back and forth like a metronome whenever they see their best friends!",
    colorPalette: [
      { name: "Caramel Gold", hex: "#E9C46A" },
      { name: "Chestnut Brown", hex: "#B07D62" },
      { name: "Happy Red", hex: "#E76F51" },
      { name: "Cream White", hex: "#FFF3B0" }
    ],
    description: "Cheery playful puppy dog with floppy ears, a sweet spot over one eye, an open joyful tongue, a wagging tail, and chunky round paws.",
    coloringPrompt: {
      midjourney: "cute puppy dog coloring page for toddlers 3-5 years old, thick bold black outlines, floppy ears, happy tongue sticking out, wagging tail, large simple shapes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Preschool coloring book page of a cute smiling puppy with floppy ears and a spot on its eye, thick lines, no shading, white background.",
      imagen: "Adorable puppy dog coloring page for preschool toddlers. Extra-thick smooth black contours, happy smiling tongue, simple floppy ears, pure white background.",
      negativePrompt: "growling, sharp teeth, aggressive posture, detailed coat, realistic anatomy, shading, grass"
    },
    referencePrompt: {
      midjourney: "cute kawaii puppy dog with caramel golden fur and brown floppy ears, smiling with tongue out, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful cartoon puppy in golden caramel and cream, wagging tail, smiling face, flat vector illustration.",
      imagen: "Playful children's book puppy dog with warm golden coat, brown eye patch, happy tongue, clean flat vector on white."
    },
    svgType: "dog"
  },
  {
    id: 13,
    name: "Cow",
    category: "Farm",
    funFact: "Cows make friendly 'Moo!' sounds to say hello to their barnyard buddies!",
    colorPalette: [
      { name: "Milky White", hex: "#FFFFFF" },
      { name: "Spotted Black", hex: "#343A40" },
      { name: "Pink Muzzle", hex: "#FFB7B2" },
      { name: "Golden Bell", hex: "#FFD166" }
    ],
    description: "Chubby gentle baby cow with two tiny rounded horns, large pink oval muzzle with a smiling mouth, 2-3 big simple black spots, and a cute little bell necklace.",
    coloringPrompt: {
      midjourney: "cute baby cow coloring page for toddlers, thick bold outlines, simple big spots, sweet smiling pink muzzle, tiny round horns, bell collar, large cartoon eyes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring page of a friendly cartoon cow with big simple spots and a smiling face, thick black lines, white background, zero shading.",
      imagen: "Clean vector toddler coloring page of an adorable smiling baby calf with tiny horns and bell. Extra bold 6px outlines, simple shapes, pure white background.",
      negativePrompt: "sharp horns, farm barn clutter, realistic udder, complex spots, shading, fence"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby cow with white body, big smooth black spots, sweet pink muzzle, golden bell, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby cow with black and white patches and a rosy pink nose, cheerful smile, flat colors on white.",
      imagen: "Charming children's book baby cow in clean black and white with pastel pink muzzle and yellow bell, clean flat vector on white."
    },
    svgType: "cow"
  },
  {
    id: 14,
    name: "Horse",
    category: "Farm",
    funFact: "Baby horses can stand up and run around in the grassy fields just hours after being born!",
    colorPalette: [
      { name: "Chestnut Tan", hex: "#D4A373" },
      { name: "Creamy Mane", hex: "#FAEDCD" },
      { name: "Soft Pink", hex: "#FFCCD5" },
      { name: "Golden Hooves", hex: "#E9C46A" }
    ],
    description: "Cute friendly pony foal with a fluffy cloud-shaped mane, rounded hooves, big smiling eyes with eyelashes, and a waving fluffy tail.",
    coloringPrompt: {
      midjourney: "cute baby pony foal horse coloring page for toddlers 3-5 years old, thick bold black outlines, simple fluffy cloud mane, cheerful smiling face, large sparkling eyes, chunky legs, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book illustration of a friendly smiling baby pony with a puffy mane, thick black lines, zero shading, white background.",
      imagen: "Adorable baby pony coloring sheet for toddlers. Extra-thick clean black strokes, cloud-shaped mane, smiling friendly face, pure white paper background.",
      negativePrompt: "racehorse muscle definition, realistic hooves, bit and bridle, saddle, shading, stable background"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby pony horse with soft tan body and cream cloud mane, happy smiling face, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful cartoon pony foal in warm tan and cream with pink blushing cheeks, smiling face, flat vector illustration.",
      imagen: "Sweet children's book baby pony with warm chestnut coat and ivory fluffy mane, clean flat vector on white."
    },
    svgType: "horse"
  },
  {
    id: 15,
    name: "Penguin",
    category: "Birds",
    funFact: "Penguins slide on their smooth round bellies across the ice like little living sleds!",
    colorPalette: [
      { name: "Midnight Navy", hex: "#1D3557" },
      { name: "Snow White", hex: "#F1FAEE" },
      { name: "Tangerine Beak", hex: "#E63946" },
      { name: "Cozy Scarf", hex: "#457B9D" }
    ],
    description: "Chubby smiling baby penguin waddling with outstretched flipper wings, round tummy, small triangular orange beak, and big happy eyes.",
    coloringPrompt: {
      midjourney: "cute baby penguin coloring page for toddlers, thick bold outlines, chubby oval body, small flipper wings, smiling beak, big cartoon eyes, pure white background, no shading, clean line art --ar 17:22 --v 6.0",
      dalle: "Preschool coloring book page of a cute waddling baby penguin, thick black lines, simple shapes, white background, no shading.",
      imagen: "Simple toddler coloring book page of a happy smiling baby penguin with open flippers. Extra bold 6px contours, large round body, pure white background.",
      negativePrompt: "iceberg scenery, snow blizzard, realistic feathers, shading, dark ocean, complex details"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby penguin with dark blue back, white belly, bright orange beak and feet, smiling happily, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby penguin in navy and white with vivid orange beak, smiling cheerfully, flat vector art.",
      imagen: "Charming children's book baby penguin with soft dark navy feathers, bright white tummy, orange beak, clean flat vector on white."
    },
    svgType: "penguin"
  },
  {
    id: 16,
    name: "Duck",
    category: "Birds",
    funFact: "Ducklings have waterproof fluffy feathers that keep them completely dry when swimming!",
    colorPalette: [
      { name: "Sunny Butter", hex: "#FFD166" },
      { name: "Bright Orange", hex: "#F78C6C" },
      { name: "Pond Blue", hex: "#64DFDF" },
      { name: "Blushing Peach", hex: "#FFB7B2" }
    ],
    description: "Sweet smiling baby duckling with a round fluffy head, wide smooth rounded bill, tiny flapping wings, and big smiling eyes.",
    coloringPrompt: {
      midjourney: "cute baby duckling coloring page for toddlers 3 years old, thick bold black outlines, round chubby body, wide simple bill, big smiling eyes, tiny wings, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring page of a cute smiling yellow duckling, thick black outlines, simple shapes, white background, zero shading.",
      imagen: "Clean vector toddler coloring page of an adorable smiling baby duckling. Extra thick 6px outlines, round simple shapes, pure white paper background.",
      negativePrompt: "water ripples, pond weeds, realistic feathers, flying poses, shading, dark background"
    },
    referencePrompt: {
      midjourney: "cute kawaii yellow baby duckling with bright orange bill and rosy cheeks, cheerful cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Playful cartoon duckling in sunny butter yellow with warm orange bill, smiling face, flat vector illustration.",
      imagen: "Adorable children's book baby duckling in bright sunshine yellow and orange, sweet blushing cheeks, clean flat vector on white."
    },
    svgType: "duck"
  },
  {
    id: 17,
    name: "Owl",
    category: "Birds",
    funFact: "Owls can turn their heads almost all the way around to look in every direction!",
    colorPalette: [
      { name: "Soft Plum", hex: "#9D8189" },
      { name: "Warm Biscuit", hex: "#D8B4A6" },
      { name: "Sun Orange", hex: "#F4A261" },
      { name: "Teal Mint", hex: "#70C1B3" }
    ],
    description: "Cute round baby owl perched with giant circular spectacles-like eye rings, wide curious sparkling eyes, a tiny smiling beak, and simple scallop tummy feathers.",
    coloringPrompt: {
      midjourney: "cute baby owl coloring page for preschool kids, thick bold outlines, big round eyes with simple rings, tiny beak, 3 simple scallop tummy marks, sitting on a simple branch, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute friendly owl with big round eyes and a smiling face, thick lines, no shading, white background.",
      imagen: "Simple toddler coloring book page of a cute round baby owl with oversized friendly eyes. Extra bold 6px clean black contours, minimal shapes, pure white background.",
      negativePrompt: "scary night, spooky tree, realistic talons, predatory look, intricate feather patterns, shading"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby owl with warm biscuit and lavender feathers, big luminous yellow-teal eyes, smiling cartoon, flat vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby owl with big friendly round eyes and pastel tummy, perched gently, flat colors on white.",
      imagen: "Charming children's book baby owl in soft lilac-brown and warm cream, oversized friendly eyes, clean flat vector on white."
    },
    svgType: "owl"
  },
  {
    id: 18,
    name: "Turtle",
    category: "Reptiles",
    funFact: "A turtle carries its own cozy domed house on its back wherever it wanders!",
    colorPalette: [
      { name: "Mint Green", hex: "#80ED99" },
      { name: "Kelly Green", hex: "#57CC99" },
      { name: "Butter Yellow", hex: "#FFE66D" },
      { name: "Rosy Pink", hex: "#FFAAA6" }
    ],
    description: "Joyful smiling baby sea/land turtle with a smooth domed shell decorated with 3-4 large simple hexagons/circles, chunky flipper feet, and big happy eyes.",
    coloringPrompt: {
      midjourney: "cute baby turtle coloring page for toddlers 3-5 years old, thick bold black outlines, simple smooth shell with large sections, smiling face, big cartoon eyes, chunky little feet, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Preschool coloring book page of an adorable smiling baby turtle with a simple round shell, thick black lines, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a happy smiling baby turtle. Extra thick 6px outlines, large simple shell segments, friendly expression, pure white paper background.",
      negativePrompt: "complex reptile scales, underwater coral clutter, aggressive bite, shading, dark shell textures"
    },
    referencePrompt: {
      midjourney: "cute kawaii baby turtle with bright mint green skin and soft emerald shell, yellow tummy, smiling happily, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful cartoon baby turtle with bright green shell and yellow belly, sweet blushing face, flat vector illustration.",
      imagen: "Adorable children's book baby turtle in fresh mint green and pastel yellow, smiling cheerfully, clean flat vector on white."
    },
    svgType: "turtle"
  },
  {
    id: 19,
    name: "Kangaroo",
    category: "Safari",
    funFact: "Mother kangaroos have a cozy pouch where their baby joey takes nap-time cuddles!",
    colorPalette: [
      { name: "Caramel Brown", hex: "#D4A373" },
      { name: "Warm Cream", hex: "#FAEDCD" },
      { name: "Peachy Pink", hex: "#FFCAD4" },
      { name: "Sunny Gold", hex: "#FFD166" }
    ],
    description: "Cheerful mommy kangaroo with a sweet smiling baby joey peeking curiously out of her tummy pouch, big rounded ears, and friendly sparkling eyes.",
    coloringPrompt: {
      midjourney: "cute mother kangaroo with baby joey peeking out of pouch, toddler coloring page, ultra thick 6pt bold black outlines, simple chunky shapes, happy faces, pure white background, no shading, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling kangaroo with a tiny joey in her pouch, thick bold black outlines, simple clear shapes, white background.",
      imagen: "Simple toddler coloring book page of a friendly kangaroo and baby joey, extra thick 6px outlines, minimal detail, high contrast vector coloring page on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii cartoon kangaroo with baby joey in pouch, caramel brown and cream, smiling warmly, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon kangaroo with baby in pouch, soft warm brown colors, rosy cheeks, flat vector illustration on white.",
      imagen: "Charming children's book baby kangaroo with joey in pouch, caramel and peach hues, clean flat colors on white."
    },
    svgType: "kangaroo"
  },
  {
    id: 20,
    name: "Hippo",
    category: "Safari",
    funFact: "Hippos love doing cannonballs and blowing funny bubbles in the warm water!",
    colorPalette: [
      { name: "Lilac Blue", hex: "#B8C0FF" },
      { name: "Bubblegum Pink", hex: "#FFC6FF" },
      { name: "Soft Indigo", hex: "#A3CEF1" },
      { name: "Marshmallow", hex: "#F7F7F7" }
    ],
    description: "Chubby smiling baby hippo with tiny rounded ears, wide friendly snout with two rounded tooth pegs, and happy closed-arc eyes.",
    coloringPrompt: {
      midjourney: "cute baby hippo coloring page for toddlers, extra thick 6pt bold black outlines, big rounded snout, cheerful smile, simple chunky shapes, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of a cute chubby baby hippo, thick black outlines, simple shapes, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a smiling baby hippo with tiny ears, ultra thick clean outlines, pure white paper background."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby hippo in soft pastel purple-blue with pink snout, big cheerful smile, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby hippo in soft lilac and blush pink, happy expression, flat vector illustration.",
      imagen: "Children's book illustration of a playful baby hippo, soft lavender coat, pink belly, clean flat colors on white."
    },
    svgType: "hippo"
  },
  {
    id: 21,
    name: "Zebra",
    category: "Safari",
    funFact: "Every zebra has their own one-of-a-kind stripe pattern, just like a human fingerprint!",
    colorPalette: [
      { name: "Crisp White", hex: "#FFFFFF" },
      { name: "Soft Charcoal", hex: "#3D3D3D" },
      { name: "Bubblegum Pink", hex: "#FFB5A7" },
      { name: "Sunny Buttercup", hex: "#FFE66D" }
    ],
    description: "Cute smiling baby zebra foal with bold friendly stripes, spiky soft mane, sweet muzzle, and big bright toddler cartoon eyes.",
    coloringPrompt: {
      midjourney: "cute baby zebra foal coloring book page for toddlers, thick bold black outlines, wide spaced chunky stripes, friendly smiling face, pure white background, zero shading --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling zebra with simple wide stripes, thick black line art, white background, no shading.",
      imagen: "Simple toddler coloring book page of a happy cartoon zebra, extremely thick 6px clean black outlines, large simple shapes on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby zebra with soft black stripes and pink nose, cheerful smile, flat colorful cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby zebra with black and white stripes and rosy cheeks, flat vector style on white background.",
      imagen: "Cheerful children's book baby zebra with friendly eyes and soft stripes, clean flat style on white."
    },
    svgType: "zebra"
  },
  {
    id: 22,
    name: "Hedgehog",
    category: "Forest",
    funFact: "Hedgehogs roll into a cute little round ball when they want to take a cozy woodland snooze!",
    colorPalette: [
      { name: "Toffee Brown", hex: "#C68B59" },
      { name: "Warm Biscuit", hex: "#E9D5A1" },
      { name: "Red Apple", hex: "#E63946" },
      { name: "Leaf Green", hex: "#588157" }
    ],
    description: "Adorable chubby baby hedgehog with soft rounded wavy spine quills, sweet button nose, carrying a cute little red apple on its back.",
    coloringPrompt: {
      midjourney: "cute baby hedgehog coloring page for toddlers 3-5 years old, simple soft rounded spines, holding or carrying an apple, thick bold black outlines, happy face, pure white background --ar 17:22 --v 6.0",
      dalle: "Coloring page of a cute baby hedgehog with simple round spines, thick black lines, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a smiling baby hedgehog with large rounded quills, clean bold outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby hedgehog with soft brown quills and tiny red apple, smiling sweetly, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon hedgehog with round tummy, warm brown prickles, and a bright red apple, flat vector illustration.",
      imagen: "Children's book baby hedgehog with cheerful smile and soft spines, clean flat colors on white."
    },
    svgType: "hedgehog"
  },
  {
    id: 23,
    name: "Squirrel",
    category: "Forest",
    funFact: "Squirrels use their big fluffy bushy tails like a cozy umbrella and balance beam!",
    colorPalette: [
      { name: "Rust Orange", hex: "#E07A5F" },
      { name: "Creamy Peach", hex: "#F4F1DE" },
      { name: "Acorn Brown", hex: "#8D6E63" },
      { name: "Forest Olive", hex: "#81B29A" }
    ],
    description: "Cheerful woodland squirrel holding a giant round acorn with two paws, oversized curly bushy tail, and twinkling eyes.",
    coloringPrompt: {
      midjourney: "cute baby squirrel holding an acorn coloring page for toddlers, extra thick 6pt outlines, giant simple curly tail, happy smile, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling squirrel holding an acorn, thick black outlines, simple shapes, white background.",
      imagen: "Simple toddler coloring book page of a cartoon squirrel with large fluffy tail and acorn, bold clean lines, white background."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby squirrel in warm rust orange holding a golden acorn, big fluffy tail, flat cartoon vector, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby squirrel holding an acorn, bright orange and cream fur, flat vector on white.",
      imagen: "Charming children's book baby squirrel with cheerful expression and fluffy tail, clean flat colors on white."
    },
    svgType: "squirrel"
  },
  {
    id: 24,
    name: "Whale",
    category: "Ocean",
    funFact: "Blue whales can sing deep ocean songs that travel for hundreds of peaceful miles!",
    colorPalette: [
      { name: "Ocean Blue", hex: "#48CAE4" },
      { name: "Sky Mist", hex: "#ADE8F4" },
      { name: "Water Spout", hex: "#0077B6" },
      { name: "Rosy Blush", hex: "#FFB5A7" }
    ],
    description: "Chubby smiling baby whale with a heart-shaped water spout bubbling out of its blowhole, sweet flipper, and big joyful cartoon eye.",
    coloringPrompt: {
      midjourney: "cute baby whale with water spout coloring page for toddlers 3 years old, ultra thick bold black outlines, simple smooth body, smiling face, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of a cute happy whale spouting water, thick black outlines, simple shapes, white background.",
      imagen: "Delightful toddler coloring book sheet of a smiling baby blue whale with water drops, extra thick outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby whale in bright aqua blue with water spout fountain, sweet smiling face, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Cheerful cartoon baby whale in sky blue with splashing water droplets, flat clean vector on white.",
      imagen: "Children's book baby whale swimming happily with water fountain, clean flat colors on white."
    },
    svgType: "whale"
  },
  {
    id: 25,
    name: "Octopus",
    category: "Ocean",
    funFact: "An octopus has three whole hearts and can change colors when it feels super excited!",
    colorPalette: [
      { name: "Grape Purple", hex: "#B5838D" },
      { name: "Lilac Pink", hex: "#FFC6FF" },
      { name: "Ocean Teal", hex: "#4ECDC4" },
      { name: "Lemon Pop", hex: "#FFE66D" }
    ],
    description: "Cute round baby octopus with a bulbous happy head, big sparkling eyes, and 6 wavy rounded toddler tentacles with simple suction circles.",
    coloringPrompt: {
      midjourney: "cute baby octopus coloring book page for toddlers, extra thick 6pt outlines, big round head, simple wavy tentacles, cheerful smile, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute friendly octopus with wavy arms, thick black outlines, simple shapes, white background.",
      imagen: "Simple toddler coloring book page of a smiling baby octopus, extra bold clean black outlines, high contrast on white paper."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby octopus in pastel purple and pink, big friendly eyes and wavy tentacles, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby octopus in soft purple with happy smile, flat vector illustration on white.",
      imagen: "Vibrant children's book baby octopus with cheerful expression, clean flat colors on white."
    },
    svgType: "octopus"
  },
  {
    id: 26,
    name: "Crab",
    category: "Ocean",
    funFact: "Crabs walk sideways like funny little tap dancers along the sunny beach sand!",
    colorPalette: [
      { name: "Bright Coral", hex: "#FF6B6B" },
      { name: "Sunny Orange", hex: "#FFA07A" },
      { name: "Beach Sand", hex: "#FFEBB2" },
      { name: "Soft Aqua", hex: "#70C1B3" }
    ],
    description: "Joyful smiling baby crab with a smooth oval shell, two big round waving claws, googly happy stalk eyes, and little walking legs.",
    coloringPrompt: {
      midjourney: "cute baby crab coloring page for toddlers 3-5 years old, thick bold black outlines, simple round claws, smiling face, stalk eyes, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Coloring page of an adorable friendly crab waving claws, thick black line art, simple shapes, white background.",
      imagen: "Delightful toddler coloring book sheet of a happy smiling baby crab, extra thick 6px clean outlines, pure white paper background."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby crab in bright coral red and orange, waving claws with cheerful smile, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby crab in bright red with friendly eyes, flat vector illustration on white.",
      imagen: "Children's book cheerful baby crab on white background, clean flat colors and cute expression."
    },
    svgType: "crab"
  },
  {
    id: 27,
    name: "Sea Otter",
    category: "Ocean",
    funFact: "Sea otters hold paws while sleeping so they don't float apart on ocean waves!",
    colorPalette: [
      { name: "Warm Cinnamon", hex: "#A98467" },
      { name: "Almond Cream", hex: "#DDC3A5" },
      { name: "Seafoam Green", hex: "#6B9080" },
      { name: "Shell Pink", hex: "#F4ACB7" }
    ],
    description: "Charming baby sea otter floating on its back, hugging a cute scallop seashell against its tummy, with round ears and whiskers.",
    coloringPrompt: {
      midjourney: "cute baby sea otter floating on back holding a shell, toddler coloring page, ultra thick 6pt outlines, simple shapes, happy smile, pure white background --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute baby otter holding a shell on its belly, thick black outlines, white background.",
      imagen: "Simple toddler coloring book page of a sweet sea otter with seashell, extra thick clean black outlines, white background."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby sea otter floating with a pink shell, warm brown and cream fur, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby otter holding a shell, soft brown hues, rosy cheeks, flat vector on white.",
      imagen: "Charming children's book baby sea otter with joyful expression, clean flat colors on white."
    },
    svgType: "otter"
  },
  {
    id: 28,
    name: "Seal",
    category: "Ocean",
    funFact: "Baby seals have plush velvet coats and love clapping their soft flippers when happy!",
    colorPalette: [
      { name: "Frost Gray", hex: "#ADB5BD" },
      { name: "Arctic Ice", hex: "#E9ECEF" },
      { name: "Peachy Cheek", hex: "#FFCCD5" },
      { name: "Navy Splash", hex: "#4A6FA5" }
    ],
    description: "Adorable chubby harp seal pup with round body, clapping front flippers together, cute snout with dot whiskers, and big soulful eyes.",
    coloringPrompt: {
      midjourney: "cute baby seal clapping flippers coloring book page for toddlers, extra thick bold black outlines, simple smooth round body, smiling face, pure white background --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of a cute chubby baby seal clapping flippers, thick black lines, simple shapes, white background.",
      imagen: "Delightful toddler coloring book sheet of a happy baby seal, ultra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby harp seal pup in soft pearl gray and white, clapping flippers, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby seal pup with big shiny eyes and pink nose, flat vector style on white.",
      imagen: "Children's book illustration of a cheerful baby seal, soft frosty tones, clean flat colors on white."
    },
    svgType: "seal"
  },
  {
    id: 29,
    name: "Deer",
    category: "Forest",
    funFact: "Baby deer have magical white spots on their back that shimmer like dappled forest sunshine!",
    colorPalette: [
      { name: "Warm Fawn", hex: "#DDA15E" },
      { name: "Creamy White", hex: "#FEFAE0" },
      { name: "Berry Red", hex: "#BC6C25" },
      { name: "Blossom Pink", hex: "#F28482" }
    ],
    description: "Gentle baby fawn with tall sweet ears, big expressive eyes, a tiny fluffy tail, and simple round spots along its back.",
    coloringPrompt: {
      midjourney: "cute baby fawn deer coloring page for toddlers 3-5 years old, thick bold black outlines, gentle smiling face, big ears, simple spots, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Coloring page of an adorable smiling baby fawn with simple spots, thick black line art, white background, no shading.",
      imagen: "Simple toddler coloring book page of a cute baby deer, extra bold 6px clean black contours, white paper background."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby deer fawn in warm golden brown with white spots, sweet gentle face, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby fawn with soft fawn coat and cream spots, flat vector illustration on white.",
      imagen: "Children's book baby deer with innocent eyes and cheerful smile, clean flat colors on white."
    },
    svgType: "deer"
  },
  {
    id: 30,
    name: "Raccoon",
    category: "Forest",
    funFact: "Raccoons have super nimble little paws that can wash their snacks in bubbling forest streams!",
    colorPalette: [
      { name: "Silver Gray", hex: "#CED4DA" },
      { name: "Dark Mask", hex: "#495057" },
      { name: "Soft White", hex: "#FFFFFF" },
      { name: "Forest Mint", hex: "#95D5B2" }
    ],
    description: "Cute smiling baby raccoon with iconic bandit eye-mask markings, rounded ears, striped fluffy tail, and sweet paws.",
    coloringPrompt: {
      midjourney: "cute baby raccoon coloring page for toddlers, extra thick 6pt outlines, bandit mask on face, striped tail, happy smile, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling raccoon with simple mask and striped tail, thick black outlines, white background.",
      imagen: "Delightful toddler coloring book sheet of a friendly baby raccoon, ultra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby raccoon with dark eye mask and striped tail, smiling cheerfully, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby raccoon with soft gray fur and dark mask, flat vector style on white.",
      imagen: "Children's book baby raccoon with friendly expression, clean flat colors on white."
    },
    svgType: "raccoon"
  },
  {
    id: 31,
    name: "Beaver",
    category: "Forest",
    funFact: "Beavers build amazing cozy lodges with hidden underwater doorways!",
    colorPalette: [
      { name: "Chestnut Brown", hex: "#7F4F24" },
      { name: "Warm Maple", hex: "#A68A64" },
      { name: "Pond Blue", hex: "#8ECAE6" },
      { name: "Cheery Yellow", hex: "#FFB703" }
    ],
    description: "Chubby smiling baby beaver holding a little twig, two cute white front teeth peeking out, and a wide waffle-pattern paddle tail.",
    coloringPrompt: {
      midjourney: "cute baby beaver coloring book page for toddlers, thick bold outlines, holding a twig, two cute front teeth, paddle tail, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of a cute smiling baby beaver with little twig, thick black lines, simple shapes, white background.",
      imagen: "Simple toddler coloring book page of an adorable baby beaver, extra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby beaver in chestnut brown holding a green sprig, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby beaver with round tummy and cute smile, flat vector illustration on white.",
      imagen: "Children's book baby beaver with playful expression, clean flat colors on white."
    },
    svgType: "beaver"
  },
  {
    id: 32,
    name: "Sloth",
    category: "Wild",
    funFact: "Sloths love moving in joyful slow motion and taking relaxing tree-top siestas!",
    colorPalette: [
      { name: "Muted Tan", hex: "#D6CCC2" },
      { name: "Coffee Brown", hex: "#8D6E63" },
      { name: "Jungle Green", hex: "#52B788" },
      { name: "Gentle Pink", hex: "#F7D1CD" }
    ],
    description: "Sweet smiling baby sloth hanging upside down peacefully from a sturdy tree branch with rounded claws, happy sleepy curved eyes.",
    coloringPrompt: {
      midjourney: "cute baby sloth hanging from tree branch coloring page for toddlers 3 years old, thick bold black outlines, simple shapes, sweet smile, pure white background --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling sloth hanging on a branch, thick black outlines, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a sleepy smiling baby sloth on a branch, clean bold outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby sloth hanging from green branch, soft tan fur and sweet smile, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby sloth in warm tan hanging gently on a branch, flat vector on white.",
      imagen: "Children's book baby sloth with cozy smile, clean flat colors on white."
    },
    svgType: "sloth"
  },
  {
    id: 33,
    name: "Cow",
    category: "Farm",
    funFact: "Cows have best friends in their herd and become extra joyful when they munch grass together!",
    colorPalette: [
      { name: "Milky White", hex: "#FFFFFF" },
      { name: "Chocolate Patch", hex: "#4A4E69" },
      { name: "Rosy Muzzle", hex: "#FFC6FF" },
      { name: "Bell Gold", hex: "#FFD166" }
    ],
    description: "Lovable chubby baby cow calf with a pink heart-shaped muzzle, big friendly eyes, rounded ears, and cute simple spot patches.",
    coloringPrompt: {
      midjourney: "cute baby calf cow coloring page for toddlers 3-5 years old, thick bold black outlines, simple spots, smiling face, little bell on neck, pure white background, no shading --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of an adorable smiling baby cow with simple spots, thick black line art, white background.",
      imagen: "Simple toddler coloring book page of a happy cartoon baby cow, extra thick 6px outlines on white paper."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby cow calf with pink muzzle and chocolate spots, smiling happily, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby cow with rosy nose and soft spots, flat vector illustration on white.",
      imagen: "Children's book baby calf with friendly eyes, clean flat colors on white."
    },
    svgType: "cow"
  },
  {
    id: 34,
    name: "Horse",
    category: "Farm",
    funFact: "Horses can sleep both standing up or curled up in fresh, fragrant golden straw!",
    colorPalette: [
      { name: "Golden Chestnut", hex: "#D4A373" },
      { name: "Flaxen Cream", hex: "#FAEDCD" },
      { name: "Meadow Green", hex: "#A7C957" },
      { name: "Blush Pink", hex: "#FFCCD5" }
    ],
    description: "Playful baby horse foal with fluffy rounded mane, cute little tail, white star marking on forehead, and friendly smile.",
    coloringPrompt: {
      midjourney: "cute baby pony foal horse coloring page for toddlers, extra thick 6pt outlines, simple mane, happy smile, pure white background, clean line art --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling pony foal, thick black outlines, simple shapes, white background.",
      imagen: "Delightful toddler coloring book sheet of a cheerful baby horse, ultra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby pony foal in caramel chestnut with creamy mane, smiling sweetly, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby horse with golden coat and friendly smile, flat vector style on white.",
      imagen: "Children's book baby pony with joyful expression, clean flat colors on white."
    },
    svgType: "horse"
  },
  {
    id: 35,
    name: "Baby Chick",
    category: "Farm",
    funFact: "Baby chicks make soft 'cheep-cheep' peeps to tell their mama hen that they are happy!",
    colorPalette: [
      { name: "Sunny Lemon", hex: "#FFEE88" },
      { name: "Orange Beak", hex: "#F77F00" },
      { name: "Eggshell White", hex: "#FFFFFF" },
      { name: "Cheek Blush", hex: "#FFAAA6" }
    ],
    description: "Cute round fluffy baby chick sitting in a cracked eggshell, wearing half the eggshell as a hat, with tiny flapping wings and peeping beak.",
    coloringPrompt: {
      midjourney: "cute baby chick in eggshell coloring page for toddlers 3 years old, thick bold black outlines, round fluffy body, happy smile, pure white background --ar 17:22 --v 6.0",
      dalle: "Coloring page of an adorable fluffy baby chick wearing an eggshell hat, thick black lines, white background, no shading.",
      imagen: "Simple toddler coloring book page of a smiling baby chick in cracked egg, extra bold clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby chick in bright yellow with eggshell hat, cheerful smile, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby chick in sunny yellow with orange beak, flat vector on white.",
      imagen: "Children's book fluffy baby chick with joyful eyes, clean flat colors on white."
    },
    svgType: "chick"
  },
  {
    id: 36,
    name: "Parrot",
    category: "Birds",
    funFact: "Parrots love to bob their heads and dance whenever they hear cheerful music!",
    colorPalette: [
      { name: "Tropical Emerald", hex: "#2EC4B6" },
      { name: "Sunshine Yellow", hex: "#FFBF69" },
      { name: "Coral Red", hex: "#FF9F1C" },
      { name: "Sky Aqua", hex: "#CBF3F0" }
    ],
    description: "Friendly tropical baby parrot perched on a small branch, feather crest on head, curved smiling beak, and big bright cartoon eyes.",
    coloringPrompt: {
      midjourney: "cute baby parrot bird coloring page for toddlers, extra thick 6pt outlines, simple feathers, perched on branch, happy face, pure white background --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling parrot bird, thick black outlines, simple shapes, white background.",
      imagen: "Delightful toddler coloring book sheet of a cheerful baby parrot, ultra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby parrot in emerald green and sunny yellow, smiling happily, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby parrot in bright tropical colors, flat vector illustration on white.",
      imagen: "Children's book cheerful baby parrot with colorful feathers, clean flat colors on white."
    },
    svgType: "parrot"
  },
  {
    id: 37,
    name: "Flamingo",
    category: "Birds",
    funFact: "Flamingos love balancing effortlessly on just one leg like a pink ballerina!",
    colorPalette: [
      { name: "Pastel Pink", hex: "#FFB4A2" },
      { name: "Rose Quartz", hex: "#E5989B" },
      { name: "Warm Yellow", hex: "#FFE66D" },
      { name: "Gentle Teal", hex: "#83C5BE" }
    ],
    description: "Graceful smiling baby flamingo standing on one leg with head tilted adorably, curved heart-shaped neck, and sweet curved beak.",
    coloringPrompt: {
      midjourney: "cute baby flamingo standing on one leg coloring page for toddlers 3-5 years old, thick bold black outlines, simple heart neck, smiling face, pure white background --ar 17:22 --v 6.0",
      dalle: "Preschool coloring page of an adorable smiling baby flamingo, thick black lines, simple shapes, white background.",
      imagen: "Simple toddler coloring book page of a happy baby flamingo, extra thick clean black outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby flamingo in soft pastel pink, heart shaped curve, smiling happily, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby flamingo in blush pink with cheerful smile, flat vector on white.",
      imagen: "Children's book baby flamingo standing on one leg, clean flat colors on white."
    },
    svgType: "flamingo"
  },
  {
    id: 38,
    name: "Frog",
    category: "Reptiles",
    funFact: "Frogs do high-flying gymnastics leaps that can be twenty times their own body length!",
    colorPalette: [
      { name: "Clover Green", hex: "#70E000" },
      { name: "Butter Tummy", hex: "#CCFF33" },
      { name: "Lily Pad Pink", hex: "#FF99C8" },
      { name: "Crown Gold", hex: "#FFD166" }
    ],
    description: "Cute round tree frog sitting happily on a rounded lily pad wearing a tiny golden crown, big wide smile and shiny round eyes.",
    coloringPrompt: {
      midjourney: "cute baby frog on lily pad with tiny crown coloring page for toddlers, extra thick 6pt bold black outlines, big round eyes, wide happy smile, pure white background --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling green frog on a lily pad, thick black outlines, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a happy round frog, ultra thick clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby frog in bright clover green with yellow belly, smiling on lily pad, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby frog with huge friendly eyes and tiny crown, flat vector illustration on white.",
      imagen: "Children's book cheerful baby frog in bright lime green, clean flat colors on white."
    },
    svgType: "frog"
  },
  {
    id: 39,
    name: "Chameleon",
    category: "Reptiles",
    funFact: "Chameleons can look in two different directions at the very same time with their swivel eyes!",
    colorPalette: [
      { name: "Mint Emerald", hex: "#52B788" },
      { name: "Sky Azure", hex: "#74C69D" },
      { name: "Lemon Glow", hex: "#FFF3B0" },
      { name: "Coral Cheek", hex: "#E76F51" }
    ],
    description: "Adorable smiling baby chameleon perched on a twig with a cute tight spiral curly tail, big round swivel eye, and sweet happy grin.",
    coloringPrompt: {
      midjourney: "cute baby chameleon with curled spiral tail coloring page for toddlers 3-5 years old, thick bold black outlines, simple shapes, happy smile, pure white background --ar 17:22 --v 6.0",
      dalle: "Coloring page of an adorable smiling chameleon with curly tail, thick black lines, white background, no shading.",
      imagen: "Simple toddler coloring book page of a cute baby chameleon on a branch, extra thick 6px clean outlines on white."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby chameleon with spiral tail, vibrant mint green and pastel yellow, smiling happily, flat vector art, white background --ar 1:1 --v 6.0",
      dalle: "Adorable cartoon baby chameleon with curly tail and big friendly eye, flat vector on white.",
      imagen: "Children's book baby chameleon with playful smile, clean flat colors on white."
    },
    svgType: "chameleon"
  },
  {
    id: 40,
    name: "Baby Dino",
    category: "Wild",
    funFact: "Baby dinosaurs hatched from eggs nestled in giant cozy leafy nests made with love!",
    colorPalette: [
      { name: "Pastel Teal", hex: "#64DFDF" },
      { name: "Soft Mint", hex: "#72EFDD" },
      { name: "Sunny Gold", hex: "#FFD166" },
      { name: "Heart Rose", hex: "#FF85A1" }
    ],
    description: "Friendly baby long-neck brontosaurus with big gentle eyes, round spots on back, a heart marking, and a sweet cheerful toddler smile.",
    coloringPrompt: {
      midjourney: "cute baby dinosaur brontosaurus coloring page for toddlers 3-5 years old, extra thick 6pt bold black outlines, long gentle neck, simple spots, smiling face, pure white background --ar 17:22 --v 6.0",
      dalle: "Toddler coloring book page of a cute smiling baby dinosaur, thick black outlines, simple shapes, white background, no shading.",
      imagen: "Delightful toddler coloring book sheet of a gentle smiling baby dino, ultra thick clean outlines on white paper."
    },
    referencePrompt: {
      midjourney: "cute kawaii baby brontosaurus dinosaur in pastel teal and yellow spots, smiling happily, flat vector cartoon, white background --ar 1:1 --v 6.0",
      dalle: "Sweet cartoon baby dinosaur with friendly eyes and soft spots, flat vector style on white.",
      imagen: "Children's book baby dinosaur with gentle smile, clean flat colors on white."
    },
    svgType: "dino"
  }
];

// Helper to assemble the exact book page sequence
// 1. Cover
// 2. Welcome page
// 3. Animal 1 (Elephant)
// 4. Blank Page Bleed Barrier
// ...
// 81. Animal 40 (Baby Dino)
// 82. Blank Page Bleed Barrier
// 83. Super Colorist Completion Certificate / Diploma
// TOTAL_PAGES_COUNT = 2 + (40 * 2) + 1 = 83 pages! (Combining both blank & coloring pages gives 80 pages!)
export const TOTAL_PAGES_COUNT = 2 + (ANIMALS_DATA.length * 2) + 1; // 83 pages total
