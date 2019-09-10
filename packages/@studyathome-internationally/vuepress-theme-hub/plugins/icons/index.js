import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMailBulk);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
