<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content course-page">
      <div>
        <h2>Title</h2>
        <Info id="info-mobile" class="information" />
        <div>
          <p v-for="i of 10" :key="i">
            Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem
            ipsum. Lorem ipsum.
          </p>
        </div>
      </div>

      <!-- <Content slot-key="default" /> -->
      <!-- <Content slot-key="overview" /> -->
      <!-- <Content slot-key="assessment" /> -->
      <!-- <Content slot-key="requirements" /> -->
    </div>
    <Info id="info-main" class="information" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import Info from "@theme/components/course/Info.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav, Info },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl'

$infobarWidth = 400px

.page
  padding-bottom 2rem
  display block

  .information
    background-color gray

  #info-mobile
    display none
  #info-main
    position absolute
    top $navbarHeight
    margin-left "calc(%s + 50% - %s + 2.5rem)" % ($contentWidth ($contentWidth/2)px)
    width $infobarWidth

@media (max-width: ($contentWidth + $infobarWidth)px)
  #info-main
    display none
  #info-mobile
    display block !important
</style>
