<template>
  <section>
    <h2 id="enrollment">
      <a href="#enrollment" class="header-anchor">#</a>
      Enrollment
    </h2>
    <p>
      Participation is free of charge. Student of partner universities can send applications to
      participate in courses.
      <router-link class="action" :to="{ path: '/courses/enroll/', query: { course } }">
        <button>
          Enroll now!
        </button>
      </router-link>
    </p>
  </section>
</template>

<script>
export default {
  name: "Enrollment",
  computed: {
    course() {
      return this.$title.split("|")[0].trim();
    },
  },
};
</script>

<style lang="stylus" scoped>
.course:not(.no-side) .action button
  cursor pointer
  display block
  border none
  padding 0.5rem 1rem
  font-size 1rem
  width 100%
  background-color $accentColor
  color white
  border-radius 4px
  box-shadow 1px 1px 3px 1px darken($accentColor,40%)
  margin-top 0.9rem

.course.no-side .action button
  border none
  background-color transparent
  font-size 1rem
  line-height 1.7
  font-family -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
  font-weight 500
  padding unset
  color $accentColor
  cursor pointer
  &:hover
    text-decoration underline

p
  text-align justify

@media (max-width: ($courseContentWidth + $courseSidebarWidth))
  p
    text-align unset
</style>
