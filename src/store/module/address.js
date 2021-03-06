import {
	addressList,
	addressSave,
	addressUpdate,
	addressDelete,
	addressDetail,
} from '@/api/address'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
	state: {
		addressId: '',
		edit: false,
		tempAddressDetail:{},
	},
	mutations: {
		setAddressId(state, addressId) {
			state.addressId = addressId;
		},setEdit(state, edit) {
			state.edit = edit;
		},
		setTempAddressDetail(state,data){
			state.tempAddressDetail=data
		}
	},
	actions: {
		//临时选择地址
		setTempAddressDetail({commit},params){
			  return new Promise((resolve,reject)=>{
                 commit('setTempAddressDetail',params)
				 resolve()
            })
		},
		//获取用户地址列表
		getAddressList({
			commit
		}, {
			userId
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				addressList({
					userId
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data)
					} else {
						reject(data.msg)
					}

				}).catch(err => {
					console.error(err)
					reject(serverBusyTips)
				})
			})
		},
		//=========================
		//用户地址保存
		setAddressSave({
			commit
		}, {
			userId,addressInfo
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				addressSave({
					userId,addressInfo
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(res.data);
					} else {
						reject(data.msg)
					}
				}).catch(err => {
					console.error(err)
					reject(serverBusyTips)
				})
			})
		},
		//=========================
		//用户地址更新
		setAddressUpdate({
			commit
		}, {
			userId,
			addressId,
			addressInfo
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				addressUpdate({
					userId,
					addressId,
					addressInfo
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data);
					} else {
						reject(data.msg);
					}
				}).catch(err => {
					console.error(err);
					reject(serverBusyTips)
				})
			})
		},
		//=========================
		//删除用户收货地址
		setAddressDelete({
			commit
		}, {
			userId,
			addressId
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				addressDelete({
					userId,
					addressId
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data);
					} else {
						reject(data.msg)
					}

				}).catch(err => {
					console.error(err)
					reject(serverBusyTips)
				})
			})
		},
		//=========================
		//获取地址详情
		getAddressDetail({
			commit
		}, {
			userId,
			addressId
		}) {
			//debugger
			return new Promise((resolve, reject) => {
				addressDetail({
					userId,
					addressId
				}).then(res => {
					let data = res.data
					if (data.success) {
						resolve(data)
					} else {
						reject(data.msg)
					}

				}).catch(err => {
					console.error(err)
					reject(serverBusyTips)
				})
			})
		},

	}
}
