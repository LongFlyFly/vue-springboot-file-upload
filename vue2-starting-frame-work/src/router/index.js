import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import('../front/mian')
//导入进度条插件
import NProgress from 'nprogress'
//导入进度条样式
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: Main }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path === '/main') {
    nProgress.done();
    return next();
  }
  next();
})

router.afterEach(() => {
  NProgress.done();
  // 在即将进入新的页面组件前，关闭掉进度条
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
