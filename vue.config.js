const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
module.exports = {
   
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
productionSourceMap: false,
  // 输出文件目录
outputDir: 'dist',
// 放置静态资源的地方 (js/css/img/font/...)
 assetsDir: 'static',
  devServer: {
    //port: 9099,
    //proxy:'http://192.168.168.111:8081'
    proxy: {
      '/api': {
        target: 'http://192.168.168.111:8081/clerp-shop-admin/api/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}