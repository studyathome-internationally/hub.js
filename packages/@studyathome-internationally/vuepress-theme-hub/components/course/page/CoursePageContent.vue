<template>
  <div class="page">
    <template v-if="active === 'university'">
      <div class="theme-default-content" v-html="subHeading(university)"></div>
    </template>
    <template v-else-if="active === 'lecturers'">
      <div
        class="theme-default-content"
        v-for="lecturer of lecturers"
        :key="lecturer.regularPath"
        v-html="subHeading(lecturer.excerpt)"
      ></div>
    </template>
    <template v-else-if="active === 'enrollment'">
      <CoursePageEnrollment :pages="pages" />
    </template>
    <template v-else>
      <div class="theme-default-content">
        <div v-html="loadContent(active)"></div>
      </div>
      <!-- <Content class="theme-default-content" :slot-key="active" /> -->
    </template>
  </div>
</template>

<script>
import CoursePageEnrollment from "@theme/components/course/page/CoursePageEnrollment.vue";

import { getPage } from "@theme/utils/page.js";

export default {
  name: "CoursePageContent",
  components: { CoursePageEnrollment },
  props: {
    active: {
      type: String,
      default: "default"
    },
    tabs: {
      type: Array,
      default: () => []
    },
    pages: {
      type: Object,
      default: () => {
        return {
          universityPage: { excerpt: "<h2>University</h2>" },
          lecturerPages: [{ excerpt: "<h2>Lecturer</h2>" }]
        };
      }
    }
  },
  methods: {
    subHeading(content) {
      return content
        .replace(/h3/g, "h4")
        .replace(/h2/g, "h3")
        .replace(/h1/g, "h2");
    },
    loadContent(content) {
      const tab = this.tabs.find(({ slot }) => slot === content);
      const path = `${this.$page.regularPath}${tab.path}`;
      const page = getPage(this, path);
      return page ? page.excerpt : "";
    }
  },
  computed: {
    university() {
      return this.pages.universityPage.excerpt;
    },
    lecturers() {
      return this.pages.lecturerPages;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>