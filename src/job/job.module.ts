import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { JobService } from './services/job.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job])
  ],
  providers: [JobService],
  controllers: [JobController]
})
export class JobModule {}
