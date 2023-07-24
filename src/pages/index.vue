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
  <div class="box max-w-400px rounded-10px px-10px py-20px">
    <div class="w-full flex items-center justify-between">
      <input class="h-60px rounded-30px border-none bg-#ebfffc px-25px py-10px outline-none" type="text" placeholder="enter city name" spellcheck="false">
      <button>
        <img src="public/search.png" alt="">
      </button>
    </div>
  </div>
</template>
