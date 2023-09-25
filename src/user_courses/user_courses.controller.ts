import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserCoursesDTO } from './dto/user_courses.dto';
import { UserCoursesService } from './services/user_courses.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserCourses')
@Controller('user-courses')
export class UserCoursesController {

    constructor(private userCoursesService: UserCoursesService) {}

    @Post()
    create(@Body() userCoursesDTO: UserCoursesDTO) {
        return this.userCoursesService.create(userCoursesDTO);
    }

    @Patch(':id')
    update(@Param(':id') id: number, @Body() userCouresDTO: UserCoursesDTO) {
        return this.update(id, userCouresDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userCoursesService.remove(id);
    }

    @Get()
    all() {
        return this.userCoursesService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userCoursesService.findeOne(id);
    }
}
