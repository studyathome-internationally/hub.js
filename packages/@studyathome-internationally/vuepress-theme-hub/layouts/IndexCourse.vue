<template>
  <ParentLayout>
    <div slot="page-top">
      <div class="theme-default-content">
        <CourseCards />
      </div>
    </div>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
export default {
  components: {
    ParentLayout
  }
};
</script>

<style lang="stylus"></style>