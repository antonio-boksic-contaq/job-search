<script>
import MainNav from '@/components/Navigation/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav: MainNav
  }
};
</script>

<template>
  <MainNav />
  <router-view />
</template>
