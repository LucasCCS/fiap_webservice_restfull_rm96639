import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_user_courses'})
export class UserCourses {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column({ length: 128 })
    description: string

    @Column()
    started_at: Date

    @Column()
    finished_at: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}