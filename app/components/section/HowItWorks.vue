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
    <div class="mx-auto mt-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4">
      <template v-for="(step, index) in steps" :key="step.heading">
        <div class="text-center flex flex-col items-center">
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

        <!-- Arrow between elements (only for desktop) -->
        <div
          v-if="index < steps.length - 1"
          class="flex-shrink-0 transform hidden md:block my-8 md:my-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 73"
            class="w-16 h-8 md:w-24 md:h-8"
            preserveAspectRatio="xMidYMid meet"
          ><defs><clipPath id="__lottie_element_17">
            <rect width="256" height="73" x="0" y="0" />
          </clipPath></defs><g clip-path="url(#__lottie_element_17)"><g style="display: block;" transform="matrix(1,0,0,1,-0.5000076293945312,0)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path
            stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
            class="stroke-surface-400 dark:stroke-surface-600"
            stroke-opacity="1" stroke-width="8" d=" M3,30.256099700927734 C21.207500457763672,12.448699951171875 44.64179992675781,-1.4021300077438354 71.44450378417969,4.30049991607666 C91.3501968383789,8.535719871520996 76.93489837646484,34.371700286865234 75.35559844970703,46.61159896850586 C69.34809875488281,93.1697998046875 195.60299682617188,55.9822998046875 214.11099243164062,48.65610122680664 C217.51300048828125,47.30929946899414 248.1510009765625,32.56460189819336 246.91099548339844,31.85610008239746 C243.93099975585938,30.15329933166504 224.9010009765625,27.056100845336914 230.1999969482422,27.056100845336914 C238.0290069580078,27.056100845336914 245.43600463867188,30.256099700927734 253.39999389648438,30.256099700927734 C257.3160095214844,30.256000518798828 240.1280059814453,55.94900131225586 238.2550048828125,60.516998291015625"
          /></g></g></g>
          </svg>
        </div>
      </template>
    </div>
  </section>
</template>
