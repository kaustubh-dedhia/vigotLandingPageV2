export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const processHeading = ['FROM IDEA', 'TO FINISHED', 'PACKAGING'];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your product, brand and what the packaging needs to achieve.',
    imageSrc: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team translates your requirements into engineered structural and visual concepts.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    title: 'Sample',
    description: 'A physical prototype lets you test fit, finish and feel before production.',
    imageSrc: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'Produce',
    description: 'Precision printing, die-cutting, assembly and quality control at scale.',
    imageSrc: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Packed, inspected and shipped ready for your warehouse or retail launch.',
    imageSrc: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80',
  },
];
