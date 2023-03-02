<template>
	<view class="icons">
		<view class="icons-item" v-for="(item,index) in dataList" :key="index">
			<image class="icon-img" :src="item.imgUrl" alt=""></image>
			<text class="f-color">{{item.name}}</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			dataList:Array
		}
	}
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
	}
	.icons-item{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20rpx;
	}
	.icon-img{
		width: 110rpx;
		height: 110rpx;
	}
</style>