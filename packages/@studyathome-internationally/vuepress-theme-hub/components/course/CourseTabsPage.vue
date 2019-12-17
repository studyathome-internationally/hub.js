<template>
  <div class="course-page">
    <CoursePageDetails :pages="pages" />
    <div>
      <IconTabs class="sticky" :tabs="tabs" :tab.sync="activePage" />
      <CoursePageContent class="main-content" :page="activePage" :tabs="tabs" :pages="pages" />
    </div>
  </div>
</template>

<script>
import CoursePageDetails from "@theme/components/course/page/CoursePageDetails.vue";
import CoursePageContent from "@theme/components/course/page/CoursePageContent.vue";
import IconTabs from "@theme/components/general/tabs/IconTabs.vue";
import { getCoursePages } from "@theme/utils/page.js";
export default {
  name: "CourseTabsPage",
  components: {
    CoursePageDetails,
    IconTabs,
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
      activePage: "overview",
      pages: null
    };
  },
  methods: {
    onTabChange(page) {
      this.activePage = page;
    },
    updateTab() {
      const { hash } = this.$route;
      this.activePage = hash.startsWith("#") ? hash.substring(1) : "overview";
    }
  },
  computed: {},
  created() {
    this.pages = getCoursePages(this, this.tabs, this.$page);
  },
  mounted() {
    this.updateTab();
  }
};
</script>

<style lang="stylus" scoped>
.course-page {
  padding-top: $navbarHeight;
}

// .main-content {
// margin-top: -1 * $navbarHeight;
// }
.sticky {
  position: sticky;
  background-color: white;
  z-index: 1;
  top: $navbarHeight - 0.1rem;
}
</style>