<template>
  <section>
    <div
      class="prose prose-lg max-w-none break-all w-full bg-Grey"
      v-html="htmlContent"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { marked } from "marked";
import { computed } from "vue";

marked.setOptions({
  breaks: true,
  gfm: true,
});

interface PreviewProps {
  text?: string;
}

const props = withDefaults(defineProps<PreviewProps>(), {
  text: "",
});

const htmlContent = computed(() => {
  return marked.parse(props.text || "");
});
</script>
