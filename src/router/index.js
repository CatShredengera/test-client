import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '../views/ProductView.vue'
import ProductView2 from '../views/ProductView2.vue'
import ProductPaginate from '../views/ProductPaginate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table-1',
      name: 'table-1',
      component: ProductView,
    },
    {
      path: '/table-2',
      name: 'table-2',
      component: ProductView2,
    },
    {
      path: '/table-paginate',
      name: 'table-paginate',
      component: ProductPaginate,
    },
  ]
})

export default router
