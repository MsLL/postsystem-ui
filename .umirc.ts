import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: "Q",
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout.tsx',
      routes:[
        { path: '/q/post', component: '@/pages/Question/PostQuestionPage.jsx' },
        { path: '/q/fish', component: '@/pages/Question/FishQuestionPage.jsx' },
        { path: '/q/my', component: '@/pages/Question/MyQuestionPage.jsx' ,title:'我的Q'},
      ]
    },
  ],
  fastRefresh: {},
});
