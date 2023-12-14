<script>
import HelloWorld from './components/HelloWorld.vue';
import MainNav from './components/MainNav.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld: HelloWorld,
    MainNav: MainNav
  }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />

      <!-- <h1 class="text-lg">Hello, im in app vue</h1> -->
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>
</template>

<style scoped>
h1 {
  color: purple;
}
</style>
