import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const location = ref()

  function getLocation() {
    return new Promise ((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position)
        location.value = position
      },
      (error) => {
        reject(error)
      },
      )
    })
  }
  return {
    location,
    getLocation,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
