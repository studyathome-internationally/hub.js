<template>
  <b-link :href="mailto()" class="link" style="display: flex;">
    <b-button class="join-button" variant="info">
      Open E-Mail Template
      <font-awesome-icon icon="mail-bulk" />
    </b-button>
  </b-link>
</template>

<script>
export default {
  props: {
    enrollment: {
      type: Object,
      required: true
    },
    course: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ...this.enrollment
    };
  },
  methods: {
    mailto: function() {
      // https://tools.ietf.org/html/rfc6068
      const url = `mailto:?${this.getTo +
        this.getSubject +
        this.getCC +
        this.getBCC +
        this.getBody}`;
      return url;
    },
    construct: function(label, elems) {
      if (typeof elems === "undefined") return "";
      let entry = elems;
      if (typeof elems === "Array") entry = elems.join(",");
      return `&${encodeURIComponent(label)}=${encodeURIComponent(entry)}`;
    }
  },
  computed: {
    getTo: function() {
      return this.construct("to", this.to);
    },
    getSubject: function() {
      return this.construct("subject", this.subject);
    },
    getCC: function() {
      return this.construct("cc", [
        ...this.cc,
        ...this.coursePage.frontmatter.lecturers.map(({ email }) => email)
      ]);
    },
    getBCC: function() {
      return this.construct("bcc", this.bcc);
    },
    getBody: function() {
      let body = this.body.replace(/(\\n\s|\\n)/g, "\n");
      [
        ["title", this.coursePage.frontmatter.title],
        ["link", this.coursePage.frontmatter.link]
      ].forEach(([name, value]) => {
        body = body.replace(new RegExp(`{{\\s?${name}\\s?}}`, "g"), value);
      });
      return this.construct("body", body);
    },
    coursePage() {
      return this.$site.pages.find(
        ({ regularPath }) => regularPath === this.course
      );
    },
    universityPage() {
      const university = this.coursePage.frontmatter.university.name;
      const universityPath = `/studyathome/partner/${university}/`;
      return this.$site.pages.find(
        ({ regularPath }) => regularPath === universityPath
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.link:hover {
  text-decoration: none !important;
}
.container {
  display: flex;
}
.join-button {
  flex: 1;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>