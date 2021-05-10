// 低版本 polyfill
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { VueLocalSync } from 'vuex-local-sync';

const VuxPlugin = new VueLocalSync({
  key: 'demo',
  storage: window.localStorage
});

const store = new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    // 用户数据
    setUser(state, payload) {
      state.user = payload;
    }
  },
  plugins: [VuxPlugin.plugin]
});

export default store;
