import { getClientPhotoPath } from './photos';

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
    imageSrc: getClientPhotoPath('Designs by vigot 2', 0),
  },
  {
    id: 'material',
    number: '02',
    title: 'Material',
    description: 'SBS paperboard, kraft, duplex and specialised substrates selected for finish and function.',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 1),
  },
  {
    id: 'size',
    number: '03',
    title: 'Size',
    description: 'Tailored dimensions that fit your product, inserts and shipping needs.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 1),
  },
  {
    id: 'printing',
    number: '04',
    title: 'Printing',
    description: 'High-definition offset and digital printing for precise brand colour.',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 2),
  },
  {
    id: 'lamination',
    number: '05',
    title: 'Lamination',
    description: 'Matt, gloss, soft-touch and textured laminates for surface protection.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 2),
  },
  {
    id: 'foiling',
    number: '06',
    title: 'Foiling',
    description: 'Metallic and pigmented foil stamping for accents and logos.',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 3),
  },
  {
    id: 'embossing',
    number: '07',
    title: 'Embossing',
    description: 'Raised and recessed detailing that adds tactile depth.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 3),
  },
  {
    id: 'inserts',
    number: '08',
    title: 'Inserts',
    description: 'Die-cut cavities, EVA, foam and paperboard fittings for secure display.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 4),
  },
  {
    id: 'handles',
    number: '09',
    title: 'Handles',
    description: 'Rope, ribbon, metal and die-cut handle options for bags and boxes.',
    imageSrc: getClientPhotoPath('Mithai Box', 0),
  },
  {
    id: 'finishing',
    number: '10',
    title: 'Finishing',
    description: 'Spot UV, varnish, edge finishing and final quality checks.',
    imageSrc: getClientPhotoPath('Mithai Box', 1),
  },
];
