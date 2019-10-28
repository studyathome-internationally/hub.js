import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMailBulk,
  faCircle,
  faTimes,
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
library.add(faMailBulk, faCircle, faTimes, faChevronUp, faChevronDown);

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;
