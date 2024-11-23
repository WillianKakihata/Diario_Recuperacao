import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { DiarioService } from "./diario.service";
import { CreateDiarioDto } from "./dto/create-diario.dto";
import { Diarios } from "./schemas/diario.schema";
import { UpdateDiarioDto } from "./dto/update-diario.dto";
import { AuthGuard } from "src/Auth/auth.guard";

@UseGuards(AuthGuard)
@Controller('diarios')
export class DiarioController {
    constructor(private readonly DiarioService: DiarioService){}

    @Post()
    async create(@Body() CreateDiarioDto: CreateDiarioDto): Promise<Diarios> {
        try {
            return this.DiarioService.create(CreateDiarioDto)
        } catch (error) {
            throw new HttpException({"message": "ERRO AO CRIAR UM REGISTRO NO DIARIO"}, HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    async findAll(): Promise<Diarios[]>{
        try {
            return this.DiarioService.findAll()
        } catch (error) {
            throw new HttpException({"message": "ERRO AO ENCONTRAR OS REGISTROS"}, HttpStatus.BAD_REQUEST) 
        }
    }

    @Get(':id')
    FindOne(@Param('id') id: string): Promise<Diarios>{
        try {
            return this.DiarioService.findById(id)
        } catch (error) {
            throw new HttpException({"message": "ERRO AO ENCONTRAR O DECK POR ID"}, HttpStatus.BAD_REQUEST) 
        }
    }

    @Post(':id')
    @HttpCode(200)
    update(@Param('id') id: string, @Body() UpdateCardsDto: UpdateDiarioDto){
            try {
                return this.DiarioService.update(id, UpdateCardsDto)
            } catch (error) {
                throw new HttpException({"message": "ERRO AO ATUALIZAR O REGISTRO"}, HttpStatus.BAD_REQUEST) 
            }
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        try {
            return this.DiarioService.delete(id);
        } catch (error) {
            throw new HttpException({"message": "ERRO AO DELETAR O REGISTRO DO DIARIO"}, HttpStatus.BAD_REQUEST) 
        }
    }


}