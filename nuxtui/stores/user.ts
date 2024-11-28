import { defineStore } from 'pinia'

interface UserState {
  user: any | null
  isLoggedIn: boolean
  fullName: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isLoggedIn: false,
    fullName: null
  }),

  actions: {
    setUser(user: any) {
      this.user = user
      this.isLoggedIn = !!user
      this.fullName = user?.user_metadata?.full_name || user?.email || 'User'
    },

    getUser() {
      return this.user
    },

    clearUser() {
      this.$reset()
      this.$state = {
        user: null,
        isLoggedIn: false,
        fullName: null
      }
    }
  },

  getters: {
    getUser: (state) => state.user,
    getUserLoginStatus: (state) => state.isLoggedIn,
    getUserName: (state) => state.fullName
  },

  persist: true
}) 
