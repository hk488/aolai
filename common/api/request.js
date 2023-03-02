export default{
	common:{
		baseUrl:"http://localhost:3000/api",
		data:{},
		header:{
			"Content-type":"application/json",
			"Content-type":"application/x-www-form-urlencoded",
		},
		method:"GET",
		dataType:"json"
	},
	//options为形参，默认为一个对象，此参数为页面调用接口时传递的请求方法，请求地址等等
	request( options={} ){
			options.url = this.common.baseUrl + options.url;
			options.data = options.data || this.common.data;
			options.header = options.header || this.common.header;
			options.method = options.method || this.common.method;
			options.dataType = options.dataType || this.common.dataType;
			return new Promise((res,rej) =>{
				
				uni.request({
					...options,
					success:(result) => {
						
						if(result.statusCode != 200){
							return rej();
						}
						
						let data = result.data.data
						res(data);
					}
				})
			})
	}
}

// 此文件用作封装request请求。
// 参考uniapp中request文档
// node后端死数据