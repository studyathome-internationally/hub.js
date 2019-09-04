<template>
  <div>
    <b-card-title class="title">
      <b-link :to="link">{{title}}</b-link>
    </b-card-title>
    <b-card-sub-title>{{subtitle}}</b-card-sub-title>
    <b-card-text>
      <div id="info">
        <div v-for="i of 3" :key="i">
          <div>Label</div>
          <div>Information</div>
        </div>
      </div>
    </b-card-text>
  </div>
</template>

<script>
export default {
  props: {
    lecturer: {
      type: String,
      default: "Lecturer Data missing!"
    },
    title: {
      type: String,
      default: "Title Data missing!"
    },
    subtitle: {
      type: String,
      default: "Subtitle Data missing!"
    },
    link: {
      type: String,
      default: "#"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0.05vh;
}
.first-level {
  background-color: #ccc;
}

#info,
#info div {
  outline: 1px #333 dotted;
}

#info {
  display: flex;
  flex-flow: column nowrap;
}

#info > div {
  background-color: #eee;
  padding: 5px;
  display: flex;
  flex-flow: row nowrap;
  // justify-content: space-between;
}

#info > div > div {
  flex: 1 0 auto;
  padding: 0 5px;
}
#info > div > div:last-child {
  flex: 3 0 auto;
  text-align: end;
}
</style>