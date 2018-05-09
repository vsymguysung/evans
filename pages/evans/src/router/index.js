import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import ITunes from '@/components/ITunes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/itunes',
      name: 'ITunes',
      component: ITunes,
    },
  ],
});
