<script>
	export default {
		onLaunch: function() {
			// 读取用户存储持久化信息
			this.$store.commit('initUser')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
@import './common/common.css';
@import './common/iconfont.css';


::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}
</style>
