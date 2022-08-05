/**
 * @description: 可继续遍历的数据类型
*/
const mapTag = 'Map'
const setTag = 'Set'
const arrayTag = 'Array'
const objectTag = 'Object'

/**
 * @description: 不可继续遍历的数据类型
*/
const boolTag = 'Boolean'
const dateTag = 'Date'
const errorTag = 'Error'
const numberTag = 'Number'
const regexpTag = 'RegExp'
const stringTag = 'String'
const symbolTag = 'Symbol'
const funcTag = 'Function'

/**
 * @description: 工具函数，克隆函数
 * @return {Function}
*/
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const paramReg = /(?<=\().+(?=\)\s+{)/
  const funcString = func.toString()
  if (func.prototype) {
      console.log('普通函数')
      const param = paramReg.exec(funcString)
      const body = bodyReg.exec(funcString)
      if (body) {
          console.log('匹配到函数体：', body[0])
          if (param) {
              const paramArr = param[0].split(',')
              console.log('匹配到参数：', paramArr)
              // eslint-disable-next-line no-new-func
              return new Function(...paramArr, body[0])
          } else {
              // eslint-disable-next-line no-new-func
              return new Function(body[0])
          }
      } else {
          return null
      }
  } else {
      // eslint-disable-next-line no-eval
      return eval(funcString);
  }
}

/**
 * @description: 工具函数，克隆Symbol
 * @return {Symbol}
*/
function cloneSymbol(target) {
  console.log(target.constructor)
  return new target.constructor(target.description)
}

/**
 * @description: 工具函数，克隆正则
*/
function cloneReg(target) {
  const result = new target.constructor(target.source, target.flags)
  return result
}

/**
 * @description: 工具函数，克隆不可遍历类型
 * @return {*}
 */
function cloneOtherType(target, type) {
  const Ctor = target.constructor
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case regexpTag:
      return cloneReg(target)
    case symbolTag:
      return cloneSymbol(target)
    case funcTag:
      return cloneFunction(target)
    default:
      return null
  }
}

/**
 * @description: 工具函数，获取实际类型
 * @return {String}
 */
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1)
}

/**
 * @description: 工具函数，初始化被克隆的对象
 * @return {String}
 */
function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}

/**
 * @description: 工具函数，判断是否是引用类型
 * @return {boolean}
*/
function isObject(target) {
  const type = typeof target
  const isObj = target !== null && (type === 'object' || type === 'function')
  return isObj
}

/**
 * @description: 工具函数，通用while循环
 * @return {Array}
*/
function forEach(array, iteratee) {
  let index = 0
  const length = array.length
  while (index < length) {
    iteratee(array[index], index)
    index += 1
  }
  return array
}

function clone(target, map = new WeakMap()) {
  const deepTag = [ mapTag, setTag, arrayTag, objectTag, arrayTag ]
  // 原始类型直接返回
  if (!isObject(target)) {
    return target
  }
  // 根据不同类型进行操作
  const type = getType(target)
  if (deepTag.includes(type)) {
    let cloneTarget
    cloneTarget = getInit(target)
    // 防止循环引用
    if (map.get(target)) {
      return target
    }
    map.set(target, cloneTarget)
    // 克隆set
    if (type === setTag) {
      target.forEach((value) => {
        cloneTarget.add(clone(value))
      })
      return cloneTarget
    }
    // 克隆map
    if (type === mapTag) {
      target.forEach((value, key) => {
        cloneTarget.set(key, clone(value))
      })
      return cloneTarget
    }
    // 克隆对象和数组
    const isArray = Array.isArray(target)
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget
  } else {
    return cloneOtherType(target, type)
  }
}








// 用例测试测试
const map = new Map()
map.set('key', 'value')
map.set('ConardLi', 'code秘密花园')

const set = new Set()
set.add('ConardLi')
set.add('code秘密花园')

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
  bool: Boolean(true),
  num: Number(2),
  str: String(2),
  symbol: Symbol(1),
  date: Date(),
  reg: /\d+/,
  error: Error('出错了'),
  func1: () => {
      console.log('code秘密花园')
  },
  func2: (a, b) => {
      return a + b
  }
}

const dataClone = clone(target)
console.log(dataClone)