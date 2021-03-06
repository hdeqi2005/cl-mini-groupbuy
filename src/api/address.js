import axios from '@/libs/api.request'
import Qs from 'qs'

/**
* @description 获取用户地址列表
* @params { userId }
http://192.168.168.111:8081/clerp-shop-admin/api/user/address/list/{userId}
*/
export const addressList = ({ userId }) => {
  //debugger
  //参数
  const data = {
    //userId
  }
  return axios.request({
    url: `/api/user/address/list`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
    }],
  })
}

/**
* @description 用户地址保存
* @params { userId }
http://192.168.168.111:8081/clerp-shop-admin/api/user/address/save/{userId}
*/
export const addressSave = ({ userId,addressInfo}) => {
    //debugger
    //参数
		console.log(addressInfo);
    const data = addressInfo;
		console.log(data);
    return axios.request({
      url: `/api/user/address/save`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }

/**
* @description 用户地址更新
* @params { userId }
http://192.168.168.111:8081/clerp-shop-admin/api/user/address/update/{userId}
*/
export const addressUpdate = ({ userId,addressInfo }) => {
    //debugger
    //参数
    const data = addressInfo;
    return axios.request({
      url: `/api/user/address/update`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }

/**
* @description 删除用户收货地址
* @params { userId,addressId }
http://192.168.168.111:8081/clerp-shop-admin/api/user/address/delete/{userId}/{addressId}
*/
export const addressDelete = ({ userId,addressId }) => {
    //debugger
    //参数
    const data = {
      //userId,
      //addressId
    }
    return axios.request({
      url: `/api/user/address/delete/${addressId}`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }


  /**
* @description 获取地址详情
* @params { userId,addressId }
http://192.168.168.111:8081/clerp-shop-admin/api/user/address/detail/{userId}/{addressId}
*/
export const addressDetail = ({ userId,addressId,addressInfo}) => {
    //debugger
    //参数
    const data = addressInfo;
    return axios.request({
      url: `/api/user/address/detail/${addressId}`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }


