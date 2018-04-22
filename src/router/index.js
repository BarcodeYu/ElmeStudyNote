import Vue from 'vue';
import Router from 'vue-router';
import header from '@/components/header/header';
import seller from '@/components/seller/seller';
import ratings from '@/components/ratings/ratings';
import goods from '@/components/goods/goods';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
