import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default http