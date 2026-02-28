import { ref, onMounted, onUnmounted } from "vue";

export function useScrolling() {
  const containerRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const el = containerRef.value;
    if (!el) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        };
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    el.querySelectorAll("[data-reveal]").forEach((child) => {
      observer!.observe(child)
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return containerRef;
};
