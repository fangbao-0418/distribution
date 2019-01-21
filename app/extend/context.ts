module.exports = {
  fetch (
    payload: {
      url: string,
      method: string
    }
  ) {
    const env = this.app.config.env
    console.log(this, 'this')
    let origin = this.origin
    if (env === 'local') {
      origin = 'https://x-sys.i-counting.cn'
    }
    const url = `${origin}/sys${payload.url}`
    const method = payload.method || 'GET'
    return this.curl(url, {
      method,
      headers: {
        from: 2
      }
    }).then((response) => {
      const { status, data } = response
      let result
      try {
        result = JSON.parse(data.toString())
      } catch (e) {
        result = data.toString()
        this.logger.error(e)
      }
      if (status !== 200) {
        result = undefined
      }
      return result
    }, (e) => {
      this.logger.error(e)
    })
  }
}