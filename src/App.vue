<template>
  <div class="w-full bg-secondary">
    <Navbar />
    <main>
        <router-view/>
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const Navbar = defineAsyncComponent(() =>
  import("@/components/layouts/Navbar.vue")
);
</script>
