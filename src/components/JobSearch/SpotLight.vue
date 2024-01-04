<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SpotLight',
  data() {
    return {
      spotlights: []
    };
  },
  async mounted() {
    const baseUrl = 'http://localhost:3000'; // lui usa env variables.
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    this.spotlights = response.data;
  }
};
</script>
