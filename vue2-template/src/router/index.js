import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Prefix_title = 'demo';
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "ad" */ '../pages/home/Ad'),
      meta: {
        title: '欢迎访问' + Prefix_title
      }
    },
    {
      path: '/ad/list',
      name: 'addList',
      component: () => import(/* webpackChunkName: "adList" */ '../pages/home/Ad'),
      meta: {
        title: Prefix_title + '-列表页'
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (document.querySelector('.box')) document.querySelector('.box').scrollTop = 0;
    }
  }
});

//路由控制
import dataService from '@/dataService';
import { checkStatus } from '@/utils';

router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  if (title) {
    document.title = Prefix_title + '-' + title;
  }
  // 判断是否已经登录
  if (to.path == '/personal') {
    checkStatus().then(res => {
      const loginStatus = res && res.data ? true : false;
      if (!loginStatus) {
        // 禁止跳转，返回上一页
        next(from.path);
      } else {
        next();
      }
    })
    return;
  }

  // 每个单页增加统计代码
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
  }
  next();
});

export default router;
