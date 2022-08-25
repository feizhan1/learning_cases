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

interface Goods {
  color: string,
  type: string,
  mianliao: string,
  price: number
}

function customFilter(list: Goods[], targets: string[]):Goods | undefined {
  const target = targets[0]
  const filterArr = list.filter((item)=> Object.values(item).includes(target))
  if (filterArr.length > 1) {
    return customFilter(filterArr, targets.slice(1))
  } else {
    return list[0]
  }
}

const goodsList = goods.json2
const goodsResult = customFilter(goodsList, ['红色', 'S', '棉的'])

console.log(goodsResult, '--goodsResult')