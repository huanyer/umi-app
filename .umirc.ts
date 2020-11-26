import { defineConfig } from 'umi';

export default defineConfig({
  title: '移动护理',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login/index' },
  ],
});
