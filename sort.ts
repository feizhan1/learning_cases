/**
 * @description 冒泡排序
 * @param {Array} arr
*/
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        const t = arr[j]
        arr[j] = arr[j+1]
        arr[j+1]= t
      }
    }
  }
  return arr
}

const result: number[] = bubbleSort([1,3,2])
console.log(result, 'result')

/**
 * @description 选择排序
*/
function selectionSort(arr: number[]) {
  let index:number
  for (let i = 0; i < arr.length; i++) {
    index = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    const t = arr[i]
    arr[i] = arr[index]
    arr[index]= t
  }
  return arr
}

const result1 = selectionSort([3,2,1])
console.log(result, 'result1')