
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/Users/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string,pass: string,): Promise<{ access_token: string }> {
    const user = await this.usersService.findUser(username);
    const match = await bcrypt.compare(pass, user.password).then((result) =>result)

    if (!match) {
      throw new UnauthorizedException();
    }
    
    const payload = { sub: user._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
