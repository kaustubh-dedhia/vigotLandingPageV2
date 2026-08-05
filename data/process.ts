import { getClientPhotoPath } from './photos';

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
    imageSrc: getClientPhotoPath('Designs by vigot 1', 0),
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team translates your requirements into engineered structural and visual concepts.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 0),
  },
  {
    number: '03',
    title: 'Sample',
    description: 'A physical prototype lets you test fit, finish and feel before production.',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 2),
  },
  {
    number: '04',
    title: 'Produce',
    description: 'Precision printing, die-cutting, assembly and quality control at scale.',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 2),
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Packed, inspected and shipped ready for your warehouse or retail launch.',
    imageSrc: getClientPhotoPath('Mithai Box', 0),
  },
];
