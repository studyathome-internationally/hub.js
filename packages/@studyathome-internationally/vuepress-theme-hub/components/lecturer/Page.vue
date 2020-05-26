<template>
  <main class="page lecturer">
    <div class="theme-default-content">
      <Overview />
      <Content />
    </div>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
  </main>
</template>

<script>
import Overview from "@theme/components/lecturer/page/Overview.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav, Overview },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl';
.page
  margin-top $navbarHeight
  padding-bottom 2rem
  display block
.page-edit
  margin-top 2rem
</style>
