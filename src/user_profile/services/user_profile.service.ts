import { InjectRepository } from "@nestjs/typeorm";
import { UserProfile } from "../entities/user_profile.entity";
import { Repository } from "typeorm";
import { UserProfileDTO } from "../dto/user_profile.dto";
import { Injectable, Scope } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";

@Injectable({ scope: Scope.REQUEST })
export class UserProfileService {
    constructor(
        @InjectRepository(UserProfile)
        private userProfileRepository: Repository<UserProfile>,
    ) {}

    async create(user: User, userProfileDTO: UserProfileDTO): Promise<UserProfile> {
        console.log('USER=ID: ', user.id);

        return await this.userProfileRepository.save({ user_id: user.id, ...userProfileDTO});
    }

    async update(user: User, userProfileDTO: UserProfileDTO): Promise<UserProfile> {
        await this.userProfileRepository.update({user_id: user.id}, userProfileDTO);

        return await this.userProfileRepository.findOne({ where: { user_id: user.id }});
    }

    async getProfile(user: User): Promise<UserProfile> {
        return await this.userProfileRepository.findOne({ where: {user_id: user.id }});
    }
}