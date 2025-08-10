<script setup lang="ts">
// const config = useRuntimeConfig()

// const urlApp = computed(() => config.public.URL_APP)
const urlApp = 'mon-journal-ief.com'
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
    class="px-4 py-2 w-fit rounded-2xl bg-primary-500 text-theme-surface-50 hover:bg-primary-600 transition"
  >
    Essayez gratuitement
  </a>
</template>
