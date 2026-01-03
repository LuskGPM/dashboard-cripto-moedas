export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    last_update: string;
}

export interface CryptoState {
    coin: Coin[];
    favorites: string;
    loading: boolean;
    error: string | null;
    isCoinMode: boolean;
}