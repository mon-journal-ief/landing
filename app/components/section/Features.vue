<script setup lang="ts">
const features = [
  {
    icon: '⏳',
    title: 'Gain de temps',
    description: 'Votre suivi quotidien en quelques minutes, depuis votre téléphone ou votre ordinateur.',
  },
  {
    icon: '💡',
    title: 'Clarté',
    description: 'Un journal organisé par objectifs et compétences selon le programme officiel.',
  },
  {
    icon: '💆‍♂️',
    title: 'Sérénité',
    description: 'Générez un dossier net, structuré, et personnalisable en un clic.',
  },
]
</script>

<template>
  <section id="features" class="pb-12 max-w-7xl px-6 mx-auto grid md:grid-cols-3 gap-6">
    <div v-for="feature in features" :key="feature.title" class="flex flex-col max-w-sm">
      <div class="text-primary-500 text-2xl flex items-center self-center justify-center rounded-full bg-primary-50 p-4 size-12">
        {{ feature.icon }}
      </div>
      <h3 class="mt-3 font-semibold text-center">
        {{ feature.title }}
      </h3>
      <p class="mt-2 text-theme-surface-600 text-center">
        {{ feature.description }}
      </p>
    </div>
  </section>
</template>
