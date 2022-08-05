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

const list = goods.json2
const targets = ['红色', 'M', '棉的']


function customFilter() {
  let result = null
  const recursion = function(choice, arr) {
    for (let index = 0; index < choice.length; index++) {
      const target = choice[index]
      const filterArr = arr.filter((item)=> {
        const isIncludes = Object.values(item).includes(target)
        return isIncludes
      })
      if (filterArr.length > 1) {
        recursion(choice.slice(index+1), filterArr)
      } else if (filterArr.length === 1) {
        result = filterArr[0]
      }
    }
  }
  recursion(targets, list)
  return result
}

console.log(customFilter())