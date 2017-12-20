import {dynamicWrapper, createRoute} from '../../utils/core';

const routesConfig = (app) => ({
  path: '/home',
  title: '首页',
  indexRoute: '/',
  component: dynamicWrapper(app, [], import('./components'))
});

export default (app) => createRoute(app, routesConfig);
