<template>
  <div class="theme-default-content">
    <Description />
    <MatriculationData variant="primary" />
    <Disclaimer @confirmation-change="onConfirmationChange" variant="info" />
    <Mailer v-bind="mail" :disabled="disableMailer" variant="primary">{{ mailerLabel }}</Mailer>
  </div>
</template>

<script>
import Description from "@theme/components/enrollment/page/EnrollmentPageDescription.vue";
import MatriculationData from "@theme/components/enrollment/page/EnrollmentPageMatriculationData.vue";
import Disclaimer from "@theme/components/enrollment/page/EnrollmentPageDisclaimer.vue";
import Mailer from "@theme/components/general/buttons/Mailer.vue";

import { prepareMail } from "@theme/utils/enrollment.js";
import { extractSlot } from "@theme/utils/container.js";
import {
  getCourses,
  getPage,
  getPageByTitle,
  getCourseUniversityPage
} from "@theme/utils/page.js";

export default {
  name: "CoursePageEnrollment",
  components: {
    Description,
    MatriculationData,
    Disclaimer,
    Mailer
  },
  props: {
    pages: {
      type: Object,
      default: () => {
        return {
          coursePage: { excerpt: "<h2>Course</h2>" },
          universityPage: { excerpt: "<h2>University</h2>" }
        };
      }
    }
  },
  data() {
    return {
      mailerLabel: "Compose E-Mail",
      confirmation: false
    };
  },
  computed: {
    disableMailer() {
      return !this.confirmation;
    },
    enrollment() {
      return getPage(this, "/general/enroll.html").frontmatter.enrollment;
    },
    mail() {
      return prepareMail(this.enrollment, this);
    }
  },
  methods: {
    onConfirmationChange(confirmed) {
      this.confirmation = confirmed;
    }
  }
  // created() {
  //   this.$frontmatter.mailerLabel = this.mailerLabel;
  // }
};
</script>

<style lang="stylus" scoped></style>