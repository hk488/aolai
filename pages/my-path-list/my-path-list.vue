<template>
	<!-- 地址列表 -->
	<view class='my-path-list'>
		<view class='path-list'>
			
			<view
				v-for='(item,index) in list' :key='index'
				@tap='toAddPath(index)'
			>
				
			<view class='path-item' @tap="goComfirmOrder(item)">
				<view class='item-main'>
					<view class='item-name'>{{item.name}}</view>
					<view>{{item.tel}}</view>
				</view>
				<view class='item-main'>
					<view class='active' v-if='item.isDefault'>默认</view>
					<view>{{item.province}}{{item.city}} {{item.district}}  {{item.address}}</view>
				</view>
			</view>
			
			</view>
			
			
		</view>
		
		<view class='add-path'>
			<view class='add-path-btn' @tap='goAddPath'>新增地址</view>
		</view>
		
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				name:"张三",
				tel:"18511773322",
				city:"北京市海淀区",
				details:'2号楼',
				isDefault:false,
				isSelectedPath:false,
			}
		},
		computed:{
			...mapState({
				list:state=>state.path.list,
			}),
			...mapState({
				userInfo:state=>state.user.userInfo
			})
			
		},
		onLoad(e) {
			if(e.type === 'selectedPath'){
				this.isSelectedPath= true
			}
			// 初始化拿到收货地址数据
			this.__initAddress()
		},
		methods: {
			// store中添加初始化收获地址
			...mapMutations(['__initAddressList']),
			// 初始化 （请求收货地址接口）
			__initAddress(){
				
				$http.request({
					url:"/selectAddress",
					method:"POST",
					data:{
						phone:this.userInfo.phone,
						id:this.userInfo.id
					}
				}).then((res)=>{
					this.__initAddressList(res)
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
				
				
			},
			
			//修改
			toAddPath(index){
				
				let pathObj = JSON.stringify({
					index:index,
					item:this.list[index]
				})
				uni.navigateTo({
					url:"../my-add-path/my-add-path?data="+pathObj+""
				})
				
			},
			//新增
			goAddPath(){
				uni.navigateTo({
					url:"../my-add-path/my-add-path"
				})
			},
			//返回确认订单页面
			goComfirmOrder(item){
				//如果是从确定订单过来的执行
				if(this.isSelectedPath){
					// 自定义时间：页面通讯
					uni.$emit('selectPathItem',item)
					// 返回上一级
					uni.navigateBack({
						delta:1
					})
				}
			}
		}
	}
</script>

<style scoped>

.path-list{
	padding-left:20rpx;
}
.path-item{
	padding:10rpx;
	border-bottom:2rpx solid #CCCCCC;
}
.item-main{
	display: flex;
	align-items: center;
}
.item-name{
	padding-right:10rpx;
}
.active{
	padding-right:10rpx;
	background-color: #49BDFB;
	color:#FFFFFF;
	border-radius: 26rpx;
	font-size:24rpx;
	text-align: center;
}
.add-path{
	padding:20rpx;
	width:100%;
	display: flex;
	justify-content: center;
}
.add-path-btn{
	border:2rpx solid #49BDFB;
	color:#49BDFB;
	border-radius: 30rpx;
	padding:6rpx 60rpx;
}
</style>
