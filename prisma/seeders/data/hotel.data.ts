import { Prisma } from '@prisma/client';

export const hotels: Prisma.HotelsCreateManyInput[] = [
  {
    
    name: 'Bahia Plateada',
    description: 'hotel con vista al mar y acceso dirrecto a playa',
    id_municipio: 3,
  },
  {
    
    name: 'Seven Perls',
    description: 'hotel con vista al mar y acceso dirrecto a playa',
    id_municipio: 3,
  },
  {
    name: 'Bahia Norte',
    description: 'hotel con vista al mar y acceso dirrecto a playa',
    id_municipio: 3,
  },
  
];
