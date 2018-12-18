// const a='jsluo';

// a = 'sdfs';
// console.log(a);


//===========================================================//2

//定义方式
// var let const 

//===========================================================//3

//变量的解构赋值 数组&对象&字符串

//变量根据位置解构 对象根据字段名称解构
//let [a,b,c] = [1,2,3];
//console.log(a,b,c);

// let [a,[b,c],d] = [1,[2,3],4];
// console.log(a,b,c,d);

// let {aa,bb} = {aa:'123',bb:'456'}
// console.log(aa,bb);

// let [a,b,c,d,e,f] = 'wsxedc';
// console.log(a+'--'+b+'--'+c+'--'+d+'--'+e+'--'+f);

//圆括号的作用
// let foo;
// [foo] = ['234'];
// console.log(foo);

// //对象解构，先声明了变量 编译失败
// let ftt;
// ({ftt} = {ftt:'aa'});//需要加圆括号
// console.log(ftt);


//===========================================================//4

//对象扩展运算符 & rest运算符

// function test_1 (...arg) {
// 	console.log(arg);
// }
// test_1(1,2,3,4,5);

// let arr1 = [1,2,3,4];
// let arr2 = arr1;//影响原始值
// arr2.push(5);
// console.log(arr1);//12345
// console.log(arr2);//12345

// let arr1 = [1,2,3,4];
// let arr2 = [...arr1];//不影响原始值,区arr1内容赋值给arr2
// arr2.push(5);
// console.log(arr1);//1234
// console.log(arr2);//12345

//rest运算符 //取剩余的值
// function test_2(a,...arg){
// 	//a 为确定值，后面不确定几个用rest运算符
// 	console.log(a,arg);
// 	for (let key of arg) {
// 		console.log(key);
// 	}
// }
// test_2(1,2,3,4,5);


//===========================================================//5
//字符串模版 & 字符串查找 & 查找开头 & 查找结尾 & 字符串复制

// let b = '很厉害'
// let a = `这是ES6字符串模版${b}是不是`;
// let c = 1,d = 2;
// let e = `这是字符串模版计算${c+d}结果`;
// let f = `
// 		<div>123</div>
// 		<div>456</div>
// 		<div>789</div>
// 		<div>${b}</div>
// 	`;
// console.log(a);
// console.log(e);
// document.write(f);

// //查找
// let j = '这是第一段字符串';
// console.log(j.includes('一段'));//true 

// //开头查找
// console.log(j.startsWith('这是'));//true

// //结尾查找
// console.log(j.endsWith('字符串'));//true

// //字符串复制
// console.log('string|'.repeat(3));//string|string|string|

//===============================================//6
//ES6数学操作
//题外： 声明二进制0B 八进制变量0O
//二进制 var binary = 0B010101;   
//八进制 var b = 0o010101;

//判断是否为数字(整形,浮点型)
// let a = 123.456;
// let b = '232';
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite(b));//false

// //是否为NaN
// console.log(Number.isNaN(NaN));//true

// //是否为整数
// console.log(Number.isInteger(12.3))//false
// console.log(Number.isInteger(12));//true
// console.log(Number.isInteger('12'))//false

// //整数 & 浮点类型转换
// let c = 123.456;
// console.log(Number.parseInt(c));//123
// console.log(Number.parseFloat(c));//123.456

// //整数取值范围正负2的53次方
// //es5
// let a = Math.pow(2,53)-1;
// console.log(a)//最大安全数字 9007199254740991
// console.log(-a)//最小安全数字 -9007199254740991

// //es6
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// //判断数值是否安全
// console.log(Number.isSafeInteger(a));//true
// console.log(Number.isSafeInteger(a+1));//false
// console.log(Number.isSafeInteger(-a));//true
// console.log(Number.isSafeInteger((-a)-1));//false


//===============================================//7

//数组方法(1)
//Array.from();
//把数组json & 字符串转数组
// let json = {
// 	'0' : 'js',
// 	'1' : 'nodejs',
// 	'2' : 'css',
// 	length : 3
// }

// let strings = '我是字符串';
// let strings1 = '我,是,字,符,串';

// console.log(Array.from(json))
// //["js", "nodejs", "css"]
// console.log(Array.from(strings))
// //["我", "是", "字", "符", "串"]
// console.log(Array.from(strings1))
// // ["我", ",", "是", ",", "字", ",", "符", ",", "串"]

// //Array.of();
// //把一堆文本或者变量转换成数组
// let str = '3,4,5,6'
// console.log(Array.of(str));
// //["3,4,5,6"]
// console.log(Array.of(3,4,5,6));
// //[3, 4, 5, 6]

// //[Array].find();
// //数组元素查找
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = ['js','nodejs','css'];
// console.log(arr.find(function(value,index,Arr){
// 	console.log(value,index);
// 	return value > 7;
// }))

// console.log(arr2.find(function(value,index,Arr){
// 	console.log(value,index);
// 	return value == 'js';
// }));


//===============================================//8

