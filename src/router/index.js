import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Shop from '@/components/shop/Shop';
import Board from '@/components/board/Board';
import Join from '@/components/member/Join';
import Login from '@/components/member/Login';
import TextEditor from '@/components/board/TextEditor';
import Detail from '@/components/board/Detail';

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
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/textEditor',
      name: 'textEditor',
      component: TextEditor,
    },
    {
      path: '/board/:id',
      name: 'detail',
      component: Detail,
    },
  ],
});
