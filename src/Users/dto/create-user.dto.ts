import { IsString } from "class-validator";
import { Role } from "src/Roles/role.enum";

export class CreateUserDto{
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsString()
    email: string;

    role: Role;

}