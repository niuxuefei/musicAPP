import Vue from 'vue'
import Router from 'vue-router'
import Happysing from '@/components/happysing'
import All from '@/components/all'
import Search from '@/components/search'
import Attention from '@/components/attention/attention.vue'
import Nearby from '@/components/nearby/nearby.vue'
import SgxLeaderboard from '@/components/sgxLeaderboard'
import Sgxview from '@/components/sgxview'
import My from '@/components/my'
import Sidebar from '@/components/sidebar'
import Start from '../components/start.vue'
import Lead from '../components/lead.vue'
import Login from '../components/login.vue'
import HjhMUsic from '../components/hjhMUsic.vue'
import Hjhplayer from '../components/hjhplayer.vue'
import Rightpage from '../pages/rightpage/rightpage'
import Special from '../pages/special/special'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/rightpage',
      name: 'Rightpage',
      component: Rightpage
    },
    {
      path: '/hjhMUsic',
      name: 'HjhMUsic',
      component: HjhMUsic
    },
    {
      path: '/hjhplayer',
      name: 'Hjhplayer',
      component: Hjhplayer
    },
    {
      path: '/happysing',
      name: 'Happysing',
      component: Happysing
    },
     {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
    },
    {
        
      path: '/sgxLeaderboard',
      name: 'SgxLeaderboard',
      component: SgxLeaderboard
    },
    {
      path: '/sgxview',
      name: 'Sgxview',
      component: Sgxview
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/happysing',
      name: 'Happysing',
      component: Happysing
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
    ,
    {
      path: '/sgxLeaderboard',
      name: 'SgxLeaderboard',
      component: SgxLeaderboard
    },
    ,
    {
      path: '/sgxview',
      name: 'Sgxview',
      component: Sgxview
    },
    {
      path: '/lead',
      name: 'Lead',
      component: Lead
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
router.push('start');
export default router;
