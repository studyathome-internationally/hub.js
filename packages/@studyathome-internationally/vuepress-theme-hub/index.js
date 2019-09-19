const twemoji = require("twemoji");

module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        id: "courses",
        dirname: "courses",
        // path: "/courses/" (generated from id),
        layout: "IndexCourse",
        itemLayout: "Course",
        enroll: {
          template: "general/enroll",
          path: "enroll",
          enrollLayout: "Enrollment"
        }
      }
    ]
  };

  const { modifyHubPluginOptions } = themeConfig;

  function markdownConfiguration(md) {
    md.set({ breaks: false, typographer: true, linkify: true });
    md.use(require("markdown-it-sub"));
    md.use(require("markdown-it-sup"));
    md.use(require("markdown-it-footnote"));
    md.use(require("markdown-it-deflist"));
    md.use(require("markdown-it-abbr"));
    md.use(require("markdown-it-checkbox"));
    md.use(require("markdown-it-imsize"), { autofill: true });
    md.use(require("markdown-it-kbd"));

    md.renderer.rules.emoji = function(token, idx) {
      return twemoji.parse(token[idx].content, {
        base: "https://twemoji.maxcdn.com/2/",
        ext: ".svg",
        folder: "svg"
      });
    };
  }

  const hubPluginOptions =
    typeof modifyHubPluginOptions === "function"
      ? modifyHubPluginOptions(defaultHubPluginOptions)
      : defaultHubPluginOptions;

  const plugins = [
    ["@studyathome-internationally/hub", hubPluginOptions],
    ["@vuepress/back-to-top", true]
  ];

  const config = {
    extend: "@vuepress/theme-default",
    extendMarkdown: markdownConfiguration,
    plugins
  };

  return config;
};
