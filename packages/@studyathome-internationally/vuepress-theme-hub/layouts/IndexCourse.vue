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
  padding: 80px 15px 80px 15px;
  min-height: calc(100vh - 80px - 60px - 160px);
  max-width: 740px;
  margin: 0 10%;
}
</style>