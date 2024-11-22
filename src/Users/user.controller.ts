import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserAlreadyExistsException } from "./exceptions/user-already-exists.exceptions";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UsersController {
    constructor(private readonly UserService: UserService){}

    @Post()
    async create(@Body() CreateUserDto: CreateUserDto){
        try {
            if (await this.UserService.create(CreateUserDto)){
                return `Usuário criado no banco de dados`
            }else{
                throw new UserAlreadyExistsException();
            }
        } catch (error) {
            if(error instanceof UserAlreadyExistsException) throw new UserAlreadyExistsException();
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    @Post(':username')
    @HttpCode(200)
    async update(@Param('username') username: string, @Body() UpdateUserDto: UpdateUserDto){
        try {
            const id = await this.UserService.findUser(username).then((user) => user._id);
            if (await this.UserService.update(id.toString(), UpdateUserDto))
                return `Usuario atualizado com sucesso`
        } catch (error) {
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post(':username')
    @HttpCode(204)
    async delete(@Param('username') username: string){
        try {
            const id = await this.UserService.findUser(username).then((user) => user._id)
            if (await this.UserService.delete(id.toString()))
                return `Usuario deletado com sucesso`
        } catch (error) {
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)         
        }
    }

    @Get()
    async findAll(){
        try {
            const users = await this.UserService.findAll()
            return users
        } catch (error) {
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)        
        }   
    }

    @Get(':username')
    async findByID(@Param('username') id: string){
        try {
            const users = await this.UserService.findById(id)
            return users    
        } catch (error) {
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}