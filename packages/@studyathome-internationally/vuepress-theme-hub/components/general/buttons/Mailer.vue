<template>
  <div>
    <b-link :href="mail()" class="link" style="display: flex;">
      <b-button class="mailer-button" :variant="variant" :disabled="disabled">
        <slot>Mail</slot>
        <slot name="icon">
          <font-awesome-icon icon="mail-bulk" />
        </slot>
      </b-button>
    </b-link>
  </div>
</template>

<script>
import { generateMailto } from "@theme/utils/mail.js";

export default {
  name: "Mailer",
  props: {
    to: {
      type: [Array, String],
      required: false,
      default: () => []
    },
    cc: {
      type: [Array, String],
      required: false,
      default: () => []
    },
    bcc: {
      type: [Array, String],
      required: false,
      default: () => []
    },
    subject: {
      type: String,
      required: false,
      default: ""
    },
    body: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String,
      default: "info"
    }
  },
  data() {
    return {
      mailto: ""
    };
  },
  methods: {
    mail: function() {
      return this.disabled ? "#" : `mailto:?${this.mailto}`;
    }
  },
  computed: {},
  updated() {
    this.mailto = generateMailto(this);
  },
  mounted() {
    this.mailto = generateMailto(this);
  }
};
</script>

<style lang="scss" scoped>
.link:hover {
  text-decoration: none !important;
}
.container {
  display: flex;
}
.mailer-button {
  flex: 1;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>