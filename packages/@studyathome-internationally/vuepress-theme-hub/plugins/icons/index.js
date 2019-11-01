import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMailBulk,
  faAnchor,
  faBalanceScale,
  faCertificate,
  faChalkboardTeacher,
  faChevronUp,
  faChevronDown,
  faCircle,
  faSignInAlt,
  faTimes,
  faUniversity,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faMailBulk,
  faAnchor,
  faBalanceScale,
  faCertificate,
  faChalkboardTeacher,
  faChevronUp,
  faChevronDown,
  faCircle,
  faEnvelope,
  faSignInAlt,
  faTimes,
  faUniversity
);

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;
