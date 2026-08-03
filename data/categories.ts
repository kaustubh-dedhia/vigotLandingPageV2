export interface PackagingCategory {
  id: string;
  number: string;
  title: string[];
  subtitle?: string;
  description?: string;
  benefits: string[];
  imageSrc: string;
  secondaryImages?: string[];
  theme: 'light' | 'dark' | 'split';
}

export const categories: PackagingCategory[] = [
  {
    id: 'rigid-boxes',
    number: '01',
    title: ['WHY', 'RIGID', 'BOXES'],
    subtitle: 'PREMIUM PACKAGING',
    description: 'More than packaging. It is your customer’s first brand impression.',
    benefits: [
      'Premium first impression',
      'Superior product protection',
      'Enhances perceived brand value',
      'Fully customisable',
      'Reusable and memorable',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80',
    theme: 'light',
  },
  {
    id: 'mithai',
    number: '02',
    title: ['MITHAI &', 'DRY FRUIT', 'BOXES'],
    subtitle: 'FESTIVE GIFTING',
    description: '',
    benefits: [
      'Food-safe inserts and cavities',
      'Custom sizes and branding',
      'Suitable for festive and wedding gifting',
      'Premium compartment packaging',
      'Elegant gift and hamper formats',
      'Custom printing and finishing',
      'Reusable luxury packaging',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    ],
    theme: 'split',
  },
];
