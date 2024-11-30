import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Role } from "src/Roles/role.enum";

@Schema()
export class User{

    @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true})
    _id: mongoose.Schema.Types.ObjectId;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    name:string

    @Prop()
    email: string;

    @Prop()
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);