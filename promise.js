// const promise = new Promise((resolve, reject) => {
//   if(true) {
//     resolve(value)
//   } else {
//     reject(error)
//   }
// })

// promise.then((value) => {
//   // success
// }, (error) => {
//   //  failure
// })

/**
 * @description timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。
*/

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(100).then((value) => {
  console.log(value)
})

/**
 * @description Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
 * */ 

let promise = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi')

/**
 * @description 异步加载图片,需要dom环境
 * */ 
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()


    image.onload = () => {
      resolve(image)
    }

    image.onerror = () => {
      reject(new Error(`could not load image at ${url}`))
    }
    image.src = url

  })
}

loadImageAsync('https://static-storage.aztquant.com/png/20220421/9e0ae9faff8a29a1705b365f93a3301e.png')
.then((value) => {
  console.log(`success`)
  console.log(value)
}, (error) => {
  console.error(`error`)
  console.error(error)
})

/**
 * @description ajax
 * */ 
const getJSON = (url) => {
  const promise = new Promise((resolve, reject) => {
    const handler = () => {
      if(this.readState !== 4) {
        return
      }
      if(this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
  })
  return promise;
}

getJSON('/post.json').then((res) => {
  console.log('Contents: ' + json);
}, (error) => {
  console.error('出错了', error)
})

getJSON('/post.json').then((json) => {
 return getJSON(post.commentURL) 
}).then((comments) =>{
  console.log('resolve', comments)
}, (error) => {
  console.log('rejected', err)
})

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fail'))
  }, 3000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p1)
  }, 1000);
})

p2
  .then(result => console.log(result), error => console.log(error))


p1.then((value) => console.log('fulfilled', val))
  .catch((err) => console.log('rejected', err))

p1.then((value) => console)


promise
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.err(error)
  })