const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: '/Settings', component: () => import('src/pages/Settings.vue') },
      { path: '/Favorite', component: () => import('src/pages/Favorite.vue') }
      
    ]
  }
]

export default routes
