export default{
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息（昵称、头像）
		userInfo:{}
	},
	getters:{
		
	},
	mutations:{
		// 一旦进入app，就需要执行这个方法，把用户信息读出来
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo');
			if( userInfo ){
				userInfo = JSON.parse(userInfo);
				// 赋值state
				state.userInfo = userInfo;
				state.loginStatus = true;
				state.token = userInfo.token;
				console.log(userInfo)
			}
		},
		
		// 登录后保存用户信息
		login(state,userInfo){
			state.userInfo = userInfo;
			state.loginStatus = true;
			state.token = userInfo.token;
			// 持久化存储 把对象转换成字符串
			uni.setStorageSync('userInfo',JSON.stringify(userInfo ))
		},
		
		// 退出登录
		loginOut(state){
			state.userInfo = {};
			state.loginStatus = false;
			state.token = null;
			// 删除本地存储的信息
			uni.removeStorageSync('userInfo')
		}
	},
	actions:{
		
	}
}