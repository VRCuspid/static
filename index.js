const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const koaConnect = require('koa2-connect')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = new Koa()

// 引入静态文件
app.use(static(path.join(__dirname, 'dist')))

// 代理兼容封装
const proxy = function (context, options) {
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  return async function (ctx, next) {
    await koaConnect(createProxyMiddleware(context, options))(ctx, next)
  }
}

// 代理配置
const proxyTable = {
  '/api': {
    target: 'http://192.168.3.216:8766',
    changeOrigin: true,
    pathRewrite:{
        '^/api':''
    }
  }
}

Object.keys(proxyTable).map(context => {
  const options = proxyTable[context]
  // 使用代理
  app.use(proxy(context, options))
})

app.listen(3001, () => console.log('3001'))