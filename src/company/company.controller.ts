import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CompanyDTO } from './dto/company.dto';
import { CompanyService } from './services/company.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { getUser } from 'src/user/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('company')
@ApiTags('Companies')
export class CompanyController {

    constructor(
        private companyService: CompanyService
    ) {}

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Cadastrar Empresa' })
    @ApiBody({
        schema: {
            properties: { 
                'name': { type: 'string', default: "Alura"},
                'description': { type: 'string', default: "Maio escola de tecnologia do Brasil" },
                'phone': { type: 'string', default: "(00) 0000-0000" },
                'email': { type: 'string', default: "email@email.com" },
                'address': { type: 'string', default: "Logradouro" }
            }
        }
    })
    create(@Body() companyDTO: CompanyDTO, @getUser() user: User) {
        return this.companyService.create(user, companyDTO);
    }

    @Patch()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Edita empresa' })
    @ApiBody({
        schema: {
            properties: { 
                'name': { type: 'string', default: "Alura"},
                'description': { type: 'string', default: "Maio escola de tecnologia do Brasil" },
                'phone': { type: 'string', default: "(00) 0000-0000" },
                'email': { type: 'string', default: "email@email.com" },
                'address': { type: 'string', default: "Logradouro" }
            }
        }
    })
    update(@getUser() user: User, @Body() companyDTO: CompanyDTO) {
        return this.companyService.update(user, companyDTO);
    }

    @Delete()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Apaga empresa do usuário autenticado' })
    remove(number, @getUser() user: User) {
        return this.companyService.remove(user);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Retorna empresa do usuário autenticado' })
    get(@getUser() user: User) {
        return this.companyService.findByUser(user);
    }
}
