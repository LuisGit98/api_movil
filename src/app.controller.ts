import { Controller, Get } from '@nestjs/common';

import{PrismaService} from '../prisma/prisma.service'
import { AppService } from './app.service'; 


@Controller('api')
export class EstadosController {
  constructor(private  app: PrismaService) {}

  @Get('/munis')
  async getMunis() {
    const munis = await this.app.municipios.findMany();
    return { munis }; 
  }


  @Get('/hotels')
  async getHotels(){
    const hotels = await this.app.hotels.findMany()
    return hotels
  }
  





  
}