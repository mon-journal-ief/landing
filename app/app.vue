<script setup lang="ts">
</script>

<template>
  <div
    class="
    bg-theme-surface-200 text-theme-surface-800
    p-4 lg:p-6 flex flex-col gap-16
    "
  >
    <CardGradient>
      <TheHeader />
      <SectionHero />
    </CardGradient>

    <SectionFeatures />

    <CardContrast>
      <SectionAbout />
    </CardContrast>

    <CardGradient>
      <SectionHowItWorks />
      <SectionPricing />
      <SectionFAQ />
    </CardGradient>

    <CardContrast>
      <SectionCTA />
    </CardContrast>

    <!-- <SectionPrivacy /> -->
    <TheFooter />
  </div>
</template>

<style>
.button-primary {
  @apply px-4 pb-2 pt-1.5 w-fit rounded-2xl bg-green-500 text-surface-50 dark:text-surface-950 hover:bg-green-600 transition;
}

.button-outline {
  @apply px-4 py-1.5 w-fit rounded-2xl border border-surface-300 dark:border-surface-700 text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-900 transition;
}
</style>