//数组方法(2)
//[Array].fill(value,start,end);
//替换对应位置的值
// let arr = [1,2,3,4,5,6];
// arr.fill(9,2,arr.length);
// console.log(arr);
//[1, 2, 9, 9, 9, 9]

// //for of

// for (let item of arr) {
// 	console.log(item);//value
// 	//129999
// }

// for (let item of arr.keys()) {
// 	console.log(item);//索引
// 	//012345
// }

// for (let [index,item] of arr.entries()) {
// 	//索引 & value
// 	console.log(index,item);
// }

// //entries( )实例方法：
// //需要的时候手动循环

// let list = arr.entries();
// console.log(list);//Array Iterator {}
// console.log(list.next().value);//[0, 1]
// console.log(list.next().value);//[1, 2]
// console.log(list.next().value);//[2, 9]
// console.log(list.next().value);//[3, 9]
// //...


//===============================================//9

// ES6函数默认值 & 箭头函数 & 抛出错误

//默认值 b 为默认值
// function add(a,b=1){
// 	console.log(a+b);//2
// }
// add(1);

// //严谨模式，es6可在函数内使用
// function testfun(){
// 	'use strict'
// 	console.log(123);
// }
// testfun();

// //严谨模式+默认值会出错
// // function add(a,b=1){
// // 	'use strict'
// // 	console.log(a+b);//报错
// // }
// // add(1);

// function add(a,b){
// 	'use strict'
// 	console.log(a+b);//2

// 	//throw new Error('a+b is 2');//抛出错误
// }
// add(1,1);

// console.log('==================')
// //箭头函数 单行代码默认返回结果
// let testFun1 = (a,b) => a+b;
// console.log(testFun1(1,1));//2

// //多行代码需要用大括号,否则语法报错
// let testFun2 = (a,b=1) => {
// 	console.log(a,b);
// 	return a+b;
// }
// console.log(testFun2(1));//2

// //获取函数参数(可传)个数
// console.log(testFun2.length);//1
// console.log(testFun1.length);//2


// let testFun3 = function(){}
// let c = new testFun3();
// console.log(c);

// //箭头函数不能构造 new fun()
// let testFun4 = () => {};
// console.log(testFun4);//() => {}
// //let d = new testFun4();//报错


//===============================================//10
//对象的函数解构json

// let json = {
// 	a : 'js',
// 	b : 'web'
// };
// let fun = ({a,b='css'}) => console.log(a,b);
// fun(json);//js web

// //数组结解构
// let arr = [1,2,3,4];
// let fun2 = (a,b,c,d,e) => console.log(a,b,c,d,e);
// fun2(...arr);//1 2 3 4 undefined

// //in的用法 判断数组\对象中是否有值
// console.log('a' in json);//true
// console.log('c' in json);//false

// //arr.length 的弊端 [,,,] 
// // length = 3 3个空值
// let arr2 = [,,,];
// //es5 
// console.log(arr2.length);//3
// //es6  in判断索引位置是否有值
// console.log(0 in arr2);//false
// let arr3 = ['js',,'html',];
// console.log(0 in  arr3);//true

// //数组遍历 forEach  //默认去除空值
// arr3.forEach((val,index) => console.log(val,index));
// //其他遍历方式
// arr3.filter((val,index) => console.log(val,index));
// arr3.some((val,index) => console.log(val,index));
// console.log(arr3);// ["js", empty, "html"]
// console.log(arr3.map(x => 'web'));//替换["web", empty, "web"]

// //join
// let arr4 = ['js','web','css'];
// console.log(arr4.join(''));//转字符串&添加间隔jswebcss
// console.log(arr4.join('|'));//js|web|css
// //转字符串
// console.log(arr4.toString());//js,web,css

//===============================================//11
//对象赋值
// let a = 'js';
// let b = 'web';
// let obj = {a,b};
// console.log(obj);//{a: "js", b: "web"}

// //Key值构建
// let key = 'keys';
// let obj1 = {
// 	[key] : 'web'
// }
// console.log(obj1);//{keys: "web"}

// //对象比较Object.is()
// let obj2 = {name : '123'}
// let obj3 = {name : '123'}
// console.log(obj2.name===obj3.name);//true
// console.log(Object.is(obj2.name,obj3.name));//true
// console.log(obj2===obj3);//false
// console.log(Object.is(obj2,obj3));//false
// //区分=== 和 is方法的区别是什么
// //=== 同值相等  is()严格相等
// console.log(+0 === -0);//true
// console.log(NaN === NaN);//false object===object 对象没有结果
// console.log(Object.is(+0,-0));//false
// console.log(Object.is(NaN,NaN));//true
// //合并对象Object.assign();
// let obj4 = {name : 'Mrluo'},
// 	obj5 = {name : 'Mrluo2',sex : 'man'},
// 	obj6 = {six : '18'}

// console.log(Object.assign(obj4,obj5,obj6));
// //{name: "Mrluo2", sex: "man", six: "18"}


