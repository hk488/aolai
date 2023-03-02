<template>
	<view class="banner">
		<image class="banner-img" :src="dataList"></image>
		<Icons></Icons>
	</view>
	
</template>

<script>
	import Icons from './Icons.vue'
	export default{
		components:{
			Icons
		},
		props:{
			dataList:String
		}
	}
</script>

<style scoped>
	.banner{
		width: 100%;
		height: 300rpx;
	}
	.banner-img{
		width: 100%;
		height: 300rpx;
	}
</style>