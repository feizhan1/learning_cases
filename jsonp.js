/**
 * @description JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求
 * @param {String} url 地址
 * @param {Object} params 请求参数
 * @param {String} 回调函数名
*/
function jsonp({url, params, callbackName}) {
  const generateUrl = () => {
    let dataSrc = ''
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}`
      }
    }
    dataSrc += `callback=${callbackName}`
    return `${url}?${dataSrc}`
  }
  return new Promise((resolve, reject) => {
    const scriptFile = document.createElement('script')
    scriptFile.src = dataSrc
    document.body.appendChild(scriptFile)
    window[callbackName] = (data) => {
      resolve(data)
      document.removeChild(scriptFile)
    }
  })
}