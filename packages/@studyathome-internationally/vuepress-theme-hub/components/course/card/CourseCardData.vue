<template>
  <div class="card-container">
    <b-card-title class="title">
      <div class="hide-overflow">{{info.short_title ? info.short_title : info.title}}</div>
    </b-card-title>
    <b-card-sub-title style="height: 2rem;">
      <!-- <div
        class="hide-overflow"
        v-for="lecturer of info.lecturers"
        :key="lecturer.name"
      >{{ lecturer.name }}</div>-->
      <div class="flex-subtitle-container">
        <p v-for="lecturer of info.lecturers" :key="lecturer.name">{{lecturer.name}}</p>
      </div>
    </b-card-sub-title>
    <hr style="margin: 0; margin-top: 5px; border-top: 1px solid #ddd;" />
    <div class="flex-tags-container">
      <b-badge variant="info" v-for="tag of info.tags" :key="tag">{{tag}}</b-badge>
    </div>
    <b-card-text>
      <div class="flex-container">
        <div>ECTS</div>
        <div>{{info.ects}}</div>
        <div>Semester</div>
        <div>{{info.semester}}</div>
        <div>Start</div>
        <div>{{info.schedule.start}}</div>
      </div>
    </b-card-text>
  </div>
</template>

<script>
export default {
  name: "CourseCardData",
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.hide-overflow {
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

div.flex-subtitle-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  // height: 3.6rem;

  & > p {
    line-height: 1rem;
    width: 50%;
    text-align: left;
    margin: 0;
  }

  & > p:nth-child(2n) {
    text-align: right;
  }
}

div.flex-tags-container {
  height: 40px;
  margin-top: 4px;
  display: flex;
  flex-flow: row wrap;
  // overflow: hidden;
  justify-content: flex-start;

  & > span {
    margin: 0 3px auto 0;
  }
}

div.flex-container {
  list-style: none;
  padding-left: none !important;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 3.6rem;

  & > div {
    // outline: 0.1px solid;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    line-height: 1.1rem;
    height: 1.2rem;
    text-align: center;
    &:nth-child(2n-1) {
      text-align: left;
      width: 40%;
      font-weight: 500;
    }
    &:nth-child(2n) {
      text-align: right;
      width: 60%;
    }
  }
}

.title {
  margin-top: 0.05vh;
}
.first-level {
  background-color: #ccc;
}

#main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  height: 100%;
}

// #main > * {
//   cursor: default;
//   pointer-events: none;
// }

// #info,
// #info div {
//   outline: 1px #333 dotted;
// }

// #info {
//   display: flex;
//   flex-flow: column nowrap;
// }

// #info > div {
//   background-color: #eee;
//   padding: 5px;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
// }

// #info > div > div {
//   flex: 1;
// }
// #info > div > div:last-child {
//   flex: 2;
// }
</style>