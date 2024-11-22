import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

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
}

export const UserSchema = SchemaFactory.createForClass(User);