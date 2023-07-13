<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
useHead({
  title: 'Weather app',
  meta: [
    { name: 'description', content: 'Weather app' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],

})
</script>

<template>
  <RouterView />
</template>
