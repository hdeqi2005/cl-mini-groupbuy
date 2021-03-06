import { rushListNow,rushListAfter,submitRushGoodsOrder } from '@/api/rush'
const serverBusyTips="服务繁忙，请稍后再试！"

export default {
    //属性=》使用方法 this.$store.state.rush.属性
    state: {
        rushListNow_state:[],
        rushListAfter_state:[]
     
    },
    //计算属性=》使用方法 this.$store.getters.属性
    getters:{
        
        getRushListNow:(state)=>state.rushListNow_state,
        getRushListAfter:state=>state.rushListAfter_state
    },
    //同步方法 使用方法 this.$store.commit('setRushListNow',{参数})
    mutations: {
        setRushListNow(state,data){
          //debugger
           state.rushListNow_state=data;
        },
        setRushListAfter(state,data){
            state.rushListAfter_state =data;
        }
    },
    //异步方法 : 使用方法 this.$store.dispatch("getRushListNow",{参数})
    actions: {
      //获取正在抢购商品列表
      getRushListNow({commit,state,dispatch},payload){
        //debugger
        return new Promise((resolve, reject) => {
            rushListNow().then(res => {
            let data = res.data
             if (data.success && parseInt(data.status)!=-1) {
                let formatData=data.data //JSON.stringify(data.data);
                commit('setRushListNow', formatData)
                resolve(formatData)
              }
              else {
                reject(data.msg)
              }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
       //获取即将抢购商品列表
       getRushListAfter({commit,state,dispatch},payload){
        //debugger
        return new Promise((resolve, reject) => {
            rushListAfter().then(res => {
            let data = res.data
            if (data.success && parseInt(data.status)!=-1) {
                let formatData=data.data //JSON.stringify(data.data);
                commit('setRushListAfter', formatData)
                resolve(formatData)
              }
              else {
                reject(data.msg)
              }
           
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      /**
      * @description 提交抢购订单
      * @paramDesc 规格ID，商品ID，商品规格字符串;使用,分割，纸长，纸宽，数量，箱高，压线，沿线类型，送货备注，生产备注,收货地址ID,抢购商品ID
      * @params { specId, goodsId, goodsSpec,paperLength,paperWidth,paperNum,boxHeight,paperYx,yxType,deliveryRemark,productionRemark,deliveryAddress,rushId}
      * @url /clerp-shop-admin/api/order/rushBuy/{rushId}
      */
      getSubmitRushGoodsOrder({commit,state,dispatch},params){
        //debugger
        return new Promise((resolve,reject)=>{
          submitRushGoodsOrder(params).then(res=>{
            let data = res.data
            if (data.success && parseInt(data.status)!=-1) {
                let formatData=data.data //JSON.stringify(data.data);
               // dispatch('setRushListAfter', formatData)
                resolve(formatData)
              }
              else {
                reject(data.msg)
              }
          }).catch(err=>{
            console.error(err)
            reject(serverBusyTips)
          })
        })
      }
     
    }
}
  