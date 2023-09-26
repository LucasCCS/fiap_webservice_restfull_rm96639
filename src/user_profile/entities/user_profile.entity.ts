import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_user_profile' })
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @PrimaryColumn()
    user_id: number;

    @Column({ length: 128 })
    first_name: string

    @Column({ length: 128 })
    last_name: string

    @Column({ length: 15 })
    phone: string

    @Column({ length: 128 })
    email: string

    @Column({ length: 256 })
    bio: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}