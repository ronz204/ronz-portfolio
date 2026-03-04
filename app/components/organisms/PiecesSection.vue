<template>
  <section id="projects" class="relative py-24 md:py-32">
    <div class="absolute left-6 right-6 top-0 mx-auto max-w-6xl">
      <div class="h-px bg-border" />
    </div>

    <div class="mx-auto max-w-6xl px-6">
      <RevealSection>
        <SectionHeading label="03 / Projects" title="Selected work" />

        <div class="grid gap-6 md:grid-cols-2">
          <ProjectCard v-for="(project, i) in projects" :key="project.title" :project="project" :index="i" />
        </div>
      </RevealSection>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gesmiaImg from "~/assets/imgs/gesmia.png";

import ProjectCard from "~/components/molecules/ProjectCard.vue";
import RevealSection from "~/components/molecules/RevealSection.vue";
import SectionHeading from "~/components/molecules/SectionHeading.vue";
import type { Project } from "~/components/molecules/ProjectCard.vue";

const projects: Project[] = [
  {
    title: "Gesmia",
    description: "Top-20 App in Magazines and Newspapers category on the App Store. Family app - share your location with friends & family.",
    image: gesmiaImg,
    stack: ["React", "TypeScript", "Tailwind", ".NET"],
    liveUrl: "https://github.com/gesmia",
    githubUrl: "https://github.com/gesmia",
    featured: true,
  },
];
</script>
