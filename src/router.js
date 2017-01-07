import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import AllLives from './components/mainbody/all-lives';
import AllCategories from './components/mainbody/all-categories';
import RankingList from './components/mainbody/ranking-list';
import MyFocus from './components/mainbody/my-focus';
import WebgameCenter from './components/mainbody/webgame-center';

export default  new VueRouter({
  routes:[
    {path: '/index', redirect: '/all-lives'},
    {path: '/', redirect: '/all-lives'},
    {path: '/all-lives', component: AllLives},
    {path: '/all-categories', component: AllCategories},
    {path: '/ranking-list', component: RankingList},
    {path: '/my-focus', component: MyFocus},
    {path: '/webgame-center', component: WebgameCenter}
  ]
});