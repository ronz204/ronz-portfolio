<script setup lang="ts">
import Hero from "~/components/molecules/Hero.vue";
import About from "~/components/molecules/About.vue";
import Projects from "~/components/molecules/Projects.vue";
import Experience from "~/components/molecules/Experience.vue";
import Navigation from "~/components/molecules/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  </div>
</template>
