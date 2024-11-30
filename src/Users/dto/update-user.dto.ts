import { IsOptional, IsString } from "class-validator";
import { Role } from "src/Roles/role.enum";

export class UpdateUserDto{

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsOptional()
    role: Role;
}