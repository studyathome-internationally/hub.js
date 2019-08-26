<template>
  <ParentLayout>
    <div slot="page-top">
      <div class="content-wrapper">
        <ListCourse />
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

<style lang="stylus">
.content-wrapper {
  padding: 80px 2vw;
  max-width: 70vw;
  margin: 0 auto;
}
</style>