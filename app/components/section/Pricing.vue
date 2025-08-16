<script setup lang="ts">
const urlSolidarity = 'https://app.mon-journal-ief.com/signup?plan=solidarity'
const urlSupport = 'https://app.mon-journal-ief.com/signup?plan=support'

const billingCycle = ref<'month' | 'year'>('year')
const urlSupportWithBilling = computed(() => `${urlSupport}&billing=${billingCycle.value}`)
</script>

<template>
  <section id="tarifs">
    <div class="px-6">
      <div class="flex flex-col gap-3 items-center text-center">
        <h2> Tarifs </h2>

        <!-- Bascule mensuel / annuel -->
        <div class="mt-2 flex justify-center">
          <div class="inline-flex p-1 rounded-full border border-theme-surface-200 bg-theme-surface-50">
            <button
              class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
              :class="billingCycle === 'month' ? 'bg-green-500 text-white' : 'text-theme-surface-700'"
              @click="billingCycle = 'month'"
            >
              Mensuel
            </button>
            <button
              class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
              :class="billingCycle === 'year' ? 'bg-green-500 text-white' : 'text-theme-surface-700'"
              @click="billingCycle = 'year'"
            >
              Annuel
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
        <!-- Accès solidaire -->
        <div class="order-2 md:order-1 p-2 rounded-2xl border border-theme-surface-200 bg-theme-surface-50 flex flex-col">
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

        <!-- Abonnement normal -->
        <div class="order-1 md:order-2 p-2 rounded-2xl border-2 border-green-300 bg-green-50/70 flex flex-col">
          <!-- Header -->
          <div class="flex flex-col bg-green-900/10 rounded-xl py-4 px-6">
            <div class="text-green-700 text-xl font-medium">
              Abonnement standard
            </div>
            <p class="text-green-700/80">
              Couvre l'année scolaire.
            </p>

            <div class="flex items-baseline gap-2">
              <div class="flex items-baseline gap-2">
                <span v-if="billingCycle === 'year'" class="text-2xl text-green-600/70 line-through font-medium">96€</span>
                <span class="text-4xl font-bold text-green-800">{{ billingCycle === 'month' ? 12 : 60 }}€</span>
              </div>
              <span class="text-green-700">{{ billingCycle === 'month' ? '/ mois' : '/ an' }}</span>
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
          </ul>

          <!-- Bouton -->
          <a :href="urlSupportWithBilling" class="button-primary m-4">
            J'essaie gratuitement un mois
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bullet-icon {
  @apply i-basil-play-solid text-sm mt-1;
}
</style>
