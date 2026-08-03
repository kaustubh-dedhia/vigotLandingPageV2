export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const capabilitiesHeading = ['MADE AROUND', 'YOUR PRODUCT'];

export const capabilities: Capability[] = [
  {
    id: 'structure',
    number: '01',
    title: 'Structure',
    description: 'Engineered box forms built to protect and present your product.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'material',
    number: '02',
    title: 'Material',
    description: 'SBS paperboard, kraft, duplex and specialised substrates selected for finish and function.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'size',
    number: '03',
    title: 'Size',
    description: 'Tailored dimensions that fit your product, inserts and shipping needs.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'printing',
    number: '04',
    title: 'Printing',
    description: 'High-definition offset and digital printing for precise brand colour.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lamination',
    number: '05',
    title: 'Lamination',
    description: 'Matt, gloss, soft-touch and textured laminates for surface protection.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'foiling',
    number: '06',
    title: 'Foiling',
    description: 'Metallic and pigmented foil stamping for accents and logos.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'embossing',
    number: '07',
    title: 'Embossing',
    description: 'Raised and recessed detailing that adds tactile depth.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'inserts',
    number: '08',
    title: 'Inserts',
    description: 'Die-cut cavities, EVA, foam and paperboard fittings for secure display.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'handles',
    number: '09',
    title: 'Handles',
    description: 'Rope, ribbon, metal and die-cut handle options for bags and boxes.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'finishing',
    number: '10',
    title: 'Finishing',
    description: 'Spot UV, varnish, edge finishing and final quality checks.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
];
