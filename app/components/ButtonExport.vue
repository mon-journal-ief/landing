<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
  contrast?: boolean
}>(), {
  text: 'Voir un exemple d\'export',
  contrast: false,
})
</script>

<template>
  <a
    href="`https://www.mon-journal-ief.com/yolo.pdf`"
    :class="contrast ? 'button-outline-contrast' : 'button-outline'"
  >
    Voir un exemple d'export
  </a>
</template>
