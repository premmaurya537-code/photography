// Centralized site data and configuration for NOOR — Wedding Stories
// All routes, images, copy, and contact links are maintained here for ease of customization.

export const CONFIG = {
  brandName: 'NOOR',
  brandSubtitle: 'Wedding Stories',
  tagline: 'Documentary & Fine Art Wedding Photography',
  locationNotice: 'BASED IN INDIA · AVAILABLE WORLDWIDE',
  // Configurable contact information
  whatsappNumber: '+91 98765 43210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20NOOR,%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20availability.',
  email: 'stories@noorweddings.com',
  instagram: 'https://instagram.com/noorweddingstories',
  instagramHandle: '@noorweddingstories',
  copyrightYear: 2026,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Stories', href: '/stories' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Kind Words', href: '/kind-words' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_CONTENT = {
  eyebrow: 'BASED IN INDIA · AVAILABLE WORLDWIDE',
  headline: 'Your story,\nbeautifully remembered.',
  supporting: 'Honest moments. Timeless photographs. Memories that stay.',
  primaryCta: 'Explore Our Stories',
  primaryHref: '/stories',
  secondaryCta: 'Check Availability',
  secondaryHref: '/contact',
  image: '/images/royal-celebration.jpg',
  imageAlt: 'Indian bride and groom laughing together during royal wedding celebration under shower of rose petals',
};

export const FEATURED_STORIES = [
  {
    id: 'story-1',
    slug: 'royal-celebration',
    title: 'The Royal Celebration',
    subtitle: 'A grand palace wedding illuminated by fireworks and timeless heritage',
    location: 'JAIPUR, INDIA',
    category: 'Heritage & Royal',
    date: 'Autumn Celebration',
    description: 'A beautiful celebration filled with tradition, intricate details, and unforgettable moments.',
    image: '/images/royal-celebration.jpg',
    imageAlt: 'Bride in embroidered red lehenga and groom in ivory sherwani surrounded by golden sparklers and palace architecture in Jaipur',
    aspectRatio: 'aspect-[4/3] md:aspect-[16/11]',
    reverse: false,
    venue: 'City Palace & Rambagh Grounds, Jaipur',
    guests: '350 Guests',
    deliverables: '800+ Curated Heirloom Photographs · Hand-Bound Leather Album',
    storyText: [
      'Set against the sandstone ramparts of Jaipur, Aanya and Kabir’s wedding was an ode to centuries-old Rajasthani grandeur intertwined with deeply quiet, heartfelt family affection.',
      'From the fragrant Marigold-drenched Haldi morning to the majestic midnight pheras beneath cascading sparklers and rose showers, our documentary approach allowed every glance and spontaneous burst of joy to breathe naturally without forced posing.',
      'We spent three days walking alongside their families, capturing the silent father-daughter conversations, the ecstatic laughter across the courtyard, and the quiet relief of two souls stepping into their new chapter.'
    ],
    gallery: [
      { src: '/images/royal-celebration.jpg', caption: 'The couple under the midnight rose petal shower and palace fireworks.' },
      { src: '/images/garden-wedding.jpg', caption: 'Sacred ceremonies conducted amidst traditional floral canopies.' },
      { src: '/images/modern-love-story.jpg', caption: 'Sunset reception portraits showcasing effortless elegance.' },
    ],
    quote: {
      text: 'Looking through our gallery brings every tear, embrace, and burst of laughter rushing back. NOOR captured the true soul of our celebration.',
      author: 'Aanya & Kabir',
    }
  },
  {
    id: 'story-2',
    slug: 'intimate-garden-wedding',
    title: 'An Intimate Garden Wedding',
    subtitle: 'A quiet, heartfelt gathering enveloped in fragrant jasmine and palm canopies',
    location: 'LUCKNOW, INDIA',
    category: 'Intimate & Garden',
    date: 'Spring Ceremony',
    description: 'A quiet, heartfelt celebration surrounded by natural beauty and the people who matter most.',
    image: '/images/garden-wedding.jpg',
    imageAlt: 'South Indian couple seated at an ornate wooden mandap under lush floral canopies, sharing a candid joyful laugh',
    aspectRatio: 'aspect-[4/5] md:aspect-[3/4]',
    reverse: true,
    venue: 'Private Heritage Orchard Estate, Lucknow',
    guests: '80 Intimate Guests',
    deliverables: '550+ Curated Photographs · Fine Art Linen Print Box',
    storyText: [
      'Meera and Dev desired a celebration stripped of rush and spectacle—an intimate sanctum where every guest was known intimately by name.',
      'Surrounded by natural foliage, hand-strung tuberoses, and warm morning sunlight filtering through bamboo arches, the ceremony felt prayerful and profoundly joyful. The bride wore an heirloom gold silk saree draped with quiet reverence.',
      'Our lenses remained unobtrusive, observing from the perimeter to document authentic embraces, tears brushed away in secret, and barefoot laughter over brass katori feasts.'
    ],
    gallery: [
      { src: '/images/garden-wedding.jpg', caption: 'A spontaneous moment of laughter during the vows beneath the floral canopy.' },
      { src: '/images/royal-celebration.jpg', caption: 'Evening celebrations softly lit with terracotta lamps.' },
      { src: '/images/photographer.jpg', caption: 'Editorial preparation captured with natural morning light.' },
    ],
    quote: {
      text: 'They blended into our family so effortlessly that no one even noticed the cameras. The photographs are pure poetry—timeless and unposed.',
      author: 'Meera & Dev',
    }
  },
  {
    id: 'story-3',
    slug: 'modern-indian-love-story',
    title: 'A Modern Indian Love Story',
    subtitle: 'Contemporary silhouettes, city sunsets, and unscripted laughter',
    location: 'DELHI, INDIA',
    category: 'Modern & Editorial',
    date: 'Winter Evening',
    description: 'Contemporary wedding portraits, candid emotions, and a celebration that felt uniquely theirs.',
    image: '/images/modern-love-story.jpg',
    imageAlt: 'Modern Indian couple walking by the sea promenade at dusk in stylish ivory saree suit and navy blazer',
    aspectRatio: 'aspect-[16/10] md:aspect-[16/9]',
    reverse: false,
    venue: 'The Lodhi & Sundar Nursery Pavilion, Delhi',
    guests: '200 Guests',
    deliverables: '650+ Editorial Photographs · Archival Fine Art Book',
    storyText: [
      'Rhea and Vikram brought a cosmopolitan, fashion-editorial perspective to their winter Delhi nuptials. Combining bespoke ivory tailoring with timeless Indian textiles, their day was an effortless balance of contemporary style and deep family warmth.',
      'Before joining their reception, we took twenty quiet minutes along the sunlit colonnade. There were no stiff scripts—just gentle movement, conversation, and the soft rustle of evening breeze.',
      'The reception evolved into an exhilarating dance of friendship and music, documented with vintage high-contrast black-and-white and rich documentary color.'
    ],
    gallery: [
      { src: '/images/modern-love-story.jpg', caption: 'Strolling through dusk light in bespoke ivory saree-suit tailoring.' },
      { src: '/images/royal-celebration.jpg', caption: 'Dynamic candid frames as the dance floor ignited at night.' },
      { src: '/images/garden-wedding.jpg', caption: 'Intimate ceremony portraits celebrating modern heritage.' },
    ],
    quote: {
      text: 'Every photograph looks like it belongs in a timeless editorial monograph. They understood our aesthetic completely.',
      author: 'Rhea & Vikram',
    }
  },
];

export const ALL_STORIES = [
  ...FEATURED_STORIES,
  {
    id: 'story-4',
    slug: 'udaipur-lake-palace',
    title: 'Reflections by the Lake',
    subtitle: 'A candlelit sunset union on the tranquil waters of Pichola',
    location: 'UDAIPUR, INDIA',
    category: 'Heritage & Royal',
    date: 'Winter 2024',
    description: 'Floating marble pavilions, mirrored courtyards, and deep emotional vows as dusk settled over the lake.',
    image: '/images/royal-celebration.jpg',
    imageAlt: 'Palace wedding reflections across Udaipur waters',
    aspectRatio: 'aspect-[4/3]',
    reverse: false,
    venue: 'Taj Lake Palace, Udaipur',
    guests: '150 Guests',
    deliverables: '700+ Photographs · Bespoke Silk Album',
    storyText: [
      'Surrounded by rippling waters and centuries of regal architecture, Tara and Neil exchanged garlands as the Aravali hills turned lavender.',
      'Our cameras honored the serenity of the setting, framing candid silhouettes against torchlight and traditional shehnai melodies.'
    ],
    gallery: [
      { src: '/images/royal-celebration.jpg', caption: 'Evening illumination over the courtyards.' },
      { src: '/images/modern-love-story.jpg', caption: 'Twilight portraits by the marble balustrades.' },
    ],
    quote: {
      text: 'The photographs feel like paintings that have captured our truest selves.',
      author: 'Tara & Neil',
    }
  },
  {
    id: 'story-5',
    slug: 'kerala-backwaters',
    title: 'Whispering Palms & Serenity',
    subtitle: 'A barefoot celebration on coconut groves and backwater waterways',
    location: 'KERALA, INDIA',
    category: 'Intimate & Garden',
    date: 'Early Monsoon',
    description: 'Rain-washed emerald leaves, traditional brass oil lamps, and intimate ancestral ceremonies.',
    image: '/images/garden-wedding.jpg',
    imageAlt: 'South Indian wedding ceremony in peaceful Kerala estate',
    aspectRatio: 'aspect-[4/3]',
    reverse: false,
    venue: 'Heritage Homestay, Kumarakom',
    guests: '60 Guests',
    deliverables: '450+ Photographs · Heirloom Wood Box',
    storyText: [
      'A slow, sacred morning marked by temple bells and monsoon drizzle. Shreya and Arjun wanted an organic gathering centered on ancestry and nature.',
      'The raw simplicity allowed raw emotions to take center stage, captured with sensitivity to natural diffused daylight.'
    ],
    gallery: [
      { src: '/images/garden-wedding.jpg', caption: 'The sacred rituals surrounded by fresh blossoms.' },
      { src: '/images/photographer.jpg', caption: 'Quiet portrait preparations.' },
    ],
    quote: {
      text: 'NOOR gave us the greatest gift: looking back and feeling exactly what we felt in those quiet seconds.',
      author: 'Shreya & Arjun',
    }
  },
  {
    id: 'story-6',
    slug: 'coastal-vows-alibaug',
    title: 'Coastal Vows & Sea Salt',
    subtitle: 'A breezy weekend celebration framed by banyan trees and ocean breeze',
    location: 'ALIBAUG, INDIA',
    category: 'Modern & Editorial',
    date: 'Spring 2025',
    description: 'An open-air mandap set against the Arabian sea with modern minimalist floral installations.',
    image: '/images/modern-love-story.jpg',
    imageAlt: 'Modern couple laughing along the coastline',
    aspectRatio: 'aspect-[4/3]',
    reverse: false,
    venue: 'Private Beach Villa, Alibaug',
    guests: '120 Guests',
    deliverables: '600+ Photographs · Japanese Cloth Folio',
    storyText: [
      'Pooja and Siddharth invited their closest circle to a weekend of music, salt air, and heartfelt vows.',
      'The focus was entirely on candid connection—laughter around dinner tables, sandy feet during pheras, and unscripted sunset toasts.'
    ],
    gallery: [
      { src: '/images/modern-love-story.jpg', caption: 'Coastal breeze and golden hour reflections.' },
      { src: '/images/royal-celebration.jpg', caption: 'Midnight festivities around the fire.' },
    ],
    quote: {
      text: 'No stiff posing, no interruptions—just our wedding day, documented with pure love.',
      author: 'Pooja & Siddharth',
    }
  }
];

export const CINEMATIC_BREAK = {
  eyebrow: 'THE PHILOSOPHY',
  quote: '“Real moments. No retakes.”',
  supporting: 'Because the most meaningful memories happen naturally.',
  image: '/images/royal-celebration.jpg',
  imageAlt: 'Atmospheric candid wedding moment with rose petals falling softly over bride and groom',
};

export const ABOUT_CONTENT = {
  eyebrow: 'OUR APPROACH',
  headline: 'We believe the smallest moments become the biggest memories.',
  leadBio: 'Founded by lead photographer Maya Sen, NOOR is an editorial and documentary wedding studio dedicated to capturing celebrations with quiet reverence, artistic clarity, and deep emotional resonance.',
  paragraphs: [
    'We document weddings with patience, intention, and an eye for the moments that make every celebration personal. From the quiet anticipation before the ceremony to the joy of the final dance, our approach is centred on honest storytelling.',
    'Rather than orchestrating poses or interrupting the natural rhythm of your day, we observe with sensitivity—allowing genuine affection, subtle glances, and spontaneous laughter to unfold naturally.',
    'With a background rooted in fine arts and documentary photojournalism, we treat each wedding as a unique visual monograph. We embrace natural light, rich shadow textures, and the delicate human interactions that traditional coverage often rushes past.'
  ],
  stats: [
    { value: '10+', label: 'Years of Storytelling' },
    { value: '250+', label: 'Weddings Documented' },
    { value: 'Worldwide', label: 'Destination Coverage' },
  ],
  linkText: 'Get to Know Us',
  linkHref: '/about',
  image: '/images/photographer.jpg',
  imageAlt: 'Lead photographer smiling warmly in heritage studio holding a vintage rangefinder camera',
  philosophyPillars: [
    {
      title: 'Documentary Intention',
      description: 'We believe you should be present in your celebration, not performing for a camera. We capture life as it happens, unscripted and authentic.'
    },
    {
      title: 'Editorial Art Direction',
      description: 'Every frame is considered with a painterly eye for composition, texture, light, and heirloom color grading.'
    },
    {
      title: 'Gentle Presence',
      description: 'We blend in with your families like trusted guests, putting everyone at ease so the genuine emotional soul surfaces effortlessly.'
    },
    {
      title: 'Archival Craftsmanship',
      description: 'Your memories are prepared to outlive fleeting digital trends—delivered in handcrafted books and timeless digital archives.'
    }
  ],
  gearAndCraft: [
    'Medium Format & High-Resolution Digital for sublime dynamic range and skin tones',
    '35mm Film integration for nostalgic grain and timeless texture',
    'Fast, silent prime lenses that let us shoot without flash disturbance during sacred vows',
    'Color grading tailored specifically to rich Indian silks, marigolds, and candlelit ambiance'
  ]
};

export const SERVICES = [
  {
    id: 'wedding-photography',
    slug: 'wedding-photography',
    title: 'Wedding Photography',
    badge: 'MOST REQUESTED',
    description: 'Complete storytelling coverage of your wedding day, from meaningful details to candid celebrations.',
    investment: 'Custom collections tailored per multi-day celebration',
    image: '/images/royal-celebration.jpg',
    imageAlt: 'Ceremonial Indian wedding photography with intricate details',
    linkText: 'Inquire for Dates',
    features: [
      'Multi-day coverage across all traditional ceremonies (Mehendi, Haldi, Sangeet, Vows, Reception)',
      'Two principal photographers with complete documentary focus',
      'Curated private online heirloom gallery with lifetime archival access',
      'Handcrafted bespoke fine-art album bound in Italian leather or raw silk',
      'High-resolution print-ready files and web-optimized sharing versions',
      'Express preview collection delivered within 5 days of your celebration'
    ],
  },
  {
    id: 'pre-wedding-stories',
    slug: 'pre-wedding-stories',
    title: 'Pre-Wedding Stories',
    badge: 'EDITORIAL SESSION',
    description: 'Personal, relaxed portraits that capture your connection before the wedding.',
    investment: 'Available standalone or integrated into wedding collections',
    image: '/images/modern-love-story.jpg',
    fallbackImage: '/images/modern-love-story.jpg',
    imageAlt: 'Intimate pre-wedding session in natural golden hour light',
    linkText: 'Explore Sessions',
    features: [
      'Editorial styling & wardrobe consultation with visual mood board',
      'Destination or heritage urban settings at relaxed golden hour',
      'Zero awkward posing—guided movement focused on genuine connection',
      '75+ meticulously edited high-resolution digital photographs',
      'Curated slideshow set to custom score for ceremony projection'
    ],
  },
  {
    id: 'intimate-celebrations',
    slug: 'intimate-celebrations',
    title: 'Intimate Celebrations',
    badge: 'BOUTIQUE COVERAGE',
    description: 'Beautiful documentation of smaller gatherings and meaningful family occasions.',
    investment: 'Single-day or weekend bespoke rates for gatherings under 100 guests',
    image: '/images/garden-wedding.jpg',
    imageAlt: 'Intimate outdoor mandap gathering with family and close friends',
    linkText: 'View Details',
    features: [
      'Bespoke hours of coverage designed for micro-weddings and ancestral homes',
      'Single lead photographer for maximal discretion and quiet presence',
      'Emphasis on unhurried family portraits and candid conversations',
      'Full private client archive with instant high-res downloads',
      'Linen keepsake folio with fine art cotton rag prints included'
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    quote: 'Finding a photographer who truly captured the soul of our wedding felt impossible until we met the NOOR team. Looking through our gallery brings every tear, embrace, and burst of laughter rushing back.',
    couple: 'Aanya & Kabir',
    location: 'Jaipur, Rajasthan',
    celebration: 'Palace Wedding',
    isDemonstration: true,
  },
  {
    id: 'test-2',
    quote: 'They blended into our family so effortlessly that no one even noticed the cameras. The photographs are pure poetry—timeless, deeply intimate, and completely free of stiff or awkward poses.',
    couple: 'Meera & Dev',
    location: 'Lucknow, Uttar Pradesh',
    celebration: 'Heritage Garden Wedding',
    isDemonstration: true,
  },
  {
    id: 'test-3',
    quote: 'From our first video call to receiving the handcrafted silk album, every step was marked by gentleness and quiet excellence. Our grandparents still talk about how courteous the team was.',
    couple: 'Rhea & Vikram',
    location: 'Delhi, India',
    celebration: 'Contemporary City Celebration',
    isDemonstration: true,
  },
  {
    id: 'test-4',
    quote: 'The candid moments during our quiet morning rituals are our most treasured possessions. NOOR gave us memories that feel exactly like what our hearts felt that day.',
    couple: 'Tara & Neil',
    location: 'Udaipur, Rajasthan',
    celebration: 'Lakeside Heritage Wedding',
    isDemonstration: true,
  },
];

export const CELEBRATION_TYPES = [
  'Full Multi-Day Wedding Celebration',
  'Intimate Wedding / Elopement (Under 100 Guests)',
  'Destination Wedding',
  'Pre-Wedding / Engagement Story',
  'Other Celebration',
];

export const FAQS = [
  {
    question: 'How far in advance should we reserve our wedding dates?',
    answer: 'We limit our calendar to a maximum of 15 to 18 weddings per year to ensure each couple receives our full artistic focus. Couples typically reach out 6 to 12 months in advance, especially for the prime autumn and winter wedding seasons across India.'
  },
  {
    question: 'Do you travel for destination weddings across India and worldwide?',
    answer: 'Yes, absolutely. Over half of our commissions are destination celebrations. We travel across Rajasthan, Goa, Kerala, Delhi, Mumbai, as well as international destinations in Europe, Southeast Asia, and the Middle East. Travel and logistics are planned transparently without hidden surprises.'
  },
  {
    question: 'How do you work during crowded or fast-paced ceremony moments?',
    answer: 'We work with quiet agility. Having documented over 250 Indian weddings, we understand the sacred significance of each ritual—from the jai mala to the kanyadaan and saptapadi. We coordinate with your pandit and families to position ourselves without ever blocking sightlines or breaking the sacred atmosphere.'
  },
  {
    question: 'When will we receive our photographs and albums?',
    answer: 'We provide an initial preview collection of 30-50 curated frames within 5-7 days of your wedding so you have beautiful memories to share immediately. The full, meticulously color-graded heirloom collection is delivered within 6 to 8 weeks, followed by album design consultation.'
  }
];
