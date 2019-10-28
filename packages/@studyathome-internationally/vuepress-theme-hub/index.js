const twemoji = require("twemoji");

module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        dirname: "courses",
        layout: "IndexCourses",
        itemLayout: "Course",
        subdirlevel: 1,
        frontmatter: {
          title: "Courses"
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

  const hubDirectoryClassifierPluginOptions = {
    directories: hubPluginOptions.directories
  };

  const plugins = [
    ["directory-classifier", hubDirectoryClassifierPluginOptions],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-default-content :not(a) > img:not(.card-image):not(.card-img)"
      }
    ],
    [
      "container",
      {
        type: "full-width-image",
        before: "<div class='full-width-image'>",
        after: "</div>"
      }
    ],
    [
      "container",
      {
        type: "post-it",
        before: title => `<pre class="post-it">`,
        after: "</pre>"
      }
    ],
    [
      "container",
      {
        type: "centered-image",
        before: "<div class='centered-image'>",
        after: "</div>"
      }
    ],
    [
      "@vuepress/plugin-register-components",
      {
        components: [
          {
            name: "CourseCards",
            path: "@theme/components/course/CourseCards.vue"
          }
        ]
      }
    ]
  ];

  const config = {
    extend: "@vuepress/theme-default",
    extendMarkdown: markdownConfiguration,
    plugins
  };

  return config;
};
