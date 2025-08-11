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
      <SectionCTA />
    </CardContrast>

    <CardGradient>
      <SectionHowItWorks />
      <SectionPricing />
      <SectionFAQ />
    </CardGradient>

    <CardContrast>
      <SectionAbout />
    </CardContrast>

    <CardContrast>
      <SectionPrivacy />
    </CardContrast>
    <TheFooter />
  </div>
</template>

<style>
.button-base {
  @apply px-4 py-1.5 w-fit rounded-2xl transition font-medium tracking-wide;
}

.button-primary {
  @apply button-base bg-green-500 text-surface-50 hover:bg-green-600;
}

.button-outline {
  @apply button-base border border-surface-300 dark:border-surface-700 text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-900;
}

.button-outline-contrast {
  @apply button-base border border-surface-400 dark:border-surface-600 text-surface-300 dark:text-surface-700 hover:bg-surface-800 dark:hover:bg-surface-200;
}
</style>
