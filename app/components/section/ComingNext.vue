<script setup lang="ts">
const featuresDone = [
  'Création et gestion du journal de bord',
  `Ajout d'entrées avec photos et descriptions`,
  'Programmes officiels intégrés (maternelle au lycée)',
  'Personnalisation des programmes',
  'Export PDF et Word',
  'Gestion multi-enfants',
]

const featuresPlanned = [
  'Application mobile',
  'Refonte esthétique des exports',
  `Options d'export (nouvelles sections, personnalisation)`,
  `Suggestions d'activités`,
  'Passage en open-source',
  'Suivi de progression par compétence',
  'Connexion via Google, Facebook',
]
</script>

<template>
  <section id="coming-next" class="w-full">
    <div class="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <div class="text-center px-4 mb-12">
        <h2 class="text-theme-surface-800 mb-4">
          Fonctionnalités disponibles et à venir
        </h2>
        <p class="text-theme-surface-600">
          L'application est en développement actif,<br>
          la plupart des fonctionnalités à venir sont prévues pour cet automne.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 w-full px-4">
        <!-- Done Features -->
        <div class="bg-theme-surface-100 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-theme-surface-800 mb-6 ml-8">
            Déjà disponible
          </h3>

          <ul class="space-y-3">
            <li
              v-for="feature in featuresDone"
              :key="feature"
              class="flex items-start gap-3 text-theme-surface-700"
            >
              <i class="i-basil-checked-box-outline text-theme-green-400 text-lg mt-0.5 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Planned Features -->
        <div class="bg-theme-surface-100 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-theme-surface-800 mb-6 ml-8">
            Bientôt disponible
          </h3>

          <ul class="space-y-3">
            <li
              v-for="feature in featuresPlanned"
              :key="feature"
              class="flex items-start gap-3 text-theme-surface-700"
            >
              <i class="i-basil-play-outline text-theme-green-400 text-lg mt-0.5 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 text-center text-sm">
        <p class="text-theme-surface-600 flex items-center gap-2 justify-center">
          Une suggestion ?
          <ContactForm />
        </p>
      </div>
    </div>
  </section>
</template>
