import { Injectable } from "@nestjs/common";
import { User } from "./schemas/users.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}

    async create(CreateUserDto: CreateUserDto): Promise<boolean>{
        if(await this.findUser(CreateUserDto.username)) return false;
        const user = new this.userModel(CreateUserDto);
        await user.save();
        return true;
    }

    async findUser(user: string): Promise<User>{
        try {
            return await this.userModel.findOne({username: user});
        } catch (error) {
            return null;            
        }
    }

    async findById(id:string): Promise<User>{
        try {
            return await this.userModel.findById(id).exec()
        } catch (error) {
            return null;
        }
    }

    async findAll(): Promise<User[]>{
        try {
            return await this.userModel.find().exec()
        } catch (error) {
            return null
        }
    }

    async update(id: string, UpdateUserDto: UpdateUserDto): Promise<Boolean>{
        try {
            await this.userModel.findByIdAndUpdate(id, UpdateUserDto, {new: true})
            return true
        } catch (error) {
            return false
        }
    }
    
    async delete(id:string){
        try {
            return await this.userModel.findByIdAndDelete(id)
        } catch (error) {
            return null;
        }
    }

}