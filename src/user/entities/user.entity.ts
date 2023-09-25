import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128 })
    username: string

    @Column({ length: 128 })
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}