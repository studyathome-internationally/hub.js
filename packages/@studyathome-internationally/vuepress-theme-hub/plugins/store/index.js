import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    enrollment: {
      disclaimer: false,
      home: "",
      course: "",
    },
    filter: [],
    cookie: {
      consent: false,
    },
  },
  mutations: {
    load(state) {
      if (!localStorage) return;
      state.cookie = Object.assign(state.cookie, JSON.parse(localStorage.getItem("hub-settings-cookie")));
    },
    save(state) {
      if (!localStorage) return;
      localStorage.setItem("hub-settings-cookie", JSON.stringify(state.cookie));
    },

    updateFilter(state, filter) {
      state.filter = filter;
    },

    updateEnrollmentDisclaimer(state, confirmation) {
      state.enrollment.disclaimer = confirmation;
    },
    updateHomeUniversity(state, home) {
      state.enrollment.home = home;
    },
    updateCourse(state, course) {
      state.enrollment.course = course;
    },

    consentToCookies(state) {
      state.cookie.consent = true;
    },
  },
});
