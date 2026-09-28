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
    imageSrc: '/client-photos/rigid-box-hero.PNG',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team translates your requirements into engineered structural and visual concepts.',
    imageSrc: '/client-photos/Mithai Box-drive/660255A2-5912-4349-8803-0E19A2B5B2F2.PNG',
  },
  {
    number: '03',
    title: 'Sample',
    description: 'A physical prototype lets you test fit, finish and feel before production.',
    imageSrc: '/client-photos/Choclate box-drive/C86F8CB3-8D3F-46DB-A95D-923756CC7A61.PNG',
  },
  {
    number: '04',
    title: 'Produce',
    description: 'Precision printing, die-cutting, assembly and quality control at scale.',
    imageSrc: '/client-photos/Cosmetic box-drive/2DCB596D-57C1-4F1D-9E90-FFD7F3D41B22.PNG',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Packed, inspected and shipped ready for your warehouse or retail launch.',
    imageSrc: '/client-photos/Hampers-drive/1EDAD81C-5DED-40E0-9A5A-771C1C86EF1C.PNG',
  },
];
