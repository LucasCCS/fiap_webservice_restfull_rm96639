import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneBy({ where: { 'username': username }});
        
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        
        const payload = { sub: user.id, username: user.username };

        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }
}
