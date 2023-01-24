<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div v-if="enabled" class="sw-update-popup">
      {{ message }}
      <br />
      <button id="auto-sw-update-popup" @click="reload">{{ buttonText + countDown }}</button>
      <button v-if="showCancel" @click="clickCancel" class="cancel">Cancel</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";
import event from "@vuepress/plugin-pwa/lib/event.js";

export default {
  name: "AutoSWUpdatePopup",
  components: { SWUpdatePopup },
  data() {
    return {
      updateTimer: 0,
      cancel: false,
      interval: 0,
    };
  },
  computed: {
    countDown() {
      return this.cancel ? "" : ` (${this.updateTimer})`;
    },
    showCancel() {
      return !Boolean(this.cancel);
    },
  },
  methods: {
    clickUpdate() {
      if (typeof window !== "undefined") {
        const button = window.document.getElementById("auto-sw-update-popup");
        button.click();
      }
    },
    clickCancel() {
      this.cancel = true;
      if (typeof window !== "undefined") {
        if (this.interval) {
          window.clearInterval(this.interval);
        }
      }
    },
  },
  created() {
    const thiz = this;
    event.$on("sw-updated", function() {
      if (typeof window !== "undefined") {
        thiz.updateTimer = 3;
        thiz.interval = window.setInterval(() => {
          if (thiz.updateTimer <= 0) {
            window.clearInterval(thiz.interval);
            thiz.clickUpdate();
          }
          thiz.updateTimer--;
        }, 1000);
      }
    });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      if (this.interval) {
        window.clearInterval(this.interval);
      }
    }
  },
};
</script>

<style scoped></style>
