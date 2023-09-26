import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserSkillsService } from './services/user_skills.service';
import { UserSkillsDTO } from './dto/user_skills.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { getUser } from 'src/user/user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('UserSkills')
@Controller('user-skills')
export class UserSkillsController {
    constructor(
        private userSkillsService: UserSkillsService
    ) {}

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Cadastra habilidade' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type:'string', default: 'Kafka' },
            }
        }
    })
    create(@Body() userSkillsDTO: UserSkillsDTO, @getUser() user: User) {
        return this.userSkillsService.create(user, userSkillsDTO);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Edita habilidade' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type:'string', default: 'Kafka' },
            }
        }
    })
    update(@Param('id') id: number, @getUser() user: User, @Body() userSkillsDTO: UserSkillsDTO) {
        return this.userSkillsService.update(id, user, userSkillsDTO);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Apaga habilidades' })
    remove(@Param('id') id: number, @getUser() user: User) {
        return this.userSkillsService.remove(user, id);
    }

    @Get(':id') 
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Busca habilidade' })
    findOne(@Param('id') id: number, @getUser() user: User) {
        return this.userSkillsService.findOne(user, id);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Lista habilidades' })
    all(@getUser() user: User) {
        return this.userSkillsService.findAll(user);
    }

}
