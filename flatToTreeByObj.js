let arr = [
  {id: 2, name: '部门2', pid: 1},
  {id: 1, name: '部门1', pid: 0},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

function flatToTreeByObj(items) {
  const result = []
  const itemMap = {}
  for (const item of items) {
    itemMap[item.id] = {...item, children: []}
  }
  console.log(JSON.stringify(itemMap))
  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const node = itemMap[id]
    if(pid === 0) {
      result.push(node)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(node)
    }
  }
  return result
}

flatToTreeByObj(arr)