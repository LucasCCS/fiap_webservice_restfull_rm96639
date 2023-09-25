import { Module } from '@nestjs/common';
import { UserModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileModule } from './user_profile/user_profile.module';
import { UserCoursesModule } from './user_courses/user_courses.module';
import { UserSkillsModule } from './user_skills/user_skills.module';
import { CompanyModule } from './company/company.module';
import { JobModule } from './job/job.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'fiap',
      password: 'fiap',
      database: 'fiap',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UserProfileModule,
    UserCoursesModule,
    UserSkillsModule,
    CompanyModule,
    JobModule,
    // AuthModule,
  ],
  providers: [],
})
export class AppModule {}
