export interface Project {
  id: string;
  number: string;
  category: string;
  format: string;
  material: string;
  finish: string;
  imageSrc: string;
  crops: [string, string];
}

export const projectsHeading = ['SELECTED', 'PACKAGING', 'WORK'];

export const projects: Project[] = [
  {
    id: 'project-1',
    number: '01',
    category: 'FESTIVE GIFTING',
    format: 'Rigid Box',
    material: 'Duplex Board',
    finish: 'Foil + Emboss',
    imageSrc: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80',
    crops: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'project-2',
    number: '02',
    category: 'CHOCOLATE',
    format: 'Chocolate Box',
    material: 'SBS Paperboard',
    finish: 'Soft-touch Laminate',
    imageSrc: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    crops: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'project-3',
    number: '03',
    category: 'BEAUTY',
    format: 'Cosmetic Box',
    material: 'Art Paper',
    finish: 'Spot UV + Foil',
    imageSrc: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    crops: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'project-4',
    number: '04',
    category: 'HAMPERS',
    format: 'Gift Hamper',
    material: 'Kraft + Duplex',
    finish: 'Ribbon Handle',
    imageSrc: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80',
    crops: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'project-5',
    number: '05',
    category: 'PAPER BAGS',
    format: 'Carry Bag',
    material: 'Coloured Kraft',
    finish: 'Cotton Handle',
    imageSrc: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80',
    crops: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    ],
  },
];
