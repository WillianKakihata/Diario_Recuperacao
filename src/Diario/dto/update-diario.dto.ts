import { IsString } from "class-validator";

export class UpdateDiarioDto {
    
    @IsString()
    titulo: string

    @IsString()
    descricao: string
    
}