(function(){
	var main = {
		init:function(){
			// 多少张total，牌阵formation，测类型nature,牌类型kind
			var obj = getParmas()
			console.log(obj)
			// obj = {
			// 	total:78,
			// 	formation:'凯尔特十字',
			// 	nature:'财富',
			// 	kind:'waite/'
			// }
			var paiClass = obj.paiClass;


			this.create(obj)
		},
		create:function(obj){
			//生成78，56，22？
			var i = obj.total != 56? 0 : 23;
			var len = obj.total != 56? obj.total : obj.total + 23
			var ogn = document.getElementById('origin');
			var kind = obj.kind
			for(i;i<obj.total;i++){
				createPai(ogn,i,'positive',kind)
			}

			this.pArr = [].slice.call(document.querySelectorAll('.pai'))
			this.len = this.pArr.length
		}
	}
	main.init();
})()