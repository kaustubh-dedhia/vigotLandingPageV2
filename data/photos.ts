import { Project } from '@/data/projects';

export function getClientPhotoPath(folder: string, index: number): string {
  const folderMap: Record<string, string[]> = {
    'Designs by vigot 1': [
      '/client-photos/Designs by vigot 1/88B6CD7C-8A22-4FE0-9B9C-1E660128F4DC.PNG',
      '/client-photos/Designs by vigot 1/A5D1F0AB-2AE0-4EDB-9E04-9A00C0710785.PNG',
      '/client-photos/Designs by vigot 1/BDA93779-9FDE-4235-9106-B83852FD8590.PNG',
      '/client-photos/Designs by vigot 1/F951683E-2353-47C7-98C2-D75709258437.PNG',
    ],
    'Designs by vigot 2': [
      '/client-photos/Designs by vigot 2/10009026-58A4-4FA3-BEC0-902D5958565B.PNG',
      '/client-photos/Designs by vigot 2/6D146944-40C4-4C0B-8284-7AEAFFED36D7.PNG',
      '/client-photos/Designs by vigot 2/87CE475C-B6CF-4223-B2CD-28BBE34CA67B.PNG',
      '/client-photos/Designs by vigot 2/F26DF06F-C0AC-4FB6-871D-E80A7570CC65.PNG',
      '/client-photos/Designs by vigot 2/F3A7292C-4D34-449F-9183-6227E3175A9F.PNG',
    ],
    'Choclate box': [
      '/client-photos/Choclate box/43E7CEEE-1B92-42C4-A6EF-9C727432CF9A.PNG',
      '/client-photos/Choclate box/620C4E99-2E92-44BD-A885-7B3C460A85E3.PNG',
      '/client-photos/Choclate box/BA09BF0E-3EE5-4C6E-95A0-EEE4B8E1D794.jpg',
      '/client-photos/Choclate box/C86F8CB3-8D3F-46DB-A95D-923756CC7A61.PNG',
    ],
    'Cosmetic box': [
      '/client-photos/Cosmetic box/2DCB596D-57C1-4F1D-9E90-FFD7F3D41B22.PNG',
      '/client-photos/Cosmetic box/43DD0E57-4ADA-4E95-BB52-350713DD0CE2.PNG',
      '/client-photos/Cosmetic box/4CC416C6-FE68-493C-B8E3-23C39752EDC5.PNG',
      '/client-photos/Cosmetic box/AB0EAABF-C162-4773-BAD6-ADFC8FC6C6FF.PNG',
    ],
    'Games': [
      '/client-photos/Games/1B6C401B-3BE3-4C8B-9A98-31CE3B1A234A.PNG',
      '/client-photos/Games/792B4AC1-D36C-44EA-91A0-B83ED51BA516.PNG',
      '/client-photos/Games/7C3F2687-D06C-4616-A160-959A861235B3.PNG',
    ],
    'Hampers': [
      '/client-photos/Hampers/1EDAD81C-5DED-40E0-9A5A-771C1C86EF1C.PNG',
      '/client-photos/Hampers/456AFCCA-E40F-434C-9317-DA56EC665FC4.PNG',
      '/client-photos/Hampers/C3572672-97C6-4E55-9A81-85B87D1AEE80.PNG',
    ],
    'Mithai Box': [
      '/client-photos/Mithai Box/6F349490-02CA-4943-BAB4-0D9E0168CC71.PNG',
      '/client-photos/Mithai Box/92F70542-1779-4A1F-9BFF-83371977B028.PNG',
      '/client-photos/Mithai Box/96D82D55-C1BD-47F4-8A12-A146615EFEB8.PNG',
      '/client-photos/Mithai Box/B230BC23-E9CB-4ADE-86CF-C0A34A9275E5.PNG',
      '/client-photos/Mithai Box/CF5026CF-40F7-44DC-98F9-0F306BD4C9B8.PNG',
      '/client-photos/Mithai Box/F734DC77-0773-419A-AE25-D5A940D25C3B.PNG',
    ],
    'Paper bags': [
      '/client-photos/Paper bags/422CE74A-C862-4BCC-B4B3-1CC4C402D346.PNG',
      '/client-photos/Paper bags/475A829D-9BC4-43FF-947D-3D6A2B86DD01.PNG',
      '/client-photos/Paper bags/617837A0-27AF-471D-A20F-F58BA75CF2F6.PNG',
      '/client-photos/Paper bags/AE3EB875-D2B7-4E67-A6AA-45778456ED42.PNG',
      '/client-photos/Paper bags/FFACB59B-C655-4193-BC11-E9235F1B7944.PNG',
    ],
  };

  const list = folderMap[folder] || [];
  return list[index % list.length];
}

export function folderPhotos(folder: string): string[] {
  return [
    getClientPhotoPath(folder, 0),
    getClientPhotoPath(folder, 1),
    getClientPhotoPath(folder, 2),
    getClientPhotoPath(folder, 3),
    getClientPhotoPath(folder, 4),
    getClientPhotoPath(folder, 5),
    getClientPhotoPath(folder, 6),
    getClientPhotoPath(folder, 7),
  ].filter(Boolean);
}

export const designsByVigot1 = folderPhotos('Designs by vigot 1');
export const designsByVigot2 = folderPhotos('Designs by vigot 2');
export const allVigotDesigns = [...designsByVigot1, ...designsByVigot2];

export const heroImage = getClientPhotoPath('Designs by vigot 1', 0);

