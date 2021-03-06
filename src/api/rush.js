import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 正在抢购商品
* @params {  }
* @url clerp-shop-admin/api/rush/list/now
*/
export const rushListNow = () => {
    //debugger
    //参数
    const data = {
      //userId
    }
    return axios.request({
      url: '/api/rush/list/now',
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }

  /**
* @description 即将抢购商品
* @params {  }
* @url clerp-shop-admin/api/rush/list/after
*/
export const rushListAfter = () => {
    //debugger
    //参数
    const data = {
      //userId
    }
    return axios.request({
      url: `/api/rush/list/after`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }


  /**
* @description 提交抢购订单
* @paramDesc 规格ID，商品ID，商品规格字符串;使用,分割，纸长，纸宽，数量，箱高，压线，沿线类型，送货备注，生产备注,收货地址ID,抢购商品ID
* @params { specId, goodsId, goodsSpec,paperLength,paperWidth,paperNum,boxHeight,paperYx,yxType,deliveryRemark,productionRemark,deliveryAddress,rushId}
* @url /clerp-shop-admin/api/order/rushBuy/{rushId}
*/
export const submitRushGoodsOrder = ({ specId, goodsId, goodsSpec,paperLength,paperWidth,paperNum,boxHeight,paperYx,yxType,deliveryRemark,productionRemark,deliveryAddress,rushId }) => {
  //debugger
  //参数
  const data = {
      specId, goodsId, goodsSpec,paperLength,paperWidth,paperNum,boxHeight,paperYx,yxType,deliveryRemark,productionRemark,deliveryAddress
  }
  return axios.request({
    url:   `api/order/rushBuy/${rushId}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}