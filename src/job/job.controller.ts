import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JobDTO } from './dto/job.dto';
import { JobService } from './services/job.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { getUser } from 'src/user/user.decorator';

@ApiTags('Jobs')
@Controller('job')
export class JobController {
    constructor(private jobService: JobService) {}

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Cadastrar vaga de emprego' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type: 'string', default: "Vaga para desenvolvedor PHP"},
                'description': { type: 'string', default: "Laravel, Cake PHP" }
            }
        }
    })
    create(@Body() jobDTO: JobDTO, @getUser() user: User) {
        return this.jobService.create(user, jobDTO);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Editar vaga de emprego' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id do usuário"
    })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type: 'string' },
                'description': { type: 'string' }
            }
        }
    })
    update(@Param('id') id: number, @getUser() user: User, @Body() jobDTO: JobDTO) {
        return this.jobService.update(id, user, jobDTO);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Deletar vaga de emprego específica' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id da vaga de emprego"
    })
    remove(@Param('id') id: number, @getUser() user: User) {
        return this.jobService.remove(user, id);
    }

    @Get()
    @ApiOperation({ summary: 'Listagem de vagas de emprego' })
    all() {
        return this.jobService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca vaga específica'})
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id da vaga de emprego"
    })
    findOne(@Param('id') id: number) {
        return this.jobService.findOne(id);
    }

}
