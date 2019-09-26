<template>
  <BasicLayout v-if="valid">
    <EnrollPage slot="content" :course="course" />
  </BasicLayout>
  <!-- DISCUSS: 404 does not allow debugging wrong parameters -->
  <ParentLayout v-else />
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import ParentLayout from "@parent-theme/layouts/404.vue";
import EnrollPage from "@theme/components/enroll/EnrollPage.vue";
import EnrollDescription from "@theme/components/enroll/EnrollDescription.vue";

export default {
  name: "Enrollment",
  components: { BasicLayout, ParentLayout, EnrollPage, EnrollDescription },
  data() {
    return {};
  },
  computed: {
    course() {
      if (decodeURIComponent && this.valid) {
        return decodeURIComponent(this.$route.query.course);
      }
      return "";
    },
    valid() {
      const coursePage = this.$site.pages.find(
        ({ regularPath }) => regularPath === this.$route.query.course
      );
      let universityPage = null;
      const isPropertySet = "course" in this.$route.query;
      const isCoursePathValid = typeof coursePage !== "undefined";
      let isUniversityFrontmatterValid = false;
      if (isCoursePathValid) {
        const university = coursePage.frontmatter.university.name;
        const universityPath = `/studyathome/partner/${university}/`;
        universityPage = this.$site.pages.find(
          ({ regularPath }) => regularPath === universityPath
        );
        isUniversityFrontmatterValid = typeof universityPage !== "undefined";
      }
      return isPropertySet && isCoursePathValid && isUniversityFrontmatterValid;
    }
  }
};
</script>