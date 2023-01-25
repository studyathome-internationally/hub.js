<template>
  <form id="search-form" class="algolia-search-wrapper search-box" role="search">
    <div id="algolia-search-input" class="search-query" :placeholder="placeholder"></div>
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
      const { algoliaOptions = {} } = userOptions;
      docsearch(
        Object.assign({}, userOptions, {
          container: "#algolia-search-input",
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
      this.$el.innerHTML = '<div id="algolia-search-input" class="search-query"></div>';
      this.initialize(options, lang);
    },
  },
};
</script>

<style lang="stylus">
#search-form
  margin-right 1rem

.DocSearch-Button-Keys, .DocSearch-Button-Container
  display flex !important

.DocSearch-Button-Placeholder
  height 0.9rem

.DocSearch-Input:focus
  outline unset !important

.DocSearch-Logo svg
  .cls-1, .cls-2
    fill var(--docsearch-logo-color)

@media (max-width: $MQMobile)
  .DocSearch-Button-Keys, .DocSearch-Button-Placeholder
    display none !important

:root
  --docsearch-logo-color $accentColor
  --docsearch-primary-color $accentColor
  --docsearch-highlight-color $accentColor
</style>
