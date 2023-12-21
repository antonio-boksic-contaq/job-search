<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-200 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">1 column</div>
        <div class="col-start-2 col-span-5 border border-red-700"><the-headline /></div>
        <div class="col-start-7 col-span-5 border border-green-700">3 column</div>
        <div class="col-start-12 col-span-1 border border-grey-700">4 column</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/TheHeadline.vue';

export default {
  name: 'TheHero',
  components: {
    TheHeadline
  }
};
</script>
