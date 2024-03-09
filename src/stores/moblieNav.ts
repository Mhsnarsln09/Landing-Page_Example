import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMobileNavStore = defineStore('mobileNav', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    getIsOpen: (state) => state.isOpen,
  },
  actions: {
    toggleMobileNav() {
      this.isOpen = !this.isOpen
    },
  },
})