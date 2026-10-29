// Everything personal lives here so it is easy to edit in one place.
// Leave a value as '' to hide it from the site.

export const site = {
  name: 'Sofia Godoy',
  role: 'Research-driven marketer & UX/UI designer',
  description:
    'Sofia Godoy is a research-driven marketer and UX/UI designer at the University of Florida, blending strategy and design for entertainment, fashion, tech for good, and more.',
  badge: 'UF STUDENT · MARKETING · DIGITAL ARTS · ',
};

// TODO(Sofia): fill in email, LinkedIn and resume, and confirm Instagram handles.
export const contact = [
  { label: 'Email', value: '', href: '' },
  { label: 'LinkedIn', value: '', href: '' },
  { label: 'TikTok', value: '@sofia_gator', href: 'https://www.tiktok.com/@sofia_gator' },
  { label: 'Instagram', value: '', href: '' },
  { label: 'Resume', value: 'Download PDF', href: '' },
].filter((c) => c.href);

// The paint-mixing system: every discipline is a color, and projects that
// span disciplines show the blend.
export const disciplines = {
  strategy: { label: 'Strategy & Marketing', short: 'Strategy', color: 'var(--pink)' },
  ux: { label: 'UX & Research', short: 'Research', color: 'var(--blue)' },
  visual: { label: 'Brand & Visual', short: 'Visual', color: 'var(--lilac)' },
} as const;

export type Discipline = keyof typeof disciplines;

export const skills: { label: string; d: Discipline }[] = [
  { label: 'Market Research', d: 'strategy' },
  { label: 'Brand Strategy', d: 'strategy' },
  { label: 'Content Strategy', d: 'strategy' },
  { label: 'SEO & GEO', d: 'strategy' },
  { label: 'Social Media', d: 'strategy' },
  { label: 'User Research', d: 'ux' },
  { label: 'UX/UI Design', d: 'ux' },
  { label: 'Prototyping in Figma', d: 'ux' },
  { label: 'Data Analysis', d: 'ux' },
  { label: 'Digital Asset Management', d: 'ux' },
  { label: 'Visual Design', d: 'visual' },
  { label: 'Motion Graphics', d: 'visual' },
  { label: 'Illustration', d: 'visual' },
];

export const workedWith = [
  'Universal Destinations & Experiences',
  'Fire Neural Network',
  'The Agency at UF',
  'Ditto',
  'Access Newswire',
  'Cordelia Biosciences',
];

export const experience = [
  { org: 'Universal Destinations & Experiences', role: 'Digital Asset Management Intern', when: 'Summer 2026' },
  { org: 'The Agency at UF', role: 'Data Analyst, Research Department', when: '2026' },
  { org: 'Fire Neural Network', role: 'Marketing Content Development Intern', when: '2025' },
  { org: 'Ditto', role: 'Brand Ambassador', when: 'Spring 2026' },
  { org: 'Handshake', role: 'AI Fellow', when: '' },
];

// "Pin collection" on the About page. Initials show on the pin; role shows on hover/focus.
export const involvement = [
  { pin: 'DSSD', org: 'Data Science for Sustainability', role: 'Co-founder', d: 'ux' as Discipline },
  { pin: 'GUD', org: "UF's user design club", role: 'Social Media Director', d: 'visual' as Discipline },
  { pin: 'WiCSE', org: 'Women in Computer Science & Engineering', role: 'Merch Chair · Grace Hopper, Chicago', d: 'visual' as Discipline },
  { pin: 'AMA', org: 'American Marketing Association', role: 'Member · Atlanta trip', d: 'strategy' as Discipline },
  { pin: 'NHS', org: 'National Honor Society', role: 'Math & reading tutor', d: 'strategy' as Discipline },
];

export const awards = [
  { title: "1st Place, Children's Book", where: 'FIU' },
  { title: 'Runner-up, Best Design', where: 'UF Design-A-thon (Bloom)' },
  { title: 'Runner-up team', where: 'NCDMC, Nashville' },
  { title: 'Class winner, digital marketing case study', where: 'Cordelia Biosciences' },
];

export const offTheClock = ['Junk journaling', 'Art', 'Movies', 'Gaming', 'Thrifting'];

// Spotify album from the old Framer hero (Tame Impala, The Slow Rush).
export const onRepeat = {
  title: 'The Slow Rush',
  artist: 'Tame Impala',
  href: 'https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL',
  embed: 'https://open.spotify.com/embed/album/31qVWUdRrlb8thMvts0yYL?theme=0',
};
