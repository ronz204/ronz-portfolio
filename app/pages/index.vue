<script setup lang="ts">
import Navigation from "~/components/organisms/Navigation.vue";
import HeroSection from "~/components/organisms/HeroSection.vue";
import AboutSection from "~/components/organisms/AboutSection.vue";
import PiecesSection from "~/components/organisms/PiecesSection.vue";
import CareerSection from "~/components/organisms/CareerSection.vue";
</script>

<template>
  <div>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <PiecesSection />
    </main>
  </div>
</template>
