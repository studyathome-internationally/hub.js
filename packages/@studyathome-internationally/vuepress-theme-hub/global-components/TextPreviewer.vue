<template>
  <div>
    <div ref="content" class="content">
      <slot></slot>
    </div>
    <div v-if="show" class="control">
      <button ref="control" @click="onClick" :style="buttonStyle">
        {{ label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextPreviewer",
  data() {
    return {
      show: false,
      elements: [],
    };
  },
  computed: {
    hideFrom() {
      return this.elements.findIndex((e) => e.tagName === "P") + 1;
    },
    label() {
      return this.show ? "Show less" : "Show more";
    },
    buttonStyle() {
      return {
        border: "unset",
        color: "#0f303e",
        "font-size": "1rem",
        "font-weight": "600",
        padding: "0",
        cursor: "pointer",
      };
    },
  },
  methods: {
    onClick() {
      if (this.show) {
        this.show = false;
        this.hide().focus();
      } else {
        this.show = true;
        this.view();
      }
    },
    hide() {
      this.elements
        .slice(this.hideFrom)
        .forEach((e) => e.classList.add("preview"));
      return this.injectControl();
    },
    view() {
      this.removeControl();
      this.elements
        .slice(this.hideFrom)
        .forEach((e) => e.classList.remove("preview"));
    },
    styleObjectToString(style) {
      let result = "";
      for (const key in style) {
        result += `${key}: ${style[key]};`;
      }
      return result;
    },
    injectControl() {
      const spanContent = document.createTextNode("\u2026");
      const span = document.createElement("span");
      span.setAttribute("style", "padding: 0 0.25rem 0.5rem;");
      span.appendChild(spanContent);

      const button = document.createElement("button");
      button.textContent = this.label;
      button.classList.add("control");
      button.setAttribute("style", this.styleObjectToString(this.buttonStyle));
      button.addEventListener("click", this.onClick);

      const tree = this.elements[this.hideFrom - 1];
      tree.appendChild(span);
      tree.appendChild(button);
      return button;
    },
    removeControl() {
      const tree = this.elements[this.hideFrom - 1];
      tree.lastChild.removeEventListener("click", this.onClick);
      tree.removeChild(tree.lastChild);
      tree.removeChild(tree.lastChild);
    },
  },
  mounted() {
    this.elements = Array.from(this.$refs.content.children);
    if (!this.show) this.hide();
  },
};
</script>

<style lang="stylus" scoped>
.preview
  display none
.control
  padding 0 0 0.5rem
</style>
