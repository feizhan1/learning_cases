// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.toString = function() {
//   return `(${this.x},${this.y})`
// }

// var p = new Point(1, 2)


class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  get a() {
    return `hi ${this.x}`
  }

  set a(value) {
    this.x = `hi ${value}`
  }

  toString() {
    return `(${this.x},${this.y})`
  }
}

const p1 = new Point(1, 2)
var p1String = p1.prototype
console.log('p1', p1)
console.log('typeof Point', typeof Point)
console.log("point.__proto__.hasOwnProperty('toString')", p1)