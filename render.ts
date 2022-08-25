/**
 * @description 字符串模板
*/
function render(template: string, data: DataStructure): string {
  const reg = /\{\{(\w+)\}\}/ // 模板字符串正则
  const hasTemplate = reg.test(template) // // 判断模板里是否有模板字符串
  if (hasTemplate === false) { // 如果模板没有模板字符串直接返回
    return template
  }
  const nameArr = reg.exec(template) // 查找当前模板里第一个模板字符串的字段
  const name = nameArr ? nameArr[1] : ''
  template = template.replace(reg, data[name]) // 将第一个模板字符串渲染
  return render(template, data) // 递归的渲染并返回渲染后的结构
}

let template = '我是{{name1}}，年龄{{age1}}，性别{{sex1}}'

interface DataStructure {
  [key: string]: string
}

let data: DataStructure = {
  'name': '布兰',
  'age': '12',
  'sex': '男'
}

const renderResult = render(template, data) // 我是布兰，年龄12，性别undefined
console.log(renderResult)