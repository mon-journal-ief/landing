<script setup lang="ts">
</script>

<template>
  <div
    class="
    bg-theme-surface-200 text-theme-surface-900
    p-4 lg:p-6 flex flex-col gap-4
    "
  >
    <CardGradient>
      <TheHeader />
      <SectionHero />
    </CardGradient>

    <SectionFeatures />

    <CardGradient>
      <SectionCTA />
    </CardGradient>

    <TheFooter />
  </div>
</template>
