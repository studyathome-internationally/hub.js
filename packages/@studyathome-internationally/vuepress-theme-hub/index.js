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
          order: 2
        }
      }
    ]
  };

  const { modifyHubPluginOptions } = themeConfig;

  const hubPluginOptions =
    typeof modifyHubPluginOptions === "function"
      ? modifyHubPluginOptions(defaultHubPluginOptions)
      : defaultHubPluginOptions;

  const plugins = [
    ["@studyathome-internationally/hub", hubPluginOptions]
    // [
    //   "register-components",
    //   {
    //     components: [
    //       {
    //         name: "ListCourseColumns",
    //         path: "components/ListCourseColumns.vue"
    //       }
    //     ]
    //   }
    // ]
  ];

  const config = {
    extend: "@vuepress/theme-default",
    plugins
  };

  return config;
};