export const rigidBoxImage = getClientPhotoPath('Designs by vigot 2', 0);
export const mithaiImage = getClientPhotoPath('Mithai Box', 0);
export const mithaiSecondaryImages = [getClientPhotoPath('Mithai Box', 1), getClientPhotoPath('Mithai Box', 2)];

export const chocolateImages = [
  { src: getClientPhotoPath('Choclate box', 0), alt: 'Chocolate box front view', width: 'w-[35%]' },
  { src: getClientPhotoPath('Choclate box', 1), alt: 'Chocolate box detail', width: 'w-[25%]' },
  { src: getClientPhotoPath('Choclate box', 2), alt: 'Chocolate box open', width: 'w-[30%]' },
  { src: getClientPhotoPath('Choclate box', 3), alt: 'Chocolate box packaging', width: 'w-[22%]' },
];

export const gameImages = [
  { src: getClientPhotoPath('Games', 0), alt: 'Toy packaging box', className: 'col-span-6 md:col-span-5 aspect-[4/5]' },
  { src: getClientPhotoPath('Games', 1), alt: 'Board game box detail', className: 'col-span-6 md:col-span-4 md:col-start-8 aspect-[3/4]' },
  { src: getClientPhotoPath('Games', 2), alt: 'Game packaging stack', className: 'col-span-12 md:col-span-6 md:col-start-4 aspect-[16/10]', objectPosition: 'center 85%' as const, parallax: 0 },
];

export const beautyImages = [
  { src: getClientPhotoPath('Cosmetic box', 0), alt: 'Skincare packaging box', className: 'aspect-[3/4]', direction: 'left' as const, parallax: 25 },
  { src: getClientPhotoPath('Cosmetic box', 1), alt: 'Wellness beauty box', className: 'aspect-[4/5]', direction: 'right' as const, parallax: 40 },
  { src: getClientPhotoPath('Cosmetic box', 2), alt: 'Product reveal kit', className: 'aspect-[16/10]', direction: 'bottom' as const, parallax: 15 },
];

export const hamperHeroImage = { src: getClientPhotoPath('Hampers', 0), alt: 'Large gift hamper packaging' };
export const hamperCrops = [
  { src: getClientPhotoPath('Hampers', 1), alt: 'Hamper detail crop', className: 'aspect-square', from: 'top' as const },
  { src: getClientPhotoPath('Hampers', 2), alt: 'Festive hamper packaging', className: 'aspect-[4/5]', from: 'right' as const },
];

export const paperBagStripImages = folderPhotos('Paper bags');
export const paperBagLifestyleImages = [
  { src: getClientPhotoPath('Paper bags', 0), alt: 'Paper bag lifestyle shot', className: 'aspect-[4/5]', direction: 'left' as const },
  { src: getClientPhotoPath('Paper bags', 1), alt: 'Colourful paper bags', className: 'aspect-[16/10]', direction: 'right' as const },
];

export const selectedWorkProjects: Project[] = [
  {
    id: 'vigot-design-1',
    number: '01',
    category: 'DESIGNS BY VIGOT',
    format: 'Custom Box',
    material: 'Rigid Board',
    finish: 'Foil + Emboss',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 0),
    crops: [getClientPhotoPath('Designs by vigot 1', 1), getClientPhotoPath('Designs by vigot 1', 2)] as [string, string],
  },
  {
    id: 'vigot-design-2',
    number: '02',
    category: 'DESIGNS BY VIGOT',
    format: 'Luxury Packaging',
    material: 'Duplex Board',
    finish: 'Matte Laminate',
    imageSrc: getClientPhotoPath('Designs by vigot 1', 3),
    crops: [getClientPhotoPath('Designs by vigot 2', 0), getClientPhotoPath('Designs by vigot 2', 1)] as [string, string],
  },
  {
    id: 'vigot-design-3',
    number: '03',
    category: 'DESIGNS BY VIGOT',
    format: 'Rigid Set',
    material: 'SBS Paperboard',
    finish: 'Soft-touch',
    imageSrc: getClientPhotoPath('Designs by vigot 2', 2),
    crops: [getClientPhotoPath('Designs by vigot 2', 3), getClientPhotoPath('Designs by vigot 2', 4)] as [string, string],
  },
  {
    id: 'vigot-design-4',
    number: '04',
    category: 'FESTIVE GIFTING',
    format: 'Mithai Box',
    material: 'Food-safe Board',
    finish: 'Custom Print',
    imageSrc: getClientPhotoPath('Mithai Box', 0),
    crops: [getClientPhotoPath('Mithai Box', 1), getClientPhotoPath('Mithai Box', 2)] as [string, string],
  },
  {
    id: 'vigot-design-5',
    number: '05',
    category: 'CHOCOLATE',
    format: 'Chocolate Box',
    material: 'SBS Paperboard',
    finish: 'Soft-touch Laminate',
    imageSrc: getClientPhotoPath('Choclate box', 0),
    crops: [getClientPhotoPath('Choclate box', 1), getClientPhotoPath('Choclate box', 2)] as [string, string],
  },
  {
    id: 'vigot-design-6',
    number: '06',
    category: 'BEAUTY',
    format: 'Cosmetic Box',
    material: 'Art Paper',
    finish: 'Spot UV + Foil',
    imageSrc: getClientPhotoPath('Cosmetic box', 0),
    crops: [getClientPhotoPath('Cosmetic box', 1), getClientPhotoPath('Cosmetic box', 2)] as [string, string],
  },
];
