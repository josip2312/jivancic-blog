import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import '@/styles/main.scss';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {},
};
