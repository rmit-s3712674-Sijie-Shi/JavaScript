/**
 * this part is for listing the questions that can't be considered as clear understanding of JavaScript concept
 */

/**
 * Random sorting
 * 1. using sort function, and create a random number which less than 1, and compare with 0.5
 * 2. random pick an element from array and remove it until no element in the array, and return a new array
 */

// randomSort = () => {
//     console.log('run')
//     let arr = [1,2,3,4,5,6,7,8,9]
//     return arr.sort(res => Math.random() > 0.5 ? 1 : -1)
// }

// randomSort1 = () => {
//     console.log('run')
//     let result = []
//     let arr = [1,2,3,4,5,6,7,8,9]
//     while(arr.length > 0) {
//     let index = Math.floor(Math.random() * arr.length)
//     result.push(arr[index])
//     arr.splice(index, 1)
//     }
//     return result
// }
/**
 * 
 * a usage of prototype inheritance
 */

// function Parent(name){
//     this.name = name
// }

// // function Child(name, age){
// //     Parent.call(this, name)
// //     this.age = age
// // }

// function Child() {
//     Parent.apply(this, arguments)
// }
// Child.prototype.saySomething = function() {
//     console.log(this.name + this.age)
// }
// let test = new Child('123','456')
// // why two results with an undefined
// console.log(test.saySomething())

/**
 * 
 * this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。
1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。
其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，
后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。
bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

 */

/**
 * tide operator in javascript
 * [].forEach.call($$("*"),function(a){  
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)  
})  
 */
// let num = Math.random() * (1<<24)
// console.log(num) // 13990704.336933322
// console.log(~num)// -13990705
// console.log(~~num);// 13990704

/**
 * 我的理解是 cookie 是服务器提供的一种用于维护会话状态信息的数据，通过服务器发送到浏览器，浏览器保存在本地，
 * 当下一次有同源的请求时，将保存的 cookie 值添加到请求头部，发送给服务端。这可以用来实现记录用户登录状态等功能。
 * cookie 一般可以存储 4k 大小的数据，并且只能够被同源的网页所共享访问。

服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。一条cookie 包括了9个属性值
 name、value、expires、domain、path、secure、HttpOnly、SameSite、Priority。
 其中 name 和 value 分别是 cookie 的名字和值。expires 指定了 cookie 失效的时间，
 domain 是域名、path是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问。
 secure 规定了 cookie 只能在确保安全的情况下传输，HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。
 SameSite 属性用来限制第三方 cookie，可以有效防止 CSRF 攻击，从而减少安全风险。
 Priority 是 chrome 的提案，定义了三种优先级，当 cookie 数量超出时低优先级的 cookie 会被优先清除。

在发生 xhr 的跨域请求的时候，即使是同源下的 cookie，也不会被自动添加到请求头部，除非显示地规定。

 */

/**
 * var obj1={ 
    name: 'sven'
};
var obj2={ 
    name: 'anne'
};
window.name = 'window';
var getName = function(){ 
    console.log ( this.name );
};
getName(); // 输出: window
getName.call( obj1 );// 输出: sven
getName.call(obj2 ); // 输出: anne

作者：LazyLady
链接：https://juejin.cn/post/6844903470672117774
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

