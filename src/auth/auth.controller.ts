import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { AuthGuard } from './auth.guard';

// @ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    signIn(@Body() authDTO: AuthDTO) {
      return this.authService.signIn(authDTO.username, authDTO.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    @ApiBearerAuth('JWT-auth') // This is the one that needs to match the name in main.ts
    getProfile(@Request() req) {
        return req.user;
    }
}
