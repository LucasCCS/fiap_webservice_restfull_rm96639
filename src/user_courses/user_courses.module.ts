import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourses } from './entities/user_courses.entity';
import { UserCoursesController } from './user_courses.controller';
import { UserCoursesService } from './services/user_courses.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserCourses])],
    providers: [UserCoursesService],
    controllers: [UserCoursesController],
})
export class UserCoursesModule {}
