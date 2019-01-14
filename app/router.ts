import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/check', async (ctx) => {
    ctx.body = ''
  });
  router.get('/', async (ctx) => {
    ctx.redirect('/home')
  });
  router.get('/*', controller.home.index);
};
