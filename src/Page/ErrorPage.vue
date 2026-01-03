<template>
  <div v-if="hasError" class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
      <h1 class="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
      <p class="text-gray-700 mb-4">
        {{ error?.message || "An unexpected error occurred" }}
      </p>
      <button
        @click="goHome"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";

const hasError = ref(true);
const error = ref<Error | null>(null);

onErrorCaptured((err: Error, info) => {
  hasError.value = true;
  error.value = err;
  console.error("Error caught by boundary:", err, info);

  return false;
});


const goHome = () => {
  window.location.href = "/";
};
</script>
