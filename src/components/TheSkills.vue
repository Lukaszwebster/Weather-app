<script setup>
const skills = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
  },
  {
    id: 5,
    name: 'Windi CSS',
  },
  {
    id: 6,
    name: 'Uno CSS',
  },
  {
    id: 7,
    name: 'Vue',
  },
  {
    id: 8,
    name: 'Vite',
  },
  {
    id: 9,
    name: 'RWD',
  },
  {
    id: 10,
    name: 'GIT',
  },

]
</script>

<template>
  <div class="mx-4 mt-30 font-roboto lg:mx-[80px]">
    <h2 class="text-[1.5rem]">
      Technologie z których korzystam
    </h2>
    <div class="justify-between md:flex">
      <h2 class="mt-4 leading-loose text-gray lg:max-w-500px md:max-w-300px">
        Od kiedy uczę się frontendu, staram się poznawać jak najwięcej nowych technologii. Zdaję sobie sprawę z tego, że tylko ciągłą nauką można nadążyć za rozwijającą się branża IT.
        Jednocześnie wiem, że pracując już na stanowisku frontend developera będę musiał cały czas poszerzać swoją wiedzę i rozwijać się w kolejnych gałęziach technologicznych.
      </h2>
      <div class="mt-10 md:mt-0 lg:max-w-400px md:max-w-300px md:text-right">
        <AppSkillsItems v-for="item in skills" :key="item.id" v-bind="item" />
      </div>
    </div>
  </div>
</template>
