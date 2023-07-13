import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const location = ref()

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      location.value = position
    },
    (error) => {
      console.log(error)
    },
    )
  }

  return {
    location,
    getLocation,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
