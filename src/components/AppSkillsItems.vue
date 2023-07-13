<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
})
</script>

<template>
  <div class="m-8px inline-block cursor-default rounded-4px bg-#fafafa px-2 py-1 hover:bg-gray dark:text-black">
    {{ props.name }}
  </div>
</template>
