import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDTO } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneBy({ where: { 'username': username }});

        const isMatch = await bcrypt.compare(pass, user?.password);
        
        if (!isMatch) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        
        const payload = { sub: user.id, username: user.username };

        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(userDTO: UserDTO): Promise<User> {
        return await this.userService.create(userDTO);

    }
}
