<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    scrolled
      ? 'bg-background/80 backdrop-blur-xl border-b border-border'
      : 'bg-transparent',
  ]">

    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" class="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70">
        ronz<span class="text-muted-foreground">.dev</span>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
            class="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface Link {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const scrolled = ref(false);
const onScroll = () => { scrolled.value = window.scrollY > 50 };

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
