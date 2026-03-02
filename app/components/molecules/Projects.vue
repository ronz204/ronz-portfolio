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

<script setup lang="ts">
import ProjectCard from "~/components/atoms/ProjectCard.vue";
import RevealSection from "~/components/atoms/RevealSection.vue";
import SectionHeading from "~/components/atoms/SectionHeading.vue";
import type { Project } from "~/components/atoms/ProjectCard.vue";

const projects: Project[] = [
  {
    title: "Gesmia",
    description: "A brief description of what this project does and the problem it solves.",
    image: "/imgs/gesmia.png",
    stack: ["React", "TypeScript", "Native", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/gesmia",
    featured: true,
  },
];
</script>
