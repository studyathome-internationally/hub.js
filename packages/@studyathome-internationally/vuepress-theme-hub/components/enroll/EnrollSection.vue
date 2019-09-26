<template>
  <div>
    <h2 id="enrollment">
      <a id="#enrollment" aria-hidden="true" class="header-anchor">#</a>
      Enrollment
    </h2>
    <EnrollButton :course="course" />
  </div>
</template>

<script>
import EnrollButton from "@theme/components/enroll/EnrollButton.vue";

export default {
  name: "EnrollSection",
  components: {
    EnrollButton
  },
  props: {
    course: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>