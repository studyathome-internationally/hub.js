<template>
  <div>
    <h2 id="enrollment">
      <a id="#enrollment" aria-hidden="true" class="header-anchor">#</a>
      {{ title }}
    </h2>
    <p>To enroll for a course you need to contact the university holding that course and send your matriculation data.</p>
    <p>
      Please visit the
      <Navigator :to="enrollmentPage" inline label="enrollment page" />&nbsp;for further information and guidance on that matter.
      <!-- <Navigator :to="enrollmentPage" element="b-button" label="Enroll" /> -->
    </p>
  </div>
</template>

<script>
import Navigator from "@theme/components/general/buttons/Navigator.vue";

export default {
  name: "EnrollmentSection",
  components: {
    Navigator
  },
  props: {
    title: {
      type: String,
      default: "Enrollment"
    },
    course: {
      type: String,
      required: true
    }
  },
  computed: {
    enrollmentPage() {
      return `/general/enroll.html?course=${this.course}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>