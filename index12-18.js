
//==============================================//12
// //数据类型 Symbol  它的意思是全局标记

// let f = Symbol();
// console.log(typeof(f));//字符串 Symbol

// //Symbol打印类型转换
// let a = Symbol('js');
// console.log(a);//Symbol数据 Symbol(js)
// console.log(a.toString());//字符串 Symbol(js)

// //Symbol在对象中的使用 对象保护

// let b = Symbol();
// let obj = {
// 	[b] : 'web'
// }
// console.log(obj.b);//undefined
// console.log(obj[b]);//web

// let c = {
// 	a : 'js',
// 	b : 'web',
// 	c : 'html'
// }
// for(let i in c){
// 	console.log(c[i]);//js web html
// }

// let e = {
// 	a : 'js',
// 	b : 'web'
// }
// let t  = Symbol();
// e[t] = 'css';
// for(let i in e){
// 	console.log(c[i]);//js web
// }
// console.log(e[t]);//css


//==============================================//13
//Set[json数组]     WeakSet[对象]


// // 1) Set声明、自动去重
// let setArr = new Set(['js','web','css','js']);
// console.log(setArr);//Set(3) {"js", "web", "css"}

// console.log(setArr[0]);

// // 2) Set值的增删查
// // 増  //setArr.push('sdfs');//setArr.push is not a function
// setArr.add('css');
// console.log(setArr);//Set(3) {"js", "web", "css"}
// setArr.add('html');
// console.log(setArr);//Set(4) {"js", "web", "css", "html"}

// //删
// setArr.delete('html');
// console.log(setArr);// Set(3) {"js", "web", "css"}

// //查
// console.log(setArr.has('html'));//false
// console.log(setArr.has('css'));//true

// //清空
// setArr.clear();
// console.log(setArr);//Set(0) {}

// // 3) Set值输出 for...of 、 forEach

// // 4) Set值长度 [set].size 不能用length
// console.log(setArr.size)

// // 5) WeakSet 不能直接声明属性,需要add添加赋值
// //new WeakSet({a:'b'});//Uncaught TypeError: #<Object> is not iterable

// let weakObj = new WeakSet();
// console.log(weakObj);//WeakSet {}

// // 6) WeakSet 不容内存可以重复添加，同一内存不允许重复添加
// let obj = { a : '1', b : '2' };
// let obj1 = obj;
// let obj2 = {a : '1', b : '2' };;
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);//WeakSet {{…}}
// weakObj.add(obj2);
// console.log(weakObj);//WeakSet {{…}, {…}}

// // 7) WeakSet内容不能引用，可以使用 add clear delete has
// //WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以.
// //WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素.

//==============================================//14
//Map 数据结构  get set has delete clear size
//Map key\value 可以为任意类型值
// let map = new Map();
// let json = { a : '1',b :'2'};
// map.set(json,'javascript');
// map.set(null,undefined);
// map.set('css','html');
// console.log(map);//Map(3) {{…} => "javascript", null => undefined, "css" => "html"}
// console.log(map.get('css'));//html


//==============================================//15
// //Proxy 预处理，增强 对象&函数 生命周期
// //类似 object.defineproperty();

// let obj = {
// 	add(){
// 		console.log('1+1=2');
// 	},
// 	name : 'I am Mrluo'
// }
// var pro = new Proxy(obj,{
// 	set(target,key,value,receiver){
// 		// target:目标值。
// 		// key：目标的Key值。
// 		// value：要改变的值。
// 		// receiver：改变前的原始值
// 		console.log('值改变了');
// 		console.log(target,key,value,receiver);
// 		return target[key] = value;
// 	},
// 	get(target,key,property){
// 		//target：得到的目标值
// 		//key：目标的key值，相当于对象的属性
// 		console.log('读取值');
// 		return target[key];
// 	}
// });
// pro.name = '456';
// console.log(pro.name,obj.name);//456  456

// let pro = new Proxy(function(){},{
// 	apply(target, ctx, args){
// 		console.log('do apply');
// 		console.log(target, ctx, args)
// 		return Reflect.apply(...arguments);
// 	}
// });

// console.log(pro());

//==============================================//16
//promise  
//解决es5回调地狱问题(多层嵌套回调) 
//a调用b调用c调用d...

// let status = 1;
// let step1 = (resolve,reject) => {
// 	status == 1 ? resolve({a:'1'}) : reject('1-1-0');
// }
// let step2 = (resolve,reject) => {
// 	status == 1 ? resolve(new Map().set('a','b')) : reject('1-2-0');
// }
// let step3 = (resolve,reject) => {
// 	status == 1 ? resolve([0,0,0]) : reject('1-3-0');
// }
// new Promise(step1)
// .then(
// 	(val)=>{ 
// 		console.log(val)
// 		return new Promise(step2); 
// 	}
// )
// .then(
// 	(val)=>{
// 		console.log(val)
// 		return new Promise(step3); 
// 	}
// )
// .then(
// 	(val)=>{
// 		console.log(val)
// 		return val;
// 	}
// );

//==============================================//17
// //class类使用

// //声明,属性间无逗号,this指向class类本身
// class Coders{

// 	constructor(a,b){
// 		this.a = a;
// 		this.b = b;
// 	}

// 	name(val){
// 		console.log(val);
// 	}

// 	add(a,b){
// 		this.name('aa');
// 		console.log(a+b);
// 	}

// 	console(){
// 		console.log(this.a,this.b);
// 	}
// }
// //赋值名称不能和类名重复
// let coders = new Coders;
// coders.name('aa');//aa
// coders.add(1,2);//3

// //类的传参 constructor
// let coder2 = new Coders(8,9);
// coder2.console();//8 9

// //类的继承 html 继承 Coders
// class html extends Coders{

// }
// let HTML = new html;
// HTML.name('abc');//abc

//==============================================//18
//模块化 
//export:负责进行模块化，也是模块的输出。创建多个模块引用
//export default创建一个模块引用
//import:负责把模块引，也是模块的引入操作。


