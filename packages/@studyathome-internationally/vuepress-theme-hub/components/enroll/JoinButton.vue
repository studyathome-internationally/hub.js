<template>
  <b-link :href="mailto()" class="link" style="display: flex;">
    <b-button class="join-button" variant="info">
      Open E-Mail Template
      <font-awesome-icon icon="mail-bulk" />
    </b-button>
  </b-link>
</template>

<script>
export default {
  props: {
    enrollment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ...this.enrollment,
      // only supported by chrome
      // https://stackoverflow.com/questions/58019204/firefox-chrome-difference-in-mailto-with-html-tags
      bodyHeader: `<!DOCTYPE html><html><header></header><body style="padding: 0; margin: 0;"><div><div style="background: radial-gradient(#eaecef,#ffffff);"><h3 style='display: inline-flex; align-items: center; margin-bottom: 8px;'>
           <img style='height: 2rem; margin-left: 10px;' src='data:image/png;base64,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' />
           <span style='color: #0f303e; margin-left: 12px;'>StudyATHome Internationally</span>
         </h3><hr size="1" color="#bbb"/></div><p style="margin-left: 10px;">`
    };
  },
  methods: {
    mailto: function() {
      // https://tools.ietf.org/html/rfc6068
      // http://www.zaposphere.com/html-email-links-code/
      const url = `mailto:?${this.getTo +
        this.getSubject +
        this.getCC +
        this.getBCC +
        this.getBody}`;
      return url;
    },
    construct: function(label, elems) {
      let entry = elems;
      if (typeof elems === "Array") entry = elems.join(",");
      return `&${encodeURIComponent(label)}=${encodeURIComponent(entry)}`;
    }
  },
  computed: {
    getTo: function() {
      return this.construct("to", this.to);
    },
    getSubject: function() {
      return this.construct("subject", this.subject);
    },
    getCC: function() {
      return this.construct("cc", this.cc);
    },
    getBCC: function() {
      return this.construct("bcc", this.bcc);
    },
    getBody: function() {
      const body = this.body.replace(/(\\n\s|\\n)/g, "\n");
      // Alternative: test if not Firefox
      const isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      const result = isChrome
        ? [this.bodyHeader, body, "</p></body></html>"].join("")
        : body;
      return this.construct("body", result);
    }
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
.join-button {
  flex: 1;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>