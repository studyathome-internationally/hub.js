<template>
  <footer class="page-edit">
    <div class="edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink />
    </div>

    <div class="last-updated" v-if="lastUpdated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CoursePageEditLink",
  props: {
    pages: {
      type: Object,
      default: () => {}
    },
    page: {
      type: String,
      default: "default"
    }
  },
  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const base = `https://github.com/${docsRepo}`;
      return base + `/edit` + `/${docsBranch}/` + docsDir + "/" + path;
    }
  },
  computed: {
    lastUpdated() {
      const page = this.pages[this.page];
      return page.lastUpdated;
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },
    editLink() {
      const page = this.pages[this.page];
      // return .relativePath;
      const {
        repo,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;
      // return {
      //   repo,
      //   docsDir,
      //   docsBranch,
      //   docsRepo
      // };
      if (docsRepo && page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          page.relativePath
        );
      }
      return null;
    },
    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>