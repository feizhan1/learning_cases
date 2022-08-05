/**
 * @description 用递归方法扁平数组转树
 * @param {Array} arr 扁平数组
*/
function flatToTreeByRecursion(arr) {
  const recursion = function(node) {
    const children = arr.filter((item) => item.pid === node.id)
    if (children.length > 0) {
      node.children = children
      for (let index = 0; index < node.children.length; index++) {
        const element = node.children[index]
        recursion(element)
      }
    } else {
      return
    }
  }
  let tree
  const topPid = Math.min(...arr.map((item) => item.pid))
  const topNode = arr.find((item) => item.pid === topPid)
  tree = {...topNode}
  recursion(tree)
  return tree
}

/**
 * 测试用例
*/
const arr = [
  {id: 2, name: '部门2', pid: 1},
  {id: 1, name: '部门1', pid: 0},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
console.log(JSON.stringify(flatToTreeByRecursion(arr)))