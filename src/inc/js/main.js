//import/export start

import fooBar,{foo1,foo2} from "./myFile";
fooBar("FOOBAR");
foo1("FOO1");
foo1("FOO2");

import * as values from "./values";//valuesというオブジェクト扱いで、変数をすべてインポート
//import "./values";
console.log(values.name + " " + values.age + " " + values.live);
console.log(values.arg);

//import/export end


//Arrow Function start

import {myFunc} from "./arrowfunction";

myFunc("Arrow function");

//other ex

import {cube, kotae} from "./cube";
console.log(cube(5));
console.log(kotae);

//Arrow Function end


//this start

import $ from "jquery";
$("body").click(e => {
	setTimeout(() =>{
		$(e.currentTarget).css("background","red");
	},1000);
});

//this end


//Template strings(改行できる)

const str = `aaaaaaaa
bbbbbbb
ccccccc`;

console.log(str);

//class

class Person{
	//コンストラクタ
	constructor(name){
		this.name = name;
	}
	//メソッド
	say(){
		return "My name is " + this.name+".";
	}
}
var person = new Person("Bob");
console.log(person.say());

//extend
class Man extends Person{
	constructor(name){
		super(name);//継承元のname
	}
	isMan(){
		return true;
	}
}

var man = new Man("Jon");
console.log(man.say());//manクラスで継承元の関数を使用
console.log(man.isMan());



//ES5
//var fooBar = require("./myFile.js");
//fooBar("OK");

//var $ = require("jquery");
//$("body").css("background","red");