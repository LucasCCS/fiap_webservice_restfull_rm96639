import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user_profile.entity';
import { UserProfileController } from './user_profile.controller';
import { UserProfileService } from './services/user_profile.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserProfile]),
    ],
    providers: [UserProfileService],
    controllers: [UserProfileController]
})
export class UserProfileModule {}
