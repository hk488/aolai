<template>
	<view class="card">
		<view>-</view>
		<view class="card-name">{{cardTitle}}</view>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			cardTitle:String
		}
	}
</script>

<style>
	.card{
		margin: 40rpx ;
		font-weight: bold;
		display: flex;
		justify-content: center;
	}
	.card-name{
		padding: 0 20rpx;
	}
</style>