<script setup lang="ts">
const urlSolidarity = 'https://app.mon-journal-ief.com/signup?plan=solidarity'
const urlSupport = 'https://app.mon-journal-ief.com/signup?plan=support'
</script>

<template>
  <section id="pricing">
    <div class="px-6">
      <div class="flex flex-col gap-3 items-center text-center">
        <h2> Tarifs </h2>
      </div>

      <div class="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
        <!-- Accès solidaire -->
        <div class="p-2 rounded-2xl border border-theme-surface-200 bg-theme-surface-50 flex flex-col">
          <!-- Header -->
          <div class="flex flex-col bg-theme-surface-100 rounded-xl py-4 px-6">
            <div class="text-theme-surface-700 text-xl font-medium">
              Accès solidaire
            </div>
            <p class="text-surface-500">
              Pour les familles qui en ont besoin. Sans justificatif.
            </p>

            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-bold text-theme-surface-700">0€</span>
              <span class="text-theme-surface-600">/ an</span>
            </div>
          </div>

          <!-- Liste des fonctionnalités -->
          <ul class="mt-6 p-4 flex-1 space-y-2 text-theme-surface-700">
            <li class="flex items-start gap-2">
              <i class="bullet-icon text-theme-surface-600" />
              <span>Accès complet à toutes les fonctionnalités</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="bullet-icon text-theme-surface-600" />
              <span>Programmes officiels intégrés</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="bullet-icon text-theme-surface-600" />
              <span>Export PDF & Word illimités</span>
            </li>
          </ul>

          <!-- Bouton -->
          <a :href="urlSolidarity" class="button-primary m-4">
            Je choisis l'accès solidaire
          </a>
        </div>

        <!-- Abonnement de soutien -->
        <div class="p-2 rounded-2xl border-2 border-green-300 bg-green-50/70 flex flex-col">
          <!-- Header -->
          <div class="flex flex-col bg-green-900/10 rounded-xl py-4 px-6">
            <div class="text-green-700 text-xl font-medium">
              Abonnement standard
            </div>
            <p class="text-green-700/80">
              Couvre l'année scolaire entière.
            </p>

            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-bold text-green-800">50€</span>
              <span class="text-green-700">/ an</span>
            </div>
          </div>

          <!-- Liste des fonctionnalités -->
          <ul class="mt-6 p-4 flex-1 space-y-2 text-green-800">
            <li class="flex items-start gap-2 opacity-70">
              <i class="bullet-icon text-green-600" />
              <span>Accès complet à toutes les fonctionnalités</span>
            </li>
            <li class="flex items-start gap-2 opacity-70">
              <i class="bullet-icon text-green-600" />
              <span>Programmes officiels intégrés</span>
            </li>
            <li class="flex items-start gap-2 opacity-70">
              <i class="bullet-icon text-green-600" />
              <span>Export PDF & Word illimités</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="bullet-icon text-green-600" />
              <span>Support prioritaire</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="bullet-icon text-green-600" />
              <span>Vous aidez d'autres familles en IEF</span>
            </li>
          </ul>

          <!-- Bouton -->
          <a :href="urlSupport" class="button-primary m-4">
            J'essaie gratuitement
          </a>
        </div>
      </div>

      <!-- Bandeau d'explication -->
      <div class="mt-8 rounded-xl border border-theme-surface-200 bg-theme-surface-50 p-4 text-center text-theme-surface-700">
        Nous fonctionnons sur l'honneur. Choisissez l'option qui correspond à votre situation aujourd'hui, vous pourrez changer plus tard.
      </div>
    </div>
  </section>
</template>

<style scoped>
.bullet-icon {
  @apply i-basil-play-solid text-sm mt-1;
}
</style>
