import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Shop from '@/components/Shop';

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
  ],
});
