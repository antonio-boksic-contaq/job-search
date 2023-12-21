<script>
import MainNav from './components/MainNav.vue';
import TheHero from '@/components/TheHero.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld: HelloWorld,
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
