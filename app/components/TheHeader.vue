<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 0)
</script>

<template>
  <header class="sticky top-0 z-40 backdrop-blur transition-all duration-300 bg-transparent">
    <div
      class="mx-auto max-w-7xl px-6 flex items-center gap-6 transition-all duration-300"
      :class="isScrolled ? 'py-2' : 'py-5'"
    >
      <img
        src="/logo_gruvbox_sm.png"
        alt="Mon Journal IEF"
        class="transition-all duration-300 rounded-xl"
        :class="isScrolled ? 'h-10' : 'h-12'"
      >

      <nav class="hidden md:flex items-center gap-6 text-theme-surface-700">
        <a href="#features" class="hover:text-theme-surface-500 transition-colors duration-300">Fonctionnalités</a>
        <a href="#how" class="hover:text-theme-surface-500 transition-colors duration-300">Comment ça marche</a>
        <a href="#faq" class="hover:text-theme-surface-500 transition-colors duration-300">FAQ</a>
      </nav>

      <div class="ml-auto flex items-center gap-4">
        <ButtonDarkMode />
        <ButtonCTA />
      </div>
    </div>
  </header>
</template>
