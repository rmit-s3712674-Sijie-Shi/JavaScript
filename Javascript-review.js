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

// function Child(name, age){
//     Parent.call(this, name)
//     this.age = age
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
let num = Math.random() * (1<<24)
console.log(num) // 13990704.336933322
console.log(~num)// -13990705
console.log(~~num);// 13990704