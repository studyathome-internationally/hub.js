import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    confirmation: {
      disclaimer: false,
    },
  },
  mutations: {
    updatePrivacyDisclaimerConfirmation(state, confirm) {
      state.confirmation.disclaimer = confirm;
    },
  },
});
