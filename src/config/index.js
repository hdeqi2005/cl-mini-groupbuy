export default {
    /**
     * @description 默认页面标题
     */
     title: '微商城-晨龙包装自动化有限公司',
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description api请求基础路径 
     */
    baseUrl: {
      dev: '',//http://192.168.168.111:8081/clerp-shop-admin/
      pro: 'http://shop.szclsoft.com'
    },
    //http://192.168.168.111:8081/clerp-shop-admin/
    
		baseImgUrl:'http://shop.szclsoft.com',

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 需要加载的插件
     */
    plugin: {
      // 'error-store': {
      //   showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      //   developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
      // }
    }
  }
  