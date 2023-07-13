<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
useHead({
  title: 'Landing page',
  meta: [
    { name: 'description', content: 'Landing Page' },
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
