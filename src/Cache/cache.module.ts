import { Module } from "@nestjs/common";
import { CacheService } from "./cache.service";
import { CacheModule as cacheModuleNest} from "@nestjs/cache-manager";


@Module({
    imports:[cacheModuleNest.register({
        ttl: 900000000
    })],
    providers: [CacheService],
    exports: [CacheService]
})

export class cacheModule{}