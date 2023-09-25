import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCourses } from "../entities/user_courses.entity";
import { Repository } from "typeorm";
import { UserCoursesDTO } from "../dto/user_courses.dto";

@Injectable()
export class UserCoursesService {
    constructor(
        @InjectRepository(UserCourses)
        private userCoursesRepository: Repository<UserCourses>
    ) {}

    async create(userCoursesDTO: UserCoursesDTO): Promise<UserCourses> {
        return await this.userCoursesRepository.save(userCoursesDTO);
    }

    async update(id: number, userCoursesDTO: UserCoursesDTO): Promise<UserCourses> {
        await this.userCoursesRepository.update({id}, userCoursesDTO);

        return this.userCoursesRepository.findOne({ where: { id }});
    }

    async remove(id: number): Promise<void> {
        await this.userCoursesRepository.delete(id)
    }

    async findeOne(id: number): Promise<UserCourses> {
        return this.userCoursesRepository.findOne({ where: { id }});
    }

    async findAll(): Promise<UserCourses[]> {
        return this.userCoursesRepository.find();
    }
}