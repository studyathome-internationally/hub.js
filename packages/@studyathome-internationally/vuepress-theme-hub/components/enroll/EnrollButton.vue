<template>
  <router-link to="enroll" class="container">
    <b-button class="enroll" variant="primary">Enroll</b-button>
  </router-link>
</template>

<script>
export default {
  // DISCUSS: https://en.wikipedia.org/wiki/Mailto
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.enroll {
  cursor: pointer;
  flex: 1;
  font-size: 1.4rem;
}
</style>