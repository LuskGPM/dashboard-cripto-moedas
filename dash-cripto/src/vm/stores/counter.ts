import { defineStore } from 'pinia'

export const useCoinStore = defineStore('coins', {
  state: () => ({
    coins: [],
    favorites: [] as number[]
  }),
  actions: {
    favorite(id: number) {
      this.favorites.push(id)
    }
  }
})