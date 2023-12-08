import { Module } from '@nestjs/common';
import { EstadosController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService}from '../prisma/prisma.service'

@Module({
  imports: [],
  controllers: [EstadosController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
