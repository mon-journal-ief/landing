<script setup lang="ts">
const openItems = ref(new Set<number>())

const faqs = [
  {
    question: 'Pourquoi pas d\'abonnement mensuel ?',
    answer: 'Pour réduire les coûts et proposer un prix juste, nous ne proposons qu\'un abonnement annuel',
  },
  {
    question: 'Dois-je fournir un justificatif ?',
    answer: 'Non. Nous fonctionnons sur l\'honneur',
  },
  {
    question: 'Puis-je changer d\'option plus tard ?',
    answer: 'Oui, vous pourrez basculer depuis votre compte à tout moment',
  },
  {
    question: 'Je souhaite contribuer davantage',
    answer: 'Merci ! Vous pourrez ajouter un soutien supplémentaire lors du paiement',
  },
]

function toggleFAQ(index: number) {
  if (openItems.value.has(index))
    openItems.value.delete(index)
  else openItems.value.add(index)
}
</script>

<template>
  <section id="faq" class="mt-12 w-full">
    <div class="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <div class="text-center px-4">
        <h2 class="text-3xl sm:text-4xl text-theme-surface-800">
          Questions fréquentes
        </h2>
        <p class="mt-2 text-theme-surface-500">
          Vous ne trouvez pas la réponse que vous cherchez ?
          <a href="mailto:whiterqbbit@proton.me" class="underline hover:no-underline text-theme-surface-700">Contactez-moi</a>
        </p>
      </div>

      <div class="mt-8 w-full overflow-hidden rounded-2xl">
        <div class="divide-y divide-theme-surface-200">
          <!-- FAQ Item -->
          <div v-for="(faq, index) in faqs" :key="index" class="w-full">
            <button
              class="w-full p-5 text-left flex items-center justify-between hover:bg-theme-surface-100 transition-colors duration-200"
              :aria-expanded="openItems.has(index)"
              @click="toggleFAQ(index)"
            >
              <!-- Question -->
              <h3 class="font-medium text-theme-surface-800">
                {{ faq.question }}
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
              class="overflow-hidden transition-all duration-200 ease-in-out"
              :class="openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            >
              <div class="px-5 pb-5">
                <p class="text-theme-surface-700">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
