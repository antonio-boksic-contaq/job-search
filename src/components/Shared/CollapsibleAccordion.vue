<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex flex-wrap items-center justify-between cursor-pointer" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <!-- questo child rappresenta contenuto che vogliamo mostrare quando accordion è aperto -->
    <div v-if="isOpen" class="mt-5 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

defineProps({
  header: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']));

/* OPTIONS API
    props: {
    header: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    }
  }
  */
</script>
