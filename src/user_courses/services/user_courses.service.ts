import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCourses } from "../entities/user_courses.entity";
import { Repository } from "typeorm";
import { UserCoursesDTO } from "../dto/user_courses.dto";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class UserCoursesService {
    constructor(
        @InjectRepository(UserCourses)
        private userCoursesRepository: Repository<UserCourses>
    ) {}

    async create(user: User, userCoursesDTO: UserCoursesDTO): Promise<UserCourses> {
        return await this.userCoursesRepository.save({ user_id: user.id, ...userCoursesDTO});
    }

    async update(id: number, user: User, userCoursesDTO: UserCoursesDTO): Promise<UserCourses> {
        await this.userCoursesRepository.update({id, user_id: user.id}, userCoursesDTO);

        return this.userCoursesRepository.findOne({ where: { id }});
    }

    async remove(user: User, id: number): Promise<void> {
        await this.userCoursesRepository.delete({ id, user_id: user.id })
    }

    async findeOne(user: User, id: number): Promise<UserCourses> {
        return this.userCoursesRepository.findOne({ where: { id, user_id: user.id }});
    }

    async findAll(user: User): Promise<UserCourses[]> {
        return this.userCoursesRepository.find({ where: { user_id: user.id } })
    }
}