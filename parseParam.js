/**
 * @description: 工具函数，获取实际类型
 * @return {String}
 */
 function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1)
}

const arrayTag = 'Array'
const stringTag = 'String'

/**
 * @description 解析 URL 参数为对象
 * @param {String} url url地址
*/
function parseParam(url) {
  const paramsStr= /.+\?(.+)$/.exec(url) // 将 ? 后面的字符串取出来
  const type = getType(paramsStr)
  if (paramsStr === null) {
    return
  }
  const paramsTarget = paramsStr[1]
  const paramsTargetType = getType(paramsTarget)
  if (paramsTargetType !== stringTag) {
    return
  }
  const paramArr = paramsTarget.split('&')
  let paramsObj = {}

  paramArr.forEach(param => {
    if (/=/.test(param)) {
      let [key, value] = param.split('=')
      value = decodeURIComponent(value)
      value = /^\d+$/.test(value) ? parseFloat(value) : value

      const isExit = Object.hasOwnProperty.call(paramsObj, key)
      if (isExit) {
        paramsObj[key] = [].concat(paramsObj[key], value)
      } else {
        paramsObj[key] = value
      }
    } else {
      paramsObj[param] = true
    }
  })

  return paramsObj
}

/**
 * 测试用例
*/
const result = parseParam('http://192.168.2.39:8080/talk_group/workareas/book?id=68&a=111')
console.log(result)