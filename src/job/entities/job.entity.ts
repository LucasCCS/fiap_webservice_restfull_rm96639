import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_job' })
export class Job {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @PrimaryColumn()
    company_id: number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}