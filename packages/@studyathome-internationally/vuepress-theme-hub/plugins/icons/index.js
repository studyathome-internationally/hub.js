import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelopeOpenText);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
