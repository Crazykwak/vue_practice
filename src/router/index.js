import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Shop from '@/components/shop/Shop';
import Board from '@/components/board/Board';
import Join from '@/components/member/Join';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'test',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
  ],
});
