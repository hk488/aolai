<template>
	<view class="commodity" :style="'flex-wrap: '+wrap+';'">
		<!-- 单个商品名称 -->
		 <view class='commodity-item'
			 v-for="(item,index) in dataList"
			 :key='index'
			 :style="'width:'+itemW+';'  "
			 @tap="goDetails(item.id)"
		 >
			  
			<image class='commodity-img' :src="item.imgUrl" :style="'height:'+bigH+';'" alt=""></image> 
			<view class="commodity-content">
				<text class="commodity-name">{{item.name}}</text>
				<view>
					<text class="pprice">￥{{item.pprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">￥{{item.discount}}折</text>
			</view>
			
		 </view>
		 
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				data:[]
			}
		},
		props:{
			//数据
			dataList:Array,
			//宽度
			itemW:{
				type:String,
				default:"375rpx"
			},
			//高度
			bigH:{
				type:String,
				default:"375rpx"
			},
			//是否换行
			wrap:{
				type:String,
				defaut: "wrap"
			}
		},
		onLoad(){
			this.data = dataList
			
		},
		methods:{
			goDetails(id){
				uni.navigateTo({
					url:'/pages/details/details?id='+id+' '
				})
			}
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
	}
	.commodity-item{
		padding-bottom: 20rpx;
	}
	.commodity-img{
		width: 100%;
	}
	.commodity-content{
		text-align: center;
		
	}
	.commodity-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient:vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
	.oprice{
		/* 删除线 */
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999999;
	}
	.discount{
		border-radius: 4rpx;
		border: 1px solid #ff3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #ff3333;
	}
</style>