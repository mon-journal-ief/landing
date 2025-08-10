<script setup lang="ts">
// const config = useRuntimeConfig()

// const urlApp = computed(() => config.public.URL_APP)
const urlApp = 'mon-journal-ief.com'
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
    class="button-primary"
  >
    Essayez gratuitement
  </a>
</template>
