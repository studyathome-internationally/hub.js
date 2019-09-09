<template>
  <div>
    <b-card-title class="title">
      <div>{{title}}</div>
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
.outline {
  outline: 1px red dashed;
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

#main > * {
  cursor: default;
  pointer-events: none;
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
  justify-content: space-between;
}

#info > div > div {
  flex: 1;
}
#info > div > div:last-child {
  flex: 2;
}
</style>