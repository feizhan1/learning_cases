/**
 * @description 事件总线（发布订阅模式）
*/
class EventEmitter {
  constructor() {
    // 事件中心，用来存放注册的事件与回调
    this.cache = {}
  }
  /**
   * @description 订阅，订阅者注册事件到调度中心， 由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
   * @param {String} eventName 事件名称
   * @param {Function} callback 事件回调
  */
  on(eventName, callback) {
    if (this.cache[eventName]) {
      if (this.eventName !== 'newListener') {
        this.emit('newListener', eventName)
      }
    }
    const callbacks = this.cache[eventName] || []
    callbacks.push(callback)
    this.cache[eventName] = callbacks
  }
  /**
   * @description 取消订阅，找到事件对应的回调函数，删除对应的回调函数
   * @param {String} eventName 事件名称
   * @param {Function} callback 回调函数
  */
  off(eventName, callback) {
    const callbacks = this.cache[eventName] || []
    const newCallbacks = callbacks.filter(fn => fn !== callback && fn.initialCallback !== callback)
    this.cache[eventName] = newCallbacks
  }
  /**
   * @description 发布
   * @param {String} name 事件名称
   * @param {Array} args 用于收集发布事件时传递的参数
  */
  emit(name, ...args) {
    const callbacks = this.cache[name] || []
    callbacks.forEach(cb => cb(...args))
  }

  /**
   * @description 只执行一次
   * @param {String} eventName 事件名称
   * @param {Function} callback 回调函数
  */
  once(eventName, callback) {
    const one = (...args) => {
      callback(...args)
      this.off(eventName, one)
    }
    one.initialCallback = callback
    this.on(eventName, one)
  }

}

/**
 * @description test example
 const events = new EventEmitter()
 
 events.on("newListener", function(eventName) {
     console.log(`eventName`, eventName)
 })
 
 events.on("hello", function(...args) {
     console.log(...args)
 })
 events.on("hello", function(){
     console.log("hello")
 })
 
 let cb = function(){
     console.log('cb')
 }
 events.on("hello", cb)
 events.off("hello", cb)
 
 function once(){
     console.log("once");
 }
 events.once("hello", once)
 events.off("hello", once)
 
 events.emit("hello", 'I am zhanfei!')
*/
