import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Home';
import HomeIndex from '@/components/HomeIndex/Index'; // 首页
import NewGames from '@/components/NewGames/Index';
import GirlGames from '@/components/GirlGames/Index';
import Mmorpg from '@/components/Mmorpg/Index';
import TopGames from '@/components/TopGames/Index';
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
        path: '/girlGames',
        name: 'GirlGames',
        component: GirlGames,
      },{
        path: '/mmorpg',
        name: 'Mmorpg',
        component: Mmorpg,
      },{
        path: '/topGames',
        name: 'TopGames',
        component: TopGames,
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
