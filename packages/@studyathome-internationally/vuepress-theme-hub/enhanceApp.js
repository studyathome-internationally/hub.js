import "@theme/plugins/icons";

import { store } from "@theme/plugins/store";

import CookieConsent from "@theme/components/global/CookieConsent.vue";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.prototype.$store = store;
  Vue.component("CookieConsent", CookieConsent);
};
