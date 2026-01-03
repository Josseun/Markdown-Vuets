<template>
  <section class="lg:h-full md:h-full sm:h-full flex flex-col">
    <!-- Toolbar -->
    <div class="flex-shrink-0">
      <div
        class="flex flex-wrap items-center bg-black/80 text-white w-full px-4 py-3 gap-3"
      >
        <div class="flex gap-1">
          <button
            aria-label="Make text bold"
            @click="insertText('**', '**')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Bold :size="20" />
          </button>
          <button
            aria-label="Make text italic"
            @click="insertText('*', '*')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Italic :size="20" />
          </button>
        </div>
        <div class="w-px h-6 bg-gray-500"></div>
        <div class="flex gap-1">
          <button
            @click="insertText('# ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Heading1 :size="20" />
          </button>
          <button
            @click="insertText('## ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Heading2 :size="20" />
          </button>
          <button
            @click="insertText('### ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Heading3 :size="20" />
          </button>
          <button
            @click="insertText('#### ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Heading4 :size="20" />
          </button>
        </div>
        <div class="w-px h-6 bg-gray-500"></div>
        <div class="flex gap-1">
          <button
            @click="insertText('- ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <List :size="20" />
          </button>
          <button
            @click="insertText('1. ', '')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <ListOrdered :size="20" />
          </button>
        </div>
        <div class="w-px h-6 bg-gray-500"></div>
        <div class="flex gap-1">
          <button
            @click="insertText('[link text](url)')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <LinkIcon :size="20" />
          </button>
          <button
            @click="insertText('![alt text](image-url)')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Image :size="20" />
          </button>
          <button
            @click="insertText('```\n ', '\n```')"
            class="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <Code :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Textarea -->
    <div class="flex-1 overflow-hidden">
      <textarea
        ref="textareaRef"
        v-model="localText"
        @input="handleInput"
        class="w-full h-screen lg:h-full text-white bg-gray-900 p-4 outline-none resize-none font-mono"
        placeholder="Enter your markdown text here"
        aria-label="Markdown input"
      ></textarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ListOrdered,
  List,
  Link as LinkIcon,
  Image,
  Code,
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "lucide-vue-next";
import { ref, watch } from "vue";

interface MarkdownDataProp {
  text: string;
  onChange?: (newText: string) => void;
}

const Props = defineProps<MarkdownDataProp>();

const emit = defineEmits<{
  "on-change": [value: string];
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const localText = ref(Props.text);

watch(
  () => Props.text,
  (newValue) => {
    localText.value = newValue;
  }
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  const newText = target.value;

  localText.value = newText;
  emit("on-change", newText);

  if (Props.onChange) {
    Props.onChange(newText);
  }
};

const insertText = (before: string, after: string = "") => {
  const el = textareaRef.value;
  if (!el) return;

  const start = el.selectionStart;
  const end = el.selectionEnd;

  const currentText = localText.value;
  const selectedText = currentText.substring(start, end);

  const newText =
    currentText.substring(0, start) +
    before +
    selectedText +
    after +
    currentText.substring(end);

  localText.value = newText;
  emit("on-change", newText);

  setTimeout(() => {
    el.focus();
    const newCursorPos = start + before.length;
    el.setSelectionRange(newCursorPos, newCursorPos + selectedText.length);
  }, 0);
};
</script>

<style scoped>
textarea {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #1f2937;
}

textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: #1f2937;
}

textarea::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
