import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/diario'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
