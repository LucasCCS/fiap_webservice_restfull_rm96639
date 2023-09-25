import { InjectRepository } from "@nestjs/typeorm";
import { UserProfile } from "../entities/user_profile.entity";
import { Repository } from "typeorm";
import { UserProfileDTO } from "../dto/user_profile.dto";

export class UserProfileService {
    constructor(
        @InjectRepository(UserProfile)
        private userProfileRepository: Repository<UserProfile>
    ) {}

    async create(userProfileDTO: UserProfileDTO): Promise<UserProfile> {
        return await this.userProfileRepository.save(userProfileDTO);
    }

    async update(id: number, userProfileDTO: UserProfileDTO): Promise<UserProfile> {
        await this.userProfileRepository.update({id}, userProfileDTO);

        return await this.userProfileRepository.findOne({ where: { id }});
    } 

    async remove(id: number): Promise<void> {
        await this.userProfileRepository.delete(id);
    }

    async findOne(id: number): Promise<UserProfile> {
        return await this.userProfileRepository.findOne({ where: { id }});
    }

    async findAll(): Promise<UserProfile[]> {
        return await this.userProfileRepository.find()
    }
}