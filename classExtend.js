/**
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
 * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
*/
class Animal {
  constructor(name) {
    this.name = name
  }
  static canMove = true
  static canEat = true

  static canDo() {
    return this.name + 'canMove' + Animal.canMove + 'canEat' + Animal.canMove
  }

  getName() {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const dog1 = new Dog('汪汪队', 2)
console.log(dog1.name, dog1.age, dog1.getName(), Dog.canDo())