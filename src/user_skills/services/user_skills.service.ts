import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserSkillsDTO } from "../dto/user_skills.dto";
import { UserSkills } from "../entities/user_skills.entity";
import { User } from "src/user/entities/user.entity";

export class UserSkillsService {
    constructor(
        @InjectRepository(UserSkills)
        private userSkillsRepository: Repository<UserSkills>
    ) {}

    async create(user: User, userSkillsDTO: UserSkillsDTO): Promise<UserSkills> {
        return await this.userSkillsRepository.save({ user_id: user.id, ...userSkillsDTO});
    }

    async update(id: number, user: User, userSkillsDTO: UserSkillsDTO): Promise<UserSkills> {
        await this.userSkillsRepository.update({id, user_id: user.id}, userSkillsDTO);

        return await this.userSkillsRepository.findOne({ where: { id }});
    }

    async remove(user: User, id: number): Promise<void> {
        await this.userSkillsRepository.delete({ id, user_id: user.id});
    }

    async findOne(user: User, id: number): Promise<UserSkills> {
        return await this.userSkillsRepository.findOne({where: { id, user_id: user.id }});
    }

    async findAll(user: User): Promise<UserSkills[]> {
        return this.userSkillsRepository.find({ where: {user_id: user.id} });
    }
}