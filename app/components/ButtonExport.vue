<script setup lang="ts">
const config = useRuntimeConfig()

const urlApp = computed(() => config.public.URL_APP)
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
    class="button-outline"
  >
    Voir un exemple d'export
  </a>
</template>
