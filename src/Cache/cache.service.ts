import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject } from "@nestjs/common";
import { Cache } from "cache-manager";

export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getCache<T>(key: string, functionRequest: () => Promise<T>): Promise<T>{
        const allData: T = await this.cacheManager.get(key)
        if (allData) {
            return allData;
        } 
    

    const registroDiarios: T = await functionRequest();

    await this.cacheManager.set(key, registroDiarios);

    return registroDiarios;

    }

}