module.exports = () => {
  return async function (ctx, next) {
    await next()
    const token = ctx.cookies.get('token', {
      signed: true
    })
    console.log(token)
    if (!token) {
      ctx.redirect('/login')
    }
  }
}