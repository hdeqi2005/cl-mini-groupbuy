import {
	adList,adDetailById
} from '@/api/ad'
const serverBusyTips = "服务繁忙，请稍后再试！"

export default {
	actions: {
		getAdList({commit}, params) {
			//debugger
			return new Promise((resolve, reject) => {
				adList(params).then(res => {
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
		/**
	* @description 公告详细信息
	* @params { id }
	* @url /api/system/note/detail/{id}
	*/
	getAdDetailById({ commit }, params) {
		//debugger
		return new Promise((resolve, reject) => {
			adDetailById(params).then(res => {
			let data = res.data
			if (data.success && parseInt(data.status)!=-1) {
			let formatData=data.data //JSON.stringify(data.data);
			//commit('setGoodsDetailById', formatData)
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
	}
}
}


