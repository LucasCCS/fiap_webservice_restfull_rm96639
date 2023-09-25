import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyDTO } from "../dto/company.dto";
import { Company } from "../entities/company.entity";

export class CompanyService {
    constructor(@InjectRepository(Company)
    private companyRepository: Repository<Company>) {}

    async create(companyDTO: CompanyDTO): Promise<Company> {
        return await this.companyRepository.save(companyDTO);
    }

    async update(id: number, companyDTO: CompanyDTO) {
        await this.companyRepository.update({ id }, companyDTO);

        return await this.companyRepository.findOne({ where: { id }});
    }

    async remove(id: number): Promise<void> {
        await this.companyRepository.delete(id);
    }

    async findOne(id: number): Promise<Company> {
        return await this.companyRepository.findOne({ where: { id } });
    }

    async findAll(): Promise<Company[]> {
        return await this.companyRepository.find();
    }
}