const twemoji = require("twemoji");

module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        dirname: "courses",
        layout: "Courses",
        itemLayout: "Course",
        subdirlevel: 1,
        frontmatter: {
          title: "Courses",
          pageClass: "courses-overview",
        },
      },
    ],
  };

  const { modifyHubPluginOptions } = themeConfig;

  function markdownConfiguration(md) {
    md.set({ breaks: false, typographer: true, linkify: false, xhtml: true });
    md.use(require("markdown-it-sub"));
    md.use(require("markdown-it-sup"));
    md.use(require("markdown-it-footnote"));
    md.use(require("markdown-it-deflist"));
    md.use(require("markdown-it-abbr"));
    md.use(require("markdown-it-checkbox"));
    md.use(require("markdown-it-imsize"), { autofill: true });
    md.use(require("markdown-it-kbd"));
    md.use(require("markdown-it-attrs"));
    md.use(require("markdown-it-fontawesome"));

    md.renderer.rules.emoji = function(token, idx) {
      return twemoji.parse(token[idx].content, {
        base: "https://twemoji.maxcdn.com/2/",
        ext: ".svg",
        folder: "svg",
      });
    };
  }

  const hubPluginOptions =
    typeof modifyHubPluginOptions === "function"
      ? modifyHubPluginOptions(defaultHubPluginOptions)
      : defaultHubPluginOptions;

  const hubDirectoryClassifierPluginOptions = {
    directories: hubPluginOptions.directories,
  };

  const plugins = [
    [
      "matomo",
      {
        siteId: 6,
        trackerUrl: "https://analytics.wbt.wien/",
        trackerJsFile: "matomo.js",
        trackerPhpFile: "matomo.php",
      },
    ],
    ["directory-classifier", hubDirectoryClassifierPluginOptions],
    ["@studyathome-internationally/vuepress-plugin-pwa-autoload"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "AutoSWUpdatePopup",
        updatePopup: true,
      },
    ],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-default-content :not(a) :not(.no-zoom) > img",
      },
    ],
    [
      "container",
      {
        type: "full-width-image",
        before: "<div class='full-width-image'>",
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "image-triplet",
        before: "<div class='image-triplet'>",
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "post-it",
        before: (title) => `<pre class="post-it">`,
        after: "</pre>",
      },
    ],
    [
      "container",
      {
        type: "centered-image",
        before: "<div class='centered-image'>",
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "gslot",
        before: (title) => `<div class="gslot ${title}">`,
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "note",
        before: `<div class="custom-block note"><div class="icon"><font-awesome-icon icon="info-circle"></font-awesome-icon></div>`,
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "testimonial",
        before: (config) => {
          let result = `<div class="testimonial">`;
          const m = /^(.*?)\s(.*)$/.exec(config);
          if (m) {
            let [_, semester, participant] = m;
            let icon = `<font-awesome-icon icon="${
              semester.startsWith("W") ? "igloo" : "umbrella-beach"
            }"></font-awesome-icon>`;
            result += `
              <div class="information">
                <div class="semester">
                  ${icon} 
                  <span>${semester}</span>
                </div>
                <div class="participant">
                  ${participant}
                </div>
              </div>`;
          }
          result += `<div class="summary">`;
          result += `<text-previewer>`;
          return result;
        },
        after: `</text-previewer>
             </div>
           </div>`,
      },
    ],
    [
      "@vuepress/plugin-register-components",
      {
        components: [
          {
            name: "Courses",
            path: "@theme/components/course/Courses.vue",
          },
          {
            name: "CourseSelection",
            path: "@theme/components/enrollment/CourseSelection.vue",
          },
          {
            name: "UniversitySelection",
            path: "@theme/components/enrollment/UniversitySelection.vue",
          },
          {
            name: "RequiredData",
            path: "@theme/components/enrollment/RequiredData.vue",
          },
          {
            name: "Disclaimer",
            path: "@theme/components/enrollment/Disclaimer.vue",
          },
          {
            name: "Confirmation",
            path: "@theme/components/enrollment/Confirmation.vue",
          },
          {
            name: "EMail",
            path: "@theme/components/enrollment/EMail.vue",
          },
          {
            name: "PostIt",
            path: "@theme/components/general/PostIt.vue",
          },
        ],
      },
    ],
  ];

  const config = {
    extend: "@vuepress/theme-default",
    extendMarkdown: markdownConfiguration,
    globalUIComponents: ["CookieConsent", "FilterConsumer"],
    plugins,
  };

  return config;
};
