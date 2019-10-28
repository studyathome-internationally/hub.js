<template>
  <div>
    <b-form>
      <b-form-group label="Select Course:" label-for="input-course">
        <b-form-select
          id="input-course"
          v-model="selection"
          :options="courses"
          @change="onChange"
          required
        ></b-form-select>
      </b-form-group>
    </b-form>
    <b-link :href="mail()" class="link" style="display: flex;">
      <b-button class="join-button" variant="info" :disabled="disabled">
        Compose E-Mail
        <font-awesome-icon icon="mail-bulk" />
      </b-button>
    </b-link>
  </div>
</template>

<script>
export default {
  name: "JoinButton",
  props: {
    enrollment: {
      type: Object,
      required: true
    },
    course: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      disabled: true,
      selection: "",
      mailto: ""
    };
  },
  methods: {
    mail: function() {
      return this.disabled ? "enroll.html" : `mailto:?${this.mailto}`;
    },
    onChange: function() {
      if (this.selection !== "") {
        this.disabled = false;
        this.mailto = generateMail(this);
      }
    }
  },
  computed: {
    courses: function() {
      const indexPage = getPage(this, "/courses/");
      const index = indexPage.frontmatter.indexed;
      return getPages(this, index)
        .map(page => page.frontmatter)
        .filter(({ state }) => state)
        .map(frontmatter => frontmatter.title)
        .sort();
    }
  },
  mounted() {
    const page = getPage(this, this.course);
    if (page) {
      this.selection = page.frontmatter.title;
      this.disabled = false;
      this.mailto = generateMail(this);
    }
  }
};

function getPage(pageCtx, path) {
  return pageCtx.$site.pages.find(({ regularPath }) => regularPath === path);
}
function getPageByTitle(pageCtx, title) {
  return pageCtx.$site.pages.find(page => {
    return page.frontmatter.title === title;
  });
}
function getPages(pageCtx, paths) {
  return pageCtx.$site.pages.filter(({ regularPath }) =>
    paths.includes(regularPath)
  );
}
function construct(label, elems) {
  if (typeof elems === "undefined") return "";
  let entry = elems;
  if (typeof elems === "Array") entry = elems.join(",");
  return `${encodeURIComponent(label)}=${encodeURIComponent(entry)}`;
}
function processBody(body, { course }) {
  let result = body.replace(/(\\n\s|\\n)/g, "\n");
  [
    ["title", course.frontmatter.title],
    ["link", course.frontmatter.link]
  ].forEach(([name, value]) => {
    result = result.replace(new RegExp(`{{\\s?${name}\\s?}}`, "g"), value);
  });
  return result;
}
function generateMail(pageCtx) {
  /* Load required data */
  const course = pageCtx.selection;
  const coursePage = getPageByTitle(pageCtx, course);
  const university = coursePage.frontmatter.university.name;
  const universityPage = getPage(
    pageCtx,
    `/studyathome/partner/${university}/`
  );
  /* Combine mailto data */
  const enrollment = {
    ...pageCtx.enrollment,
    to: universityPage.frontmatter["international-office"]
  };

  /* Prepare mailto fields */
  const to = construct("to", enrollment.to);
  const cc = construct("cc", [
    ...enrollment.cc,
    ...coursePage.frontmatter.lecturers.map(({ email }) => email)
  ]);
  const bcc = construct("bcc", enrollment.bcc);
  const subject = construct("subject", enrollment.subject);
  const { before, form, after } = enrollment.body;
  const bodyTemplate = [before, form, after].join("");
  const body = construct(
    "body",
    processBody(bodyTemplate, { course: coursePage })
  );
  return [to, cc, bcc, subject, body].join("&");
}
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