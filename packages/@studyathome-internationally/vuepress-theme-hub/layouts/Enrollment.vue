<template>
  <BasicLayout>
    <EnrollPage slot="content" :course="course" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import EnrollPage from "@theme/components/enrollment/EnrollmentPage.vue";

export default {
  name: "Enrollment",
  components: { BasicLayout, EnrollPage },
  data() {
    return {
      course: null
    };
  },
  created() {
    const { course } = this.$route.query;
    if (typeof course !== "undefined") {
      this.course = decodeURIComponent(course);
      this.$router.replace(this.$route.path);
    }
  }
};
</script>