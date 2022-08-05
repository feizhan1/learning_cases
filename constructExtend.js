/**
 * 借助构造函数实现继承
 * 解决原型链继承的问题1、2
*/
function Animal(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}
function Dog(name) {
  Animal.call(this, name)
}
Dog.prototype = new Animal()
let dog3 = new Dog('汪汪队')
console.log(dog3.name, dog3.getName())
let dog4 = new Dog('天天')
console.log(dog4.name, dog4.getName())