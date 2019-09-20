<template>
  <div>
    <h2 id="enrollment">
      <a id="#enrollment" aria-hidden="true" class="header-anchor">#</a>
      Enrollment
    </h2>
    <EnrollButton />
  </div>
</template>

<script>
import EnrollButton from "@theme/components/enroll/EnrollButton.vue";

export default {
  name: "EnrollSection",
  components: {
    EnrollButton
  }
};
</script>

<style lang="scss" scoped>
</style>