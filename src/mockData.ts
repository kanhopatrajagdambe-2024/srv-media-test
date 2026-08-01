import type { School, CategoryCard, BenefitCard, BlogPost, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: "Discover Gurugram's",
    highlightText: "Top 30+ Schools",
    subtitle: "ALL IN ONE PLACE",
    venue: "Apparel House, Sec 44, Gurugram",
    date: "2-3 August 2025",
    time: "Sat-Sun | 10AM - 6PM",
    images: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 'slide-2',
    title: "Meet Admissions Directors of",
    highlightText: "Premier K–12 Institutions",
    subtitle: "DIRECT INTERACTION & SPOT OFFERS",
    venue: "Apparel House, Sec 44, Gurugram",
    date: "2-3 August 2025",
    time: "Sat-Sun | 10AM - 6PM",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 'slide-3',
    title: "Explore Global & CBSE Curricula for",
    highlightText: "Your Child's Future",
    subtitle: "SCHOLARSHIPS & FEE WAIVERS",
    venue: "Apparel House, Sec 44, Gurugram",
    date: "2-3 August 2025",
    time: "Sat-Sun | 10AM - 6PM",
    images: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

export const SCHOOL_LOGOS_ROW_1: School[] = [
  {
    id: 'r1-1',
    name: 'Harrow International School',
    location: 'Bengaluru',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%230F1A34"/><path d="M100 18 L118 30 V50 C118 62 100 72 100 72 C100 72 82 62 82 50 V30 Z" fill="%230F1A34" stroke="%23E2B857" stroke-width="3"/><path d="M100 26 L110 33 V46 C110 54 100 62 100 62 C100 62 90 54 90 46 V33 Z" fill="%23E2B857"/><text x="100" y="78" font-family="serif" font-size="8" font-weight="bold" fill="%23FFFFFF" letter-spacing="2" text-anchor="middle">HARROW</text><text x="100" y="85" font-family="sans-serif" font-size="5" fill="%23E2B857" letter-spacing="1" text-anchor="middle">INTERNATIONAL SCHOOL</text></svg>',
    curriculum: 'British / IGCSE',
    category: 'international'
  },
  {
    id: 'r1-2',
    name: 'Shrewsbury International School',
    location: 'Bangkok',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(18, 15)"><path d="M22 8 L40 20 V40 C40 52 22 62 22 62 C22 62 4 52 4 40 V20 Z" fill="%231E3A8A" stroke="%23D97706" stroke-width="2"/><path d="M4 25 H40 M22 8 V62" stroke="%23DC2626" stroke-width="2.5"/><circle cx="22" cy="30" r="6" fill="%23F59E0B"/></g><text x="72" y="38" font-family="serif" font-size="11" font-weight="bold" fill="%231E3A8A">SHREWSBURY</text><text x="72" y="48" font-family="sans-serif" font-size="6.5" font-weight="600" fill="%231E3A8A" letter-spacing="1">INTERNATIONAL</text><text x="72" y="57" font-family="sans-serif" font-size="6.5" font-weight="600" fill="%231E3A8A" letter-spacing="1">SCHOOL</text><text x="72" y="66" font-family="sans-serif" font-size="5" fill="%23DC2626">BANGKOK</text></svg>',
    curriculum: 'UK Board',
    category: 'international'
  },
  {
    id: 'r1-3',
    name: "King's College India",
    location: 'Rohtak, NCR',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><circle cx="32" cy="45" r="22" fill="%23881337" stroke="%23D97706" stroke-width="2"/><path d="M25 36 L32 28 L39 36 L36 42 H28 Z" fill="%23F59E0B"/><text x="64" y="46" font-family="serif" font-size="13" font-weight="bold" fill="%23881337">King\'s College India</text><text x="64" y="58" font-family="sans-serif" font-size="7" font-weight="600" fill="%2364748B" letter-spacing="3">ROHTAK</text></svg>',
    curriculum: 'Cambridge & CBSE',
    category: 'boarding'
  },
  {
    id: 'r1-4',
    name: 'Woodstock School',
    location: 'Mussoorie',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><circle cx="100" cy="42" r="28" stroke="%23991B1B" stroke-width="1.8" fill="none"/><path d="M100 22 L88 38 H95 L87 50 H113 L105 38 H112 Z" fill="%23991B1B"/><rect x="98" y="50" width="4" height="6" fill="%23991B1B"/><text x="100" y="64" font-family="sans-serif" font-size="6" font-weight="bold" fill="%23991B1B" text-anchor="middle">1854</text><text x="100" y="78" font-family="sans-serif" font-size="7" font-weight="bold" fill="%23991B1B" letter-spacing="1" text-anchor="middle">WOODSTOCK SCHOOL</text></svg>',
    curriculum: 'IB World Boarding',
    category: 'boarding'
  },
  {
    id: 'r1-5',
    name: 'The Aga Khan Academy',
    location: 'Mombasa / Hyd',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(78, 10)"><polygon points="22,8 40,18 40,38 22,48 4,38 4,18" fill="none" stroke="%23047857" stroke-width="2"/><polygon points="22,12 36,20 22,28 8,20" fill="%2310B981"/><polygon points="8,20 22,28 22,44 8,36" fill="%23059669"/><polygon points="22,28 36,20 36,36 22,44" fill="%23047857"/><text x="22" y="58" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23047857" text-anchor="middle">THE AGA KHAN ACADEMY</text><text x="22" y="65" font-family="sans-serif" font-size="4" font-weight="600" fill="%23047857" text-anchor="middle">MOMBASA</text></g></svg>',
    curriculum: 'IB Continuum',
    category: 'international'
  },
  {
    id: 'r1-6',
    name: 'TISB Bangalore',
    location: 'Bangalore',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(80, 10)"><path d="M20 5 L36 15 V35 C36 45 20 52 20 52 C20 52 4 45 4 35 V15 Z" fill="%231E3A8A" stroke="%23D97706" stroke-width="2"/><path d="M12 25 H28 M20 15 V35" stroke="%23F59E0B" stroke-width="2"/><text x="20" y="60" font-family="sans-serif" font-size="7" font-weight="bold" fill="%231E3A8A" text-anchor="middle">TISB</text></g></svg>',
    curriculum: 'IGCSE & IB',
    category: 'international'
  }
];

export const SCHOOL_LOGOS_ROW_2: School[] = [
  {
    id: 'r2-1',
    name: 'Harrow International School',
    location: 'Bengaluru',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%230F1A34"/><path d="M100 18 L118 30 V50 C118 62 100 72 100 72 C100 72 82 62 82 50 V30 Z" fill="%230F1A34" stroke="%23E2B857" stroke-width="3"/><path d="M100 26 L110 33 V46 C110 54 100 62 100 62 C100 62 90 54 90 46 V33 Z" fill="%23E2B857"/><text x="100" y="78" font-family="serif" font-size="8" font-weight="bold" fill="%23FFFFFF" letter-spacing="2" text-anchor="middle">HARROW</text><text x="100" y="85" font-family="sans-serif" font-size="5" fill="%23E2B857" letter-spacing="1" text-anchor="middle">INTERNATIONAL SCHOOL</text></svg>',
    curriculum: 'British / IGCSE',
    category: 'international'
  },
  {
    id: 'r2-2',
    name: 'Shrewsbury International School',
    location: 'Bangkok',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(18, 15)"><path d="M22 8 L40 20 V40 C40 52 22 62 22 62 C22 62 4 52 4 40 V20 Z" fill="%231E3A8A" stroke="%23D97706" stroke-width="2"/><path d="M4 25 H40 M22 8 V62" stroke="%23DC2626" stroke-width="2.5"/><circle cx="22" cy="30" r="6" fill="%23F59E0B"/></g><text x="72" y="38" font-family="serif" font-size="11" font-weight="bold" fill="%231E3A8A">SHREWSBURY</text><text x="72" y="48" font-family="sans-serif" font-size="6.5" font-weight="600" fill="%231E3A8A" letter-spacing="1">INTERNATIONAL</text><text x="72" y="57" font-family="sans-serif" font-size="6.5" font-weight="600" fill="%231E3A8A" letter-spacing="1">SCHOOL</text><text x="72" y="66" font-family="sans-serif" font-size="5" fill="%23DC2626">BANGKOK</text></svg>',
    curriculum: 'UK Board',
    category: 'international'
  },
  {
    id: 'r2-3',
    name: "King's College India",
    location: 'Rohtak, NCR',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><circle cx="32" cy="45" r="22" fill="%23881337" stroke="%23D97706" stroke-width="2"/><path d="M25 36 L32 28 L39 36 L36 42 H28 Z" fill="%23F59E0B"/><text x="64" y="46" font-family="serif" font-size="13" font-weight="bold" fill="%23881337">King\'s College India</text><text x="64" y="58" font-family="sans-serif" font-size="7" font-weight="600" fill="%2364748B" letter-spacing="3">ROHTAK</text></svg>',
    curriculum: 'Cambridge & CBSE',
    category: 'boarding'
  },
  {
    id: 'r2-4',
    name: 'Woodstock School',
    location: 'Mussoorie',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><circle cx="100" cy="42" r="28" stroke="%23991B1B" stroke-width="1.8" fill="none"/><path d="M100 22 L88 38 H95 L87 50 H113 L105 38 H112 Z" fill="%23991B1B"/><rect x="98" y="50" width="4" height="6" fill="%23991B1B"/><text x="100" y="64" font-family="sans-serif" font-size="6" font-weight="bold" fill="%23991B1B" text-anchor="middle">1854</text><text x="100" y="78" font-family="sans-serif" font-size="7" font-weight="bold" fill="%23991B1B" letter-spacing="1" text-anchor="middle">WOODSTOCK SCHOOL</text></svg>',
    curriculum: 'IB World Boarding',
    category: 'boarding'
  },
  {
    id: 'r2-5',
    name: 'The Aga Khan Academy',
    location: 'Mombasa / Hyd',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(78, 10)"><polygon points="22,8 40,18 40,38 22,48 4,38 4,18" fill="none" stroke="%23047857" stroke-width="2"/><polygon points="22,12 36,20 22,28 8,20" fill="%2310B981"/><polygon points="8,20 22,28 22,44 8,36" fill="%23059669"/><polygon points="22,28 36,20 36,36 22,44" fill="%23047857"/><text x="22" y="58" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23047857" text-anchor="middle">THE AGA KHAN ACADEMY</text><text x="22" y="65" font-family="sans-serif" font-size="4" font-weight="600" fill="%23047857" text-anchor="middle">MOMBASA</text></g></svg>',
    curriculum: 'IB Continuum',
    category: 'international'
  },
  {
    id: 'r2-6',
    name: 'TISB Bangalore',
    location: 'Bangalore',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" fill="none"><rect width="200" height="90" fill="%23FFFFFF"/><g transform="translate(80, 10)"><path d="M20 5 L36 15 V35 C36 45 20 52 20 52 C20 52 4 45 4 35 V15 Z" fill="%231E3A8A" stroke="%23D97706" stroke-width="2"/><path d="M12 25 H28 M20 15 V35" stroke="%23F59E0B" stroke-width="2"/><text x="20" y="60" font-family="sans-serif" font-size="7" font-weight="bold" fill="%231E3A8A" text-anchor="middle">TISB</text></g></svg>',
    curriculum: 'IGCSE & IB',
    category: 'international'
  }
];

export const SCHOOL_CATEGORIES: CategoryCard[] = [
  {
    id: 'early-learning',
    title: 'Pre-Schools & Early Learning Centres',
    description: 'Nurturing foundational skills for toddlers and pre-primary children.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80',
    badge: 'Playgroup to UKG'
  },
  {
    id: 'k12-cbse',
    title: 'K–12 CBSE Day Schools',
    description: 'Reputed schools offering complete schooling from Kindergarten to Grade 12.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    badge: 'Grade 1 to 12'
  },
  {
    id: 'heritage-newage',
    title: 'Heritage to New-Age Schools',
    description: 'Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    badge: 'Tech & STEM Focus'
  },
  {
    id: 'international',
    title: 'International Curriculum Schools',
    description: 'Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
    badge: 'IB / IGCSE / Finnish'
  }
];

export const EXHIBITION_BENEFITS: BenefitCard[] = [
  {
    id: 'heads',
    title: 'Interact Directly with School Heads',
    description: 'Get answers straight from the experts, school principals and admission directors.',
    iconType: 'heads'
  },
  {
    id: 'curriculum',
    title: 'Compare Curriculum & Pedagogy',
    description: 'Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more.',
    iconType: 'curriculum'
  },
  {
    id: 'offers',
    title: 'Get Exclusive Fee Structures & Offers',
    description: 'Access transparent information, spot fee concessions, and avail exclusive offers.',
    iconType: 'offers'
  },
  {
    id: 'infrastructure',
    title: 'Explore Schools Offerings',
    description: 'Preview infrastructure, co-curricular, sports facilities, teaching methodology and culture.',
    iconType: 'infrastructure'
  },
  {
    id: 'guidance',
    title: 'On-the-spot admission & Guidance',
    description: 'Save time with direct application processes, document checks, and expert counseling guidance.',
    iconType: 'guidance'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Choosing the Right School for Your Child in 2025: A Comprehensive Guide for Parents',
    excerpt: 'Selecting the ideal educational environment requires balancing academic reputation, co-curricular exposure, location convenience, and child temperament. Here is our step-by-step decision framework.',
    content: `Choosing the right school for your child is one of the most impactful decisions you will make as a parent. With Gurugram hosting over 30+ premier institutions spanning CBSE, ICSE, IB PYP/DP, and Cambridge pathways, evaluation requires clear criteria.

### 1. Curriculum Alignment
Determine whether your child thrives in structured academic board environments (CBSE/ICSE) or inquiry-driven, project-based learning frameworks (IB/Cambridge).

### 2. Infrastructure & Safety
Examine safety protocols, CCTV monitoring, sports arenas, digital STEM labs, and transportation routing.

### 3. Faculty Experience & Mentorship
High teacher retention and continuous professional development directly translate to enriched classroom engagement and student well-being.`,
    author: 'Pritam Rathi',
    date: '2ND MAY 2025',
    readTime: '6 min read',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'b2',
    title: 'Understanding IB vs. CBSE vs. Cambridge: Which Board Suits Your Child?',
    excerpt: 'Detailed breakdown of core pedagogical philosophies, assessment methods, and global college admission pathways.',
    content: `Understanding the nuances between leading educational boards is essential prior to admission season.

- **CBSE**: Focuses on national competitive readiness (JEE/NEET/CUET) with structured textbook learning.
- **IB (International Baccalaureate)**: Focuses on holistic inquiry, Theory of Knowledge (TOK), and interdisciplinary projects.
- **Cambridge (IGCSE/A-Levels)**: Focuses on subject depth, analytical application, and international university recognition.`,
    author: 'Pritam Rathi',
    date: '28TH APR 2025',
    readTime: '5 min read',
    category: 'Lessons',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b3',
    title: 'The Impact of Early STEM Education and Coding in Primary Schooling',
    excerpt: 'How leading Gurugram schools integrate hands-on robotics and logical problem-solving from Grade 1 onwards.',
    content: 'Early exposure to logical sequence building, computational thinking, and simple block coding fosters problem-solving resilience in young minds...',
    author: 'Pritam Rathi',
    date: '18TH APR 2025',
    readTime: '4 min read',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b4',
    title: 'Importance of Music, Athletics, and Performing Arts in Holistic Development',
    excerpt: 'Why top schools view co-curricular excellence as equal to academic report cards for overall personality growth.',
    content: 'Participation in team sports, orchestra ensembles, and drama productions develops emotional intelligence, teamwork, and confidence under pressure...',
    author: 'Pritam Rathi',
    date: '12TH APR 2025',
    readTime: '4 min read',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b5',
    title: 'Key Questions Parents Should Ask During School Exhibition Interactions',
    excerpt: 'Maximise your time at Premier Schools Exhibition with this handy checklist for school leadership teams.',
    content: 'Prepare questions regarding teacher-student ratio, anti-bullying policies, career counseling support, and fee transparency...',
    author: 'Pritam Rathi',
    date: '05TH APR 2025',
    readTime: '3 min read',
    category: 'Teachers',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b6',
    title: 'Online Learning Tools & Parent Dashboards: Bridging Home and School',
    excerpt: 'How modern school management portals keep parents connected with attendance, progress tracking, and teacher notes.',
    content: 'Seamless parent-teacher communication platforms ensure early intervention and collaborative support for student academic growth...',
    author: 'Pritam Rathi',
    date: '25TH MAR 2025',
    readTime: '5 min read',
    category: 'Online Course',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80'
  }
];
