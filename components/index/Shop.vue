<template>
	<view class="shop">
		
		
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<image :src="item.bigUrl" mode=""></image>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item"><Commodity 
				:dataList='item.data' 
				itemW="200rpx" 
				bigH='200rpx'
				wrap="no-wapr"
				></Commodity></view>
				
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
import Commodity from '../common/Commodity.vue'
export default{
		data(){
			return{
			}
		},
		props:{
			dataList:Array
		},
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	.shop
	.shop-item image{
		width: 100%;
		height: 350rpx;
	}
	.scroll-content{
		width: 100%;
		/* 禁止换行 */
		white-space: nowrap;
	}
	.scroll-item{
		
		display: inline-block;
	}
</style>