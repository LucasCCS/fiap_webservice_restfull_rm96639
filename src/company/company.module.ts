import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanyService } from './services/company.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company])
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
