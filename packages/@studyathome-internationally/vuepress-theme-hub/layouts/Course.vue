<template>
  <BasicLayout>
    <CoursePage slot="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import CoursePage from "@theme/components/course/CoursePage.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  components: { BasicLayout, CoursePage },

  data() {
    return {
      isSidebarOpen: false
    };
  },
  computed: {},
  methods: {}
};
</script>