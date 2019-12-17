<template>
  <div class="theme-default-content">
    <div class="overview-content">
      <CoursePageOverviewMedia class="course-media" />
      <div v-html="overview"></div>
    </div>
    <div class="sidebar-content">
      <CoursePageOverviewSidebar />
    </div>
  </div>
</template>

<script>
import CoursePageEditLink from "@theme/components/course/page/CoursePageEditLink.vue";
import CoursePageOverviewMedia from "@theme/components/course/page/overview/CoursePageOverviewMedia.vue";
import CoursePageOverviewSidebar from "@theme/components/course/page/overview/CoursePageOverviewSidebar.vue";

export default {
  name: "CoursePageOverview",
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CoursePageEditLink,
    CoursePageOverviewMedia,
    CoursePageOverviewSidebar
  },
  computed: {
    overview() {
      return this.pages.overview.excerpt;
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  // outline: 1px solid black;
}

// .theme-default-content {
// max-width: 100%;
// }
.theme-default-content {
  display: flex;
  flex-flow: row wrap;

  // margin-left: 10%;
  & > div {
    flex: 1 1 0px;

    // padding: 12px;
    &.overview-content {
      flex: 3 1 0px;
      order: 1;
    }

    &.sidebar-content {
      flex: 2 1 0px;
      order: 2;
      margin-left: 2rem;
      padding-top: ($navbarHeight / 2);

      & > div > h3:first-child {
        // margin: 0;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .theme-default-content {
    flex-flow: column nowrap;
    margin-left: unset;

    & > div {
      &.overview-content {
        order: 2;
      }

      &.sidebar-content {
        order: 1;
        padding: 0rem 0;
        margin-left: unset;

        & > div > h3:first-child {
          margin: unset;
        }
      }

      &.course-media {
        padding: 1rem 0;
        // width: 94%;
      }
    }
  }
}

.theme-default-content:not(.custom) {
  // max-width: $contentWidth * 1.25;
  // max-width: ($contentWidth * (7 / 5));

  // margin-right: 0;

  // margin-right: 0;
  > *:first-child {
    // margin-top: 0 !important;
    margin-top: ($navbarHeight / 2);
  }
}
</style>