import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { UserProfileDTO } from './dto/user_profile.dto';
import { UserProfileService } from './services/user_profile.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { getUser } from 'src/user/user.decorator';

@ApiTags('UserProfile')
@Controller('user-profile')
export class UserProfileController {
    constructor(private userProfileService: UserProfileService) {}

    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiBody({
        schema: {
            properties: { 
                'first_name': { type:'string', default: 'Lucas' },
                'last_name': { type:'string', default: 'Costa' },
                'phone': { type:'string', default: '(11) 99999-9999' },
                'email': { type:'string', default: 'lucas.costa@fiap.com.br' },
                'bio': { type:'string', default: 'Sua bio' },
            }
        }
    })
    @ApiOperation({ summary: 'Realiza cadastro na perfil de usuário' })
    @Post()
    create(@Body() userProfileDTO: UserProfileDTO, @getUser() user: User) {
        return this.userProfileService.create(user, userProfileDTO);
    }

    @Patch()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Atualiza perfil de usuário' })
    @ApiBody({
        schema: {
            properties: { 
                'phone': { type:'string', default: '(11) 99999-9999' },
                'bio': { type:'string', default: 'Sua bio' },
            }
        }
    })
    update(@Body() userProfileDTO: UserProfileDTO, @getUser() user: User) {
        return this.userProfileService.update(user,userProfileDTO);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Retorna perfil de usuário' })
    getProfile(@getUser() user: User) {
        return this.userProfileService.getProfile(user);
    }
}
