
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
      { path: 'perfil', component: () => import('pages/perfil.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/cadastroLayout.vue'),
    children: [
      { path: 'cadastro', component: () => import('pages/cadastro.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
