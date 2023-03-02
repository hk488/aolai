<template>
	<view class="commodity-list">
		<!-- 商品列表组件 -->
		<Commodity :dataList="dataList" wrap="wrap"></Commodity>
		
	</view>
	
</template>

<script>
import Commodity from './Commodity.vue'
	export default{
		data() {
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

<style>
	
</style>