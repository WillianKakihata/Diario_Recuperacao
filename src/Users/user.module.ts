import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { User, UserSchema } from "./schemas/users.schema";
import { UserService } from "./user.service";
import { UsersController } from "./user.controller";
import { hashPassword } from "./middleware/user.middleware";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    providers: [UserService],
    exports: [UserService],
    controllers: [UsersController],
})
export class UserModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(hashPassword).forRoutes({path: 'user', method: RequestMethod.POST})
    }
}