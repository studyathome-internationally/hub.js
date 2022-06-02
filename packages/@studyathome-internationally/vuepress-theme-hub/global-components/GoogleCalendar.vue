<template>
  <p>
    <iframe
      ref="calendar"
      :src="`https://calendar.google.com/calendar/embed?src=${src}`"
      style="border: 0"
      :width="width"
      :height="height"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </p>
</template>

<script>
export default {
  name: "GoogleCalendar",
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "800",
    },
  },
  data() {
    return {
      width: 800,
      listener: null,
    };
  },
  methods: {
    onResize() {
      if (this.$refs.calendar) {
        const rect = this.$refs.calendar.parentElement.getBoundingClientRect();
        this.width = rect.width;
      }
    },
  },
  mounted() {
    this.onResize();
    if (window && this.listener === null) {
      this.listener = window.addEventListener("resize", this.onResize);
    }
  },
  beforeDestroy() {
    if (this.listener) {
      window.removeEventListener("resize", this.onResize);
    }
  },
};
</script>

<style lang="stylus" scoped></style>
