<template>
  <div class="course-page">
    <CoursePageDetails :pages="pages" />
    <div>
      <Tabs class="sticky" :tabs="tabs" :default="activeSlot" @tab-change="onTabChange" />
      <CoursePageContent class="main-content" :active="activeSlot" :tabs="tabs" :pages="pages" />
    </div>
  </div>
</template>

<script>
import CoursePageDetails from "@theme/components/course/page/CoursePageDetails.vue";
import CoursePageContent from "@theme/components/course/page/CoursePageContent.vue";
import Tabs from "@theme/components/general/tabs/Tabs.vue";
import {
  getCourseUniversityPage,
  getLecturerPages
} from "@theme/utils/page.js";
export default {
  name: "CourseTabsPage",
  components: {
    CoursePageDetails,
    Tabs,
    CoursePageContent
  },
  props: {
    tabs: {
      type: [Array, Object],
      default: () => []
    }
  },
  data() {
    return {
      activeSlot: "overview"
    };
  },
  methods: {
    lecturerPageContent(page) {
      return page.excerpt.replace(/h1/g, "h2");
    },
    onTabChange(slot) {
      this.activeSlot = slot;
    },
    updateTab() {
      const { hash } = this.$route;
      this.activeSlot = hash.startsWith("#") ? hash.substring(1) : "overview";
    }
  },
  computed: {
    universityPage() {
      return getCourseUniversityPage(this, this.$page);
    },
    lecturerPages() {
      return getLecturerPages(this, this.$page);
    },
    universityPageContent() {
      return this.universityPage.excerpt.replace(/h1/g, "h2");
    },
    pages() {
      const { universityPage, lecturerPages } = this;
      return { universityPage, lecturerPages, coursePage: this.$page };
    }
  },
  mounted() {
    this.updateTab();
  },
  updated() {
    this.updateTab();
  }
};
</script>

<style lang="stylus" scoped>
.course-page {
  padding-top: $navbarHeight;
}

.main-content {
  margin-top: -1 * $navbarHeight;
}

.sticky {
  position: sticky;
  background-color: white;
  z-index: 1;
  top: $navbarHeight - 0.1rem;
}
</style>