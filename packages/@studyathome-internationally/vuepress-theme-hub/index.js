module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        id: "courses",
        dirname: "_courses",
        path: "/courses/",
        layout: "IndexCourse",
        itemLayout: "Course"
      }
    ]
  };

  const { modifyHubPluginOptions } = themeConfig;

  const hubPluginOptions =
    typeof modifyHubPluginOptions === "function"
      ? modifyHubPluginOptions(defaultHubPluginOptions)
      : defaultHubPluginOptions;

  const plugins = ["@studyathome-internationally/hub", hubPluginOptions];

  const config = {
    extend: "@vuepress/theme-default",
    plugins
  };

  return config;
};
