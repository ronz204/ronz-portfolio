<template>
  <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" aria-hidden="true" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useParticles } from "~/composables/useParticles";

const canvasRef = ref<HTMLCanvasElement | null>(null);
let stop: (() => void) | null = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const particles = useParticles(canvas, ctx);
  particles.start();
  stop = particles.stop;
});

onUnmounted(() => stop?.());
</script>
