<script setup lang="ts">
const steps = [
  {
    num: '1.',
    heading: 'Créez votre compte',
    description:
      `Ajoutez vos enfants et associez-les à un programme de l'Éducation Nationale.
      Modifiez ceux-ci à votre convenance.`,
  },
  {
    num: '2.',
    heading: 'Renseignez le journal',
    description:
      `Au quotidien, notez les activités de vos enfants.
      Liez-les aux compétences du programme, et ajoutez des photos si vous le souhaitez.`,
  },
  {
    num: '3.',
    heading: `Exportez d'un clic`,
    description:
      `Générez un dossier exhaustif et structuré, avec table des matières.
      Pour une mise en page efficace et rapide, exportez en PDF.
      Pour un contrôle total, exportez en Word.`,
  },
]
</script>

<template>
  <section id="comment-ca-marche">
    <!-- Header -->
    <div class="mx-auto max-w-5xl px-6 text-center">
      <h2>
        Comment ça marche ?
      </h2>
      <p class="mt-2 text-theme-surface-600">
        Quelques minutes par jour, un dossier prêt à tout moment.
      </p>
    </div>

    <!-- Steps -->
    <div class="mx-auto mt-12 px-6 grid md:grid-cols-3 gap-10">
      <div
        v-for="step in steps"
        :key="step.heading"
        class="text-center flex flex-col items-center"
      >
        <div class="text-5xl md:text-6xl font-semibold text-theme-surface-700">
          {{ step.num }}
        </div>
        <div class="mt-4 font-semibold tracking-widest text-theme-surface-700 uppercase">
          {{ step.heading }}
        </div>
        <p class="mt-2 max-w-sm text-theme-surface-600">
          {{ step.description }}
        </p>
      </div>
    </div>
  </section>
</template>
