import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';
import { DiarioModule } from './Diario/diario.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/diario'), UserModule, DiarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
