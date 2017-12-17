export const name = "Kane";
export let age = 25;
export const live = "Japan";
export let arg = [1,2,3,4];

//main.jsで変数を受け取る


/////////変数メモ
//letは再宣言不可、再代入可能
//constは再宣言不可、再代入不可

/////////引数の初期値
//const xx = (bar = 3) => {
//	console.log(bar);
//}
//xx(9);
//xx();

/////////スプレッド演算子(配列)
//const bar = (...myArg) => {
//	console.log(myArg);
//}
//bar(1,2,3,4);

/////////配列の結合
//const foo = [1,2,3];
//const bar = [...foo,4,5,6];
//console.log(bar);