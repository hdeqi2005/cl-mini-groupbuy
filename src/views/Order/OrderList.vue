<template>
	<div>
		<back-arrow title="我的订单" />
		<van-tabs v-model="active" style="margin-bottom:30px" :sticky="true" :offset-top="46">
			<van-tab title="待付款">
				<van-list v-model="wait.loadding" :finished="wait.finished" :error="wait.error" error-text="订单加载失败,请稍后再试"
				 finished-text="还没有订单哦" @load="loadOrderWaitingPay">
					<van-card :key="index" style="text-align: left;" v-for="(item,index) in waitingPayItems" :num="item.paperNum" :tag="item.orderType==2?'抢购':''"
					 :price="item.payPrice" @click="orderDetailPage(item.no)" :desc="getDescInfo(item)" :title="item.goodsName" :thumb="getBaseImgUrl(item.goodsImg)">
					</van-card>
				</van-list>
			</van-tab>
			<van-tab title="已付款">
				<van-list v-model="end.loadding" :finished="end.finished" :error="end.error" error-text="订单加载失败,请稍后再试"
				 finished-text="还没有订单哦" @load="loadOrderEndPay">
					<van-card :key="index" style="text-align: left;" v-for="(item,index) in endPayItems" :num="item.paperNum" :tag="item.orderType==2?'抢购':''"
					 :price="item.payPrice" @click="orderDetailPage(item.no)" :desc="getDescInfo(item)" :title="item.goodsName" :thumb="getBaseImgUrl(item.goodsImg)">
					</van-card>
				</van-list> 
			</van-tab>
		</van-tabs>
	</div>
</template>


<script>
	import BackArrow from '_c/back-arrow'
	import common from '@/views/mixins/common.js';
	export default {
		name: '',
		data() {
			return {
				wait: {
					loadding: false,
					finished: false,
					error: false
				},
				end: {
					loadding: false,
					finished: true,
					error: false
				},
				active: 0,
				waitingPayItems: [],
				endPayItems: [],
				waitPage: {
					pageNumber: 0,
					pageSize: 10,
					pages: 1
				},
				endPage: {
					pageNumber: 0,
					pageSize: 10,
					pages: 1
				}
			}
		},
		components: {
			BackArrow
		},
		mixins: [common],
		created: function() {
			this.loadOrderWaitingPay();
			this.loadOrderEndPay();
		},
		computed: {},
		mounted: function() {
			//this.checkLogin();
			var query = this.$route.query;
			if (query != undefined) {
				this.active = query.active;
			}
		},
		methods: {
			checkLogin() {
				//debugger
				// if (this.checkLogin()) {
				// 	this.$router.push({
				// 		name: 'login'
				// 	});

				// }
			},
			getBaseImgUrl(value) {
				var img = JSON.parse(value);
				return this.$config.baseImgUrl + img[0];
			},
			getDescInfo(item) {
				return '纸长:' + item.paperLength + ' 纸宽:' + item.paperWidth
			},
			loadOrderWaitingPay() {
				if (this.waitPage.pageNumber > this.waitPage.pages) {
					this.wait.loadding = false;
					this.wait.finished = true;
					return;
				}
				this.waitPage.pageNumber++;
				this.$store.dispatch("orderWaitingPay", this.waitPage).then(res => {
					this.wait.loadding = false;
					this.wait.error = false;
					this.waitPage.pageNumber = res.data.current;
					this.waitPage.pageSize = res.data.size;
					this.waitPage.pages = res.data.pages;
					this.waitingPayItems.push(...res.data.records);
				}).catch(msg => {
					this.wait.loadding = false;
					this.wait.error = true;
					this.showErrorNotify(msg);
				});
			},
			loadOrderEndPay() {
				if (this.endPage.pageNumber > this.endPage.pages) {
					this.end.loadding = false;
					this.end.finished = true;
					return;
				}
				this.endPage.pageNumber++;
				this.$store.dispatch("orderEndPay", this.endPage).then(res => {
					this.end.loadding = false;
					this.end.error = false;
					this.endPage.pageNumber = res.data.current;
					this.endPage.pageSize = res.data.size;
					this.endPage.pages = res.data.pages;
					this.endPayItems.push(...res.data.records);
				}).catch(msg => {
					this.end.loadding = false;
					this.end.error = true;
					this.showErrorNotify(msg);
				});
			},orderDetailPage(orderNo){
				this.$router.push({
					path: '/orderDetail',
					query: {
						orderNo:orderNo
					}
				});
			}
		}
	}
</script>

<style>
</style>
