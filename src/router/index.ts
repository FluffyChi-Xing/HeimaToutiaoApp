import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import LayoutPage from "@/layout/LayoutPage.vue";
import Recommend from "@/views/ArticlePage/_components/Recommend.vue";
import ActivityPage from "@/views/ArticlePage/_components/ActivityPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage,
        children: [
            {
                path: '/home',
                name: 'article',
                component: () => import('@/views/ArticlePage/index.vue'),
                children: [
                    {
                        path: '/home/part',
                        name: 'recommend',
                        component: Recommend
                    },
                    {
                        path: '/home/part/:id',
                        name: 'articlePart',
                        component: ActivityPage
                    }
                ]
            },
            {
                path: '/category',
                name: 'category',
                component: () => import('@/views/HotVedio/index.vue')
            },
            {
                path: '/discover',
                name: 'discover',
                component: () => import('@/views/DiscoverPage/index.vue')
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/MinePage/index.vue')
            }
        ]
    },
      {
          path: '/article/:id',
          name: 'articleDetail',
          component: () => import('@/views/ArticleDetail/index.vue')
      }
  ]
})
// 开启nprogress进度条
router.beforeEach((to) => {
    // 处理首页重定向
    if (to.path === '/') {
        return '/home/part'
    }
    if (to.path === '/home') {
        return '/home/part'
    }
    NProgress.start()
})
router.afterEach(() => {
    NProgress.done()
})
export default router
