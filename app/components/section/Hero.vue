<script setup lang="ts">
//
</script>

<template>
  <section>
    <div class="px-6 py-10 md:py-14 grid md:grid-cols-2 gap-12">
      <!-- Left side text -->
      <div class="flex flex-col gap-4 self-center">
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-theme-surface-950">
          Simplifiez votre suivi IEF
        </h1>

        <p class="text-theme-surface-700 md:text-lg">
          Gagnez du temps grâce à un suivi clair, structuré selon les programmes officiels, sans stress ni paperasse.
        </p>

        <p class="text-theme-surface-700 md:text-lg">
          Exportez en PDF / Word en un clic.
        </p>

        <ButtonCTA class="mt-4" />
        <ButtonExport />
      </div>

      <!-- Right side image -->
      <img src="/hero_gruvbox.png" alt="Mon Journal IEF" class="rounded-2xl shadow-inner-glow">
      <!-- <img src="/hero.png" alt="Mon Journal IEF" class="rounded-2xl shadow-inner-glow"> -->
    </div>
  </section>
</template>
