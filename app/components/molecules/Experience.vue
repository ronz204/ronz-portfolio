<template>
  <section id="experience" class="relative py-24 md:py-32">
    <!-- Subtle top divider -->
    <div class="absolute left-6 right-6 top-0 mx-auto max-w-6xl">
      <div class="h-px bg-zinc-900" />
    </div>

    <div class="mx-auto max-w-6xl px-6">
      <RevealSection>
        <!-- Section Heading -->
        <SectionHeading label="02 / Experience" title="Where I've worked" />

        <!-- Experience List -->
        <div>
          <RevealItem v-for="(exp, i) in experiences" :key="exp.company" :delay="i * 100">
            <div
              class="group relative border-b border-border py-8 transition-colors duration-300 hover:bg-secondary/30 md:py-10 md:px-6 md:-mx-6 md:rounded-lg md:border-b-0">
              <div class="grid gap-4 md:grid-cols-4">
                <div class="md:col-span-1">
                  <span class="font-mono text-xs text-muted-foreground">
                    {{ exp.period }}
                  </span>
                </div>

                <div class="md:col-span-3">
                  <div class="flex items-start gap-2">
                    <h3 class="text-lg font-semibold text-foreground">
                      {{ exp.role }}
                    </h3>
                    <span class="text-muted-foreground">·</span>
                    <a :href="exp.companyUrl"
                      class="group/link inline-flex items-center gap-1 text-lg text-muted-foreground transition-colors hover:text-foreground">
                      {{ exp.company }}
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>

                  <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {{ exp.description }}
                  </p>

                  <div class="mt-3 flex flex-wrap gap-2">
                    <span v-for="tech in exp.stack" :key="tech"
                      class="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-secondary-foreground">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        </div>
      </RevealSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import RevealSection from "~/components/atoms/RevealSection.vue";
import RevealItem from "~/components/atoms/RevealItem.vue";
import SectionHeading from "~/components/atoms/SectionHeading.vue";

interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  stack: string[];
}

const experiences: Experience[] = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "TechVault",
    companyUrl: "#",
    description:
      "Leading the frontend architecture for a SaaS platform serving 50k+ users. Building design systems, optimizing performance, and mentoring junior developers.",
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Digital Craft Studio",
    companyUrl: "#",
    description:
      "Developed web applications for clients across e-commerce, fintech, and healthcare. Led the migration of legacy systems to modern stacks.",
    stack: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Pixel Agency",
    companyUrl: "#",
    description:
      "Built responsive, accessible interfaces for marketing websites and web apps. Collaborated closely with design teams to deliver pixel-perfect implementations.",
    stack: ["JavaScript", "Vue.js", "SCSS", "Figma"],
  },
];
</script>
