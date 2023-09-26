import { UserProfile } from "src/user_profile/entities/user_profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_user_courses'})
export class UserCourses {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @PrimaryColumn()
    user_id: number;

    @Column({ length: 64 })
    title: string

    @Column({ length: 128 })
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}