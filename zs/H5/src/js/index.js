require(['main'], function() {
	require(['mui'], function() {
		init();
     var page=1;
	 var limit=3;
		function init() {
			var list = [...document.querySelectorAll('.list li')];
			list.forEach(function(item) {
				item.onclick = function() {
					list.forEach(function(val) {
						val.classList.remove('active')
					})
					this.classList.add('active')
					if(this.innerHTML=="头条"){
						mui.ajax('/api/tou',{
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；
							success:function(data){
								console.log(data);
							}
						});
					}	
				}
			})
		}
		
	})
})
