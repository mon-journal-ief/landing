<script setup lang="ts">
// Section simple inspirée de `About.vue`
</script>

<template>
  <section id="privacy" class="px-6 py-4">
    <div class="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
      <!-- Text side -->
      <div class="flex flex-col gap-8">
        <h2 class="text-theme-surface-200">
          Confidentialité & Données
        </h2>

        <ul class="text-theme-surface-300 list-disc list-inside space-y-2">
          <li>Hébergement en France (prestataire conforme RGPD) ; les données ne quittent pas le territoire</li>
          <li>Suppression de tout ou partie des données à tout moment depuis votre compte</li>
          <li>Utilisation sans données sensibles : alias ou prénoms abrégés possibles ; saisie hors ligne via l'export Word</li>
          <li>Aucune publicité, aucun tracker tiers ; mesures d'audience respectueuses, sans profilage</li>
          <li>Sécurité par défaut : chiffrement en transit et au repos, mots de passe hachés, minimisation des données, contrôles d'accès stricts</li>
        </ul>
      </div>
    </div>
  </section>
</template>
