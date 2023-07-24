<script setup lang="ts">
// const { t } = useI18n()
// const userStore = useUserStore()
// const weatherStore = useWeatherStore()
// weatherStore.loadWeather()
const apiKey = '4cda0b1231a98ddce2d7662e79d6877b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=London'

const data = ref()

async function checkWeather() {
  const response = await fetch(`${apiUrl}&appid=${apiKey}`)
  data.value = await response.json()
  console.log(data)
}

checkWeather()
</script>

<template>
  <!-- <div>
    <h1>{{ weatherStore.weather.latitude }} </h1>
  </div> -->

  <div>
    <div class="box max-w-400px rounded-10px px-10px py-20px">
      <div class="flex items-center justify-between gap-2">
        <input class="h-60px rounded-30px border-none bg-#ebfffc px-25px py-10px outline-none" type="text" placeholder="enter city name" spellcheck="false">
        <button class="rounded-full bg-#ebfffc p-4">
          <div class="i-mdi:magnify text-20px" />
        </button>
      </div>
      <div class="w-full flex flex-col items-center text-white">
        <img class="max-w-150px" src="public/rain.png" alt="">
        <h1 class="text-50px">
          {{ data }}
        </h1>
        <h2 class="text-20px" />
      </div>
      <div class="mx-20px mt-10 flex items-center justify-between text-white">
        <div class="flex flex-col items-center gap-2">
          <img class="max-w-50px" src="public/humidity.png" alt="">
          <div>
            <p>50%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img class="max-w-50px" src="public/wind.png" alt="">
          <div>
            <p>15km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
