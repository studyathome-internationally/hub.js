<template>
  <div class="mailer">
    <a :href="mail()">
      <button class="mailer-button" :disabled="valid ? false : true">
        <slot>Mail</slot>
      </button>
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { serialize } from "uri-js";

import { generateMailto } from "@theme/utils/mail.js";
import { prepareMail } from "@theme/utils/enrollment.js";

import course from "@theme/mixins/course-enrollment.js";

export default {
  name: "EMail",
  mixins: [course],
  data() {
    return {
      mailto: "",
    };
  },
  methods: {
    mail() {
      const cc = this.cc.join(";");
      const bcc = this.bcc.join(";");
      return !this.valid
        ? "/#"
        : serialize({
            scheme: "mailto",
            to: this.to,
            subject: this.subject,
            body: this.body,
            headers: {
              cc,
              bcc,
            },
          });
    },
  },
  computed: {
    ...mapState(["enrollment"]),
    to() {
      return this.mailInfo.to || [];
    },
    cc() {
      return this.mailInfo.cc || [];
    },
    bcc() {
      return this.mailInfo.bcc || [];
    },
    subject() {
      return this.mailInfo.subject || "";
    },
    body() {
      return this.mailInfo.body || "";
    },
    hostUniversity() {
      return this.course
        ? this.$site.pages.find(
            ({ regularPath }) => regularPath === this.course.frontmatter.university.page
          )
        : false;
    },
    homeUniversity() {
      return this.$site.pages.find(
        ({ title }) => title && title === this.enrollment.home
      );
    },
    mailInfo() {
      return this.valid
        ? prepareMail(
            this.$frontmatter.enrollment,
            this.course,
            this.hostUniversity,
            this.homeUniversity
          )
        : false;
    },
    valid() {
      return (
        this.$route.query.course &&
        this.$route.query.course !== "" &&
        this.$route.query.home &&
        this.$route.query.home !== "" &&
        this.enrollment.disclaimer
      );
    },
  },
  updated() {
    this.mailto = generateMailto(this);
  },
  mounted() {
    this.mailto = generateMailto(this);
    this.$store.commit("updateEnrollmentDisclaimer", false);
  },
};
</script>

<style lang="stylus" scoped>
a, button {
  display: block;
  width: 100%;
}

a:hover {
  text-decoration: none !important;
}

button {
  background-color: $accentColor;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px darken($borderColor, 70%);

  &:disabled {
    background-color: alpha($accentColor, 50%);
    cursor: auto;
  }
}

.mailer {
  width: 100%;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
}

.mailer-button {
  flex: 1;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
