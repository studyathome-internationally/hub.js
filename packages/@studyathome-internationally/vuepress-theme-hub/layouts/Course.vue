<template>
  <BasicLayout>
    <CourseTabsPage slot="content" :tabs="tabs" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import CourseTabsPage from "@theme/components/course/CourseTabsPage.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  name: "Course",
  components: { BasicLayout, CourseTabsPage },
  data() {
    return {
      isSidebarOpen: false,
      tabs: [
        {
          title: "Overview",
          slot: "overview",
          path: "overview.html",
          icon: "anchor"
        },
        {
          title: "Assessment",
          slot: "assessment",
          path: "assessment.html",
          icon: "balance-scale"
        },
        {
          title: "Requirements",
          slot: "requirements",
          path: "requirements.html",
          icon: "certificate"
        },
        { title: "Lecturer", slot: "lecturers", icon: "chalkboard-teacher" },
        { title: "University", slot: "university", icon: "university" },
        { title: "Enrollment", slot: "enrollment", icon: "envelope" }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="stylus"></style>