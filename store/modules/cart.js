export default{
	state:{
		list:[
			{
				checked:false,
				id:1,
				name:"打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
				color:"颜色：返回对方的过分的",
				imgUrl:"../../static/img/Children2.jpg",
				pprice:"30",
				num:1
			},
			{
				checked:false,
				id:2,
				name:"的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
				color:"颜色：返回对方的过分的",
				imgUrl:"../../static/img/Children2.jpg",
				pprice:"20",
				num:1
			},
		],
		selectedList:[]
	},
	getters:{
		// 判断是否全选 全选true 否则false
		checkedAff(state){
			return state.list.length === state.selectedList.length
		},
		// 合计+结算数量
		totalCount(state){
			
			let total = {
				pprice:0,
				num:0
			}
			state.list.forEach(v=>{
				// 是否选中状态
				if(state.selectedList.indexOf(v.id) > -1){
					total.pprice += v.pprice*v.num
					total.num = state.selectedList.length
				}
			})
			
			return total
		}
	},
	mutations:{
		// 请求到数据赋值操作
		initGetData(state,list){
			state.list = list
		},
		// 全选
		checkAll(state){
			state.selectedList = state.list.map( v=>{
				v.checked = true;
				return v.id
			})
		},
		// 全不选
		uncheckAll(state){
			state.list.map( v=>{
				v.checked = false;
			})
			state.selectedList = []
		},
		// 控制单选
		selectedItem(state,index){
			// 原始列表中传值的id
			let id = state.list[index].id;
			// 渲染列表中判断 i为-1 或者为数字中的下标
			let i = state.selectedList.indexOf(id)
			
			if(i > -1){
				state.list[index].checked = false
				return state.selectedList.splice(i,1)
			}else{
				state.list[index].checked = true
				state.selectedList.push(id)
			}
		},
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf( v.id ) === -1
			})
			
		}
		
	},
	actions:{
		checkedAllFn({commit,getters}){
			getters.checkedAff  ?  commit("uncheckAll") : commit("checkAll")
		},
		delGoodsFn({commit}){
			commit('delGoods');
			commit('uncheckAll');
		}
	}
}