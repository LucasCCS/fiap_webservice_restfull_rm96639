import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserSkillsService } from './services/user_skills.service';
import { UserSkillsDTO } from './dto/user_skills.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserSkills')
@Controller('user-skills')
export class UserSkillsController {
    constructor(
        private userSkillsService: UserSkillsService
    ) {}

    @Post()
    create(@Body() userSkillsDTO: UserSkillsDTO) {
        return this.userSkillsService.create(userSkillsDTO);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() userSkillsDTO: UserSkillsDTO) {
        return this.userSkillsService.update(id, userSkillsDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userSkillsService.remove(id);
    }

    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.userSkillsService.findOne(id);
    }

    @Get()
    all() {
        return this.userSkillsService.findAll();
    }

}
