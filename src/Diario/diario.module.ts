
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Diarios, DiariosSchema } from './schemas/diario.schema';
import { DiarioService } from './diario.service';
import { DiarioController } from './diario.controller';
import { CacheModule as cacheModuleNest} from '@nestjs/cache-manager';
import { cacheModule } from 'src/Cache/cache.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Diarios.name, schema: DiariosSchema}]),
    cacheModuleNest.register({ttl: 90000000, isGlobal: true}),
    cacheModule
  ],
  controllers: [DiarioController],
  providers: [DiarioService],
  exports: [DiarioService],
})
export class DiarioModule {}
