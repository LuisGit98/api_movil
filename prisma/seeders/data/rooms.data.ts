import { Prisma } from '@prisma/client';

enum typeRoom {
  SENCILLA = 'sencilla',
  DOBLE = 'doble',
  SUITE = 'suite',
}

export const rooms: Prisma.RoomsCreateManyInput[] = [

  {
    room_number: 1,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 2,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 3,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 4,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },

  {
    room_number: 5,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 6,
    id_hotel: 1,
    type: typeRoom.SUITE,
  
  },
  {
    room_number: 7,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },

  {
    room_number: 8,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 9,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 10,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
    id_room: 2,
  },
  {
    room_number: 11,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 12,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 13,
    id_hotel: 1,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 14,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 15,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },
  
  {
    room_number: 16,
    id_hotel: 1,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 1,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 2,
    id_hotel: 2,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 3,
    id_hotel: 2,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 4,
    id_hotel: 2,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 5,
    id_hotel: 2,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 6,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 7,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 8,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 9,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 10,
    id_hotel: 2,
    type: typeRoom.DOBLE,
  
  },

  {
    room_number: 1,
    id_hotel: 3,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 2,
    id_hotel: 3,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 3,
    id_hotel: 3,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 4,
    id_hotel: 3,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 5,
    id_hotel: 3,
    type: typeRoom.SENCILLA,
  
  },
  {
    room_number: 6,
    id_hotel: 3,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 7,
    id_hotel: 3,
    type: typeRoom.DOBLE,
  
  },
  {
    room_number: 8,
    id_hotel: 3,
    type: typeRoom.SUITE,
  
  },
  {
    room_number: 9,
    id_hotel: 3,
    type: typeRoom.SUITE,
  
  },
  {
    room_number: 10,
    id_hotel: 3,
    type: typeRoom.SUITE,
  
  },
];
