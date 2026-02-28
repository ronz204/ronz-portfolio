<template>
  <section id="about" class="relative py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <RevealSection>
        <!-- Section Heading -->
        <div class="mb-12 md:mb-16">
          <RevealItem>
            <span class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              01 / About
            </span>
          </RevealItem>
          <RevealItem :delay="100">
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              A bit about me
            </h2>
          </RevealItem>
          <RevealItem :delay="200">
            <div class="mt-4 h-px w-16 bg-foreground/20" />
          </RevealItem>
        </div>

        <!-- Content Grid -->
        <div class="grid gap-12 md:grid-cols-5">
          <div class="md:col-span-3">
            <RevealItem :delay="100">
              <p class="text-base leading-relaxed text-muted-foreground md:text-lg">
                I"m a full-stack developer with a passion for building products that live at the
                intersection of design and engineering. With over 5 years of experience, I"ve worked
                across startups and agencies helping teams ship meaningful software.
              </p>
            </RevealItem>
            <RevealItem :delay="200">
              <p class="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                My approach is rooted in simplicity — clean architecture, readable code, and
                interfaces that feel natural. I believe the best technology disappears into the
                experience.
              </p>
            </RevealItem>
          </div>

          <div class="md:col-span-2">
            <RevealItem :delay="300">
              <div class="rounded-lg border border-border bg-card p-6">
                <h3 class="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Quick Facts
                </h3>
                <dl class="space-y-3">
                  <div v-for="fact in facts" :key="fact.label"
                    class="flex items-baseline justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <dt class="text-sm text-muted-foreground">{{ fact.label }}</dt>
                    <dd class="text-sm font-medium text-foreground">{{ fact.value }}</dd>
                  </div>
                </dl>
              </div>
            </RevealItem>
          </div>
        </div>
      </RevealSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import RevealItem from "~/components/atoms/RevealItem.vue";
import RevealSection from "~/components/atoms/RevealSection.vue";

interface Fact {
  label: string;
  value: string;
};

const facts: Fact[] = [
  { label: "Location", value: "Remote / Worldwide" },
  { label: "Experience", value: "2+ years" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "Languages", value: "EN / ES" },
];
</script>
