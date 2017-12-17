export default function(str){
	console.log(str);
}

export var foo1 = function(str){
	console.log(str);
}

export var foo2 = function(str){
	console.log(str);
}

//defaultが読み込まれる。
//他の関数を読み込みたい場合、main.js側で名前をつける必要がある。