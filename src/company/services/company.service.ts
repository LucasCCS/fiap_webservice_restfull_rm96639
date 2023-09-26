import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyDTO } from "../dto/company.dto";
import { Company } from "../entities/company.entity";
import { User } from "src/user/entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company)
    private companyRepository: Repository<Company>) {}

    async create(user: User, companyDTO: CompanyDTO): Promise<Company> {
        return await this.companyRepository.save({user_id: user.id, ...companyDTO});
    }

    async update(user: User, companyDTO: CompanyDTO) {
        await this.companyRepository.update({ user_id: user.id }, companyDTO);

        return this.findByUser(user);
    }

    async remove(user: User): Promise<void> {
        await this.companyRepository.delete({ user_id: user.id });
    }

    async findOne(user: User, id: number): Promise<Company> {
        return await this.companyRepository.findOne({ where: { id, user_id: user.id } });
    }

    async findByUser(user): Promise<Company> {
        return await this.companyRepository.findOne({ where: { user_id: user.id } });
    }
}