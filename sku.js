const goods = {
  json1: [
    ["红色", "黄色", "蓝色"],
    ["S", "M"],
    ["棉的", "涤纶"],
  ],
  json2: [
    {
      color: "红色",
      type: "S",
      mianliao: "棉的",
      price: 100,
    },
    {
      color: "红色",
      type: "M",
      mianliao: "棉的",
      price: 200,
    },
    {
      color: "红色",
      type: "S",
      mianliao: "涤纶",
      price: 300,
    },
    {
      color: "红色",
      type: "M",
      mianliao: "涤纶",
      price: 400,
    },
    {
      color: "黄色",
      type: "S",
      mianliao: "棉的",
      price: 500,
    },
    {
      color: "黄色",
      type: "M",
      mianliao: "棉的",
      price: 600,
    },
    {
      color: "黄色",
      type: "S",
      mianliao: "涤纶",
      price: 700,
    },
    {
      color: "黄色",
      type: "M",
      mianliao: "涤纶",
      price: 800,
    },
    {
      color: "蓝色",
      type: "S",
      mianliao: "棉的",
      price: 900,
    },
    {
      color: "蓝色",
      type: "M",
      mianliao: "棉的",
      price: 1000,
    },
    {
      color: "蓝色",
      type: "S",
      mianliao: "涤纶",
      price: 1100,
    },
    {
      color: "蓝色",
      type: "M",
      mianliao: "涤纶",
      price: 1200,
    },
  ]
}

function customFilter(list, targets) {
  let result = null

  const recursion = function(list, targets) {
    for (let index = 0; index < targets.length; index++) {
      const target = targets[index]
      const filterArr = list.filter((item)=> Object.values(item).includes(target))
      if (filterArr.length > 1) {
        recursion(filterArr, targets.slice(index+1))
      } else if (filterArr.length === 1) {
        result = filterArr[0]
      }
    }
  }

  recursion(list, targets)
  return result
}

const filterResult = customFilter(goods.json2, ['红色', 'S', '棉的'])

console.log(filterResult, '--filterResult')