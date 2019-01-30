//1.
console.log(0.1+0.2);    //0.30000000000000004

// 2.
console.log(0.1+0.2 == 0.3);    //false

//3.
console.log('1'+2+'3'+'4');     //1234

//4.
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
console.log(arr.length);    //2

//5.
function foo(){}
delete foo.length;
console.log(typeof foo.length);    //number