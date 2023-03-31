
const routes = [
  {
    path: '/',
    component: () => import('layouts/cadastroLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
      { path: 'cadastro', name: 'cadastro', component: () => import('pages/cadastro.vue') },
      { path: 'cadastroForm', name: 'cadastroForm', component: () => import('pages/cadastroForm.vue') },
      { path: 'camera', name: 'camera', component: () => import('pages/camera.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home.vue') },
      { path: 'perfil', name: 'perfil', component: () => import('pages/perfil.vue') },
      { path: 'configuracoes', name: 'configuracoes', component: () => import('pages/configuracoes.vue') },
      { path: 'resultado', name: 'resultado', component: () => import('pages/resultadoAnalise.vue') },
      { path: 'minhaConta', name: 'minhaConta', component: () => import('pages/minhaConta.vue') }
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
