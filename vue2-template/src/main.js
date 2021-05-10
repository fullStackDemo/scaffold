import "@babel/polyfill";
import Vue from 'vue';
import App from '@pages/App.vue';

import Element from 'element-ui';
import VueResource from 'vue-resource';

import store from './store/index.js';
// 兼容 IE
import 'whatwg-fetch';

// $http
Vue.use(VueResource);

Vue.use(Element);

// 引用所有的
import 'element-ui/lib/theme-chalk/index.css';

// 雪碧图
import '@less/sprite.less';

import '@less/home.less';

import router from '@/router';

import dataService from '@/dataService';

Vue.prototype.dataService = dataService;

import mixins from "@/mixins";

Vue.mixin(mixins);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});

// 百度统计代码
// var _hmt = _hmt || [];
// const { host } = window.location;
// const test_hm = 'test';
// const release_hm = 'release';
// const hm_src = host.includes('release') ? release_hm : test_hm;
// window._hmt = _hmt;
// (function () {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?"+ hm_src;
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })();
