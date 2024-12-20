import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Diarios } from "./schemas/diario.schema";
import { CreateDiarioDto } from "./dto/create-diario.dto";
import { UpdateDiarioDto } from "./dto/update-diario.dto";
import { CacheService } from "src/Cache/cache.service";

export class DiarioService{
    constructor(@InjectModel(Diarios.name) private readonly DiariosModel: Model<Diarios>,
                    private readonly cacheService: CacheService,) {}

    async create(CreateDiarioDto: CreateDiarioDto): Promise<Diarios> {
        const cards = new this.DiariosModel(CreateDiarioDto)
        return await cards.save()
    }

    async findAll(): Promise<Diarios[]>{
        return await this.DiariosModel.find().exec()
    }

    async findById(id: String): Promise<Diarios> {
        try {
            return await this.DiariosModel.findById(id).exec()
        } catch (error) {
            return null
        }
    }

    async findAllCache(): Promise<any> {
        const cacheKey = 'id'
        const registro =  await this.cacheService.getCache<Diarios[]>(cacheKey, () => 
            this.DiariosModel.find().exec())
    }

    async update(id: string, UpdateDiarioDto: UpdateDiarioDto): Promise<Diarios> {
        try {
            return await this.DiariosModel.findByIdAndUpdate(id, UpdateDiarioDto, {new: true});
        } catch (error) {
            return null;
        }
    }

    async delete(id: string) {
        try {
            return await this.DiariosModel.findByIdAndDelete(id)
        } catch (error) {
            return null
        }
    }
    
}