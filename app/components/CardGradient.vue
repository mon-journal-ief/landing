<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<template>
  <div
    class="p-4 pt-16 flex flex-col gap-32 from-surface-50 to-surface-200 dark:from-surface-900 dark:to-surface-800"
    :class="reverse ? 'rounded-b-3xl bg-gradient-to-t' : 'rounded-t-3xl bg-gradient-to-b'"
  >
    <slot />
  </div>
</template>
