<template>
  <RevealItem :delay="index * 150">
    <div
      class="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-foreground/10 hover:shadow-[0_0_60px_oklch(0.15_0_0)]">
      <!-- Image -->
      <div class="relative aspect-16/10 overflow-hidden">
        <img :src="project.image" :alt="`Screenshot of ${project.title} project`"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

        <!-- Overlay on hover -->
        <div
          class="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <!-- Hover actions -->
        <div
          class="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a :href="project.liveUrl"
            class="flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
            View Live
            <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
          </a>
          <a :href="project.githubUrl"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/80 text-foreground transition-transform hover:scale-105"
            :aria-label="`View ${project.title} source code on GitHub`">
            <Icon name="lucide:github" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Info -->
      <div class="p-5 md:p-6">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold text-foreground">
            {{ project.title }}
          </h3>
          <span v-if="project.featured"
            class="rounded-full bg-foreground/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Featured
          </span>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
          {{ project.description }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tech in project.stack" :key="tech"
            class="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-secondary-foreground">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </RevealItem>
</template>

<script setup lang="ts">
import RevealItem from "~/components/atoms/RevealItem.vue";

export interface Project {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

defineProps<{
  project: Project;
  index: number;
}>();
</script>
