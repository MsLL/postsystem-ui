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
      routes: [
        {
          path: '/',
          redirect:'/q/hub',
          exact:true
        },
        { path: '/q/hub', component: '@/pages/question/QuestionHubPage.jsx' },
        { path: '/q/post', component: '@/pages/question/PostQuestionPage.jsx' },
        { path: '/q/fish', component: '@/pages/question/FishQuestionPage.jsx' },
        { path: '/q/my', component: '@/pages/question/MyQuestionPage.jsx', title: '我的Q' },
      ]
    },
  ],
  fastRefresh: {},
});
