<script>
import MainNav from '@/components/Navigation/MainNav.vue';
import TheHero from '@/components/JobSearch/TheHero.vue';

export default {
  name: 'App',
  components: {
    MainNav: MainNav,
    TheHero
  }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
      <the-hero />
    </div>
  </header>
</template>
