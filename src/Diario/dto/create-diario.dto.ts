import { IsString } from "class-validator";

export class CreateDiarioDto {
    
    @IsString()
    titulo: string

    @IsString()
    descricao: string
    
}