<template>
	<view class='my-add-path'>
		
		<view class='path-item'>
			<view>收 件 人</view>
			<input type="text" value="" placeholder="收件人姓名" v-model="pathObj.name"/>
		</view>
		
		<view class='path-item'>
			<view>手 机 号</view>
			<input type="text" value="" placeholder="11位手机号" v-model="pathObj.tel"/>
		</view>
		
		<view class='path-item'>
			<view>所在地址</view>
			<view @tap='showCityPicker'>{{ pathCity }} > </view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
			</mpvue-city-picker>
		</view>
		
		<view class='path-item'>
			<view>详细地址</view>
			<input type="text" value="" placeholder="5到60个字符" v-model="pathObj.address"/>
		</view>
		
		<view class='path-item'>
			<view>设为默认地址</view>
			<radio-group name="" @change="radioChange">
				<label class="radio">
					<radio color="#FF3333" :checked="pathObj.isDefault"/><text></text>
				</label>
			</radio-group>
		</view>
		
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import mpvueCityPicker from '../../components/uni/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapActions} from 'vuex'
	export default {
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				pathObj:{
					name:"",
					tel:"",
					province:"",
					city:"请选择",
					district:"",  // 区
					address:"", // 详细地址
					isDefault:false
				},
				i:-1,
				//是否修改的状态
				isStatus:false
			}
		},
		computed:{
			pathCity(){
				if( this.pathObj.province ){
					return `${this.pathObj.province}-${this.pathObj.city}-${this.pathObj.district}`
				}else{
					return '请选择'
				}
			}
		},
		onLoad(e) {
			if(e.data){
				uni.setNavigationBarTitle({
					title:"修改地址"
				})
				let result = JSON.parse(e.data);
				this.pathObj = result.item;
				this.i = result.index;
				this.isStatus = true;
			}
		},
		components:{
			mpvueCityPicker
		},
		//页面生命周期
		onNavigationBarButtonTap() {
			
			if( this.isStatus ){
				//修改
				this.updatePathFn({
					index:this.i,
					item:this.pathObj
				})
				uni.navigateBack({
					delta:1
				})
			}else{
				//新增 保存button
				$http.request({
					url:"/addAddress",
					method:"POST",
					data:{
						...this.pathObj
					}
				}).then((res)=>{
					
					this.createPathFn(this.pathObj);
					uni.navigateBack({
						delta:1
					})
					
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			}
		},
		methods: {
			...mapActions(["createPathFn",'updatePathFn']),
			showCityPicker() {
			  this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				// 因输入字符带横杠，分隔开后对应下标赋值
			   let arr = e.label.split("-");
			  this.pathObj.province = arr[0];
			  this.pathObj.city = arr[1];
			  this.pathObj.district = arr[2];
			},
			radioChange(){
				this.pathObj.isDefault = !this.pathObj.isDefault ? 1:0
			}
		}
	}
</script>

<style scoped>  
.my-add-path{
	padding-left:20rpx;
}
.path-item{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:16rpx 0;
	width: 100%;
	border-bottom: 2rpx solid #CCCCCC;
}
.path-item input{
	flex:1;
	text-align: left;
	padding-left:10rpx;
}
</style>
