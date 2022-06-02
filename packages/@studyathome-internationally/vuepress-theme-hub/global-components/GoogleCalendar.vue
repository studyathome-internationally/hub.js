<template>
  <p>
    <iframe
      ref="calendar"
      :src="source"
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
    mode: {
      type: String,
      default: "WEEK",
      validator: (value) => {
        return ["WEEK", "MONTH", "AGENDA"].includes(value);
      },
    },
    wkst: {
      type: String,
      default: "2",
      validator: (value) => {
        return ["0", "1", "2"].includes(value);
      },
    },
    lang: {
      type: String,
      default: "en",
    },
    ctz: {
      type: String,
      default: "Europe Vienna",
    },
    title: {
      type: String,
    },
    bcolor: {
      type: String,
      default: "#ffffff",
    },
    date: {
      type: String,
    },
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
  computed: {
    source() {
      let src = "https://calendar.google.com/embed?";

      src = this.inject(src, "src", this.src);
      src = this.inject(src, "ctz", this.ctz);
      src = this.inject(src, "hl", this.lang);
      src = this.inject(src, "mode", this.mode);
      src = this.inject(src, "wkst", this.wkst);
      src = this.inject(src, "title", this.title);
      src = this.inject(src, "bgcolor", this.bcolor);
      src = this.inject(src, "dates", this.date + "/" + this.date);

      return src;
    },
  },
  methods: {
    onResize() {
      if (this.$refs.calendar) {
        const rect = this.$refs.calendar.parentElement.getBoundingClientRect();
        this.width = rect.width;
      }
    },
    encode(val) {
      if (typeof window !== "undefined") {
        val = window.encodeURIComponent(val);
      }
      return val;
    },
    inject(str, type, val) {
      if (val) {
        str += "&" + type + "=" + this.encode(val);
      }
      return str;
    },
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.onResize();
      if (this.listener === null) {
        this.listener = window.addEventListener("resize", this.onResize);
      }
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined" && this.listener) {
      window.removeEventListener("resize", this.onResize);
    }
  },
};
</script>

<style lang="stylus" scoped></style>
