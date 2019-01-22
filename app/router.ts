import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router } = app
  const { auth } = app.middleware
  router.get('/check', async (ctx) => {
    ctx.body = ''
  });
  router.get('/', async (ctx) => {
    ctx.redirect('/user')
  });
  router.get('/login', async (ctx) => {
    const token = ctx.cookies.get('token', {
      signed: false
    })
    if (token) {
      ctx.redirect('/user')
    }
    await ctx.render('pages/index')
  });
  router.get('/city', controller.home.city);
  router.get('/user', auth(), controller.user.index);
  router.get('/registry/success', auth(), controller.user.index);
  router.get('/*', controller.home.index);
};
