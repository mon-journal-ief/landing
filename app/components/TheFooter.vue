<script setup lang="ts">
//
</script>

<template>
  <footer class="px-6 py-4 flex flex-col md:flex-row items-center gap-4">
    <div class="flex items-center gap-3">
      <img src="/chasti_logo_md.png" alt="Mon Journal IEF" class="size-8 rounded-md">
      <span class="font-semibold text-theme-surface-500">Mon Journal IEF</span>
    </div>
    <div class="md:ml-auto text-theme-surface-400 text-sm">
      © {{ new Date().getFullYear() }} Mon journal IEF — Tous droits réservés
    </div>
  </footer>
</template>
