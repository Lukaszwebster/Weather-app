<script setup lang="ts">
// const { t } = useI18n()
// const userStore = useUserStore()
// const weatherStore = useWeatherStore()
// weatherStore.loadWeather()
</script>

<template>
  <!-- <div>
    <h1>{{ weatherStore.weather.latitude }} </h1>
  </div> -->
  <div class="max-w-470px w-90% bg-white">
    <div>
      <input type="text" placeholder="enter city name" spellcheck="false">
      <button>
        <img src="public/search.png" alt="">
      </button>
    </div>
  </div>
</template>
