module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    // "^@theme/(.*)/(SidebarButton|NavLinks)\\.vue$":
    //   "<rootDir>/../../../node_modules/@vuepress/theme-default/$1/$2",
    "^@theme/(.*)$": "<rootDir>/$1"
    // "^@parent-theme/(.*)$": "<rootDir>/../../../node_modules/@vuepress/theme-default/$1",
    // "^@AlgoliaSearchBox":
    //   "<rootDir>/../../../node_modules/@vuepress/theme-default/components/AlgoliaSearchBox",
    // "^@SearchBox": "<rootDir>/../../../node_modules/@vuepress/plugin-search/SearchBox"
  },
  transformIgnorePatterns: ["<rootDir>/package.json"],
  verbose: true
  // collectCoverage: true,
  // collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"]
};
