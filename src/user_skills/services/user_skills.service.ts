import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserSkillsDTO } from "../dto/user_skills.dto";
import { UserSkills } from "../entities/user_skills.entity";

export class UserSkillsService {
    constructor(
        @InjectRepository(UserSkills)
        private userSkillsRepository: Repository<UserSkills>
    ) {}

    async create(userSkillsDTO: UserSkillsDTO): Promise<UserSkills> {
        return await this.userSkillsRepository.save(userSkillsDTO);
    }

    async update(id: number, userSkillsDTO: UserSkillsDTO): Promise<UserSkills> {
        await this.userSkillsRepository.update({id}, userSkillsDTO);

        return await this.userSkillsRepository.findOne({ where: { id }});
    }

    async remove(id: number): Promise<void> {
        await this.userSkillsRepository.delete(id);
    }

    async findOne(id: number): Promise<UserSkills> {
        return await this.userSkillsRepository.findOne({where: { id }});
    }

    async findAll(): Promise<UserSkills[]> {
        return this.userSkillsRepository.find();
    }
}