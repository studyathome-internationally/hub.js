<template>
  <div class="page">
    <CoursePageAssessment v-if="page === 'assessment'" :pages="pages" />
    <CoursePageRequirements v-else-if="page === 'requirements'" :pages="pages" />
    <CoursePageLecturers v-else-if="page === 'lecturers'" :pages="pages" />
    <CoursePageUniversity v-else-if="page === 'university'" :pages="pages" />
    <CoursePageEnrollment v-else-if="page === 'enrollment'" :pages="pages" />
    <CoursePageOverview v-else :pages="pages" />
  </div>
</template>

<script>
import CoursePageOverview from "@theme/components/course/page/CoursePageOverview.vue";
import CoursePageAssessment from "@theme/components/course/page/CoursePageAssessment.vue";
import CoursePageRequirements from "@theme/components/course/page/CoursePageRequirements.vue";
import CoursePageLecturers from "@theme/components/course/page/CoursePageLecturers.vue";
import CoursePageUniversity from "@theme/components/course/page/CoursePageUniversity.vue";
import CoursePageEnrollment from "@theme/components/course/page/CoursePageEnrollment.vue";
import CoursePageEditLink from "@theme/components/course/page/CoursePageEditLink.vue";

import { getPage, getCoursePages, subHeading } from "@theme/utils/page.js";

export default {
  name: "CoursePageContent",
  components: {
    CoursePageOverview,
    CoursePageAssessment,
    CoursePageRequirements,
    CoursePageLecturers,
    CoursePageUniversity,
    CoursePageEnrollment,
    CoursePageEditLink
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    page: {
      type: String,
      default: "overview"
    },
    pages: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="stylus" scoped></style>