import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import RankListIndexView from '../views/ranklist/RankListIndexView.vue';
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue';
import NotFound from '../views/error/NotFound.vue';
// import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/pk/', name: 'pk_index', component: PkIndexView },
  { path: '/record/', name: 'record_index', component: RecordIndexView },
  { path: '/ranklist/', name: 'ranklist_index', component: RankListIndexView },
  { path: '/user/bot/', name: 'user_bot_index', component: UserBotIndexView },
  { path: '/404/', name: '404', component: NotFound },
  { path: '/:cathAll(.*)', component: NotFound },  //重定向
  { path: '/', name: 'home', component: PkIndexView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
