<template>
  <router-link :to="`/general/enroll.html?course=${course}`" class="container">
    <!-- <a class="enroll" variant="primary">{{ label }}</a> -->
    <!-- <span class="enroll" variant="primary">{{ label }}</span> -->
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "NavigateLabel",
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
.container:hover {
  text-decoration: underline !important;
}
.enroll {
  cursor: pointer;
  flex: 1;
  font-size: 1.4rem;
}
</style>