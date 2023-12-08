import { Prisma } from '@prisma/client';

export const municipios: Prisma.MunicipiosCreateManyInput[] = [
  {
    id_municipio: 1,
    name: 'la paz',
    state_id: 3,
  },
  {
    id_municipio: 2,
    name: 'Los Cabos',
    state_id: 3,
  },
  {
    id_municipio: 3,
    name: 'Sinaloa',
    state_id: 25,
  },
  
];
