<template>
  <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <!-- Particle Background -->
    <Particles />

    <!-- Radial gradient overlay -->
    <div class="hero-vignette absolute inset-0 pointer-events-none" aria-hidden="true" />

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <div class="mb-6 animate-fade-up opacity-0">
        <span
          class="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground">
          AVAILABLE FOR WORK
        </span>
      </div>

      <h1
        class="animate-fade-up opacity-0 delay-100 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
        Crafting digital
        <span class="relative inline-block">
          <span class="relative z-10">experiences</span>
          <span class="hero-title-underline absolute -bottom-1 left-0 h-3 w-full opacity-20" aria-hidden="true" />
        </span>
      </h1>

      <p
        class="mx-auto mt-6 max-w-xl animate-fade-up opacity-0 delay-200 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-8">
        Full-stack developer focused on building polished products with clean code
        and thoughtful design. I turn complex problems into elegant solutions.
      </p>

      <!-- Social links -->
      <div class="mt-8 flex animate-fade-up opacity-0 delay-300 items-center justify-center gap-4 md:mt-10">
        <a v-for="link in socials" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer"
          class="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground hover:bg-secondary"
          :aria-label="link.label">
          <Icon :name="link.icon" class="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
        </a>
        <a href="#contact"
          class="flex h-11 items-center gap-2 rounded-full border border-foreground/20 bg-foreground px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-foreground/90">
          Let"s talk
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 delay-500">
      <a href="#about"
        class="flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        aria-label="Scroll to about section">
        <span class="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <Icon name="lucide:arrow-down" class="h-4 w-4 animate-bounce" />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Particles from "../atoms/Particles.vue";

interface Social {
  label: string;
  href: string;
  icon: string;
};

const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ronz204", icon: "lucide:github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/roney-ruiz-rojas-a8a98b292", icon: "lucide:linkedin" },
] as const;
</script>

<style scoped>
.hero-vignette {
  background: radial-gradient(ellipse at 50% 50%, transparent 0%, oklch(0.07 0 0) 70%);
}

.hero-title-underline {
  background: linear-gradient(90deg, oklch(0.45 0 0), transparent);
}
</style>
