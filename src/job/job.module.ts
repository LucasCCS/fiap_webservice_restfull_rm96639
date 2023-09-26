import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { JobService } from './services/job.service';
import { CompanyService } from 'src/company/services/company.service';
import { Company } from 'src/company/entities/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    TypeOrmModule.forFeature([Job]),
  ],
  providers: [JobService, CompanyService],
  controllers: [JobController]
})
export class JobModule {}
