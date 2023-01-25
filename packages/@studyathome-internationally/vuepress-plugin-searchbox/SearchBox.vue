<template>
  <form id="search-form" class="algolia-search-wrapper search-box" role="search">
    <input id="algolia-search-input" class="search-query" :placeholder="placeholder" />
  </form>
</template>

<script>
import docsearch from "@docsearch/js";
import "@docsearch/css";

/* global ALGOLIA_CONFIG */
export default {
  name: "SearchBox",
  data() {
    return {
      placeholder: undefined,
    };
  },
  watch: {
    $lang(newValue) {
      this.update(ALGOLIA_CONFIG, newValue);
    },
  },
  mounted() {
    this.initialize(ALGOLIA_CONFIG, this.$lang);
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
  },
  methods: {
    initialize(userOptions, lang) {
      docsearch(
        Object.assign({}, userOptions, {
          inputSelector: "#algolia-search-input",
          // #697 Make docsearch work well at i18n mode.
          algoliaOptions: {
            ...algoliaOptions,
            facetFilters: [`lang:${lang}`].concat(algoliaOptions.facetFilters || []),
          },
          handleSelected: (input, event, suggestion) => {
            const { pathname, hash } = new URL(suggestion.url);
            const routepath = pathname.replace(this.$site.base, "/");
            const _hash = decodeURIComponent(hash);
            this.$router.push(`${routepath}${_hash}`);
          },
        })
      );
    },
    update(options, lang) {
      this.$el.innerHTML = '<input id="algolia-search-input" class="search-query">';
      this.initialize(options, lang);
    },
  },
};
</script>

<style lang="scss" scoped></style>
