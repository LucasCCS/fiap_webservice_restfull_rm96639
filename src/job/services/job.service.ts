import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "../entities/job.entity";
import { Repository } from "typeorm";
import { JobDTO } from "../dto/job.dto";
import { User } from "src/user/entities/user.entity";
import { CompanyService } from "src/company/services/company.service";

@Injectable()
export class JobService {
    constructor(@InjectRepository(Job)
    private jobRepository: Repository<Job>,
    private companyService: CompanyService
    ) {}

    async create(user: User, jobDTO: JobDTO): Promise<Job> {

        const company = await this.companyService.findByUser(user);

        return await this.jobRepository.save({ company_id: company.id, ...jobDTO});
    }

    async update(id: number, user: User, jobDTO: JobDTO): Promise<Job> {

        const company = await this.companyService.findByUser(user);

        await this.jobRepository.update({ id, company_id: company.id }, jobDTO);

        return this.jobRepository.findOne({ where: { id } })
    }

    async remove(user: User, id: number): Promise<void> {
        const company = await this.companyService.findByUser(user);

        await this.jobRepository.delete({ id, company_id: company.id });
    }

    async findOne(id: number): Promise<Job> {
        return await this.jobRepository.findOne({ where: { id }});
    }

    async findAll(): Promise<Job[]> {
        return await this.jobRepository.find();
    }
}