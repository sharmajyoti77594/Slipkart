import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDescriptionView from '../views/ProductDescription.vue'
import AddProductView from '../views/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product-description',
      name: 'description',
      component: ProductDescriptionView
    },
    {
      path: '/add-product',
      name: 'add',
      component: AddProductView
    },
    {
      path: '/update-product/:id',
      name: 'update',
      component: AddProductView
    }
  ]
})

export default router
