<script setup lang="ts">
const openItems = ref(new Set<number>())

const faqs = [
  // { Q: `Dois-je fournir un justificatif pour bénéficier de l'accès solidaire ?`, A: `Non. Nous fonctionnons sur l'honneur, sur simple déclaration.` },
  { Q: 'Puis-je suivre plusieurs enfants ?', A: 'Autant d’enfants que vous le souhaitez, toujours gratuitement!' },
  // { Q: 'Est-ce conforme au cadre légal français ?', A: 'L’outil aide à documenter, mais ne remplace pas vos obligations; il facilite la présentation lors du contrôle.' },
  {
    Q: 'Garantissez-vous un contrôle réussi ?',
    A: `Non, évidemment. Le journal n'est qu'un facteur parmi beaucoup d'autres, et je ne peux rien garantir.
        Cependant, il vous permettra d'appuyer avec précision le travail et les progrès de votre enfant.
        J'ai construit l'outil sur la base de journaux d'activités qui ont effectivement passé le contrôle.`,
  },
  { Q: 'Puis-je suggérer des fonctionnalités ?', A: `N'hésitez pas, tout le monde en profitera ! Vous pouvez me contacter via le formulaire de contact.` },
  { Q: `Est-ce que l'outil est adapté à tous les niveaux scolaires ?`, A: 'Oui, tous les programmes de la maternelle au lycée sont inclus (cycles/socle commun).' },

  // Journal de bord
  // { Q: 'Qu’est-ce qu’une “entrée” de journal ?', A: 'Une activité datée. Description, photos, pièces jointes et liens au programme peuvent être ajoutés, mais sont facultatifs.' },
  // { Q: 'Dois-je lier chaque entrée à une compétence ?', A: `C'est recommandé mais facultatif; vous pouvez l'ajouter plus tard.` },
  // { Q: 'Puis-je marquer une compétence comme "validée" ?', A: `Oui, ainsi que voir la progression sur l'ensemble du programme.` },

  // Programme et compétences
  { Q: 'Puis-je personnaliser le programme ?', A: 'Oui. Vous pouvez ajouter/supprimer/modifier objectifs et libellés, voire même le créer de zéro.' },
  // { Q: 'Puis-je voir la couverture du programme ?', A: 'Oui. Vous pouvez voir les indicateurs de progression (%) par domaine/attendu.' },
  // { Q: 'Puis-je renseigner un programme personnalisé (Montessori, Mason, Steiner-Waldorf, etc.) ?', A: 'Oui. Vous pouvez créer vos propres programmes.' },
  // { Q: 'Puis-je cocher des compétences “maîtrisées” ?', A: 'Oui. Vous pouvez marquer les compétences comme “maîtrisées”.' },
  // { Q: 'Réutiliser un programme d’un enfant à l’autre ?', A: 'Oui. Vous pouvez réutiliser un programme d’un enfant à l’autre.' },

  // Export et contrôle
  { Q: `Que contient l'export ?`, A: `Vous trouverez page de garde, sommaire, entrées et programme (avec références aux entrées pour chaque compétence). Si vous souhaitez le retoucher, vous pourrez l'exporter au format Word.` },

  // Données, sécurité, RGPD
  // { Q: 'Mes données sont-elles sécurisées ?', A: `Absolument ! Travaillant dans la cyber-sécurité, je prête une attention toute particulière à la sécurité informatique.` },
  // { Q: 'Puis-je supprimer mon compte et mes données ?', A: 'Oui, vous pouvez facilement supprimer votre compte tout ce qui y est lié.' },

  // {
  //   Q: 'Je suis insatisfait, puis-je obtenir un remboursement ?',
  //   A: `Oui. Vous disposez d’un droit de rétractation légal de 14 jours. En complément, je vous rembourserai sans limite si vous n'avez pas utilisé l'outil.`,
  // },
  { Q: `Existe-t'il une app mobile ?`, A: 'Non, mais celle-ci est en cours de développement et vous serez tenu au courant de sa sortie.' },
  { Q: `Je suis une école avec des besoins particuliers, est-il possible de personnaliser l'outil ?`, A: `Tout à fait, une fois l'app mobile sortie. Contactez-moi pour me faire part de vos besoin !` },
]

function toggleFAQ(index: number) {
  if (openItems.value.has(index))
    openItems.value.delete(index)
  else openItems.value.add(index)
}
</script>

<template>
  <section id="faq" class="w-full">
    <div class="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <div class="text-center px-4">
        <h2 class="text-3xl sm:text-4xl text-theme-surface-800">
          Questions fréquentes
        </h2>
        <div class="mt-2 flex items-center gap-2">
          <p class="text-theme-surface-500">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <ContactForm />
        </div>
      </div>

      <div class="mt-8 w-full overflow-hidden rounded-2xl">
        <div class="divide-y divide-surface-300 dark:divide-surface-700">
          <!-- FAQ Item -->
          <div v-for="(faq, index) in faqs" :key="index" class="w-full group">
            <button
              class="w-full p-5 text-left flex items-center justify-between
              transition-colors duration-200 hover:bg-theme-surface-100 group-hover:bg-theme-surface-100"
              :aria-expanded="openItems.has(index)"
              @click="toggleFAQ(index)"
            >
              <!-- Question -->
              <h3 class="font-medium text-theme-surface-800">
                {{ faq.Q }}
              </h3>

              <!-- Chevron Icon -->
              <svg
                class="size-5 transition-transform duration-200 text-theme-surface-700"
                :class="openItems.has(index) && 'rotate-180'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Answer -->
            <div
              class="overflow-hidden transition-all duration-200 ease-in-out group-hover:bg-theme-surface-100"
              :class="openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            >
              <div class="px-5 pb-5">
                <p class="text-theme-surface-700">
                  {{ faq.A }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
