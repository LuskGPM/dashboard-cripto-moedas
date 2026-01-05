export interface Coin {
    id: String;
    symbol: String;
    name: String;
    current_price: Number;
    price_change_24h: Number;
    last_update: Date | String;
}