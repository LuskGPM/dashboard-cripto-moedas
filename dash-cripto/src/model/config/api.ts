const api_key = import.meta.env.DEMO_COINGECKO_API_KEY

export const API_CONFIG = {
    baseUrl: 'https://api.coingecko.com/api/v3/',
    endpoints: {
        trending: 'search/trending',
        historical: (id: String) => `coins/${id}/market_chart` ,
        details: (id: String) => `coins/${id}`,
        listener: 'coins/markets'
    },
    params: {
        'x_cg_demo_api_key': api_key,
        'vs_currency': 'brl',
        'order': 'market_cap_desc',
        'per_page': 100,
        'page': 1
    }
}
