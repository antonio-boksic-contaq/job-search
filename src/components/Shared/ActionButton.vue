<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'type'],
  computed: {
    buttonClass() {
      return { [this.type]: true }; // { primary: true };
    }
  }
};
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
