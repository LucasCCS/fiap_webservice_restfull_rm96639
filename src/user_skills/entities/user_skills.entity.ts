import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_user_skills' })
export class UserSkills {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @PrimaryColumn()
    user_id: number;

    @Column()
    title: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}