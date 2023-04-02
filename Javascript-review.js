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

/**
 * 移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。
 * 1.通过 meta 标签禁用网页的缩放。
 * 2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。
 * 3.调用一些 js 库，比如 FastClick
 */

/**
 * 函数防抖(debounce)
概念： 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
生活中的实例： 如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。
函数节流(throttle)
概念： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
生活中的实例： 我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。

 * Debouncing and throttling are two techniques that limit when and how often a function is called.
 * There's an interesting symmetry: 
Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.
Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.
 */

/**
 * js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。
当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。
因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。
使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，
当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。
因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。
 */

/**
 * CSS3 的动画的优点

在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化
代码相对简单

缺点

在动画控制上不够灵活
兼容性不好

JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。
而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧

 */


// The console output is: 1 7 3 5 2 6 4.

// The task is quite simple, we just need to know how microtask and macrotask queues work.

// Let’s see what’s going on, step by step.

// console.log(1);
// // The first line executes immediately, it outputs `1`.
// // Macrotask and microtask queues are empty, as of now.

// setTimeout(() => console.log(2));
// // `setTimeout` appends the callback to the macrotask queue.
// // - macrotask queue content:
// //   `console.log(2)`

// Promise.resolve().then(() => console.log(3));
// // The callback is appended to the microtask queue.
// // - microtask queue content:
// //   `console.log(3)`

// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// // The callback with `setTimeout(...4)` is appended to microtasks
// // - microtask queue content:
// //   `console.log(3); setTimeout(...4)`

// Promise.resolve().then(() => console.log(5));
// // The callback is appended to the microtask queue
// // - microtask queue content:
// //   `console.log(3); setTimeout(...4); console.log(5)`

// setTimeout(() => console.log(6));
// // `setTimeout` appends the callback to macrotasks
// // - macrotask queue content:
// //   `console.log(2); console.log(6)`

// console.log(7);
// // Outputs 7 immediately.
// To summarize,

// Numbers 1 и 7 show up immediately, because simple console.log calls don’t use any queues.
// Then, after the main code flow is finished, the microtask queue runs.
// It has commands: console.log(3); setTimeout(...4); console.log(5).
// Numbers 3 и 5 show up, while setTimeout(() => console.log(4)) adds the console.log(4) call to the end of the macrotask queue.
// The macrotask queue is now: console.log(2); console.log(6); console.log(4).
// After the microtask queue becomes empty, the macrotask queue executes. It outputs 2, 6, 4.
// Finally, we have the output: 1 7 3 5 2 6 4.

//我们可以使用 requestAnimationFrame 实现setInterval及 setTimeout

// const mySetInterval = (callback, interval) => {
//   // give it a start counter
//   let start = Date.now()
//   // a timer is the request ID generated by requestAnimationFrame()
//   let timer = null
//   // loop function 
//   const loop = () => {
//   // get current time when start this loop function
//     let end = Date.now()
//     timer = window.requestAnimationFrame(loop)
//   // if the time passed equal to the interval time, execute the callback funtion which has the function you want to run
//   // pass the timer to the callback function, so that can use the cancelAnimationFrame function to stop executing the function
//     if(end - start >= interval) {
//       start = end = Date.now()
//       callback(timer)
//     }
//   }
//   // call loop function, get the timer
//   loop()
//   return timer
// }

// let a = 0

// mySetInterval((timer) => {
//   a++
//   console.log(a)
//   console.log(Date.now())
//   if (a == 3) cancelAnimationFrame(timer)
// }, 2000)


// const mySetTimeOut = (callback, timeout) => {
//   console.log(Date.now())
//   let start = Date.now()
//   let timer = null
//   const loop = () => {
//     let end = Date.now()
//     timer = window.requestAnimationFrame(loop)
//     if(end - start >= timeout) {
//       callback(timer)
//     }
//   }
//   loop()
//   return timer
// }

// mySetTimeOut((timer) => {
//   console.log("Hi")
//   console.log(Date.now())
//   cancelAnimationFrame(timer)
// }, 10000)



// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b)
// })()

// let arr = [1,[2,3,[4,5]]]

// const fuc = (arr) => {
//   let newArr = []
//   while (arr.length) {
//     let temp = arr.shift()
//     if(Array.isArray(temp)) {
//       arr.unshift(...temp)
//     } else {
//       newArr.push(temp)
//     }
//   }
//   console.log(newArr)
//   return newArr
// }

// const fuc = (arr) => {
//   let newArr = []
//   arr.map((res) => {
//     if(Array.isArray(res)) {
//       newArr.push(...fuc(res))
//     } else {
//       newArr.push(res)
//     }
//   })
//   console.log(newArr)
//   return newArr
// }

// fuc(arr)

for(var i = 0; i <3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000 + i);
}