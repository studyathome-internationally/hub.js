const twemoji = require("twemoji");

module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        id: "courses",
        dirname: "courses",
        layout: "IndexCourse",
        itemLayout: "Course"
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
    // ["@studyathome-internationally/hub", hubPluginOptions],
    ["@vuepress/back-to-top", true],
    // [
    //   "vuepress-plugin-directory-classifier",
    //   {
    //     directories: [
    //       {
    //         dirname: "courses",
    //         layout: "IndexCourses",
    //         itemLayout: "Course",
    //         subdirlevel: 1,
    //         frontmatter: {
    //           title: "Courses"
    //         }
    //       }
    //     ]
    //   }
    // ],
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
    ]
  ];

  const config = {
    extend: "@vuepress/theme-default",
    extendMarkdown: markdownConfiguration,
    plugins
  };

  return config;
};
