/**
 * @description ajax请求
 * @returns {Promise} 返回promise
*/
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open('GET', url, false)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send()
  })
}

const res = await ajax('https://api.aztquant.com/api/notification/unread')
.then((res) => {
  return res
}).catch((error) => {
  console.error(error, 'error')
})
console.log(res)