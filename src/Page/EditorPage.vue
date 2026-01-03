<template>
  <section
    class="lg:h-[calc(100vh-64px)] w-full overflow-hidden bg-gray-900 flex-1 flex flex-col lg:flex-row text-white"
  >
    <div
      class="flex-1 flex flex-col min-h-0 border border-gray-700 rounded-lg overflow-hidden"
    >
      <Editor :text="markdownText" @on-change="updateText" />
    </div>

    <div
      class="flex-1 min-h-0 border border-gray-700 rounded-lg bg-white overflow-y-auto p-8 shadow-inner"
    >
      <Preview :text="markdownText" />
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const markdownText = ref(`

# Welcome to the Editor
## heading
### heading
#### heading

Start typing your markdown here...

## Features

- **Bold** 
- *italic* text
- Lists 
1. links
1. Code blocks
1. And much more!


![alt text](https://i.pinimg.com/736x/4d/b5/dc/4db5dc43f8b026df4657d12eda9429c2.jpg)

[https://i.pinimg.com/736x/4d/b5/dc/4db5dc43f8b026df4657d12eda9429c2.jpg](url)


`);
const updateText = (newText) => {
  markdownText.value = newText;
};

const Editor = defineAsyncComponent(() => import("@/components/layouts/Editor.vue"));
const Preview = defineAsyncComponent(() => import("@/components/layouts/Preview.vue"));
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #000957 #f1f1f1;
}
</style>
