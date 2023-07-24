// import { acceptHMRUpdate, defineStore } from 'pinia'

// export const useUserStore = defineStore('user', () => {
//   const location = ref()

//   async function getLocation() {
//     return new Promise ((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         location.value = position
//         resolve(position)
//       },
//       (error) => {
//         reject(error)
//       },
//       )
//     })
//   }
//   return {
//     location,
//     getLocation,
//   }
// })

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
