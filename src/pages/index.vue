<script setup lang="ts">
const { t } = useI18n()
const userStore = useUserStore()
const weatherStore = useWeatherStore()
weatherStore.loadWeather()
</script>

<template>
  <div>
    <h1>{{ userStore.location?.coords }}</h1>
  </div>
</template>
