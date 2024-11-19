import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    setUser(user: any) {
      this.user = user
      this.isLoggedIn = !!user
    },

    clearUser() {
      this.$reset()
      this.$state = {
        user: null,
        isLoggedIn: false
      }
    }
  },

  getters: {
    getUser: (state) => state.user,
    getUserLoginStatus: (state) => state.isLoggedIn
  },

  persist: true
}) 
