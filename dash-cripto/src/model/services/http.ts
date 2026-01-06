import axios, { type AxiosInstance } from "axios";
import { API_CONFIG } from "@/model/config/api";
import type { Coin } from "@/model/types/tipos";

class CoinModel {
    private readonly api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL: API_CONFIG.baseUrl,
            params: API_CONFIG.params
        })
    }

    async getCoins(): Promise<Coin[]> {
        const response = await this.api.get(API_CONFIG.endpoints.listener)
        return response.data
    }
}

export default new CoinModel()
