<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
}>(), {
  delay: 0,
});
</script>

<template>
  <div data-reveal
    class="opacity-0 translate-y-6 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
    :style="{ transitionDelay: `${props.delay}ms` }">
    <slot />
  </div>
</template>
