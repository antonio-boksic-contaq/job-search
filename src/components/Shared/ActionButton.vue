<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps(['text', 'type']);

const { type } = toRefs(props);

const buttonClass = computed(() => {
  return { [type.value]: true };
});

/* OPTIONS API
  computed: {
    buttonClass() {
      return { [this.type]: true }; // { primary: true };
    }
  }
  */
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium bg-brand-blue-1;
}

.primary {
  @apply rounded border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
