/**
 * 数组去重
 * 方法1，利用 Set()
*/
const arr = [1, 1, '1', '1', true, true, 'true', {}, {}, null, null, undefined, undefined]

function uniqueOne_1() {
  let brr = Array.from(new Set(arr))
  return brr
}


/**
 * 数组去重
 * 方法2，利用 Map()
*/
function uniqueOne_2() {
  const map = new Map()
  let brr = []
  arr.forEach(item => {
    if(!map.has(item)) {
      map.set(item, true)
      brr.push(item)
    }
  })
  return brr
}

/**
 * 数组去重
 * 方法3，利用下标
*/
function uniqueOne_3() {
  let brr = []
  arr.forEach(item => {
    const isNotExit = brr.indexOf(item) === -1
    // const isNotExit = !brr.includes(item)
    if(isNotExit) {
      brr.push(item)
    }
  })
  return brr
}

/**
 * 数组去重
 * 方法4
 * */ 
function uniqueOne_4() {
  let brr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return brr
}


function forOf() {
  const obj = new Map(
    [
      ['name', '占飞'],
      ['age', 14]
    ]
  )
  for (const [key, value] of obj) {
    // console.log(key)
    console.log(value)
  }
  console.log(obj)
}


for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
// console.log(uniqueOne_3())
// console.log(forOf())