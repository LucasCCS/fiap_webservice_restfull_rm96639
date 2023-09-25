import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "../dto/user.dto";
import { User } from "../entities/user.entity";
import { FindOneOptions, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserUpdateDTO } from "../dto/user.update.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async create(userDTO: UserDTO): Promise<User> {
        return await this.usersRepository.save(userDTO);
    }

    async update(id: number, userUpdateDTO: UserUpdateDTO): Promise<User> {
        await this.usersRepository.update({id}, userUpdateDTO)

        return this.usersRepository.findOne({ where: { id } })
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne({ where: { id } })
    }

    async findOneBy(where: FindOneOptions) {
        return await this.usersRepository.findOne(where)
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }
}