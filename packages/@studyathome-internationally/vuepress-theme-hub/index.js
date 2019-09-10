module.exports = (themeConfig, ctx) => {
  const defaultHubPluginOptions = {
    directories: [
      {
        id: "courses",
        dirname: "courses",
        // path: "/courses/" (generated from id),
        layout: "IndexCourse",
        itemLayout: "Course",
        nav: {
          title: "Courses",
          order: 2 // TODO: add option "append"
        },
        enroll: {
          template: "general/enroll",
          path: "enroll",
          enrollLayout: "Enrollment"
        }
      }
    ]
  };

  const { modifyHubPluginOptions } = themeConfig;

  const hubPluginOptions =
    typeof modifyHubPluginOptions === "function"
      ? modifyHubPluginOptions(defaultHubPluginOptions)
      : defaultHubPluginOptions;

  const plugins = [["@studyathome-internationally/hub", hubPluginOptions]];

  const config = {
    extend: "@vuepress/theme-default",
    plugins
    // globalUIComponents: ["Enroll"]
  };

  return config;
};
