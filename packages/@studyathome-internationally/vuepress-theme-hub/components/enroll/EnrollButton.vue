<template>
  <router-link :to="`/general/enroll.html?course=${course}`" class="container">
    <b-button class="enroll" variant="primary">Enroll</b-button>
  </router-link>
</template>

<script>
export default {
  props: {
    course: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
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