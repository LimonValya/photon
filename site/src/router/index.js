import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue"
import AdminPage from "@/views/AdminPage.vue"
import CoursePage from "@/views/CoursePage.vue"
import LessonPage from "@/views/LessonPage.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage
  },
  {
    path: '/course',
    name: 'course',
    component: CoursePage
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: LessonPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
