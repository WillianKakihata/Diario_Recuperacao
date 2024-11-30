import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UserModule } from 'src/Users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../Roles/roles.guard';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '38500s' },
    }),
  ],
  providers: [AuthService, RolesGuard ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
