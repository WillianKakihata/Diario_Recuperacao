
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Diarios, DiariosSchema } from './schemas/diario.schema';
import { DiarioService } from './diario.service';
import { DiarioController } from './diario.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Diarios.name, schema: DiariosSchema}]),
  ],
  controllers: [DiarioController],
  providers: [DiarioService],
  exports: [DiarioService],
})
export class DiarioModule {}
