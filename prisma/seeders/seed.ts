import { PrismaClient } from '@prisma/client';
import { usuario } from './data/user.data';
import { hotels } from './data/hotel.data';


const prisma = new PrismaClient();

async function main() {
  console.log("insertando hoteles")
  await prisma.hotels.createMany({
    data: hotels,
  });

  console.log("insertando usuarios")
  await prisma.users.createMany({
    data: usuario,
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
