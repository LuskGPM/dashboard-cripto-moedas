import { defineStore } from 'pinia'
import CoinModel from '@/model/services/http'
import type { Coin } from '@/model/types/tipos'

export const useCoinStore = defineStore('coins', {
  state: () => ({
    coins: [] as Coin[],
    favorites: [] as string[],
    lastUpdate: new Date()
  }),
  getters: {
    mainCoins: (state) => state.coins.slice(0, 2) as Coin[],
    anotherCoins: (state) => state.coins.slice(2, 12) as Coin[],
    favoriteCoins: (state) => state.coins.filter((coin) => state.favorites.includes(coin.id)) as Coin[],
    isFavorite: (state) => (id: string) => state.favorites.includes(id)
  },
  actions: {
    toglleFavorite(id: string) {
      const fav = [...this.favorites] as string[]

      if (fav.includes(id)) {
        fav.filter((coin) => coin !== id )
      } else {
        fav.push(id)
      }
      localStorage.setItem('favorites', JSON.stringify(fav) as string)
      console.log('Favoritos: ', localStorage.getItem('favorites'))
    },
    async addCoins() {
      if (localStorage.getItem('coins')) {
        this.coins = JSON.parse(localStorage.getItem('coins') as string)
        console.log('Buscou no LS')
      } else {
        this.coins = await CoinModel.getCoins()
        console.log('Buscou na API')
        localStorage.setItem('coins', JSON.stringify(this.coins) as string)
      }
    },
    resetTime() {
      this.lastUpdate = new Date()
    },
    searchLocalFavorites() {
      const localStorageFavorites = localStorage.getItem('favorites')

      if (localStorageFavorites) this.favorites = JSON.parse(localStorageFavorites as string)
    }
  }
})