<template>
  <ParentLayout>
    <template slot="page-top">
      <div class="theme-default-content">
        <CourseCards />
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@theme/layouts/Layout.vue";
export default {
  name: "IndexCourses",
  components: {
    ParentLayout
  }
};
</script>
