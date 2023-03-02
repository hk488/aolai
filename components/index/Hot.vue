<template>
	<view class="hot">
		<!--  -->
		<!-- 传递data值加： ||  不加： -->
		<Commodity :dataList="dataList" itemW="250rpx" bigH='220rpx'></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data() {
			return {
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

<style>
</style>