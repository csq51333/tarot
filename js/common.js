function getParmas(){
	var parmas = {}
	var search = unescape(window.location.search.substr(1))
	var keys = search.split('&')
	for(var i=0;i<keys.length;i++){
		if(keys[i]){
			var arr = keys[i].split('=');
			// parmas[arr[0]] = !/^\[?\{(\{*|\w*|\s*|\,*|\:*|\}*\'*\"*)*\}\]?$/.test(arr[1]) ? arr[1] : eval('('+arr[1]+')')
			// parmas[arr[0]] = !/^[\[*\{+\%*\w*\:*\d*\"*\,*\,*\}+\s*\]*]*$/.test(arr[1]) ? arr[1] : eval('('+arr[1]+')')
			parmas[arr[0]] = !/^\[*\{+\s*\S+\}+\]*$/.test(arr[1]) ? arr[1] : eval('('+arr[1]+')')
		}
	}
	return parmas;
}

function angleZ(el){
	var checkStr = el.style.transform;
	if(!checkStr || !/rotate/.test(checkStr)){
		return ''
	}
	var str = el.style.transform.replace(/([a-zA-Z]+|\(+|\)+)/g,'')
	if(/\s+/.test(str)){
		var arr = str.split(' ')
		return arr[1]*1
	}
	return str*1
}

function getRoutate(str,ag){
	var re = new RegExp("(?<=rotate" + ag + "?\\()(-?\\d+\\.?\\d*)(?=deg\\))")
	var angle = new Number(str.match(re)[0])
	return angle;
}

//规整函数，要么竖着要么横
function ZNWei(_ag,s){
	if(typeof(_ag) == "number"){
		var ag = _ag % 360
		ag < 0 ? ag + 360 : ag;
		var baseline = s ? (ag >= 90 && ag < 270 ? 180 : 0) : (ag >= 0 && ag < 180 ? 90 : 270);
		var extra = baseline - ag
		return _ag + extra
	}
}

//随机函数
function rd(min,max){
	return Math.round(Math.random()*(max-min)+min)
}

function createPai(father,i,wei,kinds){
	var kind = kinds || 'waite/'
	var div = document.createElement('div')
	var divb = document.createElement('div')
	var divbg = document.createElement('div')

	div.className = 'pai';
	div.zinx = 1;
	div.num = i;
	div.reg = 0;
	div.setAttribute('No.',i)
	if(wei){
		var dir = wei == 'positive' ? '正' : '逆'
		div.setAttribute('wei', dir)
	}
	div.style.transform = "rotate("+ (wei == 'positive' ? 0 : 180) + "deg)"

	divb.className = 'biao'
	divb.style.backgroundImage = 'url("../img/'+kind+i+'.jpg")'

	divbg.className = 'bei'
	divbg.style.backgroundImage = 'url("../img/'+kind+'78.jpg")'
	div.appendChild(divb)
	div.appendChild(divbg)
	father.appendChild(div)
}

//弹框
function mask(obj){
	var arg = obj || {}
	var cb = arg.callback
	var po = document.querySelector('.popover');
	var curtain = document.querySelector('.' + obj.className);
	if(curtain){
		curtain.style.display = 'block'
		po.style.display = 'block'
	} else {
		if(!po){
			var po =document.createElement('div')
			po.className = 'popover'
			document.body.appendChild(po)
		}
		var curtain = document.createElement('div')
		var prompt = document.createElement('div')
		curtain.className = "curtain " + obj.className
		prompt.className = "prompt"

		switch(obj.content){
			case "text":
				prompt.innerHTML = "<h3>"+ arg.title +"</h3><textarea class='_mark'></textarea><button class='btn'>"+ arg.btn +"</button>"
				break;
			case "img" :
				prompt.innerHTML = "<h3>"+ arg.title +"</h3><img class='img_mark' src='"+obj.imgSrc+"' />"
		}
		
		po.style.display = 'block'
		curtain.appendChild(prompt)
		po.appendChild(curtain)

		curtain.addEventListener('click',function(e){
			var e = e || window.e
			if(e.target.className.indexOf(obj.className) != -1){
				this.style.display = 'none'
				po.style.display = 'none'
			}
		},true)

		var btn = document.querySelector('.btn')
		btn.addEventListener('click',function(){
			var localMark = document.querySelector('.' + obj.className).querySelector('._mark').value
			arg.callback(localMark)
			curtain.style.display = 'none'
			po.style.display = 'none'
		})
	}

}

//转换时间戳格式
function formatTime(n){
	if(/\d{13,}/.test(n)){
		var timestamp = parseInt(n)
		var T = new Date(timestamp)
		var Year = T.getFullYear()
		var Month = T.getMonth() + 1
		var Dates = T.getDate()
		var Hours = T.getHours()
		var Minute = T.getMinutes()
		var Second = T.getSeconds()

		return Year+"."+Month+"."+Dates+" "+Hours+":"+Minute+":"+Second+" "
	}
	return "？？？"
}

function direct(url){
	if(url){
		sessionStorage.setItem('backUrl',window.location.href)
		window.location = url
	}else{
		sessionStorage.setItem('backUrl',(window.location.href).match(/(?<=\w*\/)\w*(?=\.html)/))
	}
	return sessionStorage.getItem('backUrl');
}

function singleAlert(){
	var result = "";
	return function (kind){
		// 单例弹框，mask块/内容块
	}
}