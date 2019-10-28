<template>
  <router-link :to="`/general/enroll.html?course=${course}`" class="container">
    <b-button class="enroll" variant="primary">{{ label }}</b-button>
  </router-link>
</template>

<script>
export default {
  name: "NavigateButton",
  props: {
    course: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: "Enroll"
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