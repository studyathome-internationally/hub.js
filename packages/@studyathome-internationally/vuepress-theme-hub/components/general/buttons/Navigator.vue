<script>
export default {
  name: "Navigator",
  props: {
    element: {
      type: String,
      default: "a"
    },
    to: {
      type: String,
      default: "#"
    },
    label: {
      type: String,
      default: "Button"
    },
    inline: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary"
    }
  },
  render(h) {
    return h(
      "router-link",
      {
        attrs: { to: this.to },
        class: { container: !this.inline }
      },
      [
        h(
          this.element,
          {
            attrs: { variant: this.variant },
            class: { navigator: true, inline: !this.inline }
          },
          this.label
        )
      ]
    );
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
.container {
  display: flex;
}
.navigator {
  cursor: pointer;
}
.inline {
  flex: 1;
  font-size: 1.4rem;
}
</style>