import { PrismaClient } from '@prisma/client';
import { usuario } from './data/user.data';
import { hotels } from './data/hotel.data';
import { states } from './data/states.data';
import { municipios } from './data/municipios.data';
import { rooms } from './data/rooms.data';

const prisma = new PrismaClient();

async function main() {
  await prisma.states.createMany({
    data: states,
  });

  await prisma.municipios.createMany({
    data: municipios,
  });


  console.log("insertando hoteles")
  await prisma.hotels.createMany({
    data: hotels,
  });

  console.log("insertando usuarios")
  await prisma.users.createMany({
    data: usuario,
  });
  
  
  await prisma.rooms.createMany({
    data: rooms,
  });
  console.log("fin de la funcion ")
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
