import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Home';
import HomeIndex from '@/components/HomeIndex/Index'; // 首页
import NewGames from '@/components/NewGames/Index';
import Details from '@/components/Details/Index'; // 详情页
import MobileClassify from '@/components/MobileTerminal/MobileHome/MobileClassify/Index';
import MobileDetails from '@/components/MobileTerminal/MobileDetails/Index';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/homeIndex',
      children: [{
        path: '/homeIndex',
        name: 'HomeIndex',
        component: HomeIndex,
      },{
        path: '/newGames',
        name: 'NewGames',
        component: NewGames,
      },{
        path: '/details',
        name: 'Details',
        component: Details
      }]
    },
    {
      path: '/mobileClassify',
      name: 'MobileClassify',
      component: MobileClassify
    },{
      path: '/mobileDetails',
      name: 'mobileDetails',
      component: MobileDetails
    },
  ]
})
