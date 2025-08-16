<template>
  <section id="a-propos" class="px-6 py-4">
    <div class="mx-auto grid md:grid-cols-2 gap-10 items-center">
      <!-- Image side -->
      <img
        class="mx-auto aspect-[3/2] w-full rounded-3xl border-2 border-theme-surface-400"
        src="/apropos.jpg"
        alt="Portrait"
      >

      <!-- Text side -->
      <div class="flex flex-col gap-8">
        <h2 class="text-theme-surface-200">
          À propos
        </h2>

        <p class="text-theme-surface-300">
          Je m'appelle Guillaume Bonnefoy, et suis développeur dans le milieu de la cybersécurité. <br><br>
          Jeune papa, j’ai découvert l’Instruction en Famille et, avec elle, ses lourdeurs administratives et
          son lot d'anxiétés : refus de dossier, attendus incertains, etc. <br><br>
          Après avoir parlé à d'autres familles en IEF, j’ai conçu cet outil comme une réponse :
          nous faire gagner du temps, alléger la charge mentale et préparer sereinement l’inspection. <br>
          N'hésitez pas à me contacter si vous avez des questions ou des suggestions !
        </p>

        <div class="pt-4">
          <ButtonContact />
        </div>
      </div>
    </div>
  </section>
</template>
