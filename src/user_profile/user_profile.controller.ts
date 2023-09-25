import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserProfileDTO } from './dto/user_profile.dto';
import { UserProfileService } from './services/user_profile.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserProfile')
@Controller('user-profile')
export class UserProfileController {
    constructor(private userProfileService: UserProfileService) {}

    @Post()
    create(@Body() userProfileDTO: UserProfileDTO) {
        return this.userProfileService.create(userProfileDTO);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() userProfileDTO: UserProfileDTO) {
        return this.userProfileService.update(id, userProfileDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userProfileService.remove(id);
    }

    @Get()
    all() {
        return this.userProfileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userProfileService.findOne(id);
    }
}
