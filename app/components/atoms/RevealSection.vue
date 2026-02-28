<script setup lang="ts">
import { useScrolling } from "~/composables/useScrolling";
const containerRef = useScrolling();
</script>

<template>
  <div ref="containerRef">
    <slot />
  </div>
</template>
