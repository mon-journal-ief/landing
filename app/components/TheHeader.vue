<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 0)
</script>

<template>
  <header
    :class="!isScrolled && 'pt-4'"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <div
      class="mx-auto max-w-7xl px-10 xl:px-6 flex items-center gap-6 transition-all duration-300"
      :class="isScrolled ? 'py-2 backdrop-blur' : 'py-5'"
    >
      <img
        src="/logo_gruvbox_sm.png"
        alt="Mon Journal IEF"
        class="transition-all duration-300 rounded-xl"
        :class="isScrolled ? 'h-10' : 'h-12'"
      >

      <nav class="hidden md:flex items-center gap-6 text-theme-surface-700 font-medium text-lg">
        <a href="#comment-ca-marche" class="hover:text-theme-surface-500 transition-colors duration-300">Comment ça marche</a>
        <a href="#tarifs" class="hover:text-theme-surface-500 transition-colors duration-300">Tarifs</a>
        <a href="#faq" class="hover:text-theme-surface-500 transition-colors duration-300">FAQ</a>
        <a href="#a-propos" class="hover:text-theme-surface-500 transition-colors duration-300">À propos</a>
      </nav>

      <div class="ml-auto flex items-center gap-4">
        <ButtonDarkMode />
        <ButtonCTA />
      </div>
    </div>
  </header>
</template>
