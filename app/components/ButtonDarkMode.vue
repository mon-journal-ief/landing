<script setup lang="ts">
const colorMode = useColorMode()

const themeIcons = {
  light: 'i-ci-sun',
  dark: 'i-ci-moon',
}

const iconClass = computed(() => {
  return colorMode.value === 'dark' ? themeIcons.dark : themeIcons.light
})

function toggleTheme() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    aria-label="Toggle color mode"
    :class="iconClass"
    class="size-6 text-theme-surface-600 hover:text-theme-surface-800 rounded-full"
    @click="toggleTheme"
  />
</template>
