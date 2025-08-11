<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
  contrast?: boolean
}>(), {
  text: 'Voir un exemple d\'export',
  contrast: false,
})

const baseUrl = 'https://www.mon-journal-ief.com'
</script>

<template>
  <a
    :href="`${baseUrl}/yolo.pdf`"
    :class="contrast ? 'button-outline-contrast' : 'button-outline'"
  >
    Voir un exemple d'export
  </a>
</template>
