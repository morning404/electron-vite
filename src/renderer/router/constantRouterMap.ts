import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/', name: '总览', component: () => import('@renderer/components/LandingPage.vue') },
    { path: '/vditor', name: '文本编辑', component: () => import('@renderer/components/vditor/index.vue') },
]

export default routes