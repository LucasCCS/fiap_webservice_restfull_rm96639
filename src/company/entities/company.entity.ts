import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tbl_company')
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @PrimaryColumn()
    user_id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    address: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}