import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    enrollment: {
      disclaimer: false,
      home: "",
    },
  },
  mutations: {
    updateEnrollmentDisclaimer(state, confirmation) {
      state.enrollment.disclaimer = confirmation;
    },
    updateHomeUniversity(state, home) {
      state.enrollment.home = home;
    },
  },
});
