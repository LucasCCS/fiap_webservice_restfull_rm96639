import { Column, CreateDateColumn, PrimaryGeneratedColumn, Repository, UpdateDateColumn } from "typeorm";

export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}