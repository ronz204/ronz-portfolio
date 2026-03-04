<template>
  <div class="mb-12 md:mb-16">
    <RevealItem>
      <span class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {{ label }}
      </span>
    </RevealItem>
    <RevealItem :delay="100">
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
        {{ title }}
      </h2>
    </RevealItem>
    <RevealItem :delay="200">
      <div class="mt-4 h-px w-16 bg-foreground/20" />
    </RevealItem>
  </div>
</template>

<script setup lang="ts">
import RevealItem from "~/components/atoms/RevealItem.vue";

defineProps<{
  label: string;
  title: string;
}>();
</script>
