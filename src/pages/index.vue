<script setup lang="ts">
const inputValue = ref()
const apiKey = '4cda0b1231a98ddce2d7662e79d6877b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const data = ref()

async function checkWeather() {
  const response = await fetch(`${apiUrl} + ${inputValue.value} + &appid=${apiKey}`)
  data.value = await response.json()
}
function sendCityName() {
  checkWeather()
}
</script>

<template>
  <div class="box max-w-400px rounded-10px px-10px py-20px">
    <div class="flex items-center justify-between gap-2">
      <input v-model="inputValue" class="h-60px w-full rounded-30px border-none bg-#ebfffc px-25px py-10px outline-none" type="text" placeholder="enter city name" spellcheck="false">
      <button class="rounded-full bg-#ebfffc p-4" @click="sendCityName">
        <div class="i-mdi:magnify text-20px" />
        <span class="sr-only">Search</span>
      </button>
      <button v-if="data" class="rounded-full bg-#ebfffc p-4" @click="data = 0">
        <div class="i-ic:baseline-clear" />
      </button>
    </div>
    <div v-if="data">
      <div class="w-full flex flex-col items-center text-white">
        <img v-if="data.weather[0].main === 'Rain'" class="max-w-150px" src="/rain.png" alt="">
        <img v-if="data.weather[0].main === 'Clouds'" class="max-w-150px" src="/clouds.png" alt="">
        <img v-if="data.weather[0].main === 'Clear'" class="max-w-150px" src="/clear.png" alt="">
        <img v-if="data.weather[0].main === 'Drizzle'" class="max-w-150px" src="/drizzle.png" alt="">
        <img v-if="data.weather[0].main === 'Mist'" class="max-w-150px" src="/mist.png" alt="">
        <img v-if="data.weather[0].main === 'Snow'" class="max-w-150px" src="/snow.png" alt="">
        <h1 class="text-50px">
          {{ data.name }}
        </h1>
        <h2>{{ data.weather[0].description }}</h2>
        <h2 class="mt-4 text-30px">
          {{ Math.round(data.main.temp) }} C°
        </h2>
      </div>
      <div class="mx-20px mt-10 flex items-center justify-between text-white">
        <div class="flex flex-col items-center gap-2">
          <img class="max-w-50px" src="/humidity.png" alt="">
          <div>
            <p>{{ data.main.humidity }} %</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img class="max-w-50px" src="/wind.png" alt="">
          <div>
            <p>{{ data.wind.speed }} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
