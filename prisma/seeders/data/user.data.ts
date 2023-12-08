import { Prisma } from '@prisma/client';

export const usuario: Prisma.UsersCreateManyInput[] = [
  {
    name: 'jose alfredo',
    last_name: 'jijmenez',
    curp: 'menl957dddkojojoji',
    password: 'joseJime',
    phone_number: '6121811190',

  },

  {
    name: 'vicente alfredo',
    last_name: 'jijmenez',
    curp: 'menl997dddkojojoji',
    password: 'joseJime',
    phone_number: '6121810190',
  },

  {
    name: 'yuridia ',
    last_name: 'jijmenez',
    curp: 'fenl987dddkojojoji',
    password: 'joseJime',
    phone_number: '6121810390',
  },

  {
    name: 'manuela alejandra',
    last_name: 'peres',
    curp: 'menl987dddkojojoji',
    password: 'joseJime',
    phone_number: '6121820190',
  },
  {
    name: 'diana',
    last_name: 'fernandez',
    curp: 'menl387dddkojojoji',
    password: 'joseJime',
    phone_number: '6121820110',
  },
  {
    name: 'Ricardo ',
    last_name: 'zalinas',
    curp: 'denlw87dddeojojoji',
    password: 'joseJime',
    phone_number: '6121820130',
  },
  {
    name: 'jonatan ',
    last_name: 'pliego',
    curp: 'denlw87dddeojojoji',
    password: 'joseJime',
    phone_number: '6141820110',
  },
];


