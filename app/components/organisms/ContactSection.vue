
<template>
  <section id="contact" class="relative py-24 md:py-32">
    <!-- Subtle top divider -->
    <div class="absolute left-6 right-6 top-0 mx-auto max-w-6xl">
      <div class="h-px bg-border" />
    </div>

    <div class="mx-auto max-w-6xl px-6">
      <RevealSection>
        <!-- Section Heading -->
        <SectionHeading label="04 / Contact" title="Let's work together" />

        <!-- Contact and Socials Grid -->
        <div class="grid gap-12 md:grid-cols-2">
          <!-- Contact Message and Email -->
          <div>
            <RevealItem :delay="100">
              <p class="text-base leading-relaxed text-muted-foreground md:text-lg">
                I'm always interested in hearing about new projects and opportunities. Whether you
                have a question or just want to say hi, feel free to reach out.
              </p>
            </RevealItem>

            <RevealItem :delay="200">
              <a href="mailto:hello@example.com"
                class="group mt-8 inline-flex items-center gap-3 text-xl font-semibold text-foreground transition-colors hover:text-muted-foreground md:text-2xl">
                <Icon name="lucide:mail" class="h-5 w-5" />
                roneyruizrojas@gmail.com
                <Icon name="lucide:arrow-up-right"
                  class="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </RevealItem>
          </div>

          <!-- Social Links -->
          <div>
            <RevealItem :delay="300">
              <h3 class="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Find me online
              </h3>
              <div class="space-y-4">
                <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-foreground/10 hover:bg-secondary/30">
                  <div class="flex items-center gap-3">
                    <Icon :name="social.icon" class="h-5 w-5 text-muted-foreground" />
                    <div>
                      <span class="text-sm font-medium text-foreground">{{ social.label }}</span>
                      <p class="text-xs text-muted-foreground">{{ social.handle }}</p>
                    </div>
                  </div>
                  <Icon name="lucide:arrow-up-right"
                    class="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </RevealItem>
          </div>
        </div>
      </RevealSection>
    </div>
  </section>
</template>

<script lang="ts" setup>
import RevealItem from "~/components/atoms/RevealItem.vue";
import RevealSection from "~/components/molecules/RevealSection.vue";
import SectionHeading from "~/components/molecules/SectionHeading.vue";

interface Social {
  icon: string;
  label: string;
  handle: string;
  href: string;
};

const socials: Social[] = [
  {
    icon: "lucide:github",
    label: "GitHub",
    handle: "@ronz204",
    href: "https://github.com/ronz204",
  },
  {
    icon: "lucide:linkedin",
    label: "LinkedIn",
    handle: "/in/roney-ruiz-rojas-a8a98b292",
    href: "https://www.linkedin.com/in/roney-ruiz-rojas-a8a98b292",
  },
];
</script>
