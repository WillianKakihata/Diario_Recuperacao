import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyExistsException extends HttpException{
    constructor(){
        super('Usuário já existe no banco de dados', HttpStatus.BAD_REQUEST)
    }
}