/**
 * 实现数组原型的forEach方法
*/
Array.prototype.forEach2 = function(callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function')
  }
  const o = Object(this)
  const len = o.length >>> 0
  let k = 0
  while (k < len) {
    if (k in o) {
      callback.call(thisArg, o[k])
    }
    k++
  }
}

/**
 * 测试forEach2用例
*/
let arr = new Array(1, 2, 3)
arr.forEach2((item) => {
  console.log(item, '-item')
})


/**
 * 实现数组原型的map方法
*/
Array.prototype.map2 = function(callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function')
  }
  const o = Object(this)
  const len = o.length >>> 0
  let k = 0
  let res = []
  while (k < len) {
    if (k in o) {
      res[k] = callback.call(thisArg, o[k])
    }
    k++
  }
  return res
}

/**
 * 测试forEach2用例
*/
let arr1 = new Array(1, 2, 3)
let newArr1 = arr.map2((item) => `${item}-${item}`)
console.log('测试forEach2用例', newArr1)

/**
 * 实现数组原型的filter方法
*/
Array.prototype.filter2 = function(callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function')
  }
  const o = Object(this)
  const len = o.length >>> 0
  let k = 0
  let res = []
  while (k < len) {
    if (k in o) {
      const result = callback.call(thisArg, o[k])
      if (result) {
        res.push(o[k])
      }
    }
    k++
  }
  return res
}

/**
 * 测试filter2用例
*/
let arr2 = new Array(1, 2, 3)
let newArr2 = arr.filter2((item) => item > 2)
console.log('测试filter2用例', newArr2)