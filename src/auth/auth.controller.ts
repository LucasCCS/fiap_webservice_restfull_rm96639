import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { UserDTO } from 'src/user/dto/user.dto';
import { getUser } from 'src/user/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/users.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userSerivce: UserService) {}

    @Post('login')
    @ApiOperation({ summary: 'Realiza autenticação na API' })
    @ApiBody({
        schema: {
            properties: { 
                'username': { type:'string', default: 'fiap' },
                'password': { type:'string', default: 'fiap' }
            }
        }
    })
    signIn(@Body() authDTO: AuthDTO) {
      return this.authService.signIn(authDTO.username, authDTO.password);
    }

    @Post('signup')
    @ApiOperation({ summary: 'Realiza cadastro na API' })
    @ApiBody({
        schema: {
            properties: { 
                'username': { type:'string', default: 'fiap' },
                'password': { type:'string', default: 'fiap' }
            }
        }
    })
    signup(@Body() userDTO: UserDTO) {
        return this.authService.signUp(userDTO);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Retorna usuário autenticado' })
    @ApiBearerAuth('JWT-auth')
    account(@getUser() user: User) {
        return this.userSerivce.findOne(user.id)
    }
}
