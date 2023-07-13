<script setup>
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div class="mt-10 h-[300px] bg-myBlue pt-10 dark:bg-gray">
    <div class="flex items-center justify-center gap-4">
      <div>
        l.samcik@gmail.com
      </div>
      <nav class="flex gap-2 text-gray">
        <a href="https://github.com/Lukaszwebster">
          <div class="i-mdi:github md:h-10 md:w-10 dark:bg-white hover:text-black dark:hover:text-white" />
        </a>

        <a href="https://www.linkedin.com/in/%C5%82ukasz-samcik-272222271/">
          <div class="i-mdi:linkedin md:h-10 md:w-10 dark:bg-my-blue dark:text-gray hover:text-black dark:hover:text-white" />
        </a>
        <a href="https://codepen.io/Websterek">
          <div class="i-mdi:codepen md:h-10 md:w-10 dark:bg-white hover:text-black dark:hover:text-white" />
        </a>
      </nav>
    </div>
  </div>
</template>
