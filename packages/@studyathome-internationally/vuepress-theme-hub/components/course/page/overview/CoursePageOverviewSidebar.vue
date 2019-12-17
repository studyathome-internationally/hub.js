<template>
  <b-card bg-variant="primary" text-variant="white">
    <!-- <template v-slot:header>
      <div class="course-sidebar-header">Course Information</div>
    </template>
    <b-card-text>
      <div>
        <label for="course-start">Start:</label>
        <span id="course-start">{{ $frontmatter.schedule.start}}</span>
      </div>
      <div>
        <label for="course-start">End:</label>
        <span id="course-start">{{ $frontmatter.schedule.end}}</span>
      </div>
      <div>
        <label for="course-start">ECTS:</label>
        <span id="course-start">{{ $frontmatter.schedule.start}}</span>
      </div>
    </b-card-text>-->

    <b-card-body>
      <!-- <b-card-title>{{$frontmatter.title}}</b-card-title> -->
      <!-- <b-card-sub-title>Course Information</b-card-sub-title> -->
      <b-card-title>Course Information</b-card-title>
      <b-list-group flush>
        <b-list-group-item
          variant="primary"
          class="d-flex justify-content-between align-items-center"
        >
          <label for="course-start">Start</label>
          <span id="course-start">{{ $frontmatter.schedule.start}}</span>
        </b-list-group-item>
        <b-list-group-item
          variant="primary"
          class="d-flex justify-content-between align-items-center"
        >
          <label for="course-start">End</label>
          <span id="course-start">{{ $frontmatter.schedule.end}}</span>
        </b-list-group-item>
        <b-list-group-item
          variant="primary"
          class="d-flex justify-content-between align-items-center"
        >
          <label for="course-start">ECTS</label>
          <span id="course-start">{{ $frontmatter.ects}}</span>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "CoursePageOverviewSidebar"
};
</script>

<style lang="stylus" scoped>
// .card-header {
// border-bottom: 1px solid white;
// }

// p.card-text {
// margin-top: 0;
// }
div.card-body {
  padding: 0.5rem;
}

h4.card-title {
  margin-top: 0;
}

div.list-group-item {
  // color: white;
  padding: 0.5rem 1.25rem;

  &:first-child {
    border-radius: 2px 2px 0 0;
  }

  &:last-child {
    border-radius: 0 0 2px 2px;
  }
}
</style>