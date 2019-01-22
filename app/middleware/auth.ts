module.exports = () => {
  return async function (ctx, next) {
    await next()
    const token = ctx.cookies.get('token', {
      httpOnly: false,
      signed: false
    })
    if (!token) {
      ctx.redirect('/login')
    }
  }
}