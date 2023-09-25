import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "../entities/job.entity";
import { Repository } from "typeorm";
import { JobDTO } from "../dto/job.dto";

@Injectable()
export class JobService {
    constructor(@InjectRepository(Job)
    private jobRepository: Repository<Job>
    ) {}

    async create(jobDTO: JobDTO): Promise<Job> {
        return await this.jobRepository.save(jobDTO);
    }

    async update(id: number, jobDTO: JobDTO): Promise<Job> {
        await this.jobRepository.update({ id }, jobDTO);

        return this.jobRepository.findOne({ where: { id } })
    }

    async remove(id: number): Promise<void> {
        await this.jobRepository.delete(id);
    }

    async findOne(id: number): Promise<Job> {
        return await this.jobRepository.findOne({ where: { id }});
    }

    async findAll(): Promise<Job[]> {
        return await this.jobRepository.find();
    }
}