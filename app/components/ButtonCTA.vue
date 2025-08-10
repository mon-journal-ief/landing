<script setup lang="ts">
// const config = useRuntimeConfig()

// const urlApp = computed(() => config.public.URL_APP)
const urlApp = 'mon-journal-ief.com'
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
     class="
      px-4 pb-2 pt-1.5 w-fit rounded-2xl
      bg-green-500 text-theme-surface-50 hover:bg-green-600
      transition"
      >
    Essayez gratuitement
  </a>
</template>
