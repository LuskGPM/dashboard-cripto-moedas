import axios from "axios";
import { API_CONFIG } from "@/model/config/api";
import type { Coin } from "@/model/types/tipos";

const api = axios.create({
    baseURL: API_CONFIG.baseUrl,
    params: API_CONFIG.params
})

export const allCoins = async (): Promise<Coin[]> => {
    try {
        const response = await api.get(API_CONFIG.endpoints.trending)
        return response.data
    }
    catch (error) {
        console.error(error)
        return []
    }
}
