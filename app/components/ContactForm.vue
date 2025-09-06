<script setup lang="ts">
defineProps<{
  buttonDisplay?: boolean
}>()

const visible = ref(false)
const isLoading = ref(false)
const isSuccess = ref(false)

const form = reactive({
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  email: '',
  subject: '',
  message: '',
})

function validateForm() {
  // Reset errors
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  let isValid = true

  // Validate subject
  if (!form.subject.trim()) {
    errors.subject = 'Le sujet est requis'
    isValid = false
  }

  // Validate message
  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
    isValid = false
  }

  return isValid
}

const config = useRuntimeConfig()
async function handleSubmit() {
  if (!validateForm()) {
    return
  }

  isLoading.value = true
  try {
    const isDev = import.meta.env.NODE_ENV === 'development' || config.public.ENVIRONNEMENT === 'dev'

    const apiUrl = isDev
      ? 'http://localhost:4000'
      : 'https://api.mon-journal-ief.com'

    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      isSuccess.value = true

      setTimeout(() => {
        visible.value = false
        isSuccess.value = false
      }, 5000)
    }
  }
  catch (error) {
    console.error('Error sending contact message:', error)
  }
  finally {
    isLoading.value = false
  }
}

function openForm() {
  visible.value = true
  isSuccess.value = false
}

function closeForm() {
  visible.value = false
  isSuccess.value = false
  // Reset form
  form.email = ''
  form.subject = ''
  form.message = ''
  // Reset errors
  errors.email = ''
  errors.subject = ''
  errors.message = ''
}
</script>

<template>
  <div>
    <!-- Contact Button -->
    <button
      v-if="buttonDisplay"
      class="button-primary group flex items-center gap-2"
      @click="openForm"
    >
      <i class="i-basil-envelope-open-outline self-center text-xl mt-0.5 group-hover:-translate-y-0.5 transition" />
      <span>Me contacter</span>
    </button>

    <!-- Contact Text underline -->
    <button
      v-else
      class="text-theme-surface-500 hover:text-theme-surface-700 transition-colors underline"
      @click="openForm"
    >
      Contactez-moi
    </button>

    <!-- Modal Overlay -->
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-1000 "
    >
      <!-- Modal Content -->
      <div class="bg-theme-surface-200 rounded-2xl p-6 w-full max-w-md shadow-2xl" @click.stop>
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-theme-surface-800">
            Contact
          </h2>
          <button
            class="text-theme-surface-500 hover:text-theme-surface-700 transition-colors"
            @click="closeForm"
          >
            <i class="i-basil-cross-outline text-2xl" />
          </button>
        </div>

        <!-- Success Message -->
        <div v-if="isSuccess" class="flex flex-col items-center justify-between">
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 w-full">
            <p class="font-medium">
              Message envoyé !
            </p>
            <p class="text-sm">
              Merci pour votre message. Je reviendrai vers vous si nécessaire.
            </p>
          </div>
          <button
            class="flex-1 px-4 py-2 border border-theme-surface-400 text-theme-surface-700 rounded-lg hover:bg-theme-surface-300 hover:bg-theme-surface-300 dark:hover:bg-surface-700 transition-colors"
            @click="closeForm"
          >
            Fermer
          </button>
        </div>

        <!-- Form -->
        <form v-else class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Email Field -->
          <div>
            <label for="email" class="text-label">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="votre@email.com"
              :class="errors.email && 'border-red-500'"
            >
            <p v-if="errors.email" class="text-error">
              {{ errors.email }}
            </p>
          </div>

          <!-- Subject Field -->
          <div>
            <label for="subject" class="text-label">
              Sujet *
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="Sujet de votre message"
              :class="errors.subject && 'border-red-500'"
            >
            <p v-if="errors.subject" class="text-error">
              {{ errors.subject }}
            </p>
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="text-label">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              placeholder="Décrivez votre demande, question ou suggestion..."
              :class="errors.message && 'border-red-500'"
            />
            <p v-if="errors.message" class="text-error">
              {{ errors.message }}
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4 text-base">
            <button
              type="button"
              class="flex-1 px-4 py-2 border border-theme-surface-400 text-theme-surface-700 rounded-lg hover:bg-theme-surface-100 dark:hover:bg-surface-700 transition-colors"
              @click="closeForm"
            >
              Annuler
            </button>
            <button
              type="submit"
              :disabled="isLoading"
              class="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              <span v-if="isLoading" class="animate-spin">
                <i class="i-basil-spinner-outline" />
              </span>
              {{ isLoading ? 'Envoi...' : 'Envoyer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-label {
  @apply block text-base font-medium text-surface-700 dark:text-surface-300 mb-1 text-start;
}

input,
textarea {
  @apply w-full px-3 py-2 border border-surface-400 dark:border-surface-600 rounded-lg
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
  bg-surface-100 dark:bg-surface-900 text-surface-900 dark:text-surface-100;
}

.text-error {
  @apply text-red-500 text-sm mt-1;
}
</style>
