import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserCoursesDTO } from './dto/user_courses.dto';
import { UserCoursesService } from './services/user_courses.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { getUser } from 'src/user/user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('UserCourses')
@Controller('user-courses')
export class UserCoursesController {

    constructor(private userCoursesService: UserCoursesService) {}

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Cadastrar Curso' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type:'string', default: 'Curso de PHP Alura' },
                'description': { type:'string', default: 'Curso de desenvolvimento com PHP' },
            }
        }
    })
    create(@Body() userCoursesDTO: UserCoursesDTO, @getUser() user: User) {
        return this.userCoursesService.create(user, userCoursesDTO);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Edita Curso' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type:'string', default: 'Curso de PHP Alura' },
                'description': { type:'string', default: 'Curso de desenvolvimento com PHP' },
            }
        }
    })
    update(@Param(':id') id: number, @getUser() user: User, @Body() userCouresDTO: UserCoursesDTO) {
        return this.userCoursesService.update(id, user, userCouresDTO);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    remove(@Param('id') id: number, @getUser() user: User) {
        return this.userCoursesService.remove(user, id);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Lista Cursos' })
    @ApiBearerAuth('JWT-auth')
    all(@getUser() user: User) {
        return this.userCoursesService.findAll(user)
    }
    
    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Busca Curso' })
    findOne(@Param('id') id: number, @getUser() user: User) {
        return this.userCoursesService.findeOne(user, id);
    }
}
