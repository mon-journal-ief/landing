<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
}>(), {
  text: 'Essayez gratuitement',
})

const urlApp = 'mon-journal-ief.com'
</script>

<template>
  <a
    :href="`https://app.${urlApp}`"
    class="button-primary"
  >
    {{ text }}
  </a>
</template>
