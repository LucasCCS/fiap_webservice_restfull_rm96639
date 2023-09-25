import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSkills } from './entities/user_skills.entity';
import { UserSkillsController } from './user_skills.controller';
import { UserSkillsService } from './services/user_skills.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserSkills])
    ],
    providers: [UserSkillsService],
    controllers: [UserSkillsController]
})
export class UserSkillsModule {}
