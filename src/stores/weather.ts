import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref()
  const userStore = useUserStore()
  async function loadWeather() {
    const { data } = await useFetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,rain,cloudcover,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max&timezone=Europe%2FBerlin')
    console.log(data)
    userStore.getLocation()
    weather.value = data.value
  }

  return {
    weather,
    loadWeather,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot))
