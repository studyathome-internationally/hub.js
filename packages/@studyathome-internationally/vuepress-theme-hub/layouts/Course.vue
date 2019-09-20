<template>
  <BasicLayout>
    <CoursePage slot="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import CoursePage from "@theme/components/course/CoursePage.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  components: { BasicLayout, CoursePage },

  data() {
    return {
      isSidebarOpen: false
    };
  },
  computed: {},
  methods: {},
  created() {
    if (!this.$page.headers.find(({ slug }) => slug === "enrollment")) {
      this.$page.headers.push({
        level: 2,
        slug: "enrollment",
        title: "Enrollment"
      });
    }
  }
};
</script>

<style lang="stylus"></style>