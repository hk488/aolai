export default {
	state:{
		list:[
			// {
			// 	name:"张三",
			// 	tel:"18511773322",
			// 	city:"北京市海淀区",
			// 	details:'2号楼',
			// 	isDefault:false
			// },
			// {
			// 	name:"李四",
			// 	tel:"18511773322",
			// 	city:"北京市海淀区",
			// 	details:'2号楼',
			// 	isDefault:true
			// }
		]
	},
	getters:{
		defaultPath(state){
			return state.list.filter(v => v.isDefault)
		}
	},
	mutations:{
		// 拿到登录id初始化请求当前用户收货地址数据
		__initAddressList(state,list){
			state.list = list
			
		},
		createPath( state, obj ){
			state.list.unshift( obj );
		},
		updatePath(state,{index,item}){
			
			for( let key in item){
				state.list[index][key] = item[key];
			}
			
		},
		removePath(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false
				}
			})
		}
	},
	actions:{
		createPathFn({commit},obj){
			if(obj.isDefault){
				commit('removePath')
			}
			commit('createPath',obj)
		},
		updatePathFn({commit},obj){
			if(obj.item.isDefault){
				commit('removePath')
			}
			commit('updatePath',obj);
		}
	}
}