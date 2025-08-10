<script setup lang="ts">
const config = useRuntimeConfig()

const urlApp = computed(() => config.public.URL_APP)
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
    class="
    px-4 py-1.5 w-fit rounded-2xl
    border border-theme-surface-300
    text-theme-surface-500 hover:bg-theme-surface-100
    transition
    "
  >
    Voir un exemple d'export
  </a>
</template>
