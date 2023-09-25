import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyDTO } from './dto/company.dto';
import { CompanyService } from './services/company.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('company')
@ApiTags('Companies')
export class CompanyController {

    constructor(
        private companyService: CompanyService
    ) {}

    @Post()
    create(@Body() companyDTO: CompanyDTO) {
        return this.companyService.create(companyDTO);
    }

    @Patch(':id')
    update(@Param(':id') id: number, @Body() companyDTO: CompanyDTO) {
        return this.companyService.update(id, companyDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.companyService.remove(id);
    }

    @Get()
    all() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.companyService.findOne(id);
    }
}
