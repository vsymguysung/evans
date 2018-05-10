import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import Demo from '@/components/Demo';
import Install from '@/components/Install';
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
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/install',
      name: 'Install',
      component: Install,
    },
    {
      path: '/itunes',
      name: 'ITunes',
      component: ITunes,
    },
  ],
});
