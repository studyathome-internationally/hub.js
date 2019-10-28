<template>
  <div class="theme-default-content">
    <Content />
    <MatriculationData>
      <Content slot-key="matriculation-data" />
    </MatriculationData>
    <Disclaimer @confirmation-change="onConfirmationChange">
      <Content slot-key="disclaimer" />
      <hr v-if="university" />
      <!-- <Content :slot-key="`disclaimer${university ? `-${university}` : ''}`" /> -->
      <Content :slot-key="`disclaimer-${university}`" />
    </Disclaimer>
    <CourseSelection v-bind:choice.sync="courseSelection" v-bind:choices="courses" />
    <Mailer v-bind="mail" :disabled="disableMailer">{{ mailerLabel }}</Mailer>
  </div>
</template>

<script>
import MatriculationData from "@theme/components/enrollment/page/EnrollmentPageMatriculationData.vue";
import Disclaimer from "@theme/components/enrollment/page/EnrollmentPageDisclaimer.vue";
import CourseSelection from "@theme/components/enrollment/page/EnrollmentPageCourseSelection.vue";
import Mailer from "@theme/components/general/buttons/Mailer.vue";

import { prepareMail } from "@theme/utils/enrollment.js";
import {
  getCourses,
  getPage,
  getPageByTitle,
  getCourseUniversityPage
} from "@theme/utils/page.js";

export default {
  name: "EnrollmentPage",
  components: {
    MatriculationData,
    Disclaimer,
    CourseSelection,
    Mailer
  },
  props: {
    course: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      courseSelection: "",
      mailerLabel: "Compose E-Mail",
      confirmation: false
    };
  },
  computed: {
    mail() {
      return prepareMail(
        this.$frontmatter.enrollment,
        this,
        this.courseSelection
      );
    },
    courses() {
      return getCourses(this);
    },
    disableMailer() {
      return !this.confirmation || this.courseSelection === "";
    },
    university() {
      const coursePage = getPageByTitle(this, this.courseSelection);
      if (typeof coursePage === "undefined") return null;
      const universityPage = getCourseUniversityPage(this, coursePage);
      return universityPage.frontmatter.short;
    }
  },
  methods: {
    onConfirmationChange(confirmed) {
      this.confirmation = confirmed;
    }
  },
  created() {
    this.$frontmatter.mailerLabel = this.mailerLabel;
    const page = getPage(this, this.course);
    if (page) {
      this.courseSelection = page.frontmatter.title;
    }
  }
};
</script>

<style lang="stylus">
hr {
  border-top: 0.15rem solid #85640465 !important;
}
</style>