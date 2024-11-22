import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DiariosDocuments = Diarios & Document;
@Schema()
export class Diarios extends Document{
    @Prop()
    titulo: string

    @Prop()
    descricao: string;

}

export const DiariosSchema = SchemaFactory.createForClass(Diarios);