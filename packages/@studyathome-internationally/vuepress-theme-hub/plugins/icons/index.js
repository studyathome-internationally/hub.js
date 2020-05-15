import Vue from "vue";

import "@fortawesome/fontawesome-free/css/all.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleDoubleDown,
  faCertificate,
  faCalendarAlt,
  faLanguage,
  faPaperPlane,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faAngleDown,
  faAngleDoubleDown,
  faCertificate,
  faCalendarAlt,
  faLanguage,
  faPaperPlane,
  faSnowflake,
  faSun
);

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;
