var Tarr = {
	three:{
		0:{
			x:25,
			y:30,
			ag:0,
			conte:"1.过去的经验"
		},
		1:{
			x:10,
			y:10,
			ag:0,
			conte:"2.问题的现状"
		},
		2:{
			x:40,
			y:10,
			ag:0,
			conte:"3.预测的结果"
		},
		Chinese:"圣三角牌阵",
		English:"three",
		type:"工作学业健康生活人际财富",
		array: "../img/card-array/three.jpg",
		rated: 3,
		total: 3
	},
	// selectTwo: {
	// 	0:{
	// 		x:25,
	// 		y:30,
	// 		ag:0,
	// 		conte:"1.自身现在的状况"
	// 	},
	// 	1:{
	// 		x:40,
	// 		y:10,
	// 		ag:0,
	// 		conte:"2.与b的状况"
	// 	},
	// 	2:{
	// 		x:10,
	// 		y:10,
	// 		ag:0,
	// 		conte:"3.与a的状况"
	// 	},
	// 	3:{
	// 		x:0,
	// 		y:0,
	// 		ag:0,
	// 		conte:"4.与a未来的状况"
	// 	},
	// 	4:{
	// 		x:50,
	// 		y:0,
	// 		ag:0,
	// 		conte:"5.与b未来的状况"
	// 	},
	// 	Chinese:"二选一牌阵",
	// 	English:"selectTwo",
	// 	type:"综合测试恋情婚姻工作学业健康生活人际财富",
	// 	array: "",
	// 	rated: 5,
	// 	total: 5
	// },
	Gypsy:{
		0:{
			x:25,
			y:10,
			ag:0,
			conte:"1.心态"
		},
		1:{
			x:25,
			y:50,
			ag:0,
			conte:"2.现状"
		},
		2:{
			x:15,
			y:30,
			ag:0,
			conte:"3.举措"
		},
		3:{
			x:35,
			y:30,
			ag:0,
			conte:"4.环境"
		},
		4:{
			x:25,
			y:30,
			ag:0,
			conte:"5.未来"
		},
		5:{
			x:5,
			y:10,
			ag:0,
			conte:"补位牌勿翻"
		},
		6:{
			x:15,
			y:10,
			ag:0,
			conte:"补位牌勿翻"
		},
		7:{
			x:35,
			y:10,
			ag:0,
			conte:"补位牌勿翻"
		},
		8:{
			x:45,
			y:10,
			ag:0,
			conte:"补位牌勿翻"
		},
		9:{
			x:5,
			y:30,
			ag:0,
			conte:"补位牌勿翻"
		},
		10:{
			x:45,
			y:30,
			ag:0,
			conte:"补位牌勿翻"
		},
		11:{
			x:5,
			y:50,
			ag:0,
			conte:"补位牌勿翻"
		},
		12:{
			x:15,
			y:50,
			ag:0,
			conte:"补位牌勿翻"
		},
		13:{
			x:35,
			y:50,
			ag:0,
			conte:"补位牌勿翻"
		},
		14:{
			x:45,
			y:50,
			ag:0,
			conte:"补位牌勿翻"
		},
		Chinese:"吉普赛爱情牌阵",
		English:"Gypsy",
		type:"恋情婚姻",
		array: "../img/card-array/Gypsy.gif",
		rated: 5, // 实际测试牌
		total: 15 // 牌阵需要牌数
	},
	Inspiration:{
		0:{
			x:10,
			y:10,
			ag:0,
			conte:"1.你对对方的看法"
		},
		1:{
			x:10,
			y:30,
			ag:0,
			conte:"2.对方对你的看法"
		},
		2:{
			x:25,
			y:10,
			ag:0,
			conte:"3.你认为目前的关系"
		},
		3:{
			x:25,
			y:30,
			ag:0,
			conte:"4.对方认为目前的关系"
		},
		4:{
			x:40,
			y:10,
			ag:0,
			conte:"5.你期望将来的发展"
		},
		5:{
			x:40,
			y:30,
			ag:0,
			conte:"6.对方期望将来的发展"
		},
		Chinese:"灵感对应局牌阵",
		English:"Inspiration",
		type: "恋情婚姻人际财富",
		array: "",
		rated: 10,
		total: 6
	},
	Horseshoe:{
		0:{
			x:25,
			y:50,
			ag:0,
			conte:"切牌"
		},
		1:{
			x:10,
			y:50,
			ag:0,
			conte:"1.现状"
		},
		2:{
			x:10,
			y:30,
			ag:0,
			conte:"2.可预知的"
		},
		3:{
			x:25,
			y:10,
			ag:0,
			conte:"3.不可预知的"
		},
		4:{
			x:40,
			y:30,
			ag:0,
			conte:"4.即将发生的"
		},
		5:{
			x:40,
			y:50,
			ag:0,
			conte:"5.结果"
		},
		Chinese:"处境马蹄牌阵",
		English:"Horseshoe",
		type:"恋情婚姻工作学业健康生活人际财富",
		array: "",
		rated: 6,
		total: 6
	},
	kerte:{
		0:{
			y:20,
			x:20,
			ag:0,
			conte: "1.现状"
		},
		1:{
			y:21,
			x:21,
			ag:90,
			conte: "2.障碍"
		},
		2:{
			y:0,
			x:20,
			ag:0,
			conte: "3.理想"
		},
		3:{
			y:40,
			x:20,
			ag:0,
			conte: "4.基础"
		},
		4:{
			y:20,
			x:0,
			ag:0,
			conte: "5.不久"
		},
		5:{
			y:20,
			x:40,
			ag:0,
			conte: "6.将来"
		},
		6:{
			y:48,
			x:55,
			ag:30,
			conte: "7.自我"
		},
		7:{
			y:32,
			x:55,
			ag:30,
			conte: "8.环境"
		},
		8:{
			y:16,
			x:55,
			ag:30,
			conte: "9.预期"
		},
		9:{
			y:0,
			x:55,
			ag:30,
			conte: "10.结果"
		},
		Chinese:"凯尔特十字牌阵",
		English:"kerte",
		type: "综合测试工作学业恋情婚姻健康生活人际财富",
		array: "../img/card-array/kerte.jpg",
		rated: 10,
		total: 10
	},
	newSelectTwo: {
		0:{
			x:20,
			y:20,
			ag:0,
			conte:"1.自身现在的状况"
		},
		1:{
			x:10,
			y:10,
			ag:0,
			conte:"2.与第一选择的状况"
		},
		2:{
			x:0,
			y:0,
			ag:0,
			conte:"3.与第一选择的状况未来"
		},
		3:{
			x:30,
			y:10,
			ag:0,
			conte:"4.与第二选择的状况"
		},
		4:{
			x:40,
			y:0,
			ag:0,
			conte:"5.与第二选择未来的状况"
		},
		Chinese:"二选一牌阵",
		English:"newSelectTwo",
		type:"综合测试恋情婚姻工作学业健康生活人际财富",
		array: "",
		rated: 5,
		total: 5
	},
	week:{
		0:{
			x:0,
			y:10,
			ag:0,
			conte:"1.周一上午"
		},
		1:{
			x:10,
			y:10,
			ag:0,
			conte:"2.周二上午"
		},
		2:{
			x:20,
			y:10,
			ag:0,
			conte:"3.周三上午"
		},
		3:{
			x:30,
			y:10,
			ag:0,
			conte:"4.周四上午"
		},
		4:{
			x:40,
			y:10,
			ag:0,
			conte:"5.周五上午"
		},
		5:{
			x:50,
			y:10,
			ag:0,
			conte:"6.周六上午"
		},
		6:{
			x:60,
			y:10,
			ag:0,
			conte:"7.周日上午"
		},
		7:{
			x:0,
			y:30,
			ag:0,
			conte:"8.周一下午"
		},
		8:{
			x:10,
			y:30,
			ag:0,
			conte:"9.周二下午"
		},
		9:{
			x:20,
			y:30,
			ag:0,
			conte:"10.周三下午"
		},
		10:{
			x:30,
			y:30,
			ag:0,
			conte:"11.周四下午"
		},
		11:{
			x:40,
			y:30,
			ag:0,
			conte:"12.周五下午"
		},
		12:{
			x:50,
			y:30,
			ag:0,
			conte:"13.周六下午"
		},
		13:{
			x:60,
			y:30,
			ag:0,
			conte:"14.周日下午"
		},
		Chinese:"一周运势牌阵",
		English:"week",
		type:"综合测试工作学业健康生活",
		array: "",
		rated: 14,
		total: 14
	}
}

var compare = {
	outline:"综合运势",
	health:"健康生活",
	wealth:"人际财富",
	work:"工作学业",
	love:"恋爱婚姻",
	other:"其他"
}