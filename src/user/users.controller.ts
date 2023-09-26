import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './services/users.service';
import { ApiBody, ApiExcludeController, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserUpdateDTO } from './dto/user.update.dto';

@ApiTags('Users')
@ApiExcludeController()
@Controller('users')
export class UsersController {

    constructor(private userService: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Cadastrar usuário' })
    @ApiBody({
        schema: {
            properties: { 
                'username': { type: 'string', default: "fiap" },
                'password': { type: 'string', default: "fiap" }
            }
        }
    })
    create(@Body() userDTO: UserDTO) {
        return this.userService.create(userDTO);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Editar usuário' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id do usuário"
    })
    @ApiBody({
        schema: {
            properties: { 
                'password': { type: 'string' }
            }
        }
    })
    update(@Param('id') id: number, @Body() userUpdateDTO: UserUpdateDTO) {
        return this.userService.update(id, userUpdateDTO);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca usuário específico' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id do usuário"
    })
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: 'Listagem de usuários' })
    all() {
        return this.userService.findAll();
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Deletar usuário específico' })
    @ApiParam({
        name: "id",
        type: 'number',
        description: "Id do usuário"
    })
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }
}
