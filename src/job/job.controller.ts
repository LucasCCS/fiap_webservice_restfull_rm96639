import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JobDTO } from './dto/job.dto';
import { JobService } from './services/job.service';

@ApiTags('Jobs')
@Controller('job')
export class JobController {
    constructor(private jobService: JobService) {}

    @Post()
    @ApiOperation({ summary: 'Cadastrar vaga de emprego' })
    @ApiBody({
        schema: {
            properties: { 
                'title': { type: 'string' },
                'description': { type: 'string' }
            }
        }
    })
    create(@Body() jobDTO: JobDTO) {
        return this.jobService.create(jobDTO);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Editr vaga de emprego' })
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
    update(@Param('id') id: number, @Body() jobDTO: JobDTO) {
        return this.jobService.update(id, jobDTO);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar vaga de emprego específica' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id da vaga de emprego"
    })
    remove(@Param('id') id: number) {
        return this.jobService.remove(id);
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
