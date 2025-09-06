<script setup lang="ts">
//
</script>

<template>
  <section>
    <div class="px-6 pt-8 pb-10 grid md:grid-cols-2 gap-12">
      <!-- Image - appears first on mobile, second on desktop -->
      <img
        src="/ief_chasti.png"
        alt="Mon Journal IEF"
        class="rounded-2xl shadow-inner-glow md:order-2 w-full h-auto"
        width="800"
        height="865"
        loading="eager"
      >

      <!-- Text content - appears second on mobile, first on desktop -->
      <div class="flex flex-col gap-4 self-center md:order-1">
        <h1 class="text-3xl md:text-5xl font-semibold">
          Simplifiez votre suivi IEF
        </h1>

        <p class="text-theme-surface-700 md:text-lg">
          Gagnez du temps grâce à un suivi rapide, sans stress ni paperasse, structuré selon les programmes officiels.
        </p>

        <p class="text-theme-surface-700 md:text-lg">
          Exportez en PDF / Word en un clic.
        </p>

        <ButtonCTA class="mt-4" />
        <!-- <ButtonExport /> -->
      </div>
    </div>
  </section>
</template>
